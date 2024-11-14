import { Router } from 'express';

// Importación de controladores
import { getUsuario, getUsuarios, updateUsuario, deleteUsuario} from '../controladores/ctrl_users.js';

const router = Router();

// Mapeo de rutas
router.put('/edituser/:id', updateUsuario);
router.delete('/deleteuser/:boleta', deleteUsuario);
router.get('/usuario/:boleta', getUsuario);
router.get('/usuarios', getUsuarios);

export default router;