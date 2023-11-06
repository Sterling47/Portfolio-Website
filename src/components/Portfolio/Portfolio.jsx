import React from 'react';
import './portfolio.css';
import Screenshot from '../../assets/screenshot.png';


const Portfolio = () => {
    const gitUrl = 'https://github.com/Sterling47/portf';
  

  return (
   <section id='portfolio'>
    <div className='elements'>
        <h1>My Porfolio</h1>
        <p>Some curated projects to showcase the skills ive taught my self.</p>
        <ul className='projectList'>
            <li className='project'>
                <h2>To-Do List</h2>
                <img className='prjImg' src={Screenshot} alt="To-do list project" />
                <p>A react app created with vite. <br /> </p>
                <a target="_blank" className='projectbtn' href="">Deploy</a>
                <a target="_blank" className='projectbtn' href={gitUrl}>Github repo</a>
            
            </li>   
                   
        </ul>
    </div>
   </section>
  )
}

export default Portfolio;