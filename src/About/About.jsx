import React from 'react';
import './about.css';
import access from '../assets/accesibility.png';
import thinker from '../assets/design-thinking.png';
import team from '../assets/team.png';
import growth from '../assets/team.png';
import tech from '../assets/tool.png';
import problemSolve from '../assets/piechart.png';

const About = () => {
  return (
    <div className="flex flex-col justify-center mt-[16rem] sm:mt-0 items-center min-h-screen px-4 sm:px-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 p-6 sm:p-8 rounded-lg w-full max-w-[90%] gap-6">
        {/* Section 1: Introduction */}
        <div className="col-span-12 md:col-span-9 md:row-span-2 bg-shadowGray rounded-lg p-6 backdrop-blur-md hover:shadow-gradient">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-green-500 to-teal-500 font-bold mb-4 text-center">
            TECHNICAL FOCUS
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
            Fullstack Developer with a love for building dynamic and efficient web applications. I started my journey into the Developer world by enjoying crafting creative solutions and bringing ideas to life using modern web technologies.
          </p>
        </div>

        {/* Section 2: Interests */}
        <div className="col-span-12 md:col-span-3 md:row-span-6 bg-shadowGray rounded-lg p-6 backdrop-blur-md hover:shadow-gradient">
          <h3 className="text-lg sm:text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-green-500 to-teal-500 font-semibold mb-4">
            Interests & Hobbies
          </h3>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center text-center">
              <img src={growth} alt="Growth" className="h-12 sm:h-16 w-12 sm:w-16 mb-2" />
              <h4 className="text-lg font-semibold">Continuous Learning</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Exploring new technologies and staying updated with industry trends.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={tech} alt="Technology" className="h-12 sm:h-16 w-12 sm:w-16 mb-2" />
              <h4 className="text-lg font-semibold">Emerging Tech</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Enthusiastic about AI, APIs, and building robust fullstack solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Challenges */}
        <div className="col-span-12 md:col-span-9 bg-shadowGray rounded-lg p-6 md:row-span-2 backdrop-blur-md hover:shadow-gradient">
          <h3 className="text-lg sm:text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-green-500 to-teal-500 font-semibold mb-4">
            Challenges I've Overcome
          </h3>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
            My journey as a developer has been shaped by overcoming challenges, such as learning new technologies like Express.js and PostgreSQL while building scalable fullstack applications. Collaborating remotely with a team taught me adaptability, problem-solving, and effective communication.
          </p>
        </div>

        {/* Section 4: Favorite Technologies */}
        <div className="col-span-12 md:col-span-9 bg-shadowGray rounded-lg p-6 md:row-span-2 backdrop-blur-md hover:shadow-gradient">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-green-500 to-teal-500 mb-4">
            Favorite Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <img src={thinker} alt="React" className="h-12 sm:h-16 w-12 sm:w-16 mb-2" />
              <h4 className="text-lg font-semibold">React & JavaScript</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Building dynamic, user-focused interfaces.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={problemSolve} alt="Node.js" className="h-12 sm:h-16 w-12 sm:w-16 mb-2" />
              <h4 className="text-lg font-semibold">Node.js & Express</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Creating scalable backends and RESTful APIs.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={access} alt="PostgreSQL" className="h-12 sm:h-16 w-12 sm:w-16 mb-2" />
              <h4 className="text-lg font-semibold">PostgreSQL</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Managing and querying relational databases efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
