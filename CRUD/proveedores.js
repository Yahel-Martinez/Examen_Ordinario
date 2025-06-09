const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  req.db.all('SELECT * FROM Proveedores', [], (err, rows) => {
    res.json(err ? { error: err.message } : rows);
  });
});

router.get('/:id', (req, res) => {
  req.db.get('SELECT * FROM Proveedores WHERE id = ?', [req.params.id], (err, row) => {
    res.json(err ? { error: err.message } : row);
  });
});

router.post('/', (req, res) => {
  const { nombre, direccion } = req.body;
  req.db.run(
    'INSERT INTO Proveedores (nombre, direccion) VALUES (?, ?)',
    [nombre, direccion],
    function (err) {
      res.json(err ? { error: err.message } : { id: this.lastID });
    }
  );
});

router.put('/:id', (req, res) => {
  const { nombre, direccion } = req.body;
  req.db.run(
    'UPDATE Proveedores SET nombre = ?, direccion = ? WHERE id = ?',
    [nombre, direccion, req.params.id],
    function (err) {
      res.json(err ? { error: err.message } : { updated: this.changes });
    }
  );
});

router.delete('/:id', (req, res) => {
  req.db.run('DELETE FROM Proveedores WHERE id = ?', [req.params.id], function (err) {
    res.json(err ? { error: err.message } : { deleted: this.changes });
  });
});

module.exports = router;