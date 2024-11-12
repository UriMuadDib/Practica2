import { useState } from 'react';
import { useEffect } from 'react';

import './css/register.css';
import { signup } from '../api/auth';
import Modal from '../components/Modal';




const Register = () => {

    const [registerMessage, setRegisterMessage] = useState(''); // Estado para manejar el mensaje de éxito

    const [formData, setFormData] = useState({
        boleta: '',
        email: '',
        password: '',
        nombre: '',
        appat: '',
        apmat: ''
    });
    
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
            const data = await signup(formData);
            console.log('Usuario registrado:', data);
            setErrorMessage('');
            setRegisterMessage('Registro exitoso!'); // Establecer el mensaje de éxito
            setTimeout(() => {
                window.location.href = '/login';
            }, 2500);
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

        <>
        {registerMessage && 
            <Modal> 
                <i class="fa-solid fa-check-circle"></i>
                <h2>{registerMessage}</h2>
            </Modal>
                
            } {/* Mostrar mensaje de éxito */}
        <div className="register-container">
            <h2>Registro</h2>
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
                <button type="submit">Registrar</button>
            </form>
        </div>
        </>
    );
};

export default Register;
