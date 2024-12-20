import React from 'react';
import './intro.css';
import headshot from '../assets/headshots.jpg';
import figma from '../assets/figma.png'
import cssicon from '../assets/css.png'
import typescript from '../assets/typescript.png'
import sqlicon from '../assets/sql.png'
import reacticon from '../assets/atom.png'


const Intro = () => {
  return (
    <div className='wrapper'>
      <div className="intro-wrapper">
        <div className='introContent'>
          <div className="content-top">
          <h1>I am <span>Adam</span> - React developer
            <br /> <span>Creative </span> | <span>Innovative</span> | <span>Reliable</span>
          </h1>
          <img className='headShot' src={headshot} alt="headshot" />
          </div>
          <div className="intro-p">
            <p>From the ground up React developer driven by the passion for building efficient, scalable projects that benefit all users. Committed to accessibility and thorough testing to ensure the best possible experience for everyone</p>
          </div>
        </div>
        <div className="icon-container">
          <img src={reacticon} alt='react icon' className='icon' />
          <img src={typescript} alt="typescript icon" className='icon' />
          <img src={sqlicon} alt="sql icon" className='icon' />
          <img src={cssicon} alt="css icon" className='icon' />
          <img src={figma} alt="figma icon" className='icon' />
        </div>
      </div>
    </div>

  )
}

export default Intro;