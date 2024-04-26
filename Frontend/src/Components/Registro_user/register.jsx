// Importación de bibliotecas y recursos necesarios
import React, { useState } from 'react';
import "../Inicio_sesion/formularios.css"; // Importa estilos CSS
import logo from "../../assets/img/imgInicioRegistro/logo.png"; // Importa el logo de la aplicación
import { Link } from "react-router-dom"; // Importa el componente Link de react-router-dom
import { createClient } from '@supabase/supabase-js'; // Importa la función createClient de supabase

// Definición del componente funcional 
function Registrousuario() {
    // Definición de estados para los campos del formulario y mensajes de error
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [aceptaTerminos, setAceptaTerminos] = useState(false);
    const [errores, setErrores] = useState({});
    const [mostrarPanel, setMostrarPanel] = useState(false);
    const [mensajePanel, setMensajePanel] = useState('');

    // Función para mostrar un mensaje en un panel emergente
    const mostrarMensaje = (mensaje) => {
        setMensajePanel(mensaje);
        setMostrarPanel(true);
    };

    // Conexión a la base de datos de Supabase
    const supabase = createClient('https://hetfaqksgxjlcxatxcvl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhldGZhcWtzZ3hqbGN4YXR4Y3ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExNjI0OTcsImV4cCI6MjAyNjczODQ5N30.jg0cFimQOh3erlrtL9AILrtyQIrRJLnFs-594uJXiiY');

    // Función para validar el formulario antes de enviarlo
    const validarFormulario = () => {
        let erroresTemp = {};
        let esFormularioValido = true;

        // Validación de los campos del formulario
        if (!nombre.trim()) {
            erroresTemp.nombre = "El campo nombre es obligatorio.";
            esFormularioValido = false;
        }
        // Resto de las validaciones de los campos del formulario...

        // Actualización del estado de los errores y retorno del resultado de la validación
        setErrores(erroresTemp);
        return esFormularioValido;
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación del formulario
        const esFormularioValido = validarFormulario();

        if (esFormularioValido) {
            try {
                // Consulta a la base de datos para verificar si el correo ya está registrado
                const { data: usuarios, error: errorConsulta } = await supabase
                    .from('usuarios')
                    .select('*')
                    .eq('correo', correo);

                // Manejo de errores en la consulta
                if (errorConsulta) {
                    console.error('Error al consultar el correo:', errorConsulta.message);
                    return;
                }

                // Verificación de si el correo ya está registrado
                if (usuarios && usuarios.length > 0) {
                    console.log('El correo ya está en uso.');
                    setErrores(prevErrores => ({
                        ...prevErrores,
                        correo: 'El correo ya está en uso.'
                    }));
                    return;
                }

                // Inserción de los datos del usuario en la base de datos de Supabase
                const { data, error } = await supabase
                    .from('usuarios')
                    .insert([{ nombre, correo, contraseña: password, idrol: 2 }]);

                // Manejo de errores en la inserción de datos
                if (error) {
                    console.error('Error al registrar los datos:', error.message);
                } else {
                    console.log('Datos registrados correctamente:', data);
                    // Muestra un mensaje de éxito
                    mostrarMensaje('Se registró al usuario correctamente, inicie sesión.');
                    // Redirige al usuario al inicio de sesión
                }
            } catch (error) {
                console.error('Error al registrar los datos:', error.message);
            }
        } else {
            console.log('El formulario contiene errores. Por favor, corríjalos.');
        }
    };

    // Renderizado del componente
    return (
        <div className='contenedor'>
            {/* Logo de la aplicación */}
            <Link to="/home">
                <img className='logon' src={logo} alt="Logo" />
            </Link>
            {/* Panel emergente para mostrar mensajes */}
            {mostrarPanel && (
                <div className="panel-emergente">
                    <p>{mensajePanel}</p>
                    <Link className='inic2' to="/inicio">Continuar</Link>
                </div>
            )}
            {/* Formulario de registro de usuario */}
            <div className='formulario'>
                <h1 className='titulon'>Registro de usuario</h1>
                {/* Campos del formulario */}
                <div className='name'>
                    <div>Nombre</div>
                    <input id='nombre'
                        className='entrada'
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} />
                    {errores.nombre && <p className="error">{errores.nombre}</p>}
                </div>
                <div className='correo'>
                    <div>Correo electrónico</div>
                    <input
                        id='correo'
                        className='entrada'
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value.toLowerCase())}
                    />
                    {errores.correo && <p className="error">{errores.correo}</p>}
                </div>
                <div className='contraseña'>
                    <div>Contraseña</div>
                    <input id='contraseña'
                        className='entrada'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    {errores.password && <p className="error">{errores.password}</p>}
                </div>
                <div className='confcontra'>
                    <div>Confirmar contraseña</div>
                    <input className='entrada'
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                    {errores.confirmPassword && <p className="error">{errores.confirmPassword}</p>}
                </div>
                <div className='aceptarc'>
                    <input type="checkbox"
                        className='check'
                        checked={aceptaTerminos}
                        onChange={(e) => setAceptaTerminos(e.target.checked)} />
                    <div>
                        aceptar <Link to="/terminos">Terminos y condiciones</Link>
                    </div>
                </div>
                {errores.aceptaTerminos && <p className="error">{errores.aceptaTerminos}</p>}
                {/* Botón de registro */}
                <div className='r'>
                    <button className='boton' onClick={handleSubmit}>Registrarse</button>
                </div>
                {/* Enlace para iniciar sesión */}
                <div>
                    ¿Ya tienes una cuenta? <Link to="/inicio">Inicia sesión aquí</Link>
                </div>
            </div>
        </div>
    );
}

export default Registrousuario; // Exporta el componente MyLoginPage
