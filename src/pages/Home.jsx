import React from 'react'
import Hero from '../component/Hero'
import About from '../component/About'
import Skills from '../component/Skills'
import Project from '../component/Project'
import Contact from '../component/Contact'


function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default Home