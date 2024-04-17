import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Inicio_sesion/formularios.css";
import logo from "../../assets/img/imgInicioRegistro/logo.png";

function RecuperarContraseña() {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errores, setErrores] = useState({});
    const [mostrarPanel, setMostrarPanel] = useState(false);
    const [mensajePanel, setMensajePanel] = useState('');

    const supabaseUrl = 'https://hetfaqksgxjlcxatxcvl.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhldGZhcWtzZ3hqbGN4YXR4Y3ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExNjI0OTcsImV4cCI6MjAyNjczODQ5N30.jg0cFimQOh3erlrtL9AILrtyQIrRJLnFs-594uJXiiY';

    const mostrarMensaje = (mensaje) => {
        setMensajePanel(mensaje);
        setMostrarPanel(true);
    };

    const validarFormulario = () => {
        let erroresTemp = {};
        let esFormularioValido = true;

        if (!correo.trim()) {
            erroresTemp.correo = "El campo correo es obligatorio.";
            esFormularioValido = false;
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(correo)) {
            erroresTemp.correo = "El correo electrónico no es válido.";
            esFormularioValido = false;
        }

        if (!password.trim()) {
            erroresTemp.password = "El campo contraseña es obligatorio.";
            esFormularioValido = false;
        }

        if (!confirmPassword.trim()) {
            erroresTemp.confirmPassword = "Debe confirmar la contraseña.";
            esFormularioValido = false;
        } else if (confirmPassword !== password) {
            erroresTemp.confirmPassword = "Las contraseñas no coinciden.";
            esFormularioValido = false;
        }

        setErrores(erroresTemp);
        return esFormularioValido;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validarFormulario()) {
            console.log('El formulario contiene errores. Por favor, corríjalos.');
            return;
        }

        const headers = {
            'apikey': supabaseKey,
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${supabaseKey}`
        };

        try {
            const response = await fetch(`${supabaseUrl}/rest/v1/usuarios?select=*&correo=eq.${correo}`, {
                headers: headers
            });

            if (!response.ok) {
                throw new Error('Error al consultar la base de datos');
            }

            const data = await response.json();

            if (data.length === 0) {
                setErrores({ correo: 'El correo electrónico no está registrado.' });
                return;
            }

            const updateResponse = await fetch(`${supabaseUrl}/rest/v1/usuarios?correo=eq.${correo}`, {
                method: 'PATCH',
                headers: headers,
                body: JSON.stringify({ contraseña: password })
            });

            if (!updateResponse.ok) {
                throw new Error('Error al actualizar la contraseña');
            }

            mostrarMensaje('Se modificó la contraseña correctamente, inicie sesión.');
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className='contenedor'>
            {mostrarPanel && (
                <div className="panele">
                    <p>{mensajePanel}</p>
                    <Link className='botn' to="/inicio">Continuar</Link>
                </div>
            )}

            <Link to="/home">
                <img className='logon' src={logo} alt="Logo" />
            </Link>

            <div className='formulario'>
                <Link className='inic' to="/inicio">Volver</Link>
                <h1 className='tit'>Recuperar contraseña</h1>
                <div className='textos'>Por favor introduce tu correo electrónico para cambiar la contraseña.</div>

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

                <div className='btnc'>
                    <button className='boton' onClick={handleSubmit}>Cambiar contraseña</button>
                </div>
            </div>
        </div>
    );
}

export default RecuperarContraseña;
