import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Banner from '../Components/Banner/Banner'
import Filtro from '../Components/Filtro/Filtro'
import CartasNavegacion from '../Components/CartasNavegacion/CartasNavegacion'
import "../Pages/style.css"
import"../Components/Banner/BannerVes.css"
import 'boxicons';
const Accesorios = () => {
  return (
    <>
    <Navbar/>
    <div className='centrar'>
    <div className="banner-acces">
      <div className="banner_contenido">
        <p>Accesorios</p>
      </div>
    </div>
  </div>
    <Filtro/>
    <CartasNavegacion id_categorias={1}/>
    <Footer/>
    </>
  )
}

export default Accesorios