import React, { useRef } from 'react'
import "./Navbar.css"
import menu from '../../assets/call.png'

const Navbar = () => {


  const menuref = useRef();
  const btnref = useRef();

  const openmenu = ()=>{

    menuref.current.style.opacity='100'
    btnref.current.style.opacity='0'

    
setTimeout(() => {
 
    menuref.current.style.opacity='0'
    btnref.current.style.opacity='100'
  
}, 1000);



  }

  return (
    <div className='nav'>
      <div className='logo'>Anurag</div>
      <ul ref={menuref} className='menu'> 
      <li> <a href="#Home">Home</a></li>
      <li><a href="#About">About</a></li>
      <li><a href="#service">Service</a></li>
      <li><a href="#work">Work</a></li>
      <li><a href="#contact">Contact</a></li>
      

      
      </ul>
      <img ref={btnref} className='btn-menu' onClick={openmenu} src={menu} alt="" />
      <button><a href="#contact">contact</a></button>
    </div>
  )
}

export default Navbar