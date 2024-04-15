import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import "./material-dashboard.css";
import { Link } from 'react-router-dom';

const supabase = createClient('https://hetfaqksgxjlcxatxcvl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhldGZhcWtzZ3hqbGN4YXR4Y3ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExNjI0OTcsImV4cCI6MjAyNjczODQ5N30.jg0cFimQOh3erlrtL9AILrtyQIrRJLnFs-594uJXiiY');

function Dashboard() {
  const [productos, setProductos] = useState([]);
  const [users, setUsers] = useState([]);
  const [codigoEliminar, setCodigoEliminar] = useState('');
  const [mostrarPanelEliminado, setMostrarPanelEliminado] = useState(false);
  const [mensajePanelEliminado, setMensajePanelEliminado] = useState('');

  function obtenerNombreCategoria(id_categorias) {
    if (id_categorias === 1) {
      return 'Accesorio';
    } 
    else if (id_categorias === 2) {
      return 'Repuesto';
    } 
    else if (id_categorias === 3) {
      return 'Vestuario';
    } 
    else if (id_categorias === 4) {
      return 'Bicicletas';
    } 
    else {
      return 'Desconocido';
    }
  }
  
  function obtenerMarca(idmarca) {
    if (idmarca === 1) {
      return 'Fox';
    } 
    else if (idmarca === 2) {
      return 'GW';
    } 
    else if (idmarca === 3) {
      return 'Specialized';
    } 
    else if (idmarca === 4) {
      return 'Venzo';
    } 
    else {
      return 'Otra';
    }
  }

  useEffect(() => {
    async function fetchData() {
      let { data: productosData, error: productosError } = await supabase
        .from('articulos')
        .select('*');

      let { data: usuariosData, error: usuariosError } = await supabase
        .from('usuarios')
        .select('*');

      if (productosError) console.error('Error fetching productos data:', productosError);
      else setProductos(productosData);

      if (usuariosError) console.error('Error fetching usuarios data:', usuariosError);
      else setUsers(usuariosData);
    }

    fetchData();
  }, []);

  const handleDelete = async () => {
    try {
      const codigoNumber = parseInt(codigoEliminar);

      const { data, error } = await supabase
        .from('articulos')
        .delete()
        .eq('id_articulos', codigoNumber);

      if (error) {
        console.error('Error al eliminar el producto:', error.message);
      } else {
        console.log('Producto eliminado correctamente:', data);
        setMensajePanelEliminado('Producto eliminado correctamente.');
        setMostrarPanelEliminado(true);
      }
    } catch (error) {
      console.error('Error al eliminar el producto:', error.message);
    }
  };

  const handleCodigoEliminarChange = (event) => {
    setCodigoEliminar(event.target.value);
  };

  return (
    <div className="ola">
      <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark" id="izqui">
        <div className="sidenav-header">
          <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
          <span className="teztitu" >Dashboard</span>
        </div>
        <hr className="horizontal light mt-0 mb-2" />
        <div className="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link text-white">
                <span className="nav-link-text ms-1" id='tezt'>Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/registrop" className="nav-link text-white">
                <span className="nav-link-text ms-1" id='tezt'>Registrar articulos</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/modificar" className="nav-link text-white">
                <span className="nav-link-text ms-1" id='tezt'>Modificar articulos</span>
              </Link>
            </li>
            <div className='elimn' id='tezt'>
              Eliminar articulos
              <input
                type="text"
                className='codigo'
                placeholder='codigo del producto'
                value={codigoEliminar}
                onChange={handleCodigoEliminarChange}
              />
              <button className='elim' onClick={handleDelete}>Eliminar articulo</button>
            </div>
            <li className="nav-item" id='cers'>
              <Link to="/inicio" className="nav-link text-white">
                <span className="nav-link-text ms-1" id='tezt'>Cerrar sesion</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <main className="main-content border-radius-lg">
        <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true">
          <div className="container-fluid py-1 px-3">
            <div>BIKE STORE</div>
            <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
              <ul className="navbar-nav justify-content-end">
                <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                  <a href="javascript:;" className="nav-link text-body p-0" id="iconNavbarSidenav">
                    <div className="sidenav-toggler-inner">
                      <i className="sidenav-toggler-line"></i>
                      <i className="sidenav-toggler-line"></i>
                      <i className="sidenav-toggler-line"></i>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-lg-7 position-relative z-index-2">
              <div className="card card-plain mb-4">
                <div className="card-body p-3">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="d-flex flex-column h-100">
                        <h2 className="titulo">Productos</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 gx-10" id='cajas'>
                {productos.map((producto) => {
                  const margen = producto.margen || 0;
                  const impuesto = producto.impuesto || 0;
                  const descuento = producto.descuento || 0;
                  const costo = parseFloat(producto.costo) || 0;
                  const valorTotal = costo + (costo * margen) - (costo * descuento) + impuesto;

                  return (
                    <div key={producto.idArticulos} className="col">
                      <div className="cajitados">
                        <div className="inicio">
                          <div className="cuadro">
                            <img src={producto.img} alt="" />
                          </div>
                          <div className="text-end pt-1">
                            <p className="text-sm mb-0 text-capitalize">Stock:{producto.stock}</p>
                          </div>
                        </div>
                        <div className='carit'>
                          <hr className="dark horizontal my-0" />
                          <div className="atri">
                            <p className="testo"><span >Nombre: {producto.nombre}</span></p>
                          </div>
                          <div className="atri">
                            <p className="testo"><span >Marca: {obtenerMarca(producto.idmarca)}</span></p>
                          </div>
                          <div className="atri">
                            <p className="testo"><span >Codigo: {producto.id_articulos}</span></p>
                          </div>
                          <div className="atri">
                            <p className="testo"><span >Tipo: {producto.tipo}</span></p>
                          </div>
                          <div className="atri">
                            <p className="testo"><span >Color: {producto.color}</span></p>
                          </div>
                          <div className="atri">
                            <p className="testo"><span >Categoria: {obtenerNombreCategoria(producto.id_categorias)}</span></p>
                          </div>
                          <div className="atri">
                            <p className="testo"><span >Costo: {producto.costo}</span></p>
                          </div>
                          <div className="atri">
                            <p className="testo"><span >Valor Total: {valorTotal}</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
