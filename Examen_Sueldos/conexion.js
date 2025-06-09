const { Sequelize } = require('sequelize') // Importar Sequelize

// Crear el objeto de la conexion con la bd con Sequelize

const sequelize = new Sequelize({
    dialect: 'sqlite', // Tipo de base de datos a utilizar
    storage: './sueldos.sqlite' // Nombre del archivo de base de datos
})

module.exports = sequelize;