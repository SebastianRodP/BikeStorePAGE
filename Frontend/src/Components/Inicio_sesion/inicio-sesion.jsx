import React from 'react';
import "./inisesion.css"; 
import logo from "../../assets/img/imgInicioRegistro/logo.png";

function MyLoginPage() {
    return (
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta name="author" content="Kodinger" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <title>Inicio de sesión</title>

            </head>
            <div className='todo'>
                <body className="inicio de sesion">
                    <img className='logo' src={logo} alt="logo "></img>
                    
                    <div className='formulario'>
                    <h1 className='tit'>Iniciar sesion</h1>
                        <div className='correo'>
                            <div>Correo electronico</div>
                            <input className='inpus' type="text" />
                        </div>
                        <div className='contraseña'>
                            <div className='contras'>
                                <div>Contraseña</div>
                                <a className='n' href=''>Recuperar contraseña</a>
                            </div>
                            <input className='inpus' type="password" />
                        </div>
                        <div className='reccontra'>
                            <input type="checkbox" />
                            <div> Recordar contraseña</div>
                        </div>
                        <div className='btnc'>
                            <button className='boton'> Iniciar sesion </button>
                        </div>
                        <div className='crearc'>
                            <div>¿No tienes una cuenta?</div>
                            <div > <a className='n' href="../registro_user/register.jsx">Crear cuenta </a></div>
                        </div>
                    </div>

                </body>
            </div>
        </html>
    );
}

export default MyLoginPage;
