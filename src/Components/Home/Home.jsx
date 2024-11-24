import React from 'react'
import './Home.css'
import hero from '../../assets/hero.jpg'
import { Link } from 'react-scroll'
const Home = () => {
  return (
    <div  id='Home' className='Home'>

        <div className='home-col-1'>
          <div className="txt"><p>Hey Everyone My Name is  <span>Anurag</span> i am a </p>  <p className='dev'> Software Engineer </p> </div>

         <Link to='Contact'  smooth={true} duration={500} > <button className='btn-connect'>Connect Me</button></Link> 
          
        </div>
        <div className='home-col-2'>
          <img src={hero} alt="" className="hero-img" />
        </div>


    </div>
  )
}

export default Home