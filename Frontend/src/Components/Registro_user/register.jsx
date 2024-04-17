import React, { useState } from 'react';
import "../Inicio_sesion/formularios.css";
import logo from "../../assets/img/imgInicioRegistro/logo.png";
import { Link } from "react-router-dom";
import { createClient } from '@supabase/supabase-js';

function MyRegisterPage() {
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [confirmarContraseña, setConfirmarContraseña] = useState('');
    const [aceptarTerminos, setAceptarTerminos] = useState(false);
    const [errores, setErrores] = useState({});
    const [mostrarPanel, setMostrarPanel] = useState(false);
    const [mensajePanel, setMensajePanel] = useState('');

    const mostrarMensaje = (mensaje) => {
        setMensajePanel(mensaje);
        setMostrarPanel(true);
    };

    const supabase = createClient('https://hetfaqksgxjlcxatxcvl.supabase.co', 'TU_API_KEY');

    const validarFormulario = () => {
        let erroresTemp = {};
        let esFormularioValido = true;

        if (!nombreUsuario.trim()) {
            erroresTemp.nombreUsuario = "El campo nombre es obligatorio.";
            esFormularioValido = false;
        }

        if (!correoElectronico.trim()) {
            erroresTemp.correoElectronico = "El campo correo es obligatorio.";
            esFormularioValido = false;
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(correoElectronico)) {
            erroresTemp.correoElectronico = "El correo electrónico no es válido.";
            esFormularioValido = false;
        }

        if (!contraseña.trim()) {
            erroresTemp.contraseña = "El campo contraseña es obligatorio.";
            esFormularioValido = false;
        }

        if (!confirmarContraseña.trim()) {
            erroresTemp.confirmarContraseña = "Debe confirmar la contraseña.";
            esFormularioValido = false;
        } else if (confirmarContraseña !== contraseña) {
            erroresTemp.confirmarContraseña = "Las contraseñas no coinciden.";
            esFormularioValido = false;
        }

        if (!aceptarTerminos) {
            erroresTemp.aceptarTerminos = "Debe aceptar los términos y condiciones.";
            esFormularioValido = false;
        }

        setErrores(erroresTemp);
        return esFormularioValido;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const esFormularioValido = validarFormulario();

        if (esFormularioValido) {
            // Aquí va tu código para registrar al usuario en Supabase
        } else {
            console.log('El formulario contiene errores. Por favor, corríjalos.');
        }
    };

    return (
        <div className='contenedor'>
            {/* Aquí va el código para el panel emergente */}
            <Link to="/home">
                <img className='logon' src={logo} alt="Logo" />
            </Link>
            <div className='formulario'>
                <h1 className='titulo'>Registro de usuario</h1>
                <div className='campo'>
                    <div>Nombre</div>
                    <input 
                        id='nombreUsuario' 
                        className='entrada' 
                        type="text" 
                        value={nombreUsuario} 
                        onChange={(e) => setNombreUsuario(e.target.value)} 
                    />
                    {errores.nombreUsuario && <p className="mensaje-error">{errores.nombreUsuario}</p>}
                </div>
                <div className='campo'>
                    <div>Correo electrónico</div>
                    <input 
                        id='correoElectronico' 
                        className='entrada' 
                        type="email" 
                        value={correoElectronico} 
                        onChange={(e) => setCorreoElectronico(e.target.value.toLowerCase())} 
                    />
                    {errores.correoElectronico && <p className="mensaje-error">{errores.correoElectronico}</p>}
                </div>
                <div className='campo'>
                    <div>Contraseña</div>
                    <input 
                        id='contraseña' 
                        className='entrada' 
                        type="password" 
                        value={contraseña} 
                        onChange={(e) => setContraseña(e.target.value)} 
                    />
                    {errores.contraseña && <p className="mensaje-error">{errores.contraseña}</p>}
                </div>
                <div className='campo'>
                    <div>Confirmar contraseña</div>
                    <input 
                        id='confirmarContraseña' 
                        className='entrada' 
                        type="password" 
                        value={confirmarContraseña} 
                        onChange={(e) => setConfirmarContraseña(e.target.value)} 
                    />
                    {errores.confirmarContraseña && <p className="mensaje-error">{errores.confirmarContraseña}</p>}
                </div>
                <div className='campo'>
                    <input 
                        type="checkbox" 
                        className='check'
                        checked={aceptarTerminos} 
                        onChange={(e) => setAceptarTerminos(e.target.checked)} 
                    />
                    <div>
                        Aceptar <Link to="/terminos">Términos y condiciones</Link>
                    </div>
                </div>
                {errores.aceptarTerminos && <p className="mensaje-error">{errores.aceptarTerminos}</p>}
                <div className='boton-container'>
                    <button className='boton' onClick={handleSubmit}>Registrarse</button>
                </div>
                <div className='cuenta'>
                    ¿Ya tienes una cuenta? <Link to="/inicio">Inicia sesión aquí</Link>
                </div>
            </div>
        </div>
    );
}

export default MyRegisterPage;
