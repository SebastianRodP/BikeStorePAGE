import React, { useState } from 'react';
import "./registro.css";
import logo from "../../assets/img/imgInicioRegistro/logo.png";
import { client } from "../../Pages/SupaBase/client";
import { debounce } from 'lodash';

function MyLoginPage() {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [aceptaTerminos, setAceptaTerminos] = useState(false);
    const [errores, setErrores] = useState({});

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
                
                await new Promise(resolve => setTimeout(resolve, 1000));
    
                const { user, error } = await client.auth.signUp({
                    email: correo, 
                    password: password,
                    data: { 
                        nombre: nombre, 
                        nodocumento: null, 
                        direccion: null,
                        idrol: 2 
                    }
                });
                
                if (error) {
                    console.error('Error al registrar el usuario:', error.message);
                } else {
                    console.log('Usuario registrado correctamente:', user);
                }
            } catch (error) {
                console.error('Error al registrar el usuario:', error.message);
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