import LocalStrategy  from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { buscarUsuario } from '../modelos/modelo_usuario.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const { JWT_SECRET } = process.env;

// Configuración de passport-jwt
const inicializarPassport = (passport) => {
    //Configurar la estrategia JWT
    const opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
    };
    passport.use(new JwtStrategy(opts, async (jwt_payload, done) =>{
        try {
           //Buscar al usuario en la base de datos por su ID
           const usuario = await buscarUsuario(jwt_payload.id);
           if (usuario) {
               return done(null, usuario); //Usuario encontrado
           } else {
               return done(null, false); //No se encontró el usuario
           }
       } catch (err) {
           return done(err, false);
       }
    }));
};
export default inicializarPassport;