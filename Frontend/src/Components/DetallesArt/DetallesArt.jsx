import React from "react";
import Navbar from "../Navbar/Navbar";
import PropTypes from "prop-types";
import { Footer } from "../Footer/Footer";
import "./DetallesArt.css";
import useFetchGetDetalles from "../../hooks/useFetchGetDetalles";
import { useLocation } from "react-router-dom";


export const DetallesArt =  () => {

  const { pathname } = useLocation();
  console.log(pathname);

  const pito = pathname.split('/'); 
  const data =  useFetchGetDetalles(parseInt(pito[2]));
  console.log(data);

  return (
    <>
      <Navbar />
      <div className="contenedor-separador">
        <div className="separador"></div>
      </div>
      {data && data.map((articulo) => (
        <div className="tarjeta" key={articulo.idArticulos}>
          <div className="columna imagen">
            <img src={articulo.img} alt="Imagen del producto" />
          </div>
          <div className="columna contenido">
            <h2>{articulo.nombre}</h2>
            <h3>DESCRIPCION</h3>
            <p className="descripcion">{articulo.descripcion}</p>
            <div className="precio-y-boton">
              <div className="precio">
                <h3 className="precio-">PRECIO:</h3> <pre> </pre>
                <p> ${articulo.costo}</p> 
              </div>
              <a href="#" className="compra">
                AÑADIR AL CARRITO
              </a>
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </>
  );
};
DetallesArt.propTypes = {
  id: PropTypes.number.isRequired,
};
export default DetallesArt;
