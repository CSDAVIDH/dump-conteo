const express = require("express");
const {
  getUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  deleteUsuario,
} = require("../controllers/usuariosController");

const router = express.Router();

router.get("/", getUsuarios); // Obtener todos
router.get("/:id", getUsuarioById); // Obtener uno por ID
router.post("/", createUsuario); // Crear
router.put("/:id", updateUsuario); // Actualizar
router.delete("/:id", deleteUsuario); // Eliminar

module.exports = router;
