import { useState } from 'react';
import Registro from "./Components/Registro_user/register";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Registro />
    </>
  );
}

export default App;
