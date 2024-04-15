import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import  Home  from './Pages/Home';
import{DetallesArt} from './Components/DetallesArt/DetallesArt';
import Bicicletas from './Pages/Bicicletas';
import Accesorios from "./Pages/Accesorios";
import Repuestos from './Pages/Repuestos'
import Vestuarios from './Pages/Vestuarios'
import Contactanos  from "./Components/Contactanos/Contactanos";
import Inicio from "./Components/Inicio_sesion/inicio-sesion";
import Registro from "./Components/Registro_user/register";
import Terminos from "./Components/terminos_condiciones/terminos";
import Reccontra from "./Components/recuperar_pass/Recuperar_pass";
import "./Pages/style.css"

import RegistroP from "./Components/Registro_prod/register_product"

function App() {
  const [count, setCount] = useState(0)
  return (
    <Router>
      <Routes>
        <Route path="/"element={<Navigate replace to="/home"/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/detallesArt" element={<DetallesArt />} />
        <Route path="/Bicicletas" element={<Bicicletas />} />
        <Route path="/Accesorios" element={<Accesorios />} />
        <Route path="/Repuestos" element={<Repuestos />} />
        <Route path="/Vestuarios" element={<Vestuarios />} />
        <Route path="/Contactanos" element={<Contactanos />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/reccontra" element={<Reccontra />} />
      </Routes>
    </Router>

  )
}

export default App;
