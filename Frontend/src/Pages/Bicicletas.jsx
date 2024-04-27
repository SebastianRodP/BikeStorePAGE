import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Banner from '../Components/Banner/Banner'
import Filtro from '../Components/Filtro/Filtro'
import CartasNavegacion from '../Components/CartasNavegacion/CartasNavegacion'
import "../Pages/style.css"
import 'boxicons';
import useFetchGetArticulos from '../hooks/useFetchGetArticulos'


const Bicicletas = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const handleCategoriaSeleccionada = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  const { dataArticulos, loading } = useFetchGetArticulos(categoriaSeleccionada)
  return (
    <>
    <Navbar/>
    <Banner/>
    <Filtro onCategoriaSeleccionada={handleCategoriaSeleccionada}/>
    <CartasNavegacion id_categorias = {4}/>
    <Footer/>
    </>
  )
}

export default Bicicletas