import React from 'react';
import './css/navbar.css';
import { isLoggedIn} from './AuthRoute';
import { useState } from 'react';


const Nav = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    useState(() => {
        setUser(JSON.parse(localStorage.getItem('user')));
    }, [user]);

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/';
    };
    return (
        <header className='header'>
            <div className='logo'>
            <img src="/src/assets/img/ontoyLogo.jpeg" alt="Ontoy" />
            <a href="">OnToy</a>
            </div>
            <nav className='navbar'>
                <input type="checkbox" id='check' />
                <label htmlFor='check' className='checkbtn'>
                    <i className="check fa-solid fa-bars"></i>
                </label>
                <ul>
                    <li><a href="#sobre-mi">Sobre nosotros</a></li>
                    <li><a href="#tecnologias">Servicios</a></li>
                    <li><a href="#proyectos">Mapa</a></li>
                    <li><a href="#formacion">Contacto</a></li>
                    {!isLoggedIn && (
                        <>
                            <li><a href="/register">Registrarse</a></li>
                            <li><a href="/login">Iniciar Sesión</a></li>
                        </>
                    )}

                    {isLoggedIn && JSON.parse(localStorage.getItem('user')).boleta === 'admin077' && (

                        <li><a href='/listaUsuarios'>Lista Usuarios</a></li>
                    )}

                    {isLoggedIn && (
                            <li><a href='/' onClick={()=>handleLogout()}>Cerrar Sesión</a></li>
                        )}
                    
                </ul>
                
            </nav>
        </header>
    );
}

export default Nav;