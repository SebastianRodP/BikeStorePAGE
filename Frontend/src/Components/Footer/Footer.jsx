import React from 'react';
import "./Footer.css";

import BicicletaNegraFooter from '../../assets/img/imgFooter/BicicletaNegraFooter.png'
export const Footer = () =>{
  return(
    <footer className="pie-pagina"> 
        <div className="grupo-1">
            <div className="box">
                <div className="logo-footer"> 
                <a href="" className="logo-footer nav-link">Bike<span className="blue">Store</span></a>    
                  <a href="#">
                      <img src={BicicletaNegraFooter} alt="Logo de BikeStore"></img>
                  </a>
                </div>
            </div>

            <div className="box">
                <p>Popayán:calle 16 #9N-44<br/>
                  B/Antnio Nariño <br/>
                  +57 317 2373826
                </p>
                <p>Armenia:Cr 19 # 36N-38<br/>
                  Local 3 <br/>
                  +57 305 4159497</p>
            </div>
            <div className="box">
                <p>Pereira:Carrera 12 # 2-08<br/>
                    B/ popular modelo<br/>
                   +57 310 8499122</p>
                <p>Medellin:Mall Indiana <br/>
                  Local 123 <br/>
                  +57 304 5692836</p>
            </div>
        </div>

    </footer>
  )
}
export default Footer