import React from 'react';
import './about.css';
import access from '../assets/accesibility.png';
import thinker from '../assets/design-thinking.png';
import team from '../assets/team.png';
import tech from '../assets/tool.png';
import problemSolve from '../assets/piechart.png';
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex flex-col justify-center mt-[16rem] sm:mt-0 items-center h-full  sm:px-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 p-6 sm:p-8 rounded-lg w-full max-w-[90%] max-h-[90%]  gap-6">
        {/* Section 1: Introduction */}

<motion.div 
  initial={{ opacity: 0, y: 30 }} 
  whileInView={{ opacity: 1, y: 0 }} 
  transition={{ duration: 0.8 }} 
  viewport={{ once: true }}
  className="col-span-12 md:col-span-9 md:row-span-1 bg-shadowGray rounded-xl p-8 backdrop-blur-[98px] hover:shadow-gradient shadow-lg border border-teal-500/20"
>
  <h2 className="text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-green-500 to-teal-500 font-bold mb-6 text-center">
    Technical Roadmap
  </h2>

  <p className="text-base sm:text-lg text-white leading-relaxed">
    My journey began as a self-taught coder, later attending Turing School of Software to refine my skills. 
    With a foundation in JavaScript, I expanded into <span className="font-semibold text-teal-300">React, Express.js, and PostgreSQL</span> 
    to build full-stack applications. I focus on accessibility, performance, and research-driven development to 
    create scalable, maintainable code.
  </p>

  <div className="mt-6 p-4 bg-teal-900/30 rounded-lg border border-teal-500/30">
    <h3 className="text-lg font-semibold text-teal-300 mb-2">Key Skills & Technologies:</h3>
    <p className="text-white">
      API integration, state management, end-to-end testing (Cypress), UI animations (Framer Motion), and team collaboration.
    </p>
  </div>

  <p className="text-base sm:text-lg text-white mt-6">
    Through projects like my dynamic movie review app and <span className="font-semibold text-teal-300">Beer Here</span>, 
    I’ve deepened my expertise in modern frontend & backend development. Engaging with industry professionals 
    and shadowing at <span className="font-semibold text-teal-300">Ibotta</span> has shaped my ability to learn, adapt, and contribute effectively.
  </p>
</motion.div>


        {/* Section 2: Interests */}
        <motion.div 
  initial={{ opacity: 0, y: 30 }} 
  whileInView={{ opacity: 1, y: 0 }} 
  transition={{ duration: 0.8 }} 
  viewport={{ once: true }}
  className="col-span-12 md:col-span-3 md:row-span-2 bg-shadowGray flex flex-col items-center rounded-xl p-8 backdrop-blur-[98px] hover:shadow-gradient shadow-lg border border-teal-500/20"
>
  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-green-500 to-teal-500 mb-6">
    Technical Skills
  </h3>

  <div className="flex flex-col w-full gap-6">
    {[
      {
        title: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "Tailwind", "CSS", "MUI", "Framer Motion"]
      },
      {
        title: "Backend",
        skills: ["PostgreSQL", "Express.js", "Prisma", "Knex.js", "REST APIs", "WebSockets"]
      },
      {
        title: "Other Skills",
        skills: ["Git", "npm", "Vite", "Cypress", "CI/CD", "AWS EC2", "Agile", "Documentation", "Code Reviews"]
      }
    ].map((category, index) => (
      <motion.div 
        key={category.title}
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: index * 0.2 }} 
        viewport={{ once: true }}
        className="flex flex-col items-center text-center p-4 bg-teal-900/30 rounded-lg border border-teal-500/30"
      >
        <h4 className="text-lg font-semibold text-teal-300">{category.title}</h4>
        <ul className="flex flex-col items-start w-[80%] list-disc list-inside mt-3 text-white marker:text-teal-300 text-base sm:text-lg">
          {category.skills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
      </motion.div>
    ))}
  </div>
</motion.div>

              {/* Other Skills */}
              <motion.div 
  initial={{ opacity: 0, y: 30 }} 
  whileInView={{ opacity: 1, y: 0 }} 
  transition={{ duration: 0.8 }} 
  viewport={{ once: true }}
  className="col-span-12 md:col-span-9 flex flex-col items-center bg-shadowGray rounded-xl p-8 md:row-span-1 backdrop-blur-[98px] hover:shadow-gradient shadow-lg border border-teal-500/20"
>
  <h3 className="text-lg sm:text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-green-500 to-teal-500 font-semibold mb-6 text-center">
    Interests & Hobbies
  </h3>

  <div className="flex flex-col gap-8 w-full">
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, delay: 0.2 }} 
      viewport={{ once: true }}
      className="flex flex-col items-center text-center p-4 bg-teal-900/30 rounded-lg border border-teal-500/30"
    >
      <img src={team} alt="Collaboration" className="h-14 sm:h-18 w-14 sm:w-18 mb-3" />
      <h4 className="text-lg font-semibold text-teal-300">Community Meetups</h4>
      <p className="text-white text-base sm:text-lg">
        I regularly attend <span className="font-semibold text-teal-300">Denver Dev Meetup, React Denver</span>, and other networking events. 
        These meetups help me stay updated on industry trends, foster collaborations, and engage with tech professionals.
      </p>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, delay: 0.4 }} 
      viewport={{ once: true }}
      className="flex flex-col items-center text-center p-4 bg-teal-900/30 rounded-lg border border-teal-500/30"
    >
      <img src={tech} alt="Technology" className="h-14 sm:h-18 w-14 sm:w-18 mb-3" />
      <h4 className="text-lg font-semibold text-teal-300">Emerging Tech</h4>
      <p className="text-white text-base sm:text-lg">
        Continous learning in implenting <span className="font-semibold text-teal-300">AI, WebSockets, and scalable fullstack solutions</span>. 
        I enjoy exploring cutting-edge technologies that enhance performance and user experiences.
      </p>
    </motion.div>
  </div>
</motion.div>

      </div>
    </div>
  );
};

export default About;
