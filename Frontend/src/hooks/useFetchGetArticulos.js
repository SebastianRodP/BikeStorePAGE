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
    const fetchdataCategorias = async() =>{
      const respuesta = await fetch(
          'http://localhost:3000/categorias',{
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
    fetchdataCategorias()
  }, []);

  return ({
    dataArticulos,
    dataCategorias,
  })
}

export default useFetchData