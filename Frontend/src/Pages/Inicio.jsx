import {useState, useEffect} from 'react';
import { Navbar} from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer/Footer";
import "../Components/Inicio/Inicio.css"
import { useFetchGetArticulos } from '../../hooks/UseFetchGetArticulos';
import { articulos } from '../../../Backend/controller';

function Iniciop() {
    const {data, loading, error}= useFetchGetArticulos("http://localhost:3000/articulos") 
        return(
            <div className='box-catalogo'>
                <div className='box-bicicletas'>
                {error && <li>Error: {error}</li>}
                {loading && <li>Loading...</li>}
                {data?.map((articulos) =>
                    (<li key={articulos.idArticulos}>
                        {articulos.name}
                        </li>))}
                </div>
                <div className='box-repuestos'>
                
                </div>
                <div className='box-accesorios'>
                
                </div>
                <div className='box-vestuarios'>
                
                </div>
            </div>
            
            
        )
    
}
