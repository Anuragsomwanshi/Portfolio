import React from 'react'
import './Services.css'
import serviceData from '../../assets/serviceData.js'

const Services = () => {
  return (
    <div className='Services'>
      <h1>Services</h1>
      <div className="serv-container">
        {serviceData.map((service,index)=>{

          return <div key={index} className="servicebox">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
            </div>
          

        })}

      </div>
    </div>
  )
}

export default Services