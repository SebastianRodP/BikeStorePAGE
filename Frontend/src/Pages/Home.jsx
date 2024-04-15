import React, { useState } from 'react';
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Cartas from '../Components/Cartas/Cartas'
import Marcas from '../Components/Marcas/Marcas'
import "../Components/Home/HomeStyle.css"

const Home = () => {
  const [filteredArticulos, setFilteredArticulos] = useState(null);

  // Función de búsqueda
  const handleSearch = (searchTerm) => {
    // Filtrar los artículos en función del término de búsqueda
    const filtered = articulos.filter((articulo) => {
      // Aquí puedes ajustar la lógica de filtrado según tus necesidades
      // Por ejemplo, podrías buscar en el nombre del artículo
      return articulo.nombre.toLowerCase().includes(searchTerm.toLowerCase());
    });
    // Actualizar el estado con los artículos filtrados
    setFilteredArticulos(filtered);
  };

  return (
    <>
      <Navbar search={handleSearch} />
      {/* Aquí muestras los artículos filtrados si existen, de lo contrario, muestras todos los artículos */}
      {filteredArticulos ? (
        <>
          <h1>Resultados de la búsqueda:</h1>
          <Cartas articulos={filteredArticulos} />
        </>
      ) : (
        <div className='contenedor-info'>
          <div className='contenedor-marcas'>
            <h1 className='titulos line'>NUESTRAS MARCAS</h1>
            <Marcas />
          </div>
          
          <div className='contenedor-articulos'>
            <h1 className='titulos'>ACCESORIOS</h1>
            <Cartas id_categorias={1} />
            <h1 className='titulos'>REPUESTOS</h1>
            <Cartas id_categorias={2} />
            <h1 className='titulos'>VESTUARIOS</h1>
            <Cartas id_categorias={3} />
            <h1 className='titulos'>BICICLETAS</h1>
            <Cartas id_categorias={4} />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Home;
