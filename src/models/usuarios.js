const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Usuarios = sequelize.define(
  "Usuarios",
  {
    nombres: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    paterno: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    materno: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ci: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
		id_rol: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha_creacion: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    fecha_modificacion: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    estado: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Usuarios;
