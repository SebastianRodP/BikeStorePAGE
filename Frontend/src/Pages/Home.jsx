// Home.jsx

import React, { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Cartas from '../Components/Cartas/Cartas';
import Marcas from '../Components/Marcas/Marcas';
import { Carrito } from '../Components/Carrito/Carrito';
import '../Components/Home/HomeStyle.css';
import '../Pages/style.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Carrito />
      <Navbar onSearch={handleSearch} />
      <div className='contenedor-info'>
        <div className='contenedor-marcas'>
          <h1 className='titulos line'>NUESTRAS MARCAS</h1>
          <Marcas />
        </div>
        <div className='contenedor-articulos'>
          <h1 className='titulos'>ACCESORIOS</h1>
          <Cartas id_categorias={1} searchTerm={searchTerm} />
          <h1 className='titulos'>REPUESTOS</h1>
          <Cartas id_categorias={2} searchTerm={searchTerm} />
          <h1 className='titulos'>VESTUARIOS</h1>
          <Cartas id_categorias={3} searchTerm={searchTerm} />
          <h1 className='titulos'>BICICLETAS</h1>
          <Cartas id_categorias={4} searchTerm={searchTerm} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
