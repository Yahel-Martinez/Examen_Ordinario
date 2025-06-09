const express = require('express');
const cors = require('cors');
const db = require('./conexion');

const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());


app.use((req, res, next) => {
  req.db = db;
  next();
});


app.use('/clientes', require('./routes/clientes'));
app.use('/proveedores', require('./routes/proveedores'));
app.use('/articulos', require('./routes/articulos'));
app.use('/empleados', require('./routes/empleados'));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});