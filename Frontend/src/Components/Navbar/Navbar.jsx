import React, {useState} from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import bicicletaNavbar from "../../assets/img/imgNavbar/bicicletaNavbar.png";
import carritoDeCompras from "../../assets/img/imgNavbar/carritoDeCompras.png";
import iniciarSesion from "../../assets/img/imgNavbar/iniciarSesion.png";
import useFetchGetArticulos from "../../hooks/useFetchGetArticulos";

export const Navbar = () => {

  const { data } = useFetchGetArticulos();
  const[searchTerm, setSearchTerm] = useState("");

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <a href="../pages/index.html" className="logo-letra nav-link">
            Bike<span className="blue">Store</span>
          </a>
          <img src={bicicletaNavbar} alt="logo BikeStore"></img>
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

            {/*Filtro de busqueda*/}

                  <input id="searchInput" type="text" placeholder="buscar" onChange={(event) => {
                      setSearchTerm(event.target.value);
                    }}
      />
            {data && data.length > 0 && (
              <div>
                {data
                  .filter((val) => {
                    if (searchTerm === "") {
                      return true; // Devolver true para incluir todos los elementos cuando no hay término de búsqueda
                    } else if (val.nombre.toLowerCase().includes(searchTerm.toLowerCase())) {
                      return true; // Devolver true si el nombre del artículo incluye el término de búsqueda
                    }
                    return false; // Devolver false para excluir los elementos que no cumplen con el criterio de búsqueda
                  })
                  .map((val) => {
                    return (
                      <div className="search-result" key={val.id}>
                        <img src={val.img} alt="" />
                        <h3>{val.nombre}</h3>
                        <p className="precio">{val.precio}</p>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>

            {/*Menu de navegacion */}


          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/bicicletas" className="nav-menu-link nav-link">Bicicletas</Link>
            </li>
            <li className="nav-menu-item">
              <a className="nav-menu-link nav-link">Accesorios</a>
            </li>
            <li className="nav-menu-item">
              <a className="nav-menu-link nav-link">Repuestos</a>
            </li>
            <li className="nav-menu-item">
              <a className="nav-menu-link  nav-link">Vestuarios</a>
            </li>
          </ul>
        </div>
        <div className="options">
          <div className="optionsUp">
          <Link to="/Contactanos" className="contactanos">Contactanos</Link>
            <div className="carrito">
              <box-icon name='cart' color="white"></box-icon>
              <span className="item-total">0</span>
            </div>
          </div>

          <div className="optionsDown">
            <p className="bienvenido">Bienvenido, usuario</p>
            <img src={iniciarSesion} className="user"></img>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;