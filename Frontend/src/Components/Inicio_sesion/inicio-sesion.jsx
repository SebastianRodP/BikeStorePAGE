import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./formularios.css";
import logo from "../../assets/img/imgInicioRegistro/logo.png";
import { Link } from "react-router-dom";
import { createClient } from '@supabase/supabase-js';

function MyLoginPage() {
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [errores, setErrores] = useState({});
    const navigate = useNavigate();
    const supabaseUrl = 'https://hetfaqksgxjlcxatxcvl.supabase.co';
    const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhldGZhcWtzZ3hqbGN4YXR4Y3ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExNjI0OTcsImV4cCI6MjAyNjczODQ5N30.jg0cFimQOh3erlrtL9AILrtyQIrRJLnFs-594uJXiiY';
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    

    const validarFormulario = () => {
        let erroresTemp = {};
        let esFormularioValido = true;

        if (!correoElectronico.trim()) {
            erroresTemp.correoElectronico = "El campo correo electrónico es obligatorio.";
            esFormularioValido = false;
        }

        if (!contraseña.trim()) {
            erroresTemp.contraseña = "El campo contraseña es obligatorio.";
            esFormularioValido = false;
        }

        setErrores(erroresTemp);
        return esFormularioValido;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validarFormulario()) {
            const { data, error } = await supabase
                .from('usuarios')
                .select('correo, contraseña, idrol, nombre, direccion, nodocumento')
                .eq('correo', correoElectronico);

            if (error) {
                console.error('Error al consultar la base de datos:', error.message);
                return;
            }

            if (data.length > 0) {
                const usuario = data[0];
                if (usuario.contraseña === contraseña) {
                    console.log('La contraseña coincide. Iniciando sesión...');
                    if (usuario.idrol === 1) {
                        navigate('/dashboard');
                    } else {
                        navigate('/home');
                    }
                } else {
                    setErrores({ contraseña: 'La contraseña no coincide.' });
                }
            } else {
                setErrores({ correoElectronico: 'No se encontró ningún usuario con ese correo electrónico.' });
            }
        }
    };

    return (
        <div className='contenedor'>
            <Link to="/home">
                <img className='logon' src={logo} alt="Logo" />
            </Link>

            <form onSubmit={handleSubmit} className='formulario'>
                <h1 className='titulon'>Inicio de sesión</h1>
                <div className='campo'>
                    <div>Correo electrónico</div>
                    <input
                        id='correoElectronico'
                        className='entrada'
                        type="email"
                        value={correoElectronico}
                        onChange={(e) => setCorreoElectronico(e.target.value.toLowerCase())}
                    />
                    {errores.correoElectronico && <p className="error">{errores.correoElectronico}</p>}
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
                    {errores.contraseña && <p className="error">{errores.contraseña}</p>}
                </div>
                <div className='recuperar-contraseña'>
                    ¿Ha olvidado su contraseña?
                    <div></div>
                    <Link to="/reccontra">Recuperar contraseña</Link>
                </div>

                <div className='boton-container'>
                    <button className='boton'>Iniciar sesión</button>
                </div>

                <div className='crear-cuenta'>
                    ¿No tienes una cuenta? <Link to="/registro">Regístrate</Link>
                </div>
            </form>
        </div>
    );
}

export default MyLoginPage;
