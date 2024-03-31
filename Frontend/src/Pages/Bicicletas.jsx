import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Banner from '../Components/Banner/Banner'
import Filtro from '../Components/Filtro/Filtro'
import Cartas from '../Components/Cartas/Cartas'

const Bicicletas = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Filtro/>
    <Cartas/>
    <Footer/>
    </>
  )
}

export default Bicicletas