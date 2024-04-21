import React from "react";
import PropTypes from "prop-types";
import useFetchGetArticulos from "../../hooks/useFetchGetArticulos";
import { Link } from "react-router-dom";

const CartasNavegacion = ({ id_categorias }) => {
  const { dataArticulos, loading, error } = useFetchGetArticulos(id_categorias);

  if (error) {
    return <div>Error al cargar los datos</div>;
  }

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <main className="content">
      {dataArticulos.map((articulo) => (
        <div className="caja-bicicletas" key={articulo.idArticulos}>
          <Link to={`/Bicicleta/${articulo.idArticulos}`}>
            <img src={articulo.img} alt="" />
          </Link>
          <p id="descuento">
            {articulo.descuento}
            <span>%</span>
          </p>
          <p id="precio">
            <span>$</span> {articulo.costo}
          </p>
          <div className="detalle-bicicletas">
            <h2 className="nombre-bici">{articulo.nombre}</h2>
            <p>
              {articulo.stock} <span>Unidades disponibles</span>
            </p>
            <p>{articulo.color}</p>
            <i className="fa-solid fa-house"></i>

            <div className="footer">
              <div className="button">
                <button className="btn">Añadir al carrito</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

CartasNavegacion.propTypes = {
  id_categorias: PropTypes.number.isRequired,
};

export default CartasNavegacion;
