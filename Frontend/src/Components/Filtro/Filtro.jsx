import React from 'react'
import './Filtro.css'

export const Filtro = () => {
  return (
    <div className="filtro"> 
      <ul className="filtro-menu">
        <li className="filtro-menu-item">
          <button className="filtro-menu-btn">DESCUENTOS</button>
          <ul>
            <li><a href="" className="submenu">Hasta 20%</a></li>
            <li><a href="" className="submenu">Hasta 20%</a></li>
            <li><a href="" className="submenu">Hasta 20%</a></li>
          </ul>
        </li>
        <li className="filtro-menu-item">
          <button className="filtro-menu-btn">CATEGORIA DE PRODUCTO</button>
          <ul>
            <li><a href="" className="submenu">Ruta</a></li>
            <li><a href="" className="submenu">Montaña</a></li>
            <li><a href="" className="submenu">Urbana</a></li>
          </ul>
        </li>
        <li className="filtro-menu-item">
          <button className="filtro-menu-btn">MARCA</button>
          <ul>
            <li><a href="" className="submenu">GW</a></li>
            <li><a href="" className="submenu">Specialiced</a></li>
            <li><a href="" className="submenu">Optimus</a></li>
          </ul>
        </li>
        <li className="filtro-menu-item">
          <button className="filtro-menu-btn">ORDENAR POR</button>
          <ul>
            <li><a href="" className="submenu">Precio(de mayor a menor)</a></li>
            <li><a href="" className="submenu">Precio (de menor a mayor)</a></li>
            <li><a href="" className="submenu">submenu</a></li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
