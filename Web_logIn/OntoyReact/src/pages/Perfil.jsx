import React from 'react';
import Modal from '../components/Modal';

const Perfil = () => {
    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <Modal children={'HOLAAAAA'}/>
            <h1>Perfil de Usuario</h1>

            <div style={{ marginBottom: '20px' }}>
                <i id='icon-user' className="fa-solid fa-user-circle"></i>
            </div>
            
            <div style={{ marginBottom: '10px' }}>
                <strong>Nombre:</strong> John Doe
            </div>

            <div style={{ marginBottom: '10px' }}>
                <strong>Apellido Paterno:</strong> John Doe
            </div>

            <div style={{ marginBottom: '10px' }}>
                <strong>Apellido Materno:</strong> John Doe
            </div>

            <div style={{ marginBottom: '10px' }}>
                <strong>Boleta:</strong> 2019630711
            </div>

            <div style={{ marginBottom: '10px' }}>
                <strong>Email:</strong> john.doe@example.com
            </div>
        </div>
    );
};

export default Perfil;