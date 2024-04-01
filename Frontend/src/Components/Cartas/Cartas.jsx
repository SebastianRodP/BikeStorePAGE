import React, { useState } from "react";
import "./Cartas.css";
import catalogo from "../../assets/img/catalogo.png";
import useFetchGetArticulos from "../../hooks/useFetchGetArticulos";

const Cartas = () => {
  const { dataArticulos } = useFetchGetArticulos();
  const [currentPage, setCurrentPage] = useState(1);
  const [articulosPerPage] = useState(12);

  const indexOfLastArticulo = currentPage * articulosPerPage;
  const indexOfFirstArticulo = indexOfLastArticulo - articulosPerPage;
  const currentArticulos = dataArticulos.slice(
    indexOfFirstArticulo,
    indexOfLastArticulo
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <main className="content">
        {currentArticulos.map((articulo) => {
          return (
            <div className="caja-bicicletas" key={articulo.id}>
              <img src={articulo.img} alt="" />
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
              </div>
            </div>
          );
        })}
      </main>

      {/* Paginación */}
      <ul className="pagination">
        {Array.from({
          length: Math.ceil(dataArticulos.length / articulosPerPage),
        }).map((_, index) => (
          <li key={index} className={currentPage === index + 1 ? "active" : ""}>
            <button onClick={() => paginate(index + 1)}>{index + 1}</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cartas;
