import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import "./index.css";
import Footer from './component/Footer';
import About from './component/About';
import Skills from './component/Skills';
import Contact from './component/Contact';
import Project from './component/Project';

function App() {
  return (
    <div>
      <Navbar/>
      
      <Routes>
      <Route path = '/' element={<Home/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/project'element={<Project/>}/>
      <Route path='/contacts' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App