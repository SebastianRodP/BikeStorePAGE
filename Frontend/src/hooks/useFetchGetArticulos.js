import { useState, useEffect } from "react";

const useFetchGetArticulos = (id_categorias) => {
  const [dataArticulos, setDataArticulos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("ID de categorías:", id_categorias); // Verificar el valor de id_categorias
    const fetchData = async () => {
      try {
        if (id_categorias !== undefined && !isNaN(id_categorias)) { // Verificar el valor de id_categorias antes de la solicitud
          const response = await fetch(`http://localhost:3000/articulos/categorias/${id_categorias}`);
          const data = await response.json();
          console.log("Datos recibidos:", data); // Agregar este console.log
          setDataArticulos(data);
        } else {
          const response = await fetch('http://localhost:3000/articulos');
          const data = await response.json();
          console.log("Datos recibidos:", data); // Agregar este console.log
          setDataArticulos(data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id_categorias]);

  return { dataArticulos, loading };
};

export default useFetchGetArticulos;
