import React from 'react';
import './intro.css';
import headshot from '../../assets/Subject.png';
import contact from '../../assets/message.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
   <section id="intro">
    <div className='introText'>
        <h3>Hello,</h3>
        <h1>Im <span>Adam</span>
                <br /> Creative Innovative Reliable
        </h1>
        <p>From the ground up developer. Inspired by building fast and scalable projects to benefit all users.</p>
        <div>
            <Link activeClass='active' to='contactForm' spy={true} smooth={true} offset={-100} className='introButton'>
                <img src={contact} alt="contact" className='buttonImg' />
                Hire me
            </Link>
        </div>
       
    </div>
    <div className='imgDiv'>
        <img className='headShot' src={headshot} alt="headshot" />
    </div>
   </section>
  )
}

export default Intro;