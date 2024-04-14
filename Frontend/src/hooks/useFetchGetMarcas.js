import React, { useState, useEffect } from 'react'
const useFetchGetMarcas = () => {
    const [ dataMarca, setDataMarca] = useState([]);
    useEffect(() => {
       const fetchdata = async() =>{
        const respuesta = await fetch( 
            'http://localhost:3000/marcas', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
                redirect: "follow",
            }
        )
        const resultados= await respuesta.json()
        console.log(resultados) 
        setDataMarca(resultados)
       }
       fetchdata()
    }, [])
  return ({
    dataMarca,
  })
}

export default useFetchGetMarcas
