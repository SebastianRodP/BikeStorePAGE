import React from "react";
import "./Cartas.css";
import PropTypes from "prop-types";
import useFetchGetArticulos from "../../hooks/useFetchGetArticulos";
import { Link } from "react-router-dom";

const Cartas = ({ id_categorias }) => {
  // Llamada al hook para obtener los artículos de la categoría con ID proporcionado
  const { dataArticulos, loading, error } = useFetchGetArticulos(id_categorias);

  if (error) {
    return <div>Error al cargar los datos</div>;
  }

  if (loading) {
    return <div className="cargaArticulos">Cargando...</div>;
  }

  // Verificar si dataArticulos es un array y tiene al menos un elemento


  // Mostrar solo los primeros cuatro artículos
  const firstFourArticulos = dataArticulos.slice(0, 4);

  return (
    <>
      <main className="content">
        {firstFourArticulos.map((articulo) => (
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
    </>
  );
};

Cartas.propTypes = {
  id_categorias: PropTypes.number.isRequired,
};

export default Cartas;
