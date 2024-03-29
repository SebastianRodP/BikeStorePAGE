import React, { useState } from 'react';
import "./recuperar_pass.css"; 
import logo from "../../assets/img/imgInicioRegistro/logo.png";

function MyLoginPage() {
    const [codi, setcodi] = useState('');
    const [errores, setErrores] = useState({}); 

    const validarFormulario = () => {
        let erroresTemp = {};
        let esFormularioValido = true;

        // validacion del campo codi
        if (!codi) {
            erroresTemp.codi = "El campo código es obligatorio.";
            esFormularioValido = false;
        } else if (codi.length !== 6) {
            erroresTemp.codi = "El código debe contener exactamente 6 dígitos.";
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
                <h1 className='tit'>Recuperar contraseña</h1>
                <div>Por favor introduce el código de verificación que se envió a tu correo electrónico.</div>
                <div className='codi'>
                    <div>Código de verificación</div>
                    <input className='inpus' type="text" maxLength={6} value={codi} onChange={(e) => setcodi(e.target.value)} />
                    {errores.codi && <p className="error">{errores.codi}</p>}
                </div>
 
                <div className='btnc'>
                    <button className='boton' onClick={handleSubmit}> Continuar </button>
                </div>
            </div>
        </div>
    );
}

export default MyLoginPage;
