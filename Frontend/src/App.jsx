import { useState } from 'react';
import Inicio from "./Components/Inicio_sesion/inicio-sesion";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Inicio />
    </>
  );
}

export default App;
