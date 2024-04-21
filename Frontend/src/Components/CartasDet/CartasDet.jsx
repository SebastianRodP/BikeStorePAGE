import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import useFetchGetArticulos from "../../hooks/useFetchGetArticulos";

const CartasDet = () => {
  const { id } = useParams();
  const { dataArticulos, loading, error } = useFetchGetArticulos();

  console.log("ID de la URL:", id);
  console.log("Datos de los artículos:", dataArticulos);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error al cargar los datos</div>;
  }

  // Buscar el artículo correspondiente al ID en los datos recibidos
  const articulo = dataArticulos.find((articulo) => articulo.id === id);

  console.log("Artículo encontrado:", articulo);

  return (
    <>
      <Navbar />
      <h1>Detalles de la carta</h1>
      {articulo ? (
        <div>
          <h2>{articulo.nombre}</h2>
          {/* Agregar el resto de la información del artículo */}
        </div>
      ) : (
        <div>No se encontró el artículo</div>
      )}
      <Footer />
    </>
  );
};

export default CartasDet;
