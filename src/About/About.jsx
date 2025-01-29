import React from 'react';
import './about.css';
import access from '../assets/accesibility.png';
import thinker from '../assets/design-thinking.png';
import team from '../assets/team.png';
import tech from '../assets/tool.png';
import problemSolve from '../assets/piechart.png';

const About = () => {
  return (
    <div className="flex flex-col justify-center mt-[16rem] sm:mt-0 items-center min-h-screen px-4 sm:px-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 p-6 sm:p-8 rounded-lg w-full max-w-[90%] gap-6">
        {/* Section 1: Introduction */}
        <div className="col-span-12 md:col-span-9 md:row-span-2 bg-shadowGray rounded-lg p-6 backdrop-blur-[98px] hover:shadow-gradient">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-green-500 to-teal-500 font-bold mb-4 text-center">
            ABOUT ME
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
            I'm a Denver-based Full-Stack Engineer passionate about building scalable, accessible, and maintainable solutions. My background blends self-taught foundations with formal training, emphasizing creative problem-solving and technical adaptability. Whether crafting frontend experiences or optimizing backend workflows, I thrive in collaborative environments and love pushing the boundaries of technology.
          </p>
        </div>

        {/* Section 2: Interests */}
        <div className="col-span-12 md:col-span-3 md:row-span-6 bg-shadowGray flex items-center flex-col rounded-lg p-6 backdrop-blur-[98px] hover:shadow-gradient">
          <h3 className="text-lg sm:text-xl text-center md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-green-500 to-teal-500 font-semibold mb-4">
            Interests & Hobbies
          </h3>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center text-center">
              <img src={team} alt="Collaboration" className="h-12 sm:h-16 w-12 sm:w-16 mb-2" />
              <h4 className="text-lg font-semibold">Collaboration</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Building in teams, code reviews, and cross-team problem-solving.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={tech} alt="Technology" className="h-12 sm:h-16 w-12 sm:w-16 mb-2" />
              <h4 className="text-lg font-semibold">Emerging Tech</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Enthusiastic about AI, WebSockets, and scalable fullstack solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Challenges */}
        <div className="col-span-12 md:col-span-9 bg-shadowGray rounded-lg p-6 md:row-span-2 backdrop-blur-[98px] hover:shadow-gradient">
          <h3 className="text-lg sm:text-xl md:text-2xl text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-green-500 to-teal-500 font-semibold mb-4">
            Challenges I've Overcome
          </h3>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
            Learning new technologies like Express.js, PostgreSQL, and Prisma while developing scalable fullstack applications. Remote collaboration taught me adaptability, problem-solving, and effective communication in a fast-paced environment.
          </p>
        </div>

        {/* Section 4: Technical Skills */}
        <div className="col-span-12 md:col-span-9 bg-shadowGray rounded-lg p-6 md:row-span-2 backdrop-blur-[98px] hover:shadow-gradient">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-green-500 to-teal-500 mb-4">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {/* Frontend */}
            <div className="flex flex-col items-center text-center">
              <img src={thinker} alt="Frontend" className="h-12 sm:h-16 w-12 sm:w-16 mb-2" />
              <h4 className="text-lg font-semibold">Frontend</h4>
              <p className="text-gray-600 dark:text-gray-400">
                React, Next.js, TypeScript, JavaScript, HTML, Tailwind, CSS, Material-UI, Framer Motion
              </p>
            </div>

            {/* Backend */}
            <div className="flex flex-col items-center text-center">
              <img src={problemSolve} alt="Backend" className="h-12 sm:h-16 w-12 sm:w-16 mb-2" />
              <h4 className="text-lg font-semibold">Backend</h4>
              <p className="text-gray-600 dark:text-gray-400">
                PostgreSQL, Express.js, Prisma, Knex.js, REST APIs, WebSockets
              </p>
            </div>

            {/* Other Skills */}
            <div className="flex flex-col items-center text-center">
              <img src={access} alt="Other Skills" className="h-12 sm:h-16 w-12 sm:w-16 mb-2" />
              <h4 className="text-lg font-semibold">Other Skills</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Git, npm, Vite, Cypress, CI/CD, AWS EC2, Agile, Technical Documentation, Code Reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
