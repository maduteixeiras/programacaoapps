import './App.css'
import Mensagem from './components/Mensagem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Bem-Vindo ao Meu Projeto!</h1>

     <Mensagem></Mensagem>
    </>
  )
}

export default App
