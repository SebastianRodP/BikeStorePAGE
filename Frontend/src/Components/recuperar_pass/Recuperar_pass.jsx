// Importación de bibliotecas y recursos necesarios
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Inicio_sesion/formularios.css"; // Estilos del formulario
import logo from "../../assets/img/imgInicioRegistro/logo.png"; // Logo de la aplicación

function RecuperarContraseña() {
    // Estado para almacenar el correo, contraseña, confirmación de contraseña, errores y mensajes del panel
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errores, setErrores] = useState({});
    const [mostrarPanel, setMostrarPanel] = useState(false);
    const [mensajePanel, setMensajePanel] = useState('');

    // URL y clave de Supabase para la API REST
    const supabaseUrl = 'https://hetfaqksgxjlcxatxcvl.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhldGZhcWtzZ3hqbGN4YXR4Y3ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExNjI0OTcsImV4cCI6MjAyNjczODQ5N30.jg0cFimQOh3erlrtL9AILrtyQIrRJLnFs-594uJXiiY';

    // Función para mostrar mensajes en el panel emergente
    const mostrarMensaje = (mensaje) => {
        setMensajePanel(mensaje);
        setMostrarPanel(true);
    };

    // Función para validar el formulario
    const validarFormulario = () => {
        let erroresTemp = {};
        let esFormularioValido = true;

        // Validación del campo de correo electrónico
        if (!correo.trim()) {
            erroresTemp.correo = "El campo correo es obligatorio.";
            esFormularioValido = false;
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(correo)) {
            erroresTemp.correo = "El correo electrónico no es válido.";
            esFormularioValido = false;
        }

        // Validación del campo de contraseña
        if (!password.trim()) {
            erroresTemp.password = "El campo contraseña es obligatorio.";
            esFormularioValido = false;
        }

        // Validación del campo de confirmación de contraseña
        if (!confirmPassword.trim()) {
            erroresTemp.confirmPassword = "Debe confirmar la contraseña.";
            esFormularioValido = false;
        } else if (confirmPassword !== password) {
            erroresTemp.confirmPassword = "Las contraseñas no coinciden.";
            esFormularioValido = false;
        }

        // Actualizar el estado de los errores y devolver si el formulario es válido
        setErrores(erroresTemp);
        return esFormularioValido;
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validar el formulario antes de enviar
        if (!validarFormulario()) {
            console.log('El formulario contiene errores. Por favor, corríjalos.');
            return;
        }

        // Configuración de los encabezados para la solicitud HTTP
        const headers = {
            'apikey': supabaseKey,
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${supabaseKey}`
        };

        try {
            // Consultar si el correo electrónico está registrado en la base de datos
            const response = await fetch(`${supabaseUrl}/rest/v1/usuarios?select=*&correo=eq.${correo}`, {
                headers: headers
            });

            if (!response.ok) {
                throw new Error('Error al consultar la base de datos');
            }

            const data = await response.json();

            // Si el correo electrónico no está registrado, mostrar un error
            if (data.length === 0) {
                setErrores({ correo: 'El correo electrónico no está registrado.' });
                return;
            }

            // Actualizar la contraseña en la base de datos
            const updateResponse = await fetch(`${supabaseUrl}/rest/v1/usuarios?correo=eq.${correo}`, {
                method: 'PATCH',
                headers: headers,
                body: JSON.stringify({ contraseña: password })
            });

            if (!updateResponse.ok) {
                throw new Error('Error al actualizar la contraseña');
            }

            // Mostrar mensaje de éxito y redirigir al inicio de sesión
            mostrarMensaje('Se modificó la contraseña correctamente, inicie sesión.');
        } catch (error) {
            console.error(error.message);
        }
    };

    // Retorno del JSX que representa el componente RecuperarContraseña
    return (
        <div className='contenedor'>
            {/* Panel emergente para mostrar mensajes */}
            {mostrarPanel && (
                <div className="panele">
                    <p>{mensajePanel}</p>
                    <Link className='botn' to="/inicio">Continuar</Link>
                </div>
            )}

            {/* Logo de la aplicación */}
            <Link to="/home">
                <img className='logon' src={logo} alt="Logo" />
            </Link>

            {/* Formulario de recuperación de contraseña */}
            <div className='formulario'>
                <Link className='inic' to="/inicio">Volver</Link>
                <h1 className='titulon'>Recuperar contraseña</h1>
                <div className='textos'>Por favor introduce tu correo electrónico para cambiar la contraseña.</div>

                {/* Campo de entrada para el correo electrónico */}
                <div className='correo'>
                    <label htmlFor='correo'>Correo electrónico</label>
                    <input
                        id='correo'
                        className='entrada'
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value.toLowerCase())}
                    />
                    {errores.correo && <p className="error">{errores.correo}</p>}
                </div>

                {/* Campo de entrada para la nueva contraseña */}
                <div className='contraseña'>
                    <label htmlFor='contraseña'>Contraseña</label>
                    <input
                        id='contraseña'
                        className='entrada'
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errores.password && <p className="error">{errores.password}</p>}
                </div>

                {/* Campo de entrada para confirmar la nueva contraseña */}
                <div className='confcontra'>
                    <label htmlFor='confirmPassword'>Confirmar contraseña</label>
                    <input
                        id='confirmPassword'
                        className='entrada'
                        type="text"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {errores.confirmPassword && <p className="error">{errores.confirmPassword}</p>}
                </div>

                {/* Botón para enviar el formulario */}
                <div className='btnc'>
                    <button className='boton' onClick={handleSubmit}>Cambiar contraseña</button>
                </div>
            </div>
        </div>
    );
}

// Exporta el componente RecuperarContraseña como el componente por defecto
export default RecuperarContraseña;
