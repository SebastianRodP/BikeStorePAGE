import { useState, useEffect } from "react";

const useFetchGetArticulos = (id_categorias, searchTerm) => {
  const [dataArticulos, setDataArticulos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `http://localhost:3000/articulos`;
        if (id_categorias !== undefined && !isNaN(id_categorias)) {
          url = `http://localhost:3000/articulos/categorias/${id_categorias}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        // Filtrar los artículos según el término de búsqueda
        const filteredArticulos = searchTerm
          ? data.filter((articulo) =>
              articulo.nombre.toLowerCase().includes(searchTerm.toLowerCase())
            )
          : data;
        setDataArticulos(filteredArticulos);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id_categorias, searchTerm]); // Incluir searchTerm como dependencia

  return { dataArticulos, loading };
};

export default useFetchGetArticulos;
