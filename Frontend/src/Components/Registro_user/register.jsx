import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import "./registro.css";
import logo from "../../assets/img/imgInicioRegistro/logo.png";

const supabaseUrl = 'https://hetfaqksgxjlcxatxcvl.supabase.co/auth/v1';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhldGZhcWtzZ3hqbGN4YXR4Y3ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExNjI0OTcsImV4cCI6MjAyNjczODQ5N30.jg0cFimQOh3erlrtL9AILrtyQIrRJLnFs-594uJXiiY';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

function MyLoginPage() {
    // Estados para los campos del formulario
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [aceptaTerminos, setAceptaTerminos] = useState(false);
    const [errores, setErrores] = useState({});

    // Validacion del formulario
    const validarFormulario = () => {
        let erroresTemp = {};
        let esFormularioValido = true;

        // Validaciones
        if (!nombre) {
            erroresTemp.nombre = "El campo nombre es obligatorio.";
            esFormularioValido = false;
        }

        if (!correo) {
            erroresTemp.correo = "El campo correo es obligatorio.";
            esFormularioValido = false;
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(correo)) {
            erroresTemp.correo = "El correo electrónico no es válido.";
            esFormularioValido = false;
        }

        if (!password) {
            erroresTemp.password = "El campo contraseña es obligatorio.";
            esFormularioValido = false;
        }

        if (password !== confirmPassword) {
            erroresTemp.confirmPassword = "Las contraseñas no coinciden.";
            esFormularioValido = false;
        }

        if (!aceptaTerminos) {
            erroresTemp.aceptaTerminos = "Debe aceptar los términos y condiciones.";
            esFormularioValido = false;
        }

        setErrores(erroresTemp);
        return esFormularioValido;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validarFormulario()) {
            try {
                const { data, error } = await supabase
                    .from('usuarios')
                    .insert([
                        {
                            nombre: nombre,
                            correo: correo,
                            idrol: 2, 
                            contraseña: password
                        },
                    ]);

                if (error) {
                    console.error('Error al insertar datos:', error.message);
                    alert('Hubo un error al registrar el usuario. Por favor, inténtalo de nuevo.');
                } else {
                    console.log('Usuario registrado con éxito:', data);
                    alert('El usuario se registró correctamente.');
                }
            } catch (error) {
                console.error('Error al insertar datos:', error.message);
                alert('Hubo un error al registrar el usuario. Por favor, inténtalo de nuevo.');
            }
        }
    };

    return (
        <div className='todo'>
            <img className='logo' src={logo} alt="Logo" />
            <div className='formulario'>
                <h1 className='tit'>Registro de usuario</h1>
                <div className='nombre'>
                    <div>Nombre</div>
                    <input id='nombre' className='inpus' type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    {errores.nombre && <p className="error">{errores.nombre}</p>}
                </div>
                <div className='correo'>
                    <div>Correo electrónico</div>
                    <input id='correo' className='inpus' type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                    {errores.correo && <p className="error">{errores.correo}</p>}
                </div>
                <div className='contraseña'>
                    <div>Contraseña</div>
                    <input id='contraseña' className='inpus' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {errores.password && <p className="error">{errores.password}</p>}
                </div>
                <div className='confcontra'>
                    <div>Confirmar contraseña</div>
                    <input className='inpus' type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    {errores.confirmPassword && <p className="error">{errores.confirmPassword}</p>}
                </div>
                <div className='aceptarc'>
                    <input type="checkbox" checked={aceptaTerminos} onChange={(e) => setAceptaTerminos(e.target.checked)} />
                    Aceptar <a href="">términos y condiciones</a>
                </div>
                {errores.aceptaTerminos && <p className="error">{errores.aceptaTerminos}</p>}
                <div className='btnc'>
                    <button className='boton' onClick={handleSubmit}>Registrarse</button>
                </div>
            </div>
        </div>
    );
}

export default MyLoginPage;
