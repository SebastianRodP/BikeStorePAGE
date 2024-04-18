import React from "react";
import "./ContinuarCompra.css";
import { Link } from "react-router-dom"

const ContinuarCompra = () => {
return(
    <div>
    <div className="header1">
                <div className="Continue-buying">Continuar Comprando </div>
                <img className='logotipo' src={logo} alt="Logo" />
    </div>
    <div className="parent container">
        <div className="right">
        <div className="submission-form">
            <div className="header2">
        <h1>Datos de cliente</h1>
        <p>Pago contra entrega en efectivo</p>
        <p className="date">Fecha: 20-12-05</p>
        </div>
     <div className="from-body">
        <div>
            <p>Nombre y Apellido</p>
            <input type="text" placeholder="Name"/>
        </div>
        <div>
            <p>Correo</p>
            <input type="email" placeholder="E-meil"/>
     </div>
        </div>
        </div>
        <div className="left">izquierda</div>
    </div>
                
    </div>
    </div>
        
    )
}
export default ContinuarCompra