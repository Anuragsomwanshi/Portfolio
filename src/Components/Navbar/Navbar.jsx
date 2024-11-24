import React from 'react'
import "./Navbar.css"
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className='Navbar' >

        <div className="menu">
          <Link to='Home' className='menu-item-brand'>ANURAG</Link>
            <Link to='Home' smooth={true}  className='menu-item'>Home</Link>
            <Link to='About'smooth={true}  className='menu-item'>About</Link>
            <Link to='Work'smooth={true} className='menu-item'>Work</Link>
            <Link to='Contact'smooth={true} className='menu-item'>Contact</Link>
        </div>


        
    </div>
  )
}

export default Navbar