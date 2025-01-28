import React from 'react';
import { motion } from 'framer-motion';
import rancidProject from '../assets/RancidProject.png';
import beerHereProject from '../assets/beerhere-screenshot.png';
import VanProject from '../assets/VanLife.png';
import fullStack from '../assets/fullstackproject.png';
import { BackgroundGradient } from '../UI/background-gradient';

const Portfolio = () => {
    const projects = [
        {
            title: 'Rancid Tomatillos',
            image: rancidProject,
            description: 'A React app created with Vite',
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
            description: 'A React app created with Vite',
            deployLink: 'https://van-life-app-two.vercel.app/',
            githubLink: 'https://github.com/Sterling47/VanLifeApp/tree/main',
        },
        {
            title: 'Ingredient Data Search - A Fullstack App',
            image: fullStack,
            description: 'A fullstack application built using React, Express.js, Knex.js, and a PostgreSQL database',
            deployLink: 'https://backend-stretch.vercel.app/',
            githubLink: 'https://github.com/Sterling47/backend-stretch',
        },
    ];

    return (
        <section id="portfolio" className="flex flex-col items-center py-10 px-6 h-full w-full ">
            <BackgroundGradient className="max-w-4xl  p-6 rounded-[22px] bg-white dark:bg-zinc-900 shadow-lg">
                <h1 className="text-4xl font-bold text-center mb-4 dark:text-white">My Portfolio</h1>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
                    A collection of projects showcasing my skills and creativity.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-800"
                        >
                            <img
                                src={project.image}
                                alt={`${project.title} thumbnail`}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-2xl font-semibold mb-2 dark:text-white">{project.title}</h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                                <div className="flex gap-4">
                                    <a
                                        href={project.deployLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-btn"
                                    >
                                        View Live
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-btn"
                                    >
                                        GitHub Repo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </BackgroundGradient>
        </section>
    );
};

export default Portfolio;
