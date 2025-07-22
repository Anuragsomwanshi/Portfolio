import React from 'react'
import './Contact.css'
import call from '../../assets/call.png'
import mail from '../../assets/mail.png'
import location from '../../assets/location.png'


const Contact = () => {
  return (
    <div id='contact' className='contact'>



        <div className="col-1">
        <h4>Get in touch</h4> 

        <p>For know more about .  please contact me and get in touch for further process</p>
            <div className="detail">
                <img src={call} alt="" /> <p>9860510964</p>
                
           </div>

           <div className="detail">
            <img src={mail} alt="" /> <p>anuragsomwanshi11@gmail.com</p>
                
           </div>


           <div className="detail">
            <img src={location} alt="" /><p>Latur maharashtra 413512</p>
                
           </div>
        </div>


        <div className="col-2">

          <h1>Contact </h1>

            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter Your Name' name='name' />
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Enter Your Email' name='email' />
            <label htmlFor="">Message</label>
            <textarea name="message" rows={9} placeholder='Enter your message' ></textarea>
            <button type='submit' className='btn-submit'>submit</button>
            

            
        </div>

    </div>
  )
}

export default Contact