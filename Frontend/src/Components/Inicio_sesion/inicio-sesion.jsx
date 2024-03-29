import React, { useState } from 'react';
import "./inisesion.css"; 
import logo from "../../assets/img/imgInicioRegistro/logo.png";

function MyLoginPage() {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [errores, setErrores] = useState({}); 

    const validarFormulario = () => {
        let erroresTemp = {};
        let esFormularioValido = true;

        // Validacion del correo electronico ese
        if (!correo) {
            erroresTemp.correo = "El campo correo es obligatorio.";
            esFormularioValido = false;
        } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(correo)) {
            erroresTemp.correo = "El correo electrónico no es válido.";
            esFormularioValido = false;
        }

        // Validacion de las contraseñas
        if (!password) {
            erroresTemp.password = "El campo contraseña es obligatorio.";
            esFormularioValido = false;
        }

        setErrores(erroresTemp);
        return esFormularioValido;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validarFormulario()) {
            return;
        }

 
    };

    return (
        <div className='todo'>
            <img className='logo' src={logo} alt="logo "></img>
            
            <div className='formulario'>
                <h1 className='tit'>Iniciar sesión</h1>
                <div className='correo'>
                    <div>Correo electrónico</div>
                    <input className='inpus' type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                    {errores.correo && <p className="error">{errores.correo}</p>}
                </div>
                <div className='contraseña'>
                    <div className='contras'>
                        <div>Contraseña</div>
                        <a className='n' href=''>Recuperar contraseña</a>
                    </div>
                    <input className='inpus' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {errores.password && <p className="error">{errores.password}</p>}
                </div>
                <div className='reccontra'>
                    <input type="checkbox" />
                    <div> Recordar contraseña</div>
                </div>
                <div className='btnc'>
                    <button className='boton' onClick={handleSubmit}> Iniciar sesión </button>
                </div>
                <div className='crearc'>
                    <div>¿No tienes una cuenta?</div>
                    <div><a className='n' href="../registro_user/register.jsx">Crear cuenta</a></div>
                </div>
            </div>
        </div>
    );
}

export default MyLoginPage;
