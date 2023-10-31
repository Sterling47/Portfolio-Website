import React from 'react';
import './intro.css';
import headshot from '../../assets/headshot.jpeg';
import contact from '../../assets/message.png'

const Intro = () => {
  return (
   <section id="intro">
    <div className='introText'>
        <h3>Hello,</h3>
        <h1>Im <span>Adam</span>
                <br /> Creative Innovative Reliable
        </h1>
        <p>From the ground up developer. Inspired by building fast and scalable projects to benefit all users.</p>
        <button className='introButton'>
            <img src={contact} alt="contact" className='buttonImg' />
            Hire me
        </button>
    </div>
    <div className='imgDiv'>
        <img className='headShot' src={headshot} alt="headshot" />
    </div>
   </section>
  )
}

export default Intro;