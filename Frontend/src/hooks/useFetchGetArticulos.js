import React, { useState, useEffect } from 'react'
const useFetchGetArticulos = () => {
  const [dataArticulos, setDataArticulos] = useState([]);

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

  return ({
    dataArticulos,
  })
}

export default useFetchGetArticulos;