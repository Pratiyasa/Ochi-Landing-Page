import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Marque from './Components/Marque'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Feature from './Components/Feature'
import Cards from './Components/Cards'
function App() {
  return (
    <>
    <div className="h-full w-full bg-zinc-900">
      <Navbar />
      <Landing />
      <Marque />
      <About />
      <Eyes />
      <Feature />
      <Cards />
    </div>
   </>  
  )
}

export default App
