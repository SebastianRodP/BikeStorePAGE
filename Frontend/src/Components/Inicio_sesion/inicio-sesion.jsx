import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./formularios.css";
import logo from "../../assets/img/imgInicioRegistro/logo.png";
import { client } from "../../Pages/SupaBase/client";
import { Link } from "react-router-dom";

function MyLoginPage() {
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [errores, setErrores] = useState({});
    const navigate = useNavigate();

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

        const esFormularioValido = validarFormulario();

        if (esFormularioValido) {
            try {
                const { data, error } = await client
                    .from('usuarios')
                    .select('correo, contraseña, idrol, nombre, direccion, nodocumento')
                    .eq('correo', correoElectronico);

                if (error) {
                    console.error('Error al consultar la base de datos:', error.message);
                } else {
                    if (data.length > 0) {
                        const usuario = data[0];

                        if (usuario.contraseña === contraseña) {
                            console.log('La contraseña coincide. Iniciando sesión...');

                            if (usuario.idrol === 1) {
                                console.log('Bienvenido admin');
                                navigate('/dashboard');
                            } else {
                                console.log('Bienvenido usuario');
                                navigate('/home');
                            }
                        } else {
                            setErrores({ contraseña: 'La contraseña no coincide.' });
                        }
                    } else {
                        setErrores({ correoElectronico: 'No se encontró ningún usuario con ese correo electrónico.' });
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
        <div className='contenedor'>
            <Link to="/home">
                <img className='logon' src={logo} alt="Logo" />
            </Link>

            <form onSubmit={handleSubmit} className='formulario'>
                <h1 className='titulo'>Inicio de sesión</h1>
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

                <div className='boton-container'>
                    <button className='boton'>Iniciar sesión</button>
                </div>
                <div className='recuperar-contraseña'>
                    <Link to="/reccontra">¿Ha olvidado su contraseña?</Link>
                </div>
                <div className='crear-cuenta'>
                    ¿No tienes una cuenta? <Link to="/registro">Regístrate</Link>
                </div>
            </form>
        </div>
    );
}

export default MyLoginPage;
