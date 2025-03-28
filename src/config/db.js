require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.PG_DATABASE, // Nombre de la BD
  process.env.PG_USER, // Usuario
  process.env.PG_PASSWORD, // Contraseña
  {
    host: process.env.PG_HOST, // Host
    port: process.env.PG_PORT, // Puerto
    dialect: "postgres", // Tipo de BD
    logging: false, // Desactivar logs de SQL en consola
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión a PostgreSQL exitosa");
  } catch (error) {
    console.error("❌ Error conectando a la base de datos:", error);
    process.exit(1); // Cerrar la app si hay error
  }
};

module.exports = { sequelize, connectDB };
