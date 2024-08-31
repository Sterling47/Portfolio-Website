import React from 'react';
import './intro.css';
import headshot from '../../assets/headshots.jpg';
import contact from '../../assets/message.png';
import figma from '../../assets/figma.png'
import cssicon from '../../assets/css.png'
import typescript from '../../assets/typescript.png'
import sqlicon from '../../assets/sql.png'
import reacticon from '../../assets/atom.png'


const Intro = () => {
  return (
   <section className="wrapper" >
    <div className="intro-wrapper">
    <div className='introContent'>
        <h1>Im <span>Adam</span> - React developer
        <br /> Creative | Innovative | Reliable
        </h1>
        <p>From the ground up React developer driven by the passion for building efficient, scalable projects that benefit all users. Committed to accessibility and thorough testing to ensure the best possible experience for everyone</p>  
    </div>
    <img className='headShot' src={headshot} alt="headshot" />
   </div>
   <div className="icon-container">
    <img src={reacticon} alt='react icon' className='icon' />
    <img src={typescript} alt="typescript icon" className='icon'/>
    <img src={sqlicon} alt="sql icon" className='icon'/>
    <img src={cssicon} alt="css icon" className='icon'/> 
    <img src={figma} alt="figma icon" className='icon'/>   
   </div>
   </section>
  )
}

export default Intro;