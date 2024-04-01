import React, { useEffect, useState } from "react";
import "./CartasInicio";
import catalogo from "../../assets/img/catalogo.png";
import useFetchGetArticulos from "../../hooks/useFetchGetArticulos";

export const Cartas = () => {
const [currentPage, setCurrentPage] = useState(1);
const [articulosPerPage] = useState(12); // Número de artículos por página
const [dataCategorias, setDataCategorias] = useState([]);

// Calcular los índices de los artículos a mostrar en la página actual
/*
const indexOfLastArticulo = currentPage * articulosPerPage;
const indexOfFirstArticulo = indexOfLastArticulo - articulosPerPage;
const currentArticulos = dataArticulos.slice(0,4);*/


useEffect(()=>{
    const fetchDataCategorias = async (id) =>{
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
    fetchDataCategorias(1);
},[])
  return (
    
    <>
    {/* <Cartas if (articulos.id==3){}/> */}
    <div className="container-anuncio">
    <h3>Nuestros productos</h3>
    </div>
    <div className="titulos">
    <h1 className="titulito">BICICLETAS</h1>
    </div>
    <main className="content">
        
    {/*
    
    </main>
    <div className="titulos">
    <h1 className="">ACCESORIOS</h1>
    </div>
    <main className="content">
        {currentArticulos.map((articulo) => {
        return (
            
            <div className="caja-bicicletas" key={articulo.idCategoria==3}>
            <img src={articulo.img} alt="" />
            <p id="descuento">
                {articulo.descuento}
                <span>%</span>
            </p>
            <p id="precio">
                <span>$</span> {articulo.costo}
            </p>
            <div className="detalle-bicicletas">
                <h2 className="nombre-bici">{articulo.nombre}</h2>
                <p>
                {articulo.stock}<span>Unidades disponibles</span>
                </p>
                <p>{articulo.color}</p>
                <i className="fa-solid fa-house"></i>
            </div>
            </div>
        );
        })}
        
    </main>
    <div className="titulos">
    <h1 className="">REPUESTOS</h1>
    </div>
    <main className="content">
        {currentArticulos.map((articulo) => {
        return (
            <div className="caja-bicicletas" key={articulo.idCategoria ==2}>
            <img src={articulo.img} alt="" />
            <p id="descuento">
                {articulo.descuento}
                <span>%</span>
            </p>
            <p id="precio">
                <span>$</span> {articulo.costo}
            </p>
            <div className="detalle-bicicletas">
                <h2 className="nombre-bici">{articulo.nombre}</h2>
                <p>
                {articulo.stock}<span>Unidades disponibles</span>
                </p>
                <p>{articulo.color}</p>
                <i className="fa-solid fa-house"></i>
            </div>
            </div>
        );
        })}
        
    </main>
    <div className="titulos">
    <h1 className="">VESTUARIOS</h1>
    </div>
    <main className="content">
        {currentArticulos.map((articulo) => {
        return (
            <div className="caja-bicicletas" key={articulo.idCategoria ==4}>
            <img src={articulo.img} alt="" />
            <p id="descuento">
                {articulo.descuento}
                <span>%</span>
            </p>
            <p id="precio">
                <span>$</span> {articulo.costo}
            </p>
            <div className="detalle-bicicletas">
                <h2 className="nombre-bici">{articulo.nombre}</h2>
                <p>
                {articulo.stock}<span>Unidades disponibles</span>
                </p>
                <p>{articulo.color}</p>
                <i className="fa-solid fa-house"></i>
            </div>
            </div>
        );
        })}
    */}
    
    </main>
    
    </>
);
};

export default Cartas;
