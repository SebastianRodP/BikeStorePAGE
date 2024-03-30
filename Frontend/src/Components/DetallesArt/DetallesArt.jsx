import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import Bicicleta from "../../assets/img/Bicicleta.png";
import "./DetallesArt.css";

export const DetallesArt = () => {
  return (
    <>
  
      <Navbar />
      <div className="contenedor-separador">
        <div className="separador"></div>
      </div>

      <div className="tarjeta">
        <div className="columna imagen">
          <img src={Bicicleta} alt="Imagen del producto" />
        </div>
        <div className="columna contenido">
          <h2>BICICLETA MTB SIOOORR</h2>
          <h3>Descripción</h3>
          <p>
            Es una bicicleta pequeña, liviana y muy resistente, especialmente
            construida para parques de salto, donde el conductor debe ser muy
            experimentado y ágil. Esta bicicleta permiten el pedaleo en ascenso,
            sin embargo, no están construidas para recorridos largos.
          </p>
          <p>
            <strong>COLORES DISPONIBLES</strong>
          </p>
          <div className="colores-disponibles">
            <div className="color-rojo"></div>
            <div className="color-azul"></div>
            <div className="color-verde"></div>
          </div>
          <div className="precio-y-boton">
            <div className="precio">
              <span>$1.444.555</span>
            </div>
            <a href="#" className="compra">AÑADIR AL CARRITO</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
