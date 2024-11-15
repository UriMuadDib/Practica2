// login.js (Front-End)
const login = async (boleta, password) => {
    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ boleta, password }),
            credentials: 'include', // Asegúrate de incluir las credenciales
        });

        if (!response.ok) {
            throw new Error('Error en la autenticación');
        }

        const data = await response.json();
        console.log(data); // Maneja los datos según sea necesario
    } catch (error) {
        console.error(error);
    }
};