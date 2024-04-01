import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import  Home  from './Pages/Home';
import{DetallesArt} from './Components/DetallesArt/DetallesArt';
import Bicicletas from './Pages/Bicicletas';
import Contactanos  from "./Components/Contactanos/Contactanos";

function App() {
  const [count, setCount] = useState(0)
  return (
    <Router>
      <Routes>
        <Route path="/"element={<Navigate replace to="/home"/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/detallesArt" element={<DetallesArt />} />
        <Route path="/bicicletas" element={<Bicicletas />} />
        <Route path="/Contactanos" element={<Contactanos />} />
      </Routes>
    </Router>

  )
}

export default App
