import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Inicio from "./Components/Inicio_sesion/inicio-sesion";
import Registro from "./Components/Registro_user/register";
import Terminos from "./Components/terminos_condiciones/terminos";
import Reccontra from "./Components/recuperar_pass/Recuperar_pass";
import RegistroP from "./Components/Registro_prod/register_product"

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/RegistroP" />} /> 
        <Route path="/registrop" element={<RegistroP />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/reccontra" element={<Reccontra />} />
      </Routes>
    </Router>
  );
}

export default App;
