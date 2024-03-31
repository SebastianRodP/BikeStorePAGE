  import React, { useState, useEffect } from 'react'
  const useFetchGetUser = () => {
      const [ dataUsers, setDataUsers] = useState([]);
      useEffect(() => {
        const fetchdata = async() =>{
          const respuesta = await fetch( 
              'http://localhost:3000/usuarios', {
                  method: "GET",
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  redirect: "follow",
              }
          )
          const resultados= await respuesta.json()
          console.log(resultados) 
          setDataUsers(resultados)
        }
        fetchdata()
      }, [])
    return ({
      dataUsers,
    })
  }

  export default useFetchGetUser
