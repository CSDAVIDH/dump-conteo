require("dotenv").config();
const express = require("express");
const { connectDB, sequelize } = require("./config/db");
const usuariosRoutes = require("./routes/usuariosRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/usuarios", usuariosRoutes); // Rutas de usuarios

// Conectar a la BD y sincronizar modelos
connectDB();

app.listen(PORT, async () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);

  try {
    await sequelize.sync({ alter: true }); // Sincroniza modelos con la BD
    console.log("✅ Base de datos sincronizada correctamente.");
  } catch (error) {
    console.error("❌ Error al sincronizar la base de datos:", error);
  }
});
