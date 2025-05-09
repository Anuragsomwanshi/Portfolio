import React from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Services from './components/Services/Services'

const App = () => {
  return (
    <div>

      <Navbar/>
      <Home/>
      <About/>
      <Services/>
    </div>
  )
}

export default App