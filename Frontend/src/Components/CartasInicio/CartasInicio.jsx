import React, { useState } from "react";
import "./CartasInicio";
import catalogo from "../../assets/img/catalogo.png";
import useFetchGetArticulos from "../../hooks/useFetchGetArticulos";

export const Cartas = () => {
const { dataArticulos } = useFetchGetArticulos();
const [currentPage, setCurrentPage] = useState(1);
const [articulosPerPage] = useState(12); // Número de artículos por página

// Calcular los índices de los artículos a mostrar en la página actual
const indexOfLastArticulo = currentPage * articulosPerPage;
const indexOfFirstArticulo = indexOfLastArticulo - articulosPerPage;
const currentArticulos = dataArticulos.slice(0,4);


return (
    <>
    <div className="container-anuncio">
    <h3>Nuestros productos</h3>
    </div>
    <div className="titulos">
    <h1 className="titulito">BICICLETAS</h1>
    </div>
    <main className="content">
        {currentArticulos.map((articulo, categorias) => {
        return (
            <div className="caja-bicicletas" key={articulo.idCategoria ==1}>
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
    </main>
    
    </>
);
};

export default Cartas;
