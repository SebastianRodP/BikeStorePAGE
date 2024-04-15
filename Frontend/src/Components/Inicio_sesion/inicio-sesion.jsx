import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import "./inisesion.css";
import logo from "../../assets/img/imgInicioRegistro/logon.png";
import { client } from "../../Pages/SupaBase/client";
import { Link } from "react-router-dom";

function MyLoginPage() {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [errores, setErrores] = useState({});
    const navigate = useNavigate(); // Crea la instancia de navigate

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
                                navigate('/dashboard'); // Redirige al admin a la página de dashboard
                            } else {
                                console.log('Bienvenido usuario');
                                navigate('/home');
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
        <div className='tod'>
            <Link to="/home"> 
            <img className='logo' src={logo} alt="Logo" />
            </Link>
           
            <form onSubmit={handleSubmit} className='form'>
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

            

                <div className='btnc'>
                    <button className='boton'>Iniciar sesión</button>
                </div>
                <div className='reccontra'>
                    <Link to="/reccontra">¿Ha olvidado su contraseña?</Link>
                </div>
                <div>
                    ¿No tienes una cuenta? <Link to="/registro">Registrate</Link>
                </div>
            </form>
        </div>
    );
}

export default MyLoginPage;
