import React from 'react';
import { motion } from 'framer-motion';
import rancidProject from '../assets/RancidProject.png';
import beerHereProject from '../assets/beerhere-screenshot.png';
import chattrImg from '../assets/chattr.png';
import VanProject from '../assets/VanLife.png';
import tictactoe from '../assets/ttt.png';
import fullStack from '../assets/fullstackproject.png';
import { BackgroundGradient } from '../UI/background-gradient';
import { AnimatedTestimonials } from '../UI/animated-testimonials';

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
    const testimonials = [
        {
            quote: "A Real-time Chat Application created with users in mind",
            name: "Chatt-r",
            designation: [],
            src: chattrImg,
            deployLink: 'https://Chatt-r.vercel.app/',
            githubLink: 'https://github.com/Sterling47/ChatApp',
        },
        {
            quote: "A FrontEnd React Application Utilizng Open Brewery API",
            name: "BeerHere - A Brewery Finder",
            designation: "",
            src: beerHereProject,
            deployLink: 'https://beerhere.vercel.app/',
            githubLink: 'https://github.com/Sterling47/BeerHere',
        },
        {
            quote: "A Javascript Applictation recreating Tic-Tac-Toe logic",
            name: "Tic-Tac-Toe",
            designation: "",
            src: tictactoe,
            deployLink: 'https://sterling47.github.io/Tic--Tac-Toe/',
            githubLink: 'https://github.com/Sterling47/Tic--Tac--Toe',
        },
        {
            quote: "A React app created with Vite",
            name: "Van Life - A Van Rental Application",
            designation: "",
            src: VanProject,
            deployLink: 'https://van-life-app-two.vercel.app/',
            githubLink: 'https://github.com/Sterling47/VanLifeApp/tree/main',
        },
        {
            quote: "A fullstack application built using React, Express.js, Knex.js, and a PostgreSQL database",
            name: "Ingredient Data Search - A Nutrient data search application",
            designation: "",
            src: fullStack,
            deployLink: 'https://backend-stretch.vercel.app/',
            githubLink: 'https://github.com/Sterling47/backend-stretch',
        }
    ];
    

    return (
        <section id="portfolio" className="flex flex-col items-center py-10 px-6 h-full w-full ">
            <BackgroundGradient className="max-w-4xl p-6 rounded-[22px] bg-white dark:bg-zinc-900 shadow-lg">
                <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-green-500 to-teal-500 m-4">My Portfolio</h1>
                <p className="text-center text-gray-600 font-extrabold m-8 dark:text-gray-300 mb-8">
                    A collection of projects showcasing my tecnical skills and creativity.
                </p>
                <AnimatedTestimonials testimonials={testimonials} />
            </BackgroundGradient>
        </section>
    );
};

export default Portfolio;
