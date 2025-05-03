import React from "react";
import "./About.css";
import about from '../../assets/about.jpg'
const About = () => {
  return (
    <div className="About" id="About">
      <div className="col-1">
        <img className="about_img" src={about} alt="" />
        
      
      </div>
      <div className="col-2">
        <h1>About</h1>
        <p className="about-para">
          Hello sir/mam my name is anurag somwanshi i have compleated my bachelors in computer science and currently i am pursuing MCA
          to gain and industory level experience for enhance my carrier skills i am looking for internship/job for go further. i always try
          to lern new skills as per industory standards and contribute to build a large skilled projects according to requirements.
          i  give my 100% to fullfill the requirements of the hands on projects . currently i works on web developement projects
          specifically on MERN stack . creating frontend for good  user experience link with backend and database for ex ecommerce website
          portfolio website,fincial field projects, Healthcare project etc . consistancy is a key of success so thats why i follow this rule
          for creating projects day by day and it will help me alot to enhance my skills and learn new things

            
        </p>
        <p className="about-para"> i hope this short intro will give me an positive impact for my
        further carrier growth.  Thanks You </p>

        <div className="skills-section">
          <div className="skills"> <p>HTML & css</p> <hr  style={{width:'70%'}} /> 70%</div>
          <div className="skills"> <p>Tailwind css</p> <hr  style={{width:'60%'}} />60% </div>
          <div className="skills"> <p>javascript</p> <hr  style={{width:'70%'}} />70%</div>
          <div className="skills"> <p>React.js</p> <hr  style={{width:'70%'}} />70%</div>
          <div className="skills"> <p>Node.js</p> <hr  style={{width:'65%'}} />65%</div>
          <div className="skills"> <p>MongoDB</p> <hr  style={{width:'70%'}} />70%</div>
          <div className="skills"> <p>Mysql</p> <hr  style={{width:'60%'}} />60%</div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
