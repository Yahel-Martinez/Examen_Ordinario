module.exports = (sequelize, DataTypes) => {
    const Empleado = sequelize.define("Empleado", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      telefono: {
        type: DataTypes.STRING,
        allowNull: true
      },
      fechaNacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      sueldo: {
        type: DataTypes.FLOAT,
        allowNull: false
      }
    });
  
    return Empleado;
  };