import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='nav' >
      <div className='logo'>Anurag</div>
      <ul className='menu'> 
      <li> <a href="#Home">Home</a></li>
      <li><a href="#About">About</a></li>
      <li><a href="#service">Service</a></li>
      <li><a href="#work">Work</a></li>
      <li><a href="#contact">Contact</a></li>

      
      </ul>
      <button><a href="#contact">contact</a></button>
    </div>
  )
}

export default Navbar