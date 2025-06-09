const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './Modelos.sqlite'
})

module.exports = sequelize;