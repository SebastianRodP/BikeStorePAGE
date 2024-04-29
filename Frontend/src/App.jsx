import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import  Home  from './Pages/Home';
import Bicicletas from './Pages/Bicicletas';
import Dashboard  from './Components/Dashboard/dashboard';
import Accesorios from "./Pages/Accesorios";
import Repuestos from './Pages/Repuestos'
import Vestuarios from './Pages/Vestuarios'
import Contactanos  from "./Components/Contactanos/Contactanos";
import Inicio from "./Components/Inicio_sesion/inicio-sesion";
import Registro from "./Components/Registro_user/register";
import Terminos from "./Components/terminos_condiciones/terminos";
import Reccontra from "./Components/recuperar_pass/Recuperar_pass";
import Registrop from "./Components/Registro_prod//register_product"
import Modificar from "./Components/Modif_art/Modif_art"
import "./Pages/style.css"
import { Carrito } from '../src/Components/Carrito/Carrito';
import DetallesArt from './Components/DetallesArt/DetallesArt';
function App() {
  const [count, setCount] = useState(0)
  return (
    <Router>
        <Carrito/>
      <Routes>
        <Route path="/"element={<Navigate replace to="/home"/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/DetallesArt/:id" element={<DetallesArt />} />
        <Route path="/Bicicletas" element={<Bicicletas />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Accesorios" element={<Accesorios />} />
        <Route path="/Repuestos" element={<Repuestos />} />
        <Route path="/Vestuarios" element={<Vestuarios />} />
        <Route path="/Contactanos" element={<Contactanos />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/registrop" element={<Registrop />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/reccontra" element={<Reccontra />} />
        <Route path="/modificar" element={<Modificar />} />
      </Routes>
    </Router>

  )
}

export default App;