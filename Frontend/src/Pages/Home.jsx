  import React, { useEffect } from 'react'
  import { Navbar} from "../Components/Navbar/Navbar";
  import { Footer } from "../Components/Footer/Footer";
  import { Cartas } from '../Components/Cartas/Cartas';
  import {Banner} from '../Components/Banner/Banner';
  import {Filtro} from '../Components/Filtro/Filtro'
  import useFetchGetUser from '../../hooks/useFetchGetUser';

  export const Home = () => {
  const {dataUsers}= useFetchGetUser()
    return (
    <>
  {dataUsers.map((usuario)=> {
    return(<h1>{usuario.correo}</h1>)
  })}
      <Navbar/>
      <Banner/>
      <Filtro/>
      <Cartas/>
      <Footer/>
    </>
    )
  }
