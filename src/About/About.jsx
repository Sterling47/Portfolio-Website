import React from 'react';
import './about.css';
import access from '../assets/accesibility.png';
import thinker from '../assets/design-thinking.png';
import team from '../assets/team.png';
import tech from '../assets/tool.png';
import problemSolve from '../assets/piechart.png';

const About = () => {
  return (
    <div className="flex flex-col justify-center mt-[16rem] sm:mt-0 items-center h-full  sm:px-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 p-6 sm:p-8 rounded-lg w-full max-w-[90%] max-h-[90%]  gap-6">
        {/* Section 1: Introduction */}
        <div className="col-span-12 md:col-span-9 md:row-span-1 bg-shadowGray rounded-lg p-6 backdrop-blur-[98px] hover:shadow-gradient">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-green-500 to-teal-500 font-bold mb-4 text-center">
            Technical Roadmap
          </h2>
          <p className="text-base sm:text-lg text-white">
          Since starting my journey as a self-taught coder and later attending Turing School of Software, my technical growth has been driven by curiosity, hands-on experience, and a commitment to building real-world applications. I began with JavaScript, expanding into React, Express.js, and PostgreSQL to develop full-stack applications. My approach emphasizes accessibility, efficient processes, and research-driven development, ensuring scalable and maintainable code. Through projects like my dynamic movie review app and Beer Here, I have refined my skills in state management, API integration, end-to-end testing with Cypress, and UI animations with Framer Motion. Collaborating on group projects, shadowing at Ibotta, and networking with industry professionals have further shaped my ability to learn quickly, adapt, and contribute meaningfully to development teams.
          </p>
        </div>

        {/* Section 2: Interests */}
        <div className="col-span-12 md:col-span-3 md:row-span-2 bg-shadowGray flex items-center flex-col rounded-lg p-6 backdrop-blur-[98px] hover:shadow-gradient">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-green-500 to-teal-500 mb-4">
            Technical Skills
          </h3>
          
            <div className="flex flex-col w-full justify-evenly gap-4">
              {/* Frontend */}
              <div className="flex flex-col items-center justify-center text-center">
                <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-green-500 to-teal-500">FrontEnd</h4>
                <ul className="flex flex-col  justify-center list-inside text-white">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>Tailwind</li>
                  <li>CSS</li>
                  <li>MUI</li>
                  <li>Framer Motion</li>
                </ul>
              </div>
              {/* Backend */}
              <div className="flex flex-col items-center text-center">
                <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-green-500 to-teal-500">Backend</h4>
                <ul className="flex flex-col justify-center list-inside text-white">
                  <li>PostgreSQL</li>
                  <li>Express.js</li>
                  <li>Prisma</li>
                  <li>Knex.js</li>
                  <li>REST APIs</li>
                  <li>WebSockets</li>
                </ul>
              </div>
        {/* Section 4: Technical Skills */}
              <div className="flex flex-col items-center text-center">
                <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-green-500 to-teal-500">Other Skills</h4>
                <ul className="flex flex-col justify-center list-inside text-white">
                  <li>Git</li>
                  <li>npm</li>
                  <li>Vite</li>
                  <li>Cypress</li>
                  <li>CI/CD</li>
                  <li>AWS EC2</li>
                  <li>Agile</li>
                  <li>Technical Documentation</li>
                  <li>Code Reviews</li>
                </ul>
              </div>
            </div>
        </div>

        {/* Section 3: Challenges */}
        {/* <div className="col-span-12 md:col-span-9 bg-shadowGray rounded-lg p-6 md:row-span-2 backdrop-blur-[98px] hover:shadow-gradient">
          <h3 className="text-lg sm:text-xl md:text-2xl text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-green-500 to-teal-500 font-semibold mb-4">
            Challenges I've Overcome
          </h3>
          <p className="text-base sm:text-lg text-white">
            Learning new technologies like Express.js, PostgreSQL, and Prisma while developing scalable fullstack applications. Remote collaboration taught me adaptability, problem-solving, and effective communication in a fast-paced environment.
          </p>
        </div> */}

          {/* Other Skills */}
        <div className="col-span-12 md:col-span-9 flex flex-col items-center bg-shadowGray rounded-lg p-6 md:row-span-1 backdrop-blur-[98px] hover:shadow-gradient">
        <h3 className="text-lg sm:text-xl text-center md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-green-500 to-teal-500 font-semibold mb-4">
            Interests & Hobbies
          </h3>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center text-center">
              <img src={team} alt="Collaboration" className="h-12 sm:h-16 w-12 sm:w-16 mb-2" />
              <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-green-500 to-teal-500">Community Meetups</h4>
              <p className="text-white">
              I regularly attend local tech meetups, networking events, and conventions such as Denver Startup Week, React Denver, and Denver Dev Happy Hour. Engaging with the tech community offers invaluable opportunities to learn from industry professionals, expand my network, and contribute meaningfully through shared knowledge and collaboration. These events keep me connected to emerging trends, foster professional growth, and inspire innovative problem-solving.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={tech} alt="Technology" className="h-12 sm:h-16 w-12 sm:w-16 mb-2" />
              <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-green-500 to-teal-500">Emerging Tech</h4>
              <p className="text-white">
                Enthusiastic about AI, WebSockets, and scalable fullstack solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
