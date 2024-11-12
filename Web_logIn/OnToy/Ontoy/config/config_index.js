import path from 'path';
// config.js
import dotenv from 'dotenv';
dotenv.config();
import { fileURLToPath } from 'url';
//Obtener la ruta raíz del proyecto
const __dirname = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
//Configuración
const config = {
  __dirname
};
export default config;
