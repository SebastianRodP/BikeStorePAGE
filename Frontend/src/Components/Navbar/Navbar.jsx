import React from 'react';
import "./Navbar.css";

export const Navbar = () => {

Return(
  <header class="header">
      <nav class="nav">
        <div class="logo">
            <a href="../pages/index.html" class="logo-letra nav-link">Bike<span class="blue">Store</span></a>
            <img src="../assets/img/bicicleta-navbar.png" alt="logo BikeStore"></img>
        </div>
        <button class="nav-toggle"><i class="fa-solid fa-bars"></i></button>
        <div class="navegation">
          <div class="main">
            <a href=""> <i class="fa-solid fa-magnifying-glass"></i></a>
            <input type="search" placeholder="buscar"></input>
          </div>
        <ul class="nav-menu">

          <li class="nav-menu-item">
            <a  class="nav-menu-link nav-link">Bicicletas</a>
          </li>
          <li class="nav-menu-item">
            <a  class="nav-menu-link nav-link">Accesorios</a>
          </li>
          <li class="nav-menu-item">
            <a  class="nav-menu-link nav-link">Repuestos</a>
          </li>
          <li class="nav-menu-item">
            <a  class="nav-menu-link  nav-link">Vestuarios</a>
          </li>
        </ul>

 </div>
        <div class="options">
          <div class="optionsUp">
              <img src="../assets/img/corazon- favoritos.png" alt="" class="corazon"></img>
              <a href="#" class="contactanos">Contactanos</a>
              <img src="../assets/img/carrito de compras.png" alt="carro-de-compras" class="carrito"></img>
            </div>

            <div class="optionsDown">
              <p class="bienvenido">Bienvenido, usuario</p>
              <img src="../assets/img/Iniciar sesion.png" class="user"></img>
            </div>
        </div>
      </nav>
    </header>
)

}