import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <Link to="/home"  className="logo-letra nav-link">
            Bike<span className="blue">Store</span>
          </Link>
          <img src></img>
        </div>
        <button className="nav-toggle">
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="navegation">
          <div className="main">
            <a href="">
              {" "}
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>

            {/*Filtro de búsqueda*/}

            <input type="search" placeholder="buscar" />
          </div>

          {/*Menu de navegación */}
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/Bicicletas" className="nav-menu-link nav-link">
                Bicicletas
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/Accesorios" className="nav-menu-link nav-link">
                Accesorios
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/Repuestos" className="nav-menu-link nav-link">
                Repuestos
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/Vestuarios" className="nav-menu-link nav-link">
                Vestuarios
              </Link>
            </li>
          </ul>
        </div>
        <div className="options">
          <div className="optionsUp">
            <Link to="/Contactanos" className="contactanos">
              Contactanos
            </Link>
            <div className="carrito">
              <box-icon name="cart" color="white"></box-icon>
              <span className="item-total">0</span>
            </div>
          </div>

          <div className="optionsDown">
            <p className="bienvenido">Bienvenido, usuario</p>
            <img  className="user" alt="Iniciar sesión" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
