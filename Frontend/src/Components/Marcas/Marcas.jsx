import React from 'react';
import useFetchGetMarcas from '../../hooks/useFetchGetMarcas';
import "../Marcas/Marcas.css"

const Marcas = () => {
  const { dataMarca } = useFetchGetMarcas();

  return (
    <div className="marcas-container">
      <div className="slide-track">
      {dataMarca.map((marca) => (
        <div key={marca.idmarca} className="marca-item">
          <img src={marca.img} alt={marca.marca} />
        </div>
      ))}
      </div>
    </div>
  );
};

export default Marcas;
