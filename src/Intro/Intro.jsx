import React from 'react';
import './intro.css';
import '../style.css';
import headshot from '../assets/headshots.jpg';
import figma from '../assets/figma.png';
import cssicon from '../assets/css.png';
import typescript from '../assets/typescript.png';
import sqlicon from '../assets/sql.png';
import reacticon from '../assets/atom.png';
import { TextGenerateEffect } from '../UI/text-generate-effect';
import { AnimatedTooltip } from '../UI/animated-tooltip';
import { BackgroundGradient } from '../UI/background-gradient';
import { FlipWords } from '../UI/flip-words';

const Intro = () => {
  const tech = [
    { id: 1, name: "React", designation: "Frontend Javascript Library ", image: reacticon },
    { id: 2, name: "TypeScript", designation: "Strongly Typed JavaScript for Scalable Apps", image: typescript },
    { id: 3, name: "Figma", designation: "UI/UX Design & Prototyping Tool", image: figma },
    { id: 4, name: "Postgres", designation: "Relational Database for Scalable Storage", image: sqlicon },
];

  const words = 'From the ground up React developer driven by the passion for building efficient, scalable projects that benefit all users. Committed to accessibility and thorough testing to ensure the best possible experience for everyone';
  const flipWords = ['Fullstack Engineer', 'Problem Solver', "Hardworking",  "Team Player", "Creative", "Innovative", "Adaptable",  "Lifelong Learner"];

  return (
    <div className="flex flex-col items-center h-screen w-full gap-8 p-4 sm:p-6 lg:p-10">
      
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row lg:justify-center justify-center items-center gap-6 lg:items-center  h-[50%] w-[80%]">
       
        {/* Headshot */}
        <img
          className="h-[37%] sm:h-22  lg:h-[87%] lg:ml-52 rounded-2xl transition-all duration-1000 ease-in-out hover:shadow-gradient hover:scale-105"
          src={headshot}
          alt="headshot"
        />

        {/* Tooltip Section */}
        <div className="flex items-center justify-center w-full sm:w-[50%] h-fit p-4 lg:p-0">
          <AnimatedTooltip items={tech} />
        </div>
      </div>

      {/* Bottom Section */}
      <BackgroundGradient className="flex flex-col lg:flex-row justify-center items-center h-auto dark:bg-zinc-900 w-full p-4 sm:p-6  rounded-[22px]">
        <div className="flex flex-col justify-center items-center w-full lg:w-[80%] text-center mt-6">
          {/* Title */}
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-green-500 to-teal-500 mb-4">
            I'm Adam Konber
          </h2>
          <FlipWords words={flipWords} />
          {/* Description */}
          <TextGenerateEffect
            words={words}
            className="text-sm sm:text-base lg:text-lg text-gray-600"
          />
        </div>
      </BackgroundGradient>
    </div>
  );
};

export default Intro;
