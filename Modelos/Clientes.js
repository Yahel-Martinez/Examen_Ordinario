module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define("Cliente", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      correo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      telefono: {
        type: DataTypes.STRING,
        allowNull: true
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: true
      }
    });
  
    return Cliente;
  };