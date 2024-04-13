import React, { useState } from 'react';
import "./registro.css";
import logo from "../../assets/img/imgInicioRegistro/logo.png";
import { Link } from "react-router-dom";
import { createClient } from '@supabase/supabase-js';

function MyLoginPage() {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [aceptaTerminos, setAceptaTerminos] = useState(false);
    const [errores, setErrores] = useState({});

    const supabase = createClient('https://hetfaqksgxjlcxatxcvl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhldGZhcWtzZ3hqbGN4YXR4Y3ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExNjI0OTcsImV4cCI6MjAyNjczODQ5N30.jg0cFimQOh3erlrtL9AILrtyQIrRJLnFs-594uJXiiY');

    const validarFormulario = () => {
        let erroresTemp = {};
        let esFormularioValido = true;

        if (!nombre.trim()) {
            erroresTemp.nombre = "El campo nombre es obligatorio.";
            esFormularioValido = false;
        }

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

        if (!aceptaTerminos) {
            erroresTemp.aceptaTerminos = "Debe aceptar los términos y condiciones.";
            esFormularioValido = false;
        }

        setErrores(erroresTemp);
        return esFormularioValido;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const esFormularioValido = validarFormulario();
    
        if (esFormularioValido) {
            try {
                const { data: usuarios, error: errorConsulta } = await supabase
                    .from('usuarios')
                    .select('*')
                    .eq('correo', correo);
    
                if (errorConsulta) {
                    console.error('Error al consultar el correo:', errorConsulta.message);
                    return;
                }
    
                if (usuarios && usuarios.length > 0) {
                    console.log('El correo ya está en uso.');
                    setErrores(prevErrores => ({
                        ...prevErrores,
                        correo: 'El correo ya está en uso.'
                    }));
                    return;
                }
    
                // insertar datos en  Supabase
                const { data, error } = await supabase
                    .from('usuarios')
                    .insert([{ nombre, correo, contraseña: password, idrol: 2 }]);
    
                if (error) {
                    console.error('Error al registrar los datos:', error.message);
                } else {
                    console.log('Datos registrados correctamente:', data);
                    // necesito el mercho escuchando a fercho, para poder redirigir al home.
                }
            } catch (error) {
                console.error('Error al registrar los datos:', error.message);
            }
        } else {
            console.log('El formulario contiene errores. Por favor, corríjalos.');
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
                    <input
                        id='correo'
                        className='inpus'
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value.toLowerCase())} 
                    />
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
                    <div>
                        aceptar <Link to="/terminos">Terminos y condiciones</Link>
                    </div>
                </div>
                {errores.aceptaTerminos && <p className="error">{errores.aceptaTerminos}</p>}
                <div className='btnc'>
                    <button className='boton' onClick={handleSubmit}>Registrarse</button>
                </div>
                <div>
                    ¿Ya tienes una cuenta? <Link to="/">Inicia sesión aquí</Link>
                </div>
            </div>
        </div>
    );
}

export default MyLoginPage;
