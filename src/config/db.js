const { Sequelize } = require("sequelize");

// Cargar variables de entorno
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.PG_DATABASE, 
  process.env.PG_USER, 
  process.env.PG_PASSWORD,
  {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    dialect: "postgres",
    logging: false, // Para evitar que muestre demasiados logs en consola
  }
);

// Función para probar la conexión
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conectado a PostgreSQL correctamente.");
  } catch (error) {
    console.error("❌ Error al conectar a la base de datos:", error);
  }
};

module.exports = { sequelize, connectDB };
