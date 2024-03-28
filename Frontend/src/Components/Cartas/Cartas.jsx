import React from 'react';
import "./Cartas.css";
import catalogo from '../../assets/img/catalogo.png';


export const Cartas  = () =>{
    return (
      <div className="content">

<div className="caja-bicicletas">
  <img src={catalogo} alt=""></img>
  <p id="descuento">-50%</p>
  <p id="precio"> descuento 1.600.000</p>
  <div className="detalle-bicicletas">
    <h2 className="nombre-bici">Bicicleta MTB GW</h2>
    <p>16 unidades <br/> 3 colores disponibles </p>
    <i className="fa-solid fa-house"></i>
  </div>
</div>
</div>
    
    )
}




