import React from 'react'
import './Contactanos.css'

const Contactanos = () => {
  return (
    <div className='modal'>
        <div className='modal-contenedor'>
         <h1 className='titulo'>contactanos</h1>
         <button className='cerrar'>x</button>
         <input type="text" placeholder='Nombre'/>
         <input type='email' placeholder='Email' />
         <input type="text" placeholder='Telefono' />
         <input type="text" placeholder='Empresa' />
         <p>Mensaje</p>
         <input type="text" />
         <button>Enviar</button>
        </div>
      
    </div>
  )
}

export default Contactanos;