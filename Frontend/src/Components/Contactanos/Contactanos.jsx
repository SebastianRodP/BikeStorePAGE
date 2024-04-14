import React from 'react'
import { Link } from "react-router-dom";
import './Contactanos.css'

const Contactanos = () => {
  return (
    <div className='modal'>
        <div className='modal-contenedor'>
         <h1 className='titulo'>CONTÁCTANOS</h1>
         <Link to="/home" >
         <button className='cerrar'>x</button>
         </Link>
         <div className='input-group'>
         <input type="text" placeholder='Nombre'/>
         <input type='email' placeholder='Email' />
         </div>
         <div className='input-group'>
         <input type="text" placeholder='Telefono' />
         <input type="text" placeholder='Empresa' />
         </div>
         <p>Mensaje</p>
         <input className='mensaje' type="text" />
         <div className='enviar-mensaje'>
         <button>Enviar</button>
         </div>
        </div>
      
    </div>
  )
}


export default Contactanos;