import React from 'react';
import "./Navbar.css";

export const Navbar = () => {

return(
  <header className="header">
      <nav className="nav">
        <div className="logo">
            <a href="../pages/index.html" className="logo-letra nav-link">Bike<span className="blue">Store</span></a>
            <img src="../assets/img/imgNavbar/bicicleta-navbar.png" alt="logo BikeStore"></img>
        </div>
        <button className="nav-toggle"><i className="fa-solid fa-bars"></i></button>
        <div className="navegation">
          <div className="main">
            <a href=""> <i className="fa-solid fa-magnifying-glass"></i></a>
            <input type="search" placeholder="buscar"></input>
          </div>
        <ul className="nav-menu">

          <li className="nav-menu-item">
            <a  className="nav-menu-link nav-link">Bicicletas</a>
          </li>
          <li className="nav-menu-item">
            <a  className="nav-menu-link nav-link">Accesorios</a>
          </li>
          <li className="nav-menu-item">
            <a  className="nav-menu-link nav-link">Repuestos</a>
          </li>
          <li className="nav-menu-item">
            <a  className="nav-menu-link  nav-link">Vestuarios</a>
          </li>
        </ul>

 </div>
        <div className="options">
          <div className="optionsUp">
              <img src="../assets/img/corazon- favoritos.png" alt="" className="corazon"></img>
              <a href="#" className="contactanos">Contactanos</a>
              <img src="../assets/img/carrito de compras.png" alt="carro-de-compras" className="carrito"></img>
            </div>

            <div className="optionsDown">
              <p className="bienvenido">Bienvenido, usuario</p>
              <img src="../assets/img/Iniciar sesion.png" className="user"></img>
            </div>
        </div>
      </nav>
    </header>
)

}