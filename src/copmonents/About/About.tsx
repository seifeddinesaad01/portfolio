import React from 'react'
import img from "../../assets/FB_IMG_1602070684608.jpg"
const About = () => {
  return (
    <div className="container">
        <div className="left">
    <p className='name'>
        <h1>Hi, I'm</h1> 
        <h1 className='waviy'>         
            <span>S</span>
            <span>E</span>
            <span>I</span>
            <span>F</span> 
         </h1>
    </p>
       
       
        
    <div className="description">
        <p>I’m a Frontend Developer with a strong understanding of Responsive Web Design  and have demonstrated past work experience working in the frontend development industry. 
I am Highly Skilled in HTML, CSS, JavaScript, SAAS, React JS,Typescript,Jest  and Responsive Web Design, BEM, Email Templates development.  I possess good written and oral communication skills, 
 which enable me to explain complex web app issues in easy-to-understand terms.</p>
    </div>
        </div>
        <div className="right">
            <div className="circle">
                <img src={img} alt="" />
            </div>

        </div>
    </div>
  )
}

export default About