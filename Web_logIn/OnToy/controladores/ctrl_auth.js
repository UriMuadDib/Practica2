import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { buscarUsuario, registrarUsuario} from '../modelos/modelo_usuario.js';

export const login = async (req, res) => {
    console.log("Usuario usando api...");
    const { boleta, password } = req.body;
    try {
        const usuario = await buscarUsuario(boleta);
        if (!usuario) {
            return res.status(401).json({ message: 'Usuario no encontrado' });
        }

        //Verificar contraseña
        const coincidencia = await bcrypt.compare(password, usuario.password);
        if (!coincidencia) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        //Generar el token JWT
        const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        //Enviar el token
        return res.json({ message: 'Autenticación exitosa', boleta: usuario.boleta, token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error del servidor' });
    }
};

export const signup = async (req, res) => {
    const { nombre, appat, apmat, email, password, boleta } = req.body.registro;
    try {
        const usuarioExistente = await buscarUsuario(boleta);
        if (usuarioExistente !=null) {
            return res.status(400).json({ message: 'La boleta ya está registrada' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const nuevoUsuario = {
            nombre,
            appat,
            apmat,
            email,
            password: hashedPassword,
            boleta,
        };
        const resultadoRegistro = await registrarUsuario(nuevoUsuario);
        
        if (!resultadoRegistro || resultadoRegistro.affectedRows === 0) { 
            return res.status(500).json({ message: 'Error al registrar el usuario' });
        }
        const token = jwt.sign({ id: nuevoUsuario.boleta }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        return res.status(201).json({ message: 'Registro exitoso', token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error del servidor' });
    }
};



