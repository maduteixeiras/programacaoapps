import './App.css'
import AdicionarUser from './components/AdicionarUser'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <>
      <div className='app'>
        <Header />
        <main>
          <AdicionarUser />
        </main>
        <Footer />
      </div> 
      
    </>
  )
}

export default App
