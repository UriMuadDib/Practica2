//Importacion de modulos de configuraciones
import config from './config/config_index.js';
import inicializarPassport from './config/config_passport.js';
//Importacion de modulos de rutas
import indexRutas from './rutas/rutas_index.js';
import loginRutas from './rutas/rutas_auth.js';
import usersRutas from './rutas/rutas_users.js';
//Librerias
import express from 'express';
import path from 'path';
import cors from 'cors';
import passport from 'passport';



const app = express();

//Configuraciones
const puerto = process.env.PORT || 3000;
const { __dirname } = config;
inicializarPassport(passport);
//Middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
//Middleware para la autenticación
app.use(cors({
    origin: 'http://192.168.56.1:5173',
    allowedHeaders: 'Content-Type,Authorization',
    methods: 'GET,POST,PUT,DELETE',
}));

//Importacion de rutas
const rutas = [
    { path: '/', route: indexRutas },
    { path: '/', route: loginRutas },
    {path: '/', route: usersRutas}
];
rutas.forEach(({ path, route }) => {
    app.use(path, route);
});

app.listen(puerto, () => {
    console.log(`Servidor corriendo en puerto ${puerto}`);
});
