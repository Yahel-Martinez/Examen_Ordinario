const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './conversiones.sqlite'
})

module.exports = sequelize;