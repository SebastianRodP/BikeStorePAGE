import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Banner from '../Components/Banner/Banner'
import Filtro from '../Components/Filtro/Filtro'
import Cartas from '../Components/Cartas/Cartas'
import 'boxicons';

const Vestuarios = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Filtro/>
    <Cartas id_categorias={3}/>
    <Footer/>
    </>
  )
}

export default Vestuarios