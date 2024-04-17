import React, {useState} from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BicicletaNav from "../../assets/img/imgNavbar/bicicletaNavbar.png"
import IniciarSesion from "../../assets/img/imgNavbar/iniciarSesion.png";
import "./Navbar.css";

const Navbar = () => {
  
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <Link to="/home"  className="logo-letra nav-link">
            Bike<span className="blue">Store</span>
          </Link>
          <img src={BicicletaNav}></img>
        </div>
        <button className="nav-toggle">
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="navegation">
          <div className="main">
          <box-icon name='search'color="#c2c2c2" ></box-icon>
            {/*Filtro de búsqueda*/}
     
          <input className="buscador"
          type="text"
          placeholder="Buscar..."/>
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
            <div className="carrito-compra">
              <box-icon name="cart" color="white"></box-icon>
              <span className="item-total">0</span>
            </div>
          </div>

          <div className="optionsDown">
            <p className="bienvenido">Bienvenido, usuario</p>
            <Link to="/inicio" >
            <img  src={IniciarSesion} className="user" alt="Iniciar sesión"/>
            </Link>
          
          </div>
        </div>
      </nav>
    </header>
  );
};
Navbar.propTypes = {
  search: PropTypes.number.isRequired,
};
export default Navbar;
