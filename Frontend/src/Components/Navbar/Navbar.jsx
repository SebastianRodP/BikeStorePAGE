import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BicicletaNav from "../../assets/img/imgNavbar/bicicletaNavbar.png";
import "./Navbar.css";
import { Carrito } from "../Carrito/Carrito";

const handleLogout = () => {
  sessionStorage.clear(); // Limpiar todos los datos del sessionStorage
};

const Navbar = () => {
  const [carritoAbierto, setCarritoAbierto] = useState(false);
  const [inicioSesionExitoso, setInicioSesionExitoso] = useState(sessionStorage.getItem('inicioSesionExitoso') === 'true');

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
            {inicioSesionExitoso ? (
              < >
                <p className="bienvenido">Bienvenido/a {sessionStorage.getItem('nombreUsuario')}</p>
                <Link to="/inicio">
                  <div className="botonesuser" onClick={handleLogout}>Cerrar sesión</div>
                </Link>
              </>
            ) : (
              <>
                <Link to="/inicio">
                  <div className="botonesuser">Iniciar sesión</div>
                </Link>
                <Link to="/inicio">
                  <div className="botonesuser">Registrarse</div>
                </Link>
              </>
            )}
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
