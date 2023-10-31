import React from 'react';
import './about.css';
import eye from '../../assets/curve.png';
import build from '../../assets/tool.png';
import thinker from '../../assets/piechart.png';

const About = () => {
  return (
    <section id='about'>
        <div className='aboutInfo'>
            <h2>What do I offer?</h2>
            <p>im a skilled react developer with a love for making creative beatiful apps.</p>
            <ul className="listInfo">
                <li className="listItem">
                    <img src={thinker} alt="img" />
                    <div className='itemText'>
                        <h3>UI/UX Design</h3>
                        <p>I have an eye for creative design thats functional</p>
                    </div>
                </li>
                <li className="listItem">
                    <img src={build} alt="" />
                    <div className='itemText'>   
                        <h3>Application developer</h3>
                        <p>I focus on scalability, user accesability and sotrage elasticity</p>
                    </div> 
                </li>
                <li className="listItem">
                    <img src={eye} alt="img" />
                    <div className='itemText'>
                        <h3>Buisness Oriented</h3>
                        <p>Worked with small manufacturing start up to help acheive exellence</p>
                    </div>    
                </li>
                
            </ul>
        </div>
    </section>
  )
}

export default About;