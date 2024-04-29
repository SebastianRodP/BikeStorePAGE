import React, { useState, useEffect } from 'react';

const useFetchGetDetalles = (id) => {
    const [data, setData] = useState([]);

    console.log('====================================IOIIIIIIIIIIIIIIIIIIIIIIID');
    console.log(id);
    console.log('====================================');

    useEffect(() => {
        const fetchData = async () => {
        try {
            if (id) { // Verificar si id está definido antes de hacer la solicitud

            const response = await fetch(`http://localhost:3000/articulos/detalles/${id}`, {
                method: "GET",
                headers: {
                'Content-Type': 'application/json',
                },
                redirect: "follow",
            });

            const resultados = await response.json();
            console.log(resultados)
            setData(resultados);
            }
        } catch (error) {
            console.error('Error al obtener los detalles:', error);
        }
        };

        fetchData();
    }, [id]);

    return data
};

export default useFetchGetDetalles;
