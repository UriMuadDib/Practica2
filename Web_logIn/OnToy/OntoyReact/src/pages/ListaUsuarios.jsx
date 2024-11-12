import React, { useEffect, useState } from 'react';
import { getUsuarios, deleteUsuario } from '../api/users';
import './css/listaUsuarios.css';
import Nav from '../components/Navbar';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';


const ListaUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);  // Estado para almacenar los usuarios
    const [error, setError] = useState(null);      // Estado para manejar errores
    const navigate = useNavigate();


    useEffect(() => {
        const obtenerUsuarios = async () => {
            try {
                const data = await getUsuarios();
                setUsuarios(data);  // Guarda los datos en el estado
            } catch (error) {
                console.error('Error al obtener usuarios', error);
                setError('Error al obtener usuarios');
            }
        };

        obtenerUsuarios();  // Llama a la función cuando el componente se monta
    }, []);  // Dependencias vacías para que solo se ejecute una vez al montar

    
     // Función para manejar la eliminación del usuario
    const handleEliminarUsuario = async (boleta) => {
        try {
            await deleteUsuario(boleta); // Llama a la función API para eliminar
            setUsuarios(usuarios.filter((usuario) => usuario.boleta !== boleta)); // Elimina al usuario del estado
        } catch (error) {
            console.error('Error al eliminar usuario', error);
            setError('Error al eliminar usuario');
        }
    };

    const handleEditClick = (boleta) => {
        navigate(`/editarUsuario/${boleta}`);
      };
    
    
    if (error) {
        console.log(error);
        return <div>{error}</div>;  // Muestra el error si lo hay
    }

    return (
        <div className='lista-usuarios'>
            <Nav />
            <div className='tabla-users'>
                <h2>Lista de Usuarios</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Boleta</th>
                            <th>Nombre</th>
                            <th>Apellido Paterno</th>
                            <th>Apellido Materno</th>
                            <th>Email</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario) => (
                            <tr key={usuario.id}>
                                <td>{usuario.boleta}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.appat}</td>
                                <td>{usuario.apmat}</td>
                                <td>{usuario.email}</td>
                                <td>
                                    <Button onClick={() => handleEditClick(usuario.boleta)} children='Editar' type='button' className='button-blue' />
                                </td>
                                <td>
                                    <Button onClick={() => handleEliminarUsuario(usuario.boleta)} children='Eliminar' type='button' className='button-red' />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        
    );
};

export default ListaUsuarios;
