import React, { useState } from 'react';
import logo from "../../assets/img/imgInicioRegistro/logon.png";
import { Link } from "react-router-dom";
import "./formularios_admin.css";
import { createClient } from '@supabase/supabase-js';

function MyLoginPage() {
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

    const mostrarMensaje = (mensaje) => {
        setMensajePanel(mensaje);
        setMostrarPanel(true);
    };
    const generateUniqueId = () => {

        return Math.floor(Math.random() * 1000).toString();
    };

    const supabase = createClient('https://hetfaqksgxjlcxatxcvl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhldGZhcWtzZ3hqbGN4YXR4Y3ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExNjI0OTcsImV4cCI6MjAyNjczODQ5N30.jg0cFimQOh3erlrtL9AILrtyQIrRJLnFs-594uJXiiY');

    const validarFormulario = () => {
        let erroresTemp = {};
        let esFormularioValido = true;

        if (!nombre.trim()) {
            erroresTemp.nombre = "El campo nombre es obligatorio.";
            esFormularioValido = false;
        }
        if (!categoria) {
            erroresTemp.categoria = "Debes seleccionar una opcion en el campo categorias.";
            esFormularioValido = false;
        }
        if (!marca) {
            erroresTemp.marca = "Debes seleccionar una opcion en el campo marcas.";
            esFormularioValido = false;
        }

        if (!tipop.trim()) {
            erroresTemp.tipop = "El tipo de producto es obligatorio.";
            esFormularioValido = false;
        }
        if (!margen.trim()) {
            erroresTemp.margen = "El campo margen es obligatorio.";
            esFormularioValido = false;
        }
        if (!costo.trim()) {
            erroresTemp.costo = "El campo costo es obligatorio.";
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const esFormularioValido = validarFormulario();

        if (esFormularioValido) {
            try {

                const nuevoId = generateUniqueId();
                const idcategorias = document.getElementById('categorias').value;
                const idmarca = document.getElementById('marcas').value;

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


                if (error) {
                    console.error('Error al registrar los datos:', error.message);
                } else {
                    console.log('Datos registrados correctamente:', data);
                    mostrarMensaje('Producto registrado correctamente.');

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

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        let newValue = value;

        // Permitir números y un punto decimal
        if (id === 'descuento' || id === 'margen' || id === 'impuesto') {
            newValue = value.replace(/[^0-9.]/g, ''); // Solo números y punto decimal
        } else if (id === 'costo' || id === 'stock') {
            newValue = value.replace(/[^0-9]/g, ''); // Solo números
        } else {
            newValue = value; // SinewValuen restricciones
        }
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
                <div className='loprim'>
                    <div className='nombrhe'>
                        <div className='nombres_dashboard'>Nombre del producto</div>
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
                        <div className='nombres_dashboard'>Costo unitario</div>
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

                <div className='desplegables'>
                    <div className='tipop'>
                        <div className='nombres_dashboard'>Tipo de producto</div>
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
                        <label className='nombres_dashboard' htmlFor="categorias">Categorias</label>
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
                        <label className='nombres_dashboard' htmlFor="marcas">Marcas</label>
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
                <div className='porcentajes'>
                    <div className='margen'>
                        <div className='nombres_dashboard'>Margen</div>
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
                        <div className='nombres_dashboard'>Descuento</div>
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
                        <div className='nombres_dashboard'>Impuesto</div>
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

                <div className='ultm'>
                    <div className='stock'>
                        <div className='nombres_dashboard'>Stock</div>
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
                        <div className='nombres_dashboard'>Imagen</div>
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
                        <div className='nombres_dashboard'>Color</div>
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

                
                <div className='botons'>
                <Link className='btn' to="/dashboard">Volver</Link>
                    <Link className='btn' onClick={handleSubmit}>Registrar</Link>
                </div>

            </div>
        </div>
    );
}

export default MyLoginPage;