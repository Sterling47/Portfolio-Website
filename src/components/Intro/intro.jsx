import React from 'react';
import './intro.css';
import headshot from '../../assets/Subject.png';
import contact from '../../assets/message.png';


const Intro = () => {
  return (
   <section id="intro" >
    <div className='introContent'>
        <h3>Hello,</h3>
        <h1>Im <span>Adam</span> - React developer
                <br /> Creative | Innovative | Reliable
        </h1>
        <p>From the ground up developer. Inspired by building fast and scalable projects to benefit all users.</p>  
    </div>
    <img className='headShot' src={headshot} alt="headshot" />
   
   </section>
  )
}

export default Intro;