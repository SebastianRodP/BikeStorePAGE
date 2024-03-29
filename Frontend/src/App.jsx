import { useState } from 'react';
import Terminos from "./Components/terminos_condiciones/terminos";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Terminos />
    </>
  );
}

export default App;
