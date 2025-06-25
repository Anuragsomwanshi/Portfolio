import React from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Services from './components/Services/Services'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>

      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
    </div>
  )
}

export default App