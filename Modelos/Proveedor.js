module.exports = (sequelize, DataTypes) => {
    const Proveedor = sequelize.define("Proveedor", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: true
      }
    });
  
    return Proveedor;
  };