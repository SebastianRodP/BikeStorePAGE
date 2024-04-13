import React, { useState } from 'react';
import "./inisesion.css";
import logo from "../../assets/img/imgInicioRegistro/logo.png";
import { client } from "../../Pages/SupaBase/client";
import { Link } from "react-router-dom";

function MyLoginPage() {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [errores, setErrores] = useState({});


    const validarFormulario = () => {
        let erroresTemp = {};
        let esFormularioValido = true;

        if (!correo.trim()) {
            erroresTemp.correo = "El campo correo es obligatorio.";
            esFormularioValido = false;
        }

        if (!password.trim()) {
            erroresTemp.password = "El campo contraseña es obligatorio.";
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
                    .select('correo, contraseña, idrol, nombre, direccion, nodocumento')
                    .eq('correo', correo)


                if (error) {
                    console.error('Error al consultar la base de datos:', error.message);
                } else {
                    if (data.length > 0) {
                        const usuario = data[0];


                        if (usuario.contraseña === password) {
                            console.log('La contraseña coincide. Iniciando sesión...');

                            if (usuario.idrol === 1) {
                                console.log('Bienvenido admin');
                                console.log('nombre:', usuario.nombre);
                                console.log('Numero de documento:', usuario.nodocumento);
                                console.log('direccion:', usuario.direccion);

                            } else {
                                console.log('Bienvenido usuario');
                                console.log('nombre:', usuario.nombre);
                                console.log('Numero de documento:', usuario.nodocumento);
                                console.log('direccion:', usuario.direccion);
                            }
                        } else {
                            setErrores({ password: 'La contraseña no coincide.' });
                        }
                    } else {
                        setErrores({ correo: 'No se encontró ningún usuario con ese correo.' });
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
        <div>
            <img className='logo' src={logo} alt="Logo" />
            <div onSubmit={handleSubmit} className='form'>

                <h1 className='tit'>Inicio de sesión</h1>
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
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errores.password && <p className="error">{errores.password}</p>}
                </div>

                <div className='reccontra'>
                    <input type="checkbox" name="" id="" />
                    Recordar contraseña
                </div>

                <div className='btnc'>
                    <button className='boton' onClick={handleSubmit}>Iniciar sesión</button>
                </div>
                <div className='reccontra'>
                    <Link to="/reccontra">¿Ha olvidado su contraseña?</Link>
                </div>
                <div>
                    ¿No tienes una cuenta? <Link to="/registro">Registrate</Link>
                </div>
            </div>
        </div>
    );
}

export default MyLoginPage;