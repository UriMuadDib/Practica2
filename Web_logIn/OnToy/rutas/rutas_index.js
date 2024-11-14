import { Router } from 'express';
import { getindexCtrl } from '../controladores/ctrl_index.js';
const router = Router();
router.get('', getindexCtrl);
router.get('/api/saludo', (req, res) => {
    res.json({ mensaje: 'Hola desde el API' })
});
export default router;