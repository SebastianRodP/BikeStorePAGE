import React, { useState, useEffect } from 'react'; // Importa useState y useEffect desde React
import logo from "../../assets/img/imgInicioRegistro/logon.png"; // Importa la imagen del logo
import { Link } from "react-router-dom"; // Importa Link de react-router-dom para la navegación
import "../Registro_prod/register_product"; // Importa el componente register_product (no se utiliza en este código)
import { createClient } from '@supabase/supabase-js'; // Importa createClient de supabase-js para interactuar con Supabase

function MyLoginPage() {
    // Estados para almacenar los diferentes campos del formulario y mensajes de error
    const [nombre, setNombre] = useState('');
    const [tipop, setTipop] = useState('');
    const [categoria, setCat] = useState('');
    const [marca, setMarca] = useState('');
    const [costo, setCosto] = useState('');
    const [margen, setMargen] = useState('');
    const [descuento, setDesc] = useState('');
    const [impuesto, setImpuesto] = useState('');
    const [stock, setStock] = useState('');
    const [descripcion, setDescrip] = useState('');
    const [imagen, setImagen] = useState('');
    const [color, setColor] = useState('')
    const [codigo, setCodigo] = useState('');
    const [errores, setErrores] = useState({});
    const [mostrarPanel, setMostrarPanel] = useState(false);
    const [mensajePanel, setMensajePanel] = useState('');

    // Función para mostrar un mensaje en un panel emergente
    const mostrarMensaje = (mensaje) => {
        setMensajePanel(mensaje);
        setMostrarPanel(true);
    };

    // Cliente de Supabase para interactuar con la base de datos
    const supabase = createClient('https://hetfaqksgxjlcxatxcvl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhldGZhcWtzZ3hqbGN4YXR4Y3ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExNjI0OTcsImV4cCI6MjAyNjczODQ5N30.jg0cFimQOh3erlrtL9AILrtyQIrRJLnFs-594uJXiiY');

    // Función para validar los campos del formulario
    const validarFormulario = () => {
        let erroresTemp = {};
        let esFormularioValido = true;

        // Validación de campos requeridos y almacenamiento de errores
        if (!nombre.trim()) {
            erroresTemp.nombre = "El campo nombre es obligatorio.";
            esFormularioValido = false;
        }
        if (!tipop.trim()) {
            erroresTemp.tipop = "El tipo de producto es obligatorio.";
            esFormularioValido = false;
        }
        if (!costo.trim()) {
            erroresTemp.costo = "El campo costo es obligatorio.";
            esFormularioValido = false;
        }
        if (!margen.trim()) {
            erroresTemp.margen = "El campo margen es obligatorio.";
            esFormularioValido = false;
        }
        if (!descuento.trim()) {
            erroresTemp.descuento = "El campo descuento es obligatorio.";
            esFormularioValido = false;
        }
        if (!impuesto.trim()) {
            erroresTemp.impuesto = "El campo impuesto es obligatorio.";
            esFormularioValido = false;
        }
        if (!stock.trim()) {
            erroresTemp.stock = "El campo stock es obligatorio.";
            esFormularioValido = false;
        }
        if (!descripcion.trim()) {
            erroresTemp.descripcion = "El campo descripcion es obligatorio.";
            esFormularioValido = false;
        }
        if (!imagen.trim()) {
            erroresTemp.imagen = "El campo imagen es obligatorio.";
            esFormularioValido = false;
        }
        if (!color.trim()) {
            erroresTemp.color = "El campo color es obligatorio.";
            esFormularioValido = false;
        }

        setErrores(erroresTemp);
        return esFormularioValido;
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        const esFormularioValido = validarFormulario();

        if (esFormularioValido) {
            try {
                // Obtiene valores de campos relacionados del DOM
                const idcategorias = document.getElementById('categorias').value;
                const idmarca = document.getElementById('marcas').value;

                // Actualiza los datos del producto en la base de datos
                const { data, error } = await supabase
                    .from('articulos')
                    .update({
                        id_categorias: parseInt(idcategorias),
                        idmarca: parseInt(idmarca),
                        tipo: tipop,
                        nombre,
                        costo: parseFloat(costo),
                        margen: parseFloat(margen),
                        impuesto: parseFloat(impuesto),
                        descuento: parseFloat(descuento),
                        stock: parseInt(stock),
                        descripcion,
                        img: imagen,
                        color
                    })
                    .eq('id_articulos', parseInt(codigo));

                if (error) {
                    console.error('Error al actualizar los datos:', error.message);
                } else {
                    console.log('Datos actualizados correctamente:', data);
                    mostrarMensaje('Producto actualizado correctamente.');
                }
            } catch (error) {
                console.error('Error al actualizar los datos:', error.message);
            }
        } else {
            console.log('El formulario contiene errores. Por favor, corríjalos.');
        }
    };

    // Función para manejar cambios en los campos del formulario
    const handleInputChange = (e) => {
        const { id, value } = e.target;

        switch (id) {
            case 'nombre':
                setNombre(value);
                break;
            case 'tipop':
                setTipop(value.toLowerCase());
                break;
            case 'costo':
                setCosto(value.replace(/[^0-9.]/g, ''));
                break;
            case 'margen':
                setMargen(value.replace(/[^0-9.]/g, ''));
                break;
            case 'descuento':
                setDesc(value.replace(/[^0-9.]/g, ''));
                break;
            case 'impuesto':
                setImpuesto(value.replace(/[^0-9.]/g, ''));
                break;
            case 'stock':
                setStock(value.replace(/[^0-9]/g, ''));
                break;
            case 'descripcion':
                setDescrip(value);
                break;
            case 'imagen':
                setImagen(value);
                break;
            case 'color':
                setColor(value);
                break;
            case 'codigo':
                setCodigo(value);
                break;
            default:
                break;
        }
    };

    // Renderiza el componente con el formulario y elementos relacionados
    return (
        <div className='form'>
            <div className='todoa'>
                {/* Imagen del logo */}
                <img className='logox' src={logo} alt="Logo" />
                {/* Panel emergente para mostrar mensajes */}
                {mostrarPanel && (
                    <div className="panel-emergente">
                        <p>{mensajePanel}</p>
                        <Link className='inic2' to="/dashboard">Continuar</Link>
                    </div>
                )}

                {/* Título del formulario */}
                <h1 className='tit'>Modificar Producto </h1>
                <div className='necesario'>
                    <div className='text'> Por favor introduzca el codigo del articulo que desea modificar</div>
                    <div className='codigo'>
                        <div>Código del producto</div>
                        <input
                            id='codigo'
                            className='inpus'
                            type="text"
                            value={codigo}
                            onChange={handleInputChange}
                            placeholder='Codigo del producto que se desea modificar'
                        />
                    </div>
                </div>
              
                <div className='loprim'>
                    <div className='nombre'>
                        <div>Nombre del producto</div>
                        <input 
                            id='nombre' 
                            className='inpus' 
                            type="text" 
                            value={nombre} 
                            onChange={handleInputChange} 
                        />
                        {/* Muestra mensaje de error si existe */}
                        {errores.nombre && <p className="error">{errores.nombre}</p>}
                    </div>
                    <div className='descripcion'>
                        <div>Descripcion</div>
                        <input
                            id='descripcion'
                            className='inpus'
                            type="text"
                            value={descripcion}
                            onChange={handleInputChange}
                        />
                        {/* Muestra mensaje de error si existe */}
                        {errores.descripcion && <p className="error">{errores.descripcion}</p>}
                    </div>
                    <div className='costo'>
                        <div>Costo unitario</div>
                        <input
                            id='costo'
                            className='inpus'
                            type="text"
                            value={costo}
                            onChange={handleInputChange}
                        />
                        {/* Muestra mensaje de error si existe */}
                        {errores.costo && <p className="error">{errores.costo}</p>}
                    </div>
                    <div className='tipop'>
                        <div>Tipo de producto</div>
                        <input
                            id='tipop'
                            className='inpus'
                            type="text"
                            value={tipop}
                            onChange={handleInputChange}
                        />
                        {/* Muestra mensaje de error si existe */}
                        {errores.tipop && <p className="error">{errores.tipop}</p>}
                    </div>
                </div>

                <div className='desplegables'>
                    <div className='cat'>
                        <label htmlFor="categorias">Categorias</label>
                        <select 
                            className="categorias"
                            id="categorias"
                            value={categoria} 
                            onChange={(e) => setCat(e.target.value)}>
                            <option value="">Seleccione una categoría</option>
                            <option value="1">Accesorios</option>
                            <option value="2">Repuestos</option>
                            <option value="3">Vestuarios</option>
                            <option value="4">Bicicletas</option>
                        </select>
                        {/* Muestra mensaje de error si existe */}
                        {errores.categoria && <p className="error">{errores.categoria}</p>}
                    </div>
                    <div className='marc'>
                        <label htmlFor="marcas">Marcas</label>
                        <select 
                            className="marcas"
                            id="marcas"
                            value={marca} 
                            onChange={(e) => setMarca(e.target.value)}>
                            <option value="">Seleccione una marca</option>
                            <option value="1">Fox</option>
                            <option value="2">Gw</option>
                            <option value="3">Specialized</option>
                            <option value="4">Venzo</option>
                        </select>
                        {/* Muestra mensaje de error si existe */}
                        {errores.marca && <p className="error">{errores.marca}</p>}
                    </div>
                </div>

                <div className='porcentajes'>
                    <div className='margen'>
                        <div>Margen</div>
                        <input
                            id='margen'
                            className='inpus'
                            type="text"
                            value={margen}
                            onChange={handleInputChange}
                        />
                        {/* Muestra mensaje de error si existe */}
                        {errores.margen && <p className="error">{errores.margen}</p>}
                    </div>
                    <div className='descuento'>
                        <div>Descuento</div>
                        <input
                            id='descuento'
                            className='inpus'
                            type="text"
                            value={descuento}
                            onChange={handleInputChange}
                        />
                        {/* Muestra mensaje de error si existe */}
                        {errores.descuento && <p className="error">{errores.descuento}</p>}
                    </div>
                    <div className='impuesto'>
                        <div>Impuesto</div>
                        <input
                            id='impuesto'
                            className='inpus'
                            type="text"
                            value={impuesto}
                            onChange={handleInputChange}
                        />
                        {/* Muestra mensaje de error si existe */}
                        {errores.impuesto && <p className="error">{errores.impuesto}</p>}
                    </div>
                </div>

                <div className='ultm'>
                    <div className='stock'>
                        <div>Stock</div>
                        <input
                            id='stock'
                            className='inpus'
                            type="text"
                            value={stock}
                            onChange={handleInputChange}
                        />
                        {/* Muestra mensaje de error si existe */}
                        {errores.stock && <p className="error">{errores.stock}</p>}
                    </div>
                    <div className='image'>
                        <div>Imagen</div>
                        <input
                            id='imagen'
                            className='inpus'
                            type="text"
                            value={imagen}
                            onChange={handleInputChange}
                            placeholder='URL de la imagen'
                        />
                        {/* Muestra mensaje de error si existe */}
                        {errores.imagen && <p className="error">{errores.imagen}</p>}
                    </div>
                    <div className='color'>
                        <div>Color</div>
                        <input
                            id='color'
                            className='inpus'
                            type="text"
                            value={color}
                            onChange={handleInputChange}
                        />
                        {/* Muestra mensaje de error si existe */}
                        {errores.color && <p className="error">{errores.color}</p>}
                    </div>
                    
                </div>
                
                {/* Botones para volver y modificar */}
                <div className='botons'>
                    <Link className='btnv' to="/dashboard">Volver</Link>
                    <Link className='btnc' onClick={handleSubmit}>Modificar</Link>
                </div>
            </div>
        </div>
    );
}

export default MyLoginPage;
