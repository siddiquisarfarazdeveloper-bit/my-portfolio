import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import "./index.css";
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      
      <Routes>
      <Route path = '/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App