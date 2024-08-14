import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './portfolio.css';
import rancidProject from '../../assets/RancidProject.png';
import beerHereProject from '../../assets/beerhere-screenshot.png';
import VanProject from '../../assets/Vanlife.png';
import fullStack from '../../assets/fullstackproject.png';

const Portfolio = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const projects = [
        {
            title: 'Rancid Tomatillos',
            image: rancidProject,
            description: 'A React app Created with Vite',
            deployLink: 'https://rancid-tomatillos-lilac.vercel.app/',
            githubLink: 'https://github.com/Sterling47/RancidTomatillos',
        },
        {
            title: 'BeerHere - A Brewery Finder',
            image: beerHereProject,
            description: 'A JavaScript Application',
            deployLink: 'https://beer-here.vercel.app/',
            githubLink: 'https://github.com/Sterling47/BeerHere',
        },
        {
            title: 'Van Life - A Van Rental Application',
            image: VanProject,
            description: 'A React app Created with Vite',
            deployLink: 'https://van-life-app-two.vercel.app/',
            githubLink: 'https://github.com/Sterling47/VanLifeApp/tree/main',
        },
        {
            title: 'Ingredient Data Search - A Fullstack App',
            image: fullStack,
            description: 'A Fullstack application built using React, Express.js, Knex.js, and a PostgreSQL database',
            deployLink: 'https://backend-stretch.vercel.app/',
            githubLink: 'https://github.com/Sterling47/backend-stretch',
        },
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    return (
        <section className="wrapper">
            <div id="portfolio">
                <div className="elements">
                    <h1>My Portfolio</h1>
                    <p>Some curated projects to showcase the skills I've taught myself.</p>
                    <div className="carousel">
                        <button className='projectbtn' onClick={handlePrev}>&lt; Prev</button>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ x: 300, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -300, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="project"
                            >
                                <h2>{projects[currentIndex].title}</h2>
                                <img className="prjImg" src={projects[currentIndex].image} alt={`${projects[currentIndex].title} project`} />
                                <p>{projects[currentIndex].description}</p>
                                <div className="button-wrapper">
                                    <a target="_blank" className="projectbtn" href={projects[currentIndex].deployLink} rel="noopener noreferrer">
                                        Deploy
                                    </a>
                                    <a target="_blank" className="projectbtn" href={projects[currentIndex].githubLink} rel="noopener noreferrer">
                                        Github repo
                                    </a>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                        <button className='projectbtn' onClick={handleNext}>Next &gt;</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
