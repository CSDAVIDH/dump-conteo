const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Usuarios = sequelize.define(
  "Usuarios",
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
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
      type: DataTypes.STRING,
      allowNull: false,
			unique: true,
    },
    id_rol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      /*references: {
        model: "Roles", // Relación con la tabla Roles (debe existir)
        key: "id_rol",
      },*/
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // Validación de formato de correo
      },
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
			unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   /** 
		fecha_creacion: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    fecha_modificacion: {
      type: DataTypes.TIME,
      allowNull: false,
    },
		*/ 
    estado: {
      type: DataTypes.SMALLINT,
      allowNull: false,
			defaultValue: 1, // Estado por defecto: Activo
    },
  },
  {
    timestamps: true,
		tableName:"Usuarios",
  }
);

module.exports = Usuarios;
