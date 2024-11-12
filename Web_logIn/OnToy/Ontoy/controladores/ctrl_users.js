import bcrypt from 'bcrypt';
import { buscarUsuario, editarUsuario, listarUsuarios, eliminarUsuario } from '../modelos/modelo_usuario.js';


export const updateUsuario = async (req, res) => {
    const { nombre, appat, apmat, email, password, boleta } = req.body.registro;
    const userId = req.params.id; // Supone que el ID del usuario viene en los parámetros de la URL
    try {
        // Verifica si el usuario existe
        const usuarioExistente = await buscarUsuario(boleta);
        if (!usuarioExistente) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Hashea la nueva contraseña, si se proporciona una nueva
        let hashedPassword = usuarioExistente.password;
        if (password) {
            hashedPassword = await bcrypt.hash(password, 10);
        }

        const usuarioActualizado = {
            nombre,
            appat,
            apmat,
            email,
            password: hashedPassword,
            boleta,
        };

        const resultadoEdicion = await editarUsuario(usuarioActualizado, userId);

        if (!resultadoEdicion || resultadoEdicion.affectedRows === 0) {
            return res.status(500).json({ message: 'Error al editar el usuario' });
        }

        return res.status(200).json({ message: 'Usuario editado exitosamente' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error del servidor' });
    }
};

export const deleteUsuario = async (req, res) => {
    const boleta = req.params.boleta; // Supone que el ID del usuario viene en los parámetros de la URL

    try {
        const usuarioExistente = await buscarUsuario(boleta);
        if (!usuarioExistente) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const resultadoEliminacion = await eliminarUsuario(boleta);

        if (!resultadoEliminacion || resultadoEliminacion.affectedRows === 0) {
            return res.status(500).json({ message: 'Error al eliminar el usuario' });
        }

        return res.status(200).json({ message: 'Usuario eliminado exitosamente' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error del servidor' });
    }
};

export const getUsuario = async (req, res) => {
    const boleta = req.params.boleta; // Supone que el ID del usuario viene en los parámetros de la URL

    try {
        const usuario = await buscarUsuario(boleta);

        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        return res.status(200).json(usuario);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error del servidor' });
    }
};

export const getUsuarios = async (req, res) => {
    try {
        const usuarios = await listarUsuarios();

        if (!usuarios) {
            return res.status(404).json({ message: 'No se encontraron usuarios' });
        }

        return res.status(200).json(usuarios);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error del servidor' });
    }
};