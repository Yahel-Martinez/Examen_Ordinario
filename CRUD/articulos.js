const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  req.db.all('SELECT * FROM Articulos', [], (err, rows) => {
    res.json(err ? { error: err.message } : rows);
  });
});

router.get('/:id', (req, res) => {
  req.db.get('SELECT * FROM Articulos WHERE id = ?', [req.params.id], (err, row) => {
    res.json(err ? { error: err.message } : row);
  });
});

router.post('/', (req, res) => {
  const { descripcion, precio, existencia } = req.body;
  req.db.run(
    'INSERT INTO Articulos (descripcion, precio, existencia) VALUES (?, ?, ?)',
    [descripcion, precio, existencia],
    function (err) {
      res.json(err ? { error: err.message } : { id: this.lastID });
    }
  );
});

router.put('/:id', (req, res) => {
  const { descripcion, precio, existencia } = req.body;
  req.db.run(
    'UPDATE Articulos SET descripcion = ?, precio = ?, existencia = ? WHERE id = ?',
    [descripcion, precio, existencia, req.params.id],
    function (err) {
      res.json(err ? { error: err.message } : { updated: this.changes });
    }
  );
});

router.delete('/:id', (req, res) => {
  req.db.run('DELETE FROM Articulos WHERE id = ?', [req.params.id], function (err) {
    res.json(err ? { error: err.message } : { deleted: this.changes });
  });
});

module.exports = router;
