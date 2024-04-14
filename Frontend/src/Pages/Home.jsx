import React from 'react'
import Navbar from "../Components/Navbar/Navbar";
import  Footer  from "../Components/Footer/Footer";
import Cartas from '../Components/Cartas/Cartas'
import Contactanos from '../Components/Contactanos/Contactanos';

const Home = () => {

  return (
  <>
    <Navbar/>
    <h1>ACCESORIOS</h1>
    <Cartas id_categorias={1}/>
    <h1>REPUESTOS</h1>
    <Cartas id_categorias={2}/>
    <h1>VESTUARIOS</h1>
    <Cartas id_categorias={3}/>
    <h1>BICICLETAS</h1>
    <Cartas id_categorias={4}/>
    <h1>HOLA SOY EL HOME</h1>
    <Footer/>
    
  </>
  )
}


export default Home;