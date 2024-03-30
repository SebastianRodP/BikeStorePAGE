import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import "./inisesion.css"; 
import logo from "../../assets/img/imgInicioRegistro/logo.png";

const supabaseUrl = 'https://hetfaqksgxjlcxatxcvl.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhldGZhcWtzZ3hqbGN4YXR4Y3ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExNjI0OTcsImV4cCI6MjAyNjczODQ5N30.jg0cFimQOh3erlrtL9AILrtyQIrRJLnFs-594uJXiiY';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

function MyLoginPage() {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [errores, setErrores] = useState({}); 

    const validarFormulario = () => {
        let erroresTemp = {};
        let esFormularioValido = true;

        // Valida el correo electronico
        if (!correo) {
            erroresTemp.correo = "El campo correo es obligatorio.";
            esFormularioValido = false;
        } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(correo)) {
            erroresTemp.correo = "El correo electrónico no es válido.";
            esFormularioValido = false;
        }

        // Valida las contraseñas
        if (!password) {
            erroresTemp.password = "El campo contraseña es obligatorio.";
            esFormularioValido = false;
        }

        setErrores(erroresTemp);
        return esFormularioValido;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validarFormulario()) {
            return;
        }

        //consultar la base de datos para verificar si el correo existe
        const { data: usuarios, error } = await supabase
            .from('usuarios')
            .select('*')
            .eq('correo', correo);

        if (error) {
            console.error('Error al buscar usuario:', error.message);
            alert('Hubo un error al iniciar sesión. Por favor, inténtalo de nuevo.');
            return;
        }

        if (usuarios.length === 0) {
            alert('No existe ningún usuario con este correo electrónico.');
            return;
        }

        // verifica la contraseña
        const usuario = usuarios[0];
        if (usuario.contraseña !== password) {
            alert('La contraseña es incorrecta.');
            return;
        }

        // mostrar mensaje de inicio de sesión exitoso si se hace bien
        alert('¡Se ha iniciado sesión correctamente!');
    };

    return (
        <div className='todo'>
            <img className='logo' src={logo} alt="logo "></img>
            
            <div className='formulario'>
                <h1 className='tit'>Iniciar sesión</h1>
                <div className='correo'>
                    <div>Correo electrónico</div>
                    <input className='inpus' type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                    {errores.correo && <p className="error">{errores.correo}</p>}
                </div>
                <div className='contraseña'>
                    <div className='contras'>
                        <div>Contraseña</div>
                        <a className='n' href=''>Recuperar contraseña</a>
                    </div>
                    <input className='inpus' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {errores.password && <p className="error">{errores.password}</p>}
                </div>
                <div className='reccontra'>
                    <input type="checkbox" />
                    <div> Recordar contraseña</div>
                </div>
                <div className='btnc'>
                    <button className='boton' onClick={handleSubmit}> Iniciar sesión </button>
                </div>
                <div className='crearc'>
                    <div>¿No tienes una cuenta?</div>
                    <div><a className='n' href="../registro_user/register.jsx">Crear cuenta</a></div>
                </div>
            </div>
        </div>
    );
}

export default MyLoginPage;
