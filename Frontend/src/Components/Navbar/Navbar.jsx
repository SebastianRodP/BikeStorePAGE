import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BicicletaNav from "../../assets/img/imgNavbar/bicicletaNavbar.png";
import IniciarSesion from "../../assets/img/imgNavbar/iniciarSesion.png";
import "./Navbar.css";
import { Carrito } from "../Carrito/Carrito";

const Navbar = () => {
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  // Función para cambiar el estado del carrito
  const toggleCarrito = () => {
    setCarritoAbierto(!carritoAbierto);
  };

  return (
    <header className="header">
      <nav className="navprincipal">
        <div className="logo">
          <Link to="/home" className="logo-letra nav-link">
            Bike<span className="blue">Store</span>
          </Link>
          <img src={BicicletaNav} alt="Bicicleta" />
        </div>
       
        <div className="navegation">
          {/* <div className="main">
            <box-icon name="search" color="#c2c2c2"></box-icon>
            {/*Filtro de búsqueda*/}
            {/* <input
              className="buscador"
              type="text"
              placeholder="Buscar..."
            /> *
          </div> */}

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
            <div className="carrito-compra" onClick={toggleCarrito}>
              {/* Llama a toggleCarrito al hacer clic */}
              <box-icon name="cart" color="white"></box-icon>
              <span className="item-total">0</span>
            </div>
          </div>

          <div className="optionsDown">
            <p className="bienvenido">Bienvenido, usuario</p>
            <Link to="/inicio">
              <img src={IniciarSesion} className="user" alt="Iniciar sesión" />
            </Link>
          </div>
        </div>
      </nav>
      {/* Renderiza el componente Carrito con la prop carritoAbierto */}
      <Carrito carritoAbierto={carritoAbierto} toggleCarrito={toggleCarrito} />
    </header>
  );
};

Navbar.propTypes = {
  search: PropTypes.number.isRequired,
};

export default Navbar;
