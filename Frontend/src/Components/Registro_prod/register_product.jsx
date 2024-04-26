// Importación de bibliotecas y recursos necesarios
import React, { useState } from 'react';
import logo from "../../assets/img/imgInicioRegistro/logon.png"; // Importa el logo de la aplicación
import { Link } from "react-router-dom"; // Importa el componente Link de react-router-dom
import "./formularios_admin.css"; // Importa los estilos CSS específicos para el formulario de administrador
import { createClient } from '@supabase/supabase-js'; // Importa la función createClient de supabase

// Definición del componente funcional MyLoginPage
function Resgistroarticulos() {
    // Definición de estados para los campos del formulario y mensajes de error
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
    const [color, setColor] = useState('');
    const [errores, setErrores] = useState({});
    const [mostrarPanel, setMostrarPanel] = useState(false);
    const [mensajePanel, setMensajePanel] = useState('');

    // Función para mostrar un mensaje en un panel emergente
    const mostrarMensaje = (mensaje) => {
        setMensajePanel(mensaje);
        setMostrarPanel(true);
    };

    // Función para generar un ID único para cada producto
    const generateUniqueId = () => {
        return Math.floor(Math.random() * 1000).toString();
    };

    // Conexión a la base de datos de Supabase
    const supabase = createClient('URL_DE_SUPABASE', 'TOKEN_DE_ACCESO');

    // Función para validar el formulario antes de enviarlo
    const validarFormulario = () => {
        let erroresTemp = {};
        let esFormularioValido = true;

        // Validación de los campos del formulario
        if (!nombre.trim()) {
            erroresTemp.nombre = "El campo nombre es obligatorio.";
            esFormularioValido = false;
        }
        // Resto de las validaciones de los campos del formulario...

        // Actualización del estado de los errores y retorno del resultado de la validación
        setErrores(erroresTemp);
        return esFormularioValido;
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación del formulario
        const esFormularioValido = validarFormulario();

        if (esFormularioValido) {
            try {
                // Generación de un ID único para el nuevo producto
                const nuevoId = generateUniqueId();
                // Obtención del ID de categoría y marca seleccionados desde los elementos del DOM
                const idcategorias = document.getElementById('categorias').value;
                const idmarca = document.getElementById('marcas').value;

                // Inserción de los datos del nuevo producto en la base de datos de Supabase
                const { data, error } = await supabase
                    .from('articulos')
                    .insert([{
                        id_articulos: nuevoId,
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
                    }]);

                // Manejo de errores en la inserción de datos
                if (error) {
                    console.error('Error al registrar los datos:', error.message);
                } else {
                    console.log('Datos registrados correctamente:', data);
                    // Muestra un mensaje de éxito
                    mostrarMensaje('Producto registrado correctamente.');

                    // Limpia los campos después de registrar el producto
                    setNombre('');
                    setTipop('');
                    setCat('');
                    setMarca('');
                    setCosto('');
                    setMargen('');
                    setDesc('');
                    setImpuesto('');
                    setStock('');
                    setDescrip('');
                    setImagen('');
                    setColor('');
                }
            } catch (error) {
                console.error('Error al registrar los datos:', error.message);
            }
        } else {
            console.log('El formulario contiene errores. Por favor, corríjalos.');
        }
    };

    // Función para manejar el cambio en los campos de entrada del formulario
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        let newValue = value;

        // Validación y actualización de los valores de los campos de entrada
        switch (id) {
            case 'costo':
            case 'descuento':
            case 'margen':
            case 'impuesto':
                newValue = value.replace(/[^0-9.]/g, ''); // Permitir solo números y punto decimal
                break;
            case 'stock':
                newValue = value.replace(/[^0-9]/g, ''); // Permitir solo números
                break;
            default:
                newValue = value; // No hay restricciones adicionales para otros campos
                break;
        }

        // Actualización del estado de los campos de entrada
        switch (id) {
            case 'costo':
                setCosto(newValue);
                break;
            case 'descuento':
                setDesc(newValue);
                break;
            case 'margen':
                setMargen(newValue);
                break;
            case 'impuesto':
                setImpuesto(newValue);
                break;
            case 'stock':
                setStock(newValue);
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
            default:
                break;
        }
    };

    // Retorno del JSX que representa el componente MyLoginPage
    return (
        <div className='todoa'>
            <div className='form'>
                <img className='logox' src={logo} alt="Logo" />

                {mostrarPanel && (
                    <div className="panel-emergente">
                        <p>{mensajePanel}</p>
                        <Link className='btn' to="/dashboard">Continuar</Link>
                    </div>
                )}

                <h1 className='tit'>Registrar Producto </h1>
                {/* Sección de campos del formulario */}
                <div className='loprim'>
                    {/* Campos para el nombre del producto, descripción y costo */}
                    <div className='nombrhe'>
                        <div>Nombre del producto</div>
                        <input id='nombre' className='inpus' type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
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
                        {errores.costo && <p className="error">{errores.costo}</p>}
                    </div>
                </div>
                {/* Sección de campos desplegables para tipo, categoría y marca */}
                <div className='desplegables'>
                    <div className='tipop'>
                        <div>Tipo de producto</div>
                        <input
                            id='tipop'
                            className='inpus'
                            type="text"
                            value={tipop}
                            onChange={(e) => setTipop(e.target.value.toLowerCase())}
                        />
                        {errores.tipop && <p className="error">{errores.tipop}</p>}
                    </div>
                    <div className='cat'>
                        <label htmlFor="categorias">Categorias</label>
                        <select className="categorias"
                            id="categorias"
                            value={categoria} onChange={(e) => setCat(e.target.value)}>
                            <option value="">Seleccione una categoría</option>
                            <option value="1">Accesorios</option>
                            <option value="2">Repuestos</option>
                            <option value="3">Vestuarios</option>
                            <option value="4">Bicicletas</option>
                        </select>
                        {errores.categoria && <p className="error">{errores.categoria}</p>}
                    </div>
                    <div className='marc'>
                        <label htmlFor="marcas">Marcas</label>
                        <select className="marcas"
                            id="marcas"
                            value={marca} onChange={(e) => setMarca(e.target.value)}>
                            <option value="">Seleccione una marca</option>
                            <option value="1">Fox</option>
                            <option value="2">Gw</option>
                            <option value="3">Specialized</option>
                            <option value="4">Venzo</option>
                        </select>
                        {errores.marca && <p className="error">{errores.marca}</p>}
                    </div>
                </div>
                {/* Sección de porcentajes para margen, descuento e impuesto */}
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
                        {errores.impuesto && <p className="error">{errores.impuesto}</p>}
                    </div>
                </div>
                {/* Sección de stock, imagen y color */}
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
                        {errores.color && <p className="error">{errores.color}</p>}
                    </div>
                </div>
                {/* Sección de botones para volver y registrar */}
                <div className='botons'>
                    <Link className='btnv' to="/dashboard">Volver</Link>
                    <Link className='btnc' onClick={handleSubmit}>Registrar</Link>
                </div>
            </div>
        </div>
    );
}

// Exporta el componente MyLoginPage como el componente por defecto
export default Resgistroarticulos;
