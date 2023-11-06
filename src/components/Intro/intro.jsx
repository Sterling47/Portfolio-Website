import React from 'react';
import './intro.css';
import headshot from '../../assets/Subject.png';
import contact from '../../assets/message.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
   <section id="intro">
    <div className='introContent'>
        <h3>Hello,</h3>
        <h1>Im <span>Adam</span> - React developer
                <br /> Creative | Innovative | Reliable
        </h1>
        <p>From the ground up developer. Inspired by building fast and scalable projects to benefit all users.</p>
        <Link activeClass='active' spy={true} smooth={true} offset={-100} duration={500} className='hireMe'>
            <img src={contact} alt="img" className='buttonImg' />
            hire me
        </Link>
    </div>
    <img className='headShot' src={headshot} alt="headshot" />
   
   </section>
  )
}

export default Intro;