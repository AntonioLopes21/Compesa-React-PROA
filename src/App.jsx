import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import Carrossel from './components/Carrossel'


function App() {

  return (
    <>
    <div className="topo">
      <Navbar />
    </div>
    <div className="carrossel">
      <Carrossel/>
    </div>
    <div className="conteudo">
      <MainContent/>
    </div>
    <div className="rodape">
      <Footer />
    </div>
    </>
  )
}

export default App
