import React, { useState } from 'react';
import "./registro.css";
import logo from "../../assets/img/imgInicioRegistro/logo.png";

// esa vaina de los mensajes de error
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

        // Validación de nombre
        if (!nombre) {
            erroresTemp.nombre = "El campo nombre es obligatorio.";
            esFormularioValido = false;
        }

        if (!correo) {
            erroresTemp.correo = "El campo correo es obligatorio.";
            esFormularioValido = false;
        } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(correo)) {
            erroresTemp.correo = "El correo electrónico no es válido.";
            esFormularioValido = false;
        }

        // Validación de password
        if (!password) {
            erroresTemp.password = "El campo contraseña es obligatorio.";
            esFormularioValido = false;
        }

        // Validación de confirmPassword
        if (password !== confirmPassword) {
            erroresTemp.confirmPassword = "Las contraseñas no coinciden.";
            esFormularioValido = false;
        }

        // Validación de aceptaTerminos
        if (!aceptaTerminos) {
            erroresTemp.aceptaTerminos = "Debe aceptar los términos y condiciones.";
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

        // Lógica para enviar los datos...
    };

    return (
        <div className='todo'>
            <img className='logo' src={logo} alt="logo"></img>
            <div className='formulario'>
            
                <h1 className='tit'>Registro de usuario</h1>
                <div className='nombre'>
                    <div>Nombre</div>
                    <input className='inpus' type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    {errores.nombre && <p className="error">{errores.nombre}</p>}
                </div>
                <div className='correo'>
                    <div>Correo electrónico</div>
                    <input className='inpus' type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                    {errores.correo && <p className="error">{errores.correo}</p>}
                </div>
                <div className='contraseña'>
                    <div>Contraseña</div>
                    <input className='inpus' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {errores.password && <p className="error">{errores.password}</p>}
                </div>
                <div className='confcontra'>
                    <div>Confirmar contraseña</div>
                    <input className='inpus' type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    {errores.confirmPassword && <p className="error">{errores.confirmPassword}</p>}
                </div>
                <div className='aceptarc'>
                    <div>
                        <input type="checkbox" checked={aceptaTerminos} onChange={(e) => setAceptaTerminos(e.target.checked)} />
                        Aceptar <a href="">términos y condiciones</a>
                    </div>
                    {errores.aceptaTerminos && <p className="error">{errores.aceptaTerminos}</p>}
                </div>
                <div className='btnc'>
                    <button className='boton' onClick={handleSubmit}>Registrarse</button>
                </div>
            </div>
        </div>
    );
}

export default MyLoginPage;
