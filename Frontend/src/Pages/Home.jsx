import React, { useEffect } from 'react'
import { Navbar} from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer/Footer";
import { Cartas } from '../Components/Cartas/Cartas';
import {Banner} from '../Components/Banner/Banner';
import {Filtro} from '../Components/Filtro/Filtro'



export const Home = () => {

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
