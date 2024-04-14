import React from 'react';
import useFetchGetMarcas from '../../hooks/useFetchGetMarcas';


const Marcas = () => {
  const { dataMarca } = useFetchGetMarcas();

  return (
    <div className="marcas-container">
      {dataMarca.map((marca) => (
        <div key={marca.idmarca} className="marca-item">
          <img src={marca.img} alt={marca.marca} />
        </div>
      ))}
    </div>
  );
};

export default Marcas;
