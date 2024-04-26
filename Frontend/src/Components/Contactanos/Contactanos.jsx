import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Contactanos.css';
import { createClient } from '@supabase/supabase-js';

const Contactanos = () => {
  const [nombre, setNombre] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errores, setErrores] = useState({});
  const [mensajeExito, setMensajeExito] = useState('');
  const [mensajeError, setMensajeError] = useState('');

  const supabase = createClient(
    'https://hetfaqksgxjlcxatxcvl.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhldGZhcWtzZ3hqbGN4YXR4Y3ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExNjI0OTcsImV4cCI6MjAyNjczODQ5N30.jg0cFimQOh3erlrtL9AILrtyQIrRJLnFs-594uJXiiY'
  );
  

  const validarFormulario = () => {
    let erroresTemp = {};
    let esFormularioValido = true;

    if (!nombre.trim()) {
      erroresTemp.nombre = "El campo nombre es obligatorio.";
      esFormularioValido = false;
    }

    if (!correoElectronico.trim()) {
      erroresTemp.correoElectronico = "El campo correo es obligatorio.";
      esFormularioValido = false;
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(correoElectronico)) {
      erroresTemp.correoElectronico = "El correo electrónico no es válido.";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const esFormularioValido = validarFormulario();

    if (esFormularioValido) {
      try {
        const { data, error } = await supabase
          .from('contactanos')
          .insert([{ nombre, correo: correoElectronico, telefono, mensaje }]);
        
        console.log('Datos a enviar:', { nombre, correoElectronico, telefono, mensaje });

        if (error) {
          console.error("Error detallado:", error.message);
          setMensajeError('Hubo un error al enviar el mensaje.');
        } else {
          setMensajeExito('Se ha enviado el mensaje correctamente.');
          
          setCorreoElectronico("");
          setNombre("");
          setTelefono("");
          setMensaje("");
        }
      } catch (error) {

        setMensajeError('Hubo un error al enviar el mensaje.');
      }
    }
  };

  return (
    <div className='modal'>
      <div className='modal-contenedor'>
        <h1 className='titulo'>CONTÁCTANOS</h1>
        <Link className='salir_ex' to="/home">
          <button className='cerrar'>x</button>
        </Link>
        <div className='arriba'>
          <div className='campos-cont'>
            <input
              className='input_contactanos'
              type="text"
              placeholder='Nombre'
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />
            {errores.nombre && <p className="errores">{errores.nombre}</p>}
          </div>
          <div className='campos-cont'>
            <input
              className='input_contactanos'
              type='email'
              placeholder='Email'
              value={correoElectronico}
              onChange={e => setCorreoElectronico(e.target.value)}
            />
            {errores.correoElectronico && <p className="errores">{errores.correoElectronico}</p>}
          </div>
        </div>

        <div className='abajo'>
          <div className='campos-cont'>
            <input
              className='input_contactanos'
              type="text"
              placeholder='Telefono'
              value={telefono}
              maxLength={10}
              onChange={e => {
                const value = e.target.value;
                if (/^[0-9]*$/.test(value) || value === '') {
                  setTelefono(value);
                }
              }}
            />

            {errores.telefono && <p className="errores">{errores.telefono}</p>}
          </div>
        </div>

        <p>Mensaje</p>
        <textarea
          className='mensaje'
          value={mensaje}
          onChange={e => setMensaje(e.target.value)}
          type="text"
        />
        {errores.mensaje && <p className="errores">{errores.mensaje}</p>}
        {mensajeExito && <p className="exito">{mensajeExito}</p>}
        {mensajeError && <p className="errores">{mensajeError}</p>}

        <div className='enviar-mensaje'>
          <button onClick={handleSubmit}>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default Contactanos;
