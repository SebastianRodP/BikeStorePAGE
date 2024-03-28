import { useState } from 'react'
import { Iniciosesion } from "../src/Components/Inicio_sesion/inicio-sesion"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Iniciosesion/>
    </>
  )
}

export default App
