import React from "react";
import "./Cartas.css";
import catalogo from "../../assets/img/catalogo.png";
import useFetchGetArticulos from "../../hooks/useFetchGetArticulos";

export const Cartas = () => {
  const { dataArticulos } = useFetchGetArticulos();
  return (
    <>
    <div className="content">
      {dataArticulos.map((articulos) => {
        return (
          
            <div className="caja-bicicletas">
              <img src={articulos.img} alt=""></img>
              <p id="descuento">{articulos.descuento}<span>%</span></p>
              <p id="precio"> <span>$</span> {articulos.costo}</p>
              <div className="detalle-bicicletas">
                <h2 className="nombre-bici">{articulos.nombre}</h2>
                <p>
                 {articulos.stock} <br />{articulos.color}
                </p>
                <i className="fa-solid fa-house"></i>
              </div>
            </div>
         
        );
      })}
    </div>
    </>
  );
};

export default Cartas