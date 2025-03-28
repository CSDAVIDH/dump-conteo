const Usuarios = require("../models/usuarios");

// ✅ Obtener todos los usuarios
const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuarios.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener usuarios", error });
  }
};

// ✅ Obtener un usuario por ID
const getUsuarioById = async (req, res) => {
  try {
    const usuario = await Usuarios.findByPk(req.params.id);
    if (!usuario)
      return res.status(404).json({ message: "Usuario no encontrado" });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener usuario", error });
  }
};

// ✅ Crear un nuevo usuario
const createUsuario = async (req, res) => {
  try {
    const usuario = await Usuarios.create(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ message: "Error al crear usuario", error });
  }
};

// ✅ Actualizar un usuario
const updateUsuario = async (req, res) => {
  try {
    const usuario = await Usuarios.findByPk(req.params.id);
    if (!usuario)
      return res.status(404).json({ message: "Usuario no encontrado" });

    await usuario.update(req.body);
    res.json(usuario);
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar usuario", error });
  }
};

// ✅ Eliminar un usuario
const deleteUsuario = async (req, res) => {
  try {
    const usuario = await Usuarios.findByPk(req.params.id);
    if (!usuario)
      return res.status(404).json({ message: "Usuario no encontrado" });

    await usuario.destroy();
    res.json({ message: "Usuario eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar usuario", error });
  }
};

module.exports = {
  getUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  deleteUsuario,
};
