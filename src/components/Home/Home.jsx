import React from 'react'
import './Home.css'
import prof_img from '../../assets/image.jpg'

const Home = () => {
  return (
    <div className='Home'>
      <div className="content">
      <img className='img' src={prof_img} alt="" />
      <h4>Hello sir/mam</h4>
      <h2>My Name is Anurag Somwanshi</h2>
      <p> i am working on MERN stack Projects as Software Engineer</p>

      <button className='btn_resume'>Resume</button>
      
      
      </div> 
    
    </div>
  )
}

export default Home