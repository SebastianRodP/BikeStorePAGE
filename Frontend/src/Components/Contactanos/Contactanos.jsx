import React, { useState } from 'react'; // Importamos useState
import { Link } from "react-router-dom";
import './Contactanos.css';

const Contactanos = () => {
  // Definimos los estados dentro del componente
  const [nombre, setNombre] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errores, setErrores] = useState({});

  // Función para validar el formulario
  const validarFormulario = () => {
    let erroresTemp = {};
    let esFormularioValido = true;

    if (!nombre.trim()) {
      erroresTemp.nombre = "El campo nombre es obligatorio.";
      esFormularioValido = false;
    }

    if (!correoElectronico.trim()) {
      erroresTemp.correoElectronico = "El campo correo electrónico es obligatorio.";
      esFormularioValido = false;
    }

    if (!telefono.trim()) {
      erroresTemp.telefono = "El campo telefono es obligatorio.";
      esFormularioValido = false;
    }

    if (!mensaje.trim()) {
      erroresTemp.mensaje = "El campo mensaje es obligatorio.";
      esFormularioValido = false;
    }

    setErrores(erroresTemp);
    return esFormularioValido;
  };

  return (
    <div className='modal'>
      <div className='modal-contenedor'>
        <h1 className='titulo'>CONTÁCTANOS</h1>
        <Link to="/home">
          <button className='cerrar'>x</button>
        </Link>
        <div className='arriba'>
          <div className='campos-cont'>
            <input type="text" placeholder='Nombre' value={nombre} onChange={e => setNombre(e.target.value)} />
            {errores.nombre && <p className="error">{errores.nombre}</p>}
          </div>
          <div className='campos-cont'> 
            <input type='email' placeholder='Email' value={correoElectronico} onChange={e => setCorreoElectronico(e.target.value)} />
            {errores.correoElectronico && <p className="error">{errores.correoElectronico}</p>}
          </div>
        </div>

        <div className='abajo'>
          <div className='campos-cont'>
            <input type="text" placeholder='Telefono' value={telefono} onChange={e => setTelefono(e.target.value)} />
            {errores.telefono && <p className="error">{errores.telefono}</p>}
          </div>
          <div className='campos-cont'>
            <input type="text" placeholder='Empresa' />
          </div>
        </div>

        <p>Mensaje</p>
        <textarea className='mensaje'
          value={mensaje} onChange={e => setMensaje(e.target.value)}
          type="text" />
        {errores.mensaje && <p className="error">{errores.mensaje}</p>}

        <div className='enviar-mensaje'>
          <button onClick={validarFormulario}>Enviar</button>
        </div>
      </div>
    </div>
  )
}

export default Contactanos;
