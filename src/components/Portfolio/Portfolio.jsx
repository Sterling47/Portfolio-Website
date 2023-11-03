import React from 'react';
import './portfolio.css';

import webAnimation from '../../assets/user-interface.json';
import Lottie from 'lottie-react';

const Portfolio = () => {
    const gitUrl = 'https://github.com/Sterling47/https---github.com-Sterling47-website';
  

  return (
   <section id='portfolio'>
    <div className='elements'>
        <h1>My Porfolio</h1>
        <p>Some curated projects to showcase the skills ive taught my self.</p>
        <ul className='projectList'>
            <li className='project'>
                <h2>Color list</h2>
                <Lottie className='lottie' animationData={webAnimation}/> 
                <p>some project i made to showcase certain skills will update</p>
                <a target="_blank" className='projectbtn' href="">Deploy</a>
                <a target="_blank" className='projectbtn' href={gitUrl}>Github repo</a>
            
            </li>   
                   
        </ul>
    </div>
   </section>
  )
}

export default Portfolio;