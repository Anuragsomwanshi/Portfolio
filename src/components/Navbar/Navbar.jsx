import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='nav' >
      <div className='logo'>Anurag</div>
      <ul className='menu'> 
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
      <li>Portfolio</li>
      <li>Contact</li>
      </ul>
      <button>contact</button>
    </div>
  )
}

export default Navbar