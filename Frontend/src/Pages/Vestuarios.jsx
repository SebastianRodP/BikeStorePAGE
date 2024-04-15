import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Banner from '../Components/Banner/Banner'
import Filtro from '../Components/Filtro/Filtro'
import CartasNavegacion from '../Components/CartasNavegacion/CartasNavegacion'
import 'boxicons';
import "../Pages/style.css"
import"../Components/Banner/BannerVes.css"

const Vestuarios = () => {
  return (
    <>
    <Navbar/>
    <div className='centrar'>
    <div className="banner-vest">
      <div className="banner_contenido">
        <p>Vestuarios</p>
      </div>
    </div>
  </div>
    <Filtro/>
    <CartasNavegacion id_categorias={3}/>
    <Footer/>
    </>
  )
}

export default Vestuarios