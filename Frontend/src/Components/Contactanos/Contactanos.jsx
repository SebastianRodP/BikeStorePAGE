import React from 'react'
import './Contactanos.css'

const Contactanos = () => {
  return (
    <div className='modal'>
        <div className='modal-contenedor'>
         <h1 className='titulo'>CONTÁCTANOS</h1>
         <button className='cerrar'>x</button>
         <div className='one'>
         <input type="text" placeholder='Nombre'/>
         <input type='email' placeholder='Email' />
         </div>
         <div className='two'>
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