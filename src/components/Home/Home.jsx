import React from 'react'
import './Home.css'
import prof_img from '../../assets/image.jpg'

const Home = () => {
  return (
    <div className='Home'>

      <div className="content">
      <img className='img' src={prof_img} alt="" />
      <h4>Hello</h4>
      <h2>i am Anurag Somwanshi</h2>
      <p> i am Software Engineer working on MERN stack and python Django technology</p>

      </div>



    </div>
  )
}

export default Home