import React from 'react'
import { Navbar} from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer/Footer";
import { Cartas } from '../Components/Cartas/Cartas';

export const Home = () => {
  return (
  <>
    <Navbar/>
    <Cartas/>
    <Footer/>

  </>
  )
}
