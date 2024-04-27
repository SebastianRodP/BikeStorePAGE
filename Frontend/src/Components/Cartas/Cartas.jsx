import React from "react";
import "./Cartas.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useFetchGetArticulos from "../../hooks/useFetchGetArticulos";

const Cartas = ({ id_categorias }) => {
  const { dataArticulos, loading, error } = useFetchGetArticulos(id_categorias);

  if (error) {
    return <div className="erroresCarga">Error al cargar los datos</div>;
  }

  if (loading) {
    return <div className="erroresCarga">Cargando...</div>;
  }

  const firstFourArticulos = dataArticulos.slice(0, 4);
  // firstFourArticulos = filter()

  return (
    <>
      <main className="content">
        {firstFourArticulos.map((articulo) => (
          <div className="caja-bicicletas" key={articulo.id_articulos}>
            <Link to={`/DetallesArt/${articulo.id_articulos}`}>
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
    </>
  );
};

Cartas.propTypes = {
  id_categorias: PropTypes.number.isRequired,
};

export default Cartas;
