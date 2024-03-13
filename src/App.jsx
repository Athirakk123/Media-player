

import './App.css'
import './bootstrap.min.css'

import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import History from './pages/History'
import { Routes,Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
 
  return (
    <>
    <Header/>
  <Routes>
    <Route path='' Component={Landing}/>
    <Route path='dash' Component={Dashboard}/>
    <Route path='his' Component={History}/>

  </Routes>
  <Footer/>
    </>
  )
}

export default App