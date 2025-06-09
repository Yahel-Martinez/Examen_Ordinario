const express = require('express');
const db = require('./models');

const app = express();
const PORT = 3000;

app.use(express.json());


app.get('/', (req, res) => {
  res.send('API funcionando');
});


app.get('/clientes', async (req, res) => {
  const clientes = await db.Cliente.findAll();
  res.json(clientes);
});

app.get('/clientes/:id', async (req, res) => {
  const cliente = await db.Cliente.findByPk(req.params.id);
  if (cliente) {
    res.json(cliente);
  } else {
    res.status(404).json({ error: 'Cliente no encontrado' });
  }
});

app.post('/clientes', async (req, res) => {
  try {
    const nuevo = await db.Cliente.create(req.body);
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(400).json({ error: 'Datos inválidos', detalle: err.message });
  }
});

app.put('/clientes/:id', async (req, res) => {
  const cliente = await db.Cliente.findByPk(req.params.id);
  if (cliente) {
    await cliente.update(req.body);
    res.json(cliente);
  } else {
    res.status(404).json({ error: 'Cliente no encontrado' });
  }
});

app.delete('/clientes/:id', async (req, res) => {
  const cliente = await db.Cliente.findByPk(req.params.id);
  if (cliente) {
    await cliente.destroy();
    res.json({ mensaje: 'Cliente eliminado' });
  } else {
    res.status(404).json({ error: 'Cliente no encontrado' });
  }
});


db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});