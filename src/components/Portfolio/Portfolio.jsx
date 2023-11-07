import React, { useState, useRef } from 'react';
import './portfolio.css';
import Screenshot from '../../assets/screenshot.png';


const Portfolio = () => {
    const gitUrl = 'https://github.com/Sterling47/portf';
    const projectListRef = useRef(null);

    const [showMore, setShowMore] = useState(false);

    const projects = [
        {
            title: 'To-Do List',
            image: Screenshot,
            description: 'A React app Created with vite',
            deployLink: '',
            githubLink: gitUrl,
        },

        {
            title: 'SuperHero Generator',
            image: Screenshot,
            description: 'A JavaScript Application',
            deployLink: '',
            githubLink: gitUrl,
        },

        {
            title: 'To-Do List',
            image: Screenshot,
            description: 'A React app Created with vite',
            deployLink: '',
            githubLink: gitUrl,
        },

        {
            title: 'To-Do List',
            image: Screenshot,
            description: 'A React app Created with vite',
            deployLink: '',
            githubLink: gitUrl,
        }
    ]

    const visibleProjects = showMore ? projects : projects.slice(0, 1);
  
    const toggleShowMore = () => {

        
        setShowMore(!showMore);
    };

  return (
   <section id='portfolio'>
    <div className='elements'>
        <h1>My Porfolio</h1>
        <p>Some curated projects to showcase the skills ive taught my self.</p>
        <ul className='projectList' ref={projectListRef}>
            {visibleProjects.map((project, index) => (
                <li className='project' key={index}>
                    <h2>{project.title}</h2>
                    <img className="prjImg" src={project.image} alt={`${project.title} project`} />
                    <p>{project.description}</p>
                    <a target="_blank" className="projectbtn" href={project.deployLink}>
                        Deploy
                    </a>
                    <a target="_blank" className="projectbtn" href={project.githubLink}>
                        Github repo
                    </a>
                    </li>
            ))}            
        </ul>
        {projects.length > 1 && (
          <button className="showMoreButton" onClick={toggleShowMore}>
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        )}
    </div>
   </section>
  )
}

export default Portfolio;