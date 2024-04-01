import React, { useState, useEffect } from 'react'

const useFetchData = () => {
  const [dataArticulos, setDataArticulos] = useState([]);
  const [dataCategorias, setDataCategorias] = useState([]);

  useEffect(() => {
    const fetchdataArticulos = async() =>{
      const respuesta = await fetch(
          'http://localhost:3000/articulos',{
              method: "GET",
              headers: {
                  'Content-Type': 'application/json',
              },  
              redirect: "follow",
          }
      )
      const resultados= await respuesta.json()
      console.log(resultados) 
      setDataArticulos(resultados)
    }
    fetchdataArticulos()
  }, []);

  useEffect(() => {
    // const fetchCategorias= ()=>{
    //   const c1 = ('http://localhost:3000/articulos/:idCategoria')
    //   const c2 = ('http://localhost:3000/articulos/2')
    //   const c3 = ('http://localhost:3000/articulos/3')
    //   const c4 = ('http://localhost:3000/articulos/4')
    // }
    const fetchDataCategorias = async(id) =>{
      const respuesta = await fetch(
          `http://localhost:3000/articulos/${id}`,{
              method: "GET",
              headers: {
                  'Content-Type': 'application/json',
              },  
              redirect: "follow",
          }
      )
      const resultados= await respuesta.json()
      console.log(resultados) 
      setDataCategorias(resultados)
    }
    fetchDataCategorias()
  }, []);

  return ({
    dataArticulos,
    dataCategorias,
  })
}

export default {useFetchData }