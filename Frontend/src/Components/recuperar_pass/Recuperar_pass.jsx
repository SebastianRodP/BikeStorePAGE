import React, { useState } from 'react';
import "./recuperar_pass.css";
import { client } from "../../Pages/SupaBase/client";
import logo from "../../assets/img/imgInicioRegistro/logo.png";
import { Link } from 'react-router-dom';

function MyLoginPage() {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errores, setErrores] = useState({});

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
        const esFormularioValido = validarFormulario();

        if (esFormularioValido) {
           try {
    const { data, error } = await client
        .from('usuarios')
        .select('nombre, direccion, nodocumento')
        .eq('correo', correo);

    if (error) {
        console.error('Error al consultar la base de datos:', error.message);
    } else {
        if (data.length > 0) {
            const usuario = data[0];

            console.log('Usuario encontrado en la base de datos:');
            console.log('Nombre:', usuario.nombre);
            console.log('Número de documento:', usuario.nodocumento);
            console.log('Dirección:', usuario.direccion);

            // Verificación de contraseña y mensaje de bienvenida
            console.log('Bienvenido usuario');

            // Actualizar contraseña en la base de datos
            const { error: updateError } = await client
                .from('usuarios')
                .update({ contraseña: password })
                .eq('correo', correo);

            if (updateError) {
                console.error('Error al actualizar la contraseña:', updateError.message);
            } else {
                console.log('Contraseña actualizada con éxito.');
                console.log('Se modificó la contraseña.');
            }
        } else {
            setErrores({ correo: 'El correo electrónico no está registrado.' });
        }
    }
} catch (error) {
    console.error('Error al consultar la base de datos:', error.message);
}

        } else {
            console.log('El formulario contiene errores. Por favor, corríjalos.');
        }
    };

    return (
        <div className='todo'>
            <img className='logo' src={logo} alt="logo "></img>

            <div className='formulario'>
                <Link className='inic' to="/inicio">Volver</Link>
                <h1 className='tit'>Recuperar contraseña</h1>
                <div className='texto'>Por favor introduce tu correo electrónico para cambiar la contraseña.</div>

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
                    <input id='contraseña'
                        className='inpus'
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errores.password && <p className="error">{errores.password}</p>}
                </div>
                <div className='confcontra'>
                    <div>Confirmar contraseña</div>
                    <input className='inpus'
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

export default MyLoginPage;
