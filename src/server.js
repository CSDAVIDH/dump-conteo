require("dotenv").config();
const express = require("express");
const { connectDB, sequelize } = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Conectar a la base de datos
connectDB();

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("🚀 Servidor y base de datos conectados!");
});

// Iniciar el servidor
app.listen(PORT, async () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);

  // Sincronizar modelos con la base de datos (opcional)
  try {
    await sequelize.sync({ alter: true }); // Usa { force: true } si quieres reiniciar la BD en cada arranque
    console.log("✅ Modelos sincronizados con la base de datos");
  } catch (error) {
    console.error("❌ Error sincronizando modelos:", error);
  }
});
