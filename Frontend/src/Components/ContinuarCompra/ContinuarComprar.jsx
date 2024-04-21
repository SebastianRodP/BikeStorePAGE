import React from "react";
import "./ContinuarCompra.css";
import { Link } from "react-router-dom";
import logo from "../../assets/img/imgInicioRegistro/logon.png";

/*const logo = "../../assets/img/imgInicioRegistro/logon.png"*/
const ContinuarCompra = () => {
return(
    <div>
        {/*lado izquierdo */}
    <div className="header1">
        <div className="Continue-buying">Continuar Comprando </div>
        {/* <img className='logotipo' src={logo} alt="Logo" /> */}
    </div>
    <div className="parent-container">
        <div className="left">
        <div className="submission-form">
        <div className="header2">
        <h1>Datos de cliente</h1>
        <p>Pago contra entrega en efectivo</p>
        <p className="date1">Fecha: 20-12-05</p>
        </div>
     <div className="from-body">
        <div>
            <p>Nombre y Apellido</p>
            <input className="information-entry" type="text" placeholder="Name"/>
        </div>
        <div>
            <p>Correo</p>
            <input className="information-entry" type="email" placeholder="E-meil"/>
        </div>
        <div>
            <p>Documento</p>
            <input className="information-entry" type="text" placeholder="Tipo de documento" />
        </div>
        <div>
            <p>Número de documento</p>
            <input className="information-entry" type="text" placeholder="Numero de documento"/>
        </div>
        <div className="information-entry2">
            <div><p>Numero de contacto</p>
            <input className="information-entry3" type="text" placeholder="" /></div>
            <div>
                <p>Ciudad</p>
                <input className="information-entry3" type="text" />
            </div>
        </div>
        <div className="end-page">
        <div className="below">
        <p>Subtotal</p>
        <p>1,168</p>
        </div>
        <div className="below">
            <p>Total (total inc)</p>
            <p>1,692</p>
        </div>
        </div>
        <div>
            <button className="ask">Pedir Envio </button>
        </div>
        </div>
        </div>
        
    </div>          
    <div className="right">
<div className="car-body">
    <div className="data">
        <div className="imagen"></div>
        <div className="iformacion"></div>
    </div>
    <div className="cantida">
        <div className="cantidad"></div>
        <div className="precio"></div>
    </div>
</div>
<div className="car-body">
    <div className="data">
        <div className="imagen"></div>   
        <div className="iformacion"></div>
    </div>
    <div className="cantida">
        <div className="cantidad"></div>
        <div className="precio"></div>
    </div>
</div>
<div className="car-body">
    <div className="data">
        <div className="imagen"></div>
        <div className="iformacion"></div>
    </div>
    <div className="cantida">
        <div className="cantidad"></div>
        <div className="precio"></div>
    </div>
</div>
    </div>
    </div>
    </div>
    
        
    )
}
export default ContinuarCompra