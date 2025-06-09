const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  req.db.all('SELECT * FROM Empleados', [], (err, rows) => {
    res.json(err ? { error: err.message } : rows);
  });
});

router.get('/:id', (req, res) => {
  req.db.get('SELECT * FROM Empleados WHERE id = ?', [req.params.id], (err, row) => {
    res.json(err ? { error: err.message } : row);
  });
});

router.post('/', (req, res) => {
  const { nombre, telefono, fecha_nacimiento, sueldo } = req.body;
  req.db.run(
    'INSERT INTO Empleados (nombre, telefono, fecha_nacimiento, sueldo) VALUES (?, ?, ?, ?)',
    [nombre, telefono, fecha_nacimiento, sueldo],
    function (err) {
      res.json(err ? { error: err.message } : { id: this.lastID });
    }
  );
});

router.put('/:id', (req, res) => {
  const { nombre, telefono, fecha_nacimiento, sueldo } = req.body;
  req.db.run(
    'UPDATE Empleados SET nombre = ?, telefono = ?, fecha_nacimiento = ?, sueldo = ? WHERE id = ?',
    [nombre, telefono, fecha_nacimiento, sueldo, req.params.id],
    function (err) {
      res.json(err ? { error: err.message } : { updated: this.changes });
    }
  );
});

router.delete('/:id', (req, res) => {
  req.db.run('DELETE FROM Empleados WHERE id = ?', [req.params.id], function (err) {
    res.json(err ? { error: err.message } : { deleted: this.changes });
  });
});

module.exports = router;
