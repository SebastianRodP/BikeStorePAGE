import { useState } from 'react';
import Registrouser from "../src/Components/Registro_user/register";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Registrouser />
    </>
  );
}

export default App;
