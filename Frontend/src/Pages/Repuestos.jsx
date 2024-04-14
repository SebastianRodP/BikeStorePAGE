import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Banner from '../Components/Banner/Banner'
import Filtro from '../Components/Filtro/Filtro'
import CartasNavegacion from '../Components/CartasNavegacion/CartasNavegacion'
import 'boxicons';

const Repuestos = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Filtro/>
    <CartasNavegacion id_categorias={2}/>
    <Footer/>
    </>
  )
}

export default Repuestos