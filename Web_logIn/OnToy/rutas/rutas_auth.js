import { Router } from 'express';

// Importación de controladores
import { login, signup } from '../controladores/ctrl_auth.js';

const router = Router();

// Mapeo de rutas
router.post('/login', login);
router.post('/signup', signup);

export default router;