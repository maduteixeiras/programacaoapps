import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Mensagem from './components/Mensagem'
import InfoAluno from './components/InfoAluno'
import InfoCurso from './components/InfoCurso'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome!</h1>
      <Mensagem></Mensagem>
      <InfoAluno></InfoAluno>
      <InfoCurso/>
    </>
  )
}

export default App
