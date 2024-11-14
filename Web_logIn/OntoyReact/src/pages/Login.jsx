import { useState } from 'react';
import { login } from '../api/auth';
import { useEffect } from 'react';

import './css/login.css';
import escudoEscom from '../assets/img/escudoESCOM.png';
import Modal from '../components/Modal';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [boleta, setBoleta] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // Estado para manejar el mensaje de error
    const [loginMessage, setLoginMessage] = useState(''); // Estado para manejar el mensaje de éxito

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await login(boleta, password);
            localStorage.setItem('user', JSON.stringify(data));
            console.log('Usuario logueado:', data);
            setErrorMessage(''); // Limpiar el mensaje de error si el login fue exitoso
            setLoginMessage('¡Login exitoso!'); // Establecer el mensaje de éxito
            setTimeout(() => {
                navigate('/');
              }, 2500);
        } catch (error) {
            console.error('Error en el login', error);
            setErrorMessage(error.response?.data?.message || 'Error en el inicio de sesión. Inténtalo de nuevo.'); // Establecer el mensaje de error
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
            {loginMessage && 
            <Modal> 
                <i class="fa-solid fa-check-circle"></i>
                <h2>{loginMessage}</h2>
            </Modal>
                
            } {/* Mostrar mensaje de éxito */}

            <div className='chart-login'>
            
                <i id='icon-user' className="fa-solid fa-user-circle"></i>
                <h2>OnToy</h2>
                
                {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Mostrar mensaje de error */}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="boleta">Boleta:</label>
                        <input
                            type="text"
                            id="boleta"
                            value={boleta}
                            onChange={(e) => setBoleta(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                    <a href="/register">Registrarse</a>
                </form>
                
                <img className='escudo-escom' src={escudoEscom} alt="" />
            </div>
        </>
    );
};

export default Login;
