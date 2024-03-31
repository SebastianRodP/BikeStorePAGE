import { useState } from 'react'
import { Home } from './Pages/Home'
import{DetallesArt} from './Components/DetallesArt/DetallesArt'
import Bicicletas from './Pages/Bicicletas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Bicicletas/>

    </>
  )
}

export default App
