import { useState } from 'react';
import { useEffect } from 'react';

import './css/register.css';
import { getUsuario, editarUsuario } from '../api/users';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EditarUsuario = () => {
    const navigate = useNavigate();

    const { boleta } = useParams();
    const [idUser, setIdUser] = useState('');
    const [formData, setFormData] = useState({
        nombre: '',
        appat: '',
        apmat: '',
        email: '',
        password: '',
        boleta: ''
    });

    useEffect(() => {
        const obtenerUsuario = async () => {
            try {
                const data = await getUsuario(boleta);
                data.password = '';
                setIdUser(data.id);
                setFormData(data);
            } catch (error) {
                console.error('Error al obtener usuario', error);
            }
        };
        
        obtenerUsuario();
    },[]);

    
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrorMessage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await editarUsuario(formData,idUser);
            navigate(`/listaUsuarios`);
            setErrorMessage('');
        } catch (error) {
            console.error('Error en el registro', error);
            setErrorMessage(error.response?.data?.message || 'Error en el registro. Inténtalo de nuevo.');
        }
    };

    useEffect(() => {
        // Cambia el background cuando el componente se monta
        document.body.style.backgroundColor = '#35ace4';
    
        // Restablece el background al desmontar el componente
        return () => {
          document.body.style.backgroundColor = '';
        };
      }, []);

    return (
        <div className="register-container">
            <h2>Editar Usuario</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>} {}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="appat">Apellido Paterno:</label>
                    <input
                        type="text"
                        id="appat"
                        name="appat"
                        value={formData.appat}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="apmat">Apellido Materno:</label>
                    <input
                        type="text"
                        id="apmat"
                        name="apmat"
                        value={formData.apmat}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="boleta">Boleta:</label>
                    <input
                        type="text"
                        id="boleta"
                        name="boleta"
                        value={formData.boleta}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Guardar</button>
            </form>
        </div>
    );
};

export default EditarUsuario;
