import React from 'react';
import './intro.css';
import '../style.css';
import headshot from '../assets/headshots.jpg';
import figma from '../assets/figma.png';
import cssicon from '../assets/css.png';
import typescript from '../assets/typescript.png';
import sqlicon from '../assets/postgreSQL.png'
import resumeFile from '../assets/file.png';
import adamsResume from '../assets/Adam_Konber_Resume.pdf';
import reacticon from '../assets/atom.png';
import nextIcon from '../assets/next-img.png';
import linked from '../assets/linkedin.png';
import github from '../assets/github.png';
import nodeImg from '../assets/node-img.png';
import tailwindImg from '../assets/tailwind.png';
import { TextGenerateEffect } from '../UI/text-generate-effect';
import { AnimatedTooltip } from '../UI/animated-tooltip';
import { BackgroundGradient } from '../UI/background-gradient';
import { FlipWords } from '../UI/flip-words';



const Intro = () => {
  const tech = [
    { id: 1, name: "React", designation: "Frontend Javascript Library ", image: reacticon },
    { id: 2, name: "TypeScript", designation: "Strongly Typed JavaScript for Scalable Apps", image: typescript },
    { id: 3, name: "Next.js", designation: "Full-Stack Node.js Library ", image: nextIcon },
    { id: 4, name: "Node.js", designation: "Cross-Platform Javascript Enviroment for creating server-side applications ", image: nodeImg },
    { id: 5, name: "Postgres", designation: "Relational Database for Scalable Storage", image: sqlicon },
    { id: 6, name: "Tailwind", designation: "CSS Library ", image: tailwindImg },
    { id: 7, name: "CSS", designation: "Cascade Style Sheet", image: cssicon },
    { id: 8, name: "Figma", designation: "UI/UX Design & Prototyping Tool", image: figma },
  ];

  const LinkedIn = 'https://www.linkedin.com/in/adam-konber';
  const gitLink = 'https://github.com/Sterling47?tab=repositories'

  const words = 'Resourceful, user-focused full-stack engineer passionate about building efficient, accessible, and innovative applications that deliver scalable, data-driven solutions';
  const flipWords = ['Fullstack Engineer', 'Problem Solver', "Hardworking", "Team Player", "Creative", "Innovative", "Adaptable", "Lifelong Learner"];

  return (
    <div className="flex flex-col items-center h-screen w-full m-4 sm:m-6 lg:m-10 p-4 sm:p-6 lg:p-10">

      {/* Top Section */}
      <div className="flex flex-col lg:flex-row lg:justify-center justify-center items-center lg:items-center  h-[50%] w-[100%]">

        {/* Headshot */}
        <img
          className="h-[37%] sm:h-[22%] lg:h-[87%] lg:ml-52 rounded-2xl transition-all duration-1000 ease-in-out hover:shadow-gradient hover:scale-105"
          src={headshot}
          alt="headshot"
        />

          <div className="flex flex-col items-center justify-around w-full lg:w-[50%] h-full p-4 lg:p-0">
            <div className="p-4 sm:p-8 flex">
              <AnimatedTooltip items={tech} />
            </div>
            <div className="flex flex-row items-center justify-center w-full h-full">
              <a target="_blank" href={LinkedIn}>
                <img className="w-8 h-8 sm:w-12 sm:h-12 m-4 sm:m-6 rounded-md hover:scale-110" src={linked} alt="LinkedIn" />
              </a>
              <a target="_blank" href={gitLink}>
                <img className="w-8 h-8 sm:w-12 sm:h-12 m-4 sm:m-6 bg-white rounded-md hover:scale-110" src={github} alt="GitHub" />
              </a>
              <a href={adamsResume} download='Adam_Konber_Resume' className='w-9 h-9 sm:w-12 sm:h-12 grid place-items-center bg-zinc-700 m-4 sm:m-6 rounded-md hover:scale-110'>
                <img className="w-7 h-7 sm:w-12 sm:h-12 bg-zinc-700 rounded-md" src={resumeFile} alt="Resume" />
              </a>
            </div>
          </div>
              </div>
              <BackgroundGradient className="flex flex-col lg:flex-row justify-center items-center h-auto dark:bg-zinc-900 w-full p-4 sm:p-6  rounded-[22px]">
          <div className="flex flex-col justify-center gap-3 items-center w-full lg:w-[80%] text-center mt-6">
            {/* Title */}

          <h2 className='className="text-xl sm:text-2xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-green-500 to-teal-500'>Hey, I'm Adam Konber</h2>
          <FlipWords words={flipWords} />
          {/* Description */}
          <TextGenerateEffect
            words={words}
            className="text-sm w-[80%] sm:text-base lg:text-lg text-gray-600"
          />
        </div>
      </BackgroundGradient>
    </div>
  );
};

export default Intro;
