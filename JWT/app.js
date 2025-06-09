const express = require('express');
const cors = require('cors');
const db = require('./conexion');
const { generateToken, verifyToken } = require('./auth');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Middleware para inyectar DB
app.use((req, res, next) => {
  req.db = db;
  next();
});

// Ruta pública: login
app.post('/login', (req, res) => {
  const { usuario, password } = req.body;

  // Autenticación simple para prueba
  if (usuario === 'admin' && password === '1234') {
    const token = generateToken({ usuario: 'admin' });
    return res.json({ token });
  }

  res.status(401).json({ error: 'Credenciales inválidas' });
});

// Rutas protegidas
app.use('/clientes', verifyToken, require('./routes/clientes'));
app.use('/proveedores', verifyToken, require('./routes/proveedores'));
app.use('/articulos', verifyToken, require('./routes/articulos'));
app.use('/empleados', verifyToken, require('./routes/empleados'));

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor protegido por JWT en http://localhost:${PORT}`);
});
