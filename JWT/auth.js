const jwt = require('jsonwebtoken');
const SECRET = 'tu_clave_secreta'; // Cambia esto por una clave segura real

// Crear token
function generateToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: '1h' });
}

// Verificar token
function verifyToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1]; // Bearer <token>
  if (!token) return res.status(401).json({ error: 'Token requerido' });

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: 'Token inválido' });
    req.user = decoded;
    next();
  });
}

module.exports = { generateToken, verifyToken };
