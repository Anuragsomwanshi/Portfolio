import React from 'react'
import './MyWork.css'
import WorkData from '../../assets/WorkData'

const MyWork = () => {
  return (
    <div className='Mywork'>

        <div className="mywork-title">
            <h1> My work</h1>
        </div>

        <div className="work-container">
            {WorkData.map((work,index)=>{
              return <img key={index} src={work.w_img} alt="" />
            })}


        </div>

    </div>
  )
}

export default MyWork