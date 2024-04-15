import React from "react";
import "./Carrito.css";
import Bicicleta from "../../assets/img/Bicicleta.png";

export const Carrito = () => {

  return (

  <div className="carritos">
    <div className="carrito">
      <div className="carrito-closed">
        <box-icon name="x"></box-icon>
      </div>
      <h2>Su carrito</h2>
      <div className="carrito-cente">


        <div className="carrito-item">
          <img src={Bicicleta} alt="" />
            <div>
              <h3>title</h3>
              <p className="price">$1234</p>
            </div>
            <div>
              <box-icon name="up-arrow" type="solid"></box-icon>
              <p className="cantidad">1</p>
              <box-icon name="down-arrow" type="solid"></box-icon>

            </div>
            <div className="remove-item">
            <box-icon name="trash"></box-icon>
            </div>
        </div>

      </div>
      <div className="carrito-footer">
        <h3>Total:$2333</h3>
        <button className="btn">Pagar</button>
      </div>
    </div>
  </div>

      

  );
};
