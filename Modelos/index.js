const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');


const sequelize = new Sequelize('nombre_basedatos', 'usuario', 'contraseña', {
  host: 'localhost',
  dialect: 'mysql', 
  logging: false
});


const Cliente = require('./Cliente')(sequelize, DataTypes);
const Proveedor = require('./Proveedor')(sequelize, DataTypes);
const Articulo = require('./Articulo')(sequelize, DataTypes);
const Empleado = require('./Empleado')(sequelize, DataTypes);


const db = {
  sequelize,
  Sequelize,
  Cliente,
  Proveedor,
  Articulo,
  Empleado
};

module.exports = db;