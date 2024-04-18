import React from 'react';
import PropTypes from 'prop-types';
import useFetchGetArticulos from '../../hooks/useFetchGetArticulos';
import './Cartas.css';

const Cartas = ({ id_categorias, searchTerm }) => {
  const { dataArticulos, loading, error } = useFetchGetArticulos(id_categorias, searchTerm);

  if (error) {
    return <div>Error al cargar los datos</div>;
  }

  if (loading) {
    return <div>Cargando...</div>;
  }

  // Mostrar solo los primeros cuatro artículos
  const firstFourArticulos = dataArticulos.slice(0, 4);

  return (
    <main className='content'>
      {firstFourArticulos.map((articulo) => (
        <div className='caja-bicicletas' key={articulo.idArticulos}>
          <img src={articulo.img} alt='' />
          <p id='descuento'>
            {articulo.descuento}
            <span>%</span>
          </p>
          <p id='precio'>
            <span>$</span> {articulo.costo}
          </p>
          <div className='detalle-bicicletas'>
            <h2 className='nombre-bici'>{articulo.nombre}</h2>
            <p>
              {articulo.stock} <span>Unidades disponibles</span>
            </p>
            <p>{articulo.color}</p>
            <i className='fa-solid fa-house'></i>
            <div className='footer'>
              <div className='button'>
                <button className='btn'>Añadir al carrito</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

Cartas.propTypes = {
  id_categorias: PropTypes.number.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default Cartas;
