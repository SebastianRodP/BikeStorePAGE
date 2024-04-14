import React from 'react'
import Navbar from "../Components/Navbar/Navbar";
import  Footer  from "../Components/Footer/Footer";
import { Carrito } from '../Components/Carrito/Carrito';

const Home = () => {

  return (
  <>
    <Navbar/>
    <Carrito/>
    <h1>HOLA SOY EL HOME</h1>
    <Footer/>
    
  </>
  )
}


export default Home;