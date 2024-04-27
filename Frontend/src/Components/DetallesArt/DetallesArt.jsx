import React from "react";
import Navbar from "../Navbar/Navbar";
import PropTypes from "prop-types";
import { Footer } from "../Footer/Footer";
import "./DetallesArt.css";
import useFetchGetDetalles from "../../hooks/useFetchGetDetalles";


export const DetallesArt = ({id}) => {
  
  const { dataArticulos } = useFetchGetDetalles(id);

  return (
    <>
      <Navbar />
      <div className="contenedor-separador">
        <div className="separador"></div>
      </div>
      {dataArticulos.map((articulo) => (
        <div className="tarjeta" key={articulo.idArticulos}>
          <div className="columna imagen">
            <img src={articulo.img} alt="Imagen del producto" />
          </div>
          <div className="columna contenido">
            <h2>{articulo.nombre}</h2>
            <h3>DESCRIPCION</h3>
            <p>{articulo.descripcion}</p>
            <div className="precio-y-boton">
              <div className="precio">
                <span>{articulo.costo}</span>
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
