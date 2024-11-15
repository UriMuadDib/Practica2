import axios from 'axios';
const API_URL = "http://192.168.56.1:3000";


export const editarUsuario = async (registro,userId) => {
    try {
      const response = await axios.put(`${API_URL}/edituser/${userId}`, {
        registro
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      });
  
      return response.data;
    } catch (error) {
      console.error("Error al editar usuario:", error.response ? error.response.data : error.message);
      throw error;
    }
  }
  
  export const getUsuarios = async () => {
    try {
      const response = await axios.get(`${API_URL}/usuarios`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener la lista de usuarios:", error.response ? error.response.data : error.message);
      throw error;
    }
  }
  
  export const deleteUsuario = async (boleta) => {
    try {
        const response = await axios.delete(`${API_URL}/deleteuser/${boleta}`);
        return response.data;
    } catch (error) {
        console.error("Error al eliminar usuario:", error.response ? error.response.data : error.message);
        throw error;
    }
  }

  export const getUsuario = async (boleta) => {
    try {
      const response = await axios.get(`${API_URL}/usuario/${boleta}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener usuario:", error.response ? error.response.data : error.message);
      throw error;
    }
  }
