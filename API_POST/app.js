const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/alumno', (req, res) => {
  const { cuenta, nombre, promedio, grado, grupo } = req.body;

  if (!cuenta || !nombre || promedio === undefined || !grado || !grupo) {
    return res.status(400).json({ error: 'Faltan datos del alumno' });
  }

  const alumno = { cuenta, nombre, promedio, grado, grupo };
  const jsonData = JSON.stringify(alumno, null, 2);

  fs.writeFile('alumno.txt', jsonData, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Error al guardar el archivo' });
    }
    res.json({ mensaje: 'Alumno guardado correctamente', alumno });
  });
});

app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`);
});