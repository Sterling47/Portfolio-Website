import React from 'react'
import './Resume.css'
import dlfile from '../../assets/file.png'

const Resume = () => {
  const skills = {
    frontEnd: [
      "TypeScript",
      "React",
      "CSS",
      "Animation Libraries",
      "REST APIs",
      "Vite",
      "E2E Testing",
      "CRUD",
    ],
    backEnd: [
      "Express.js",
      "PostgreSQL",
      "Knex.js",
      "SQL",
    ],
    testing: [
      "Cypress",
      "Mocha/Chai",
      "Unit Testing",
      "Integration Testing",
      "UI/UX Testing",
      "End-to-End Testing (Cypress)",
    ],
    'tools/Platforms': [
      "Git",
      "GitHub",
      "Figma",
      "Jira",
      "Github Projects",
      "Circle CI",
      "Miro",
    ],
    softSkills: [
      "Collaboration",
      "Technical Articulation",
      "Technical Documentation Comprehension",
      "Pair Programming",
      "Code Reviews",
    ],
    interests: [
      "SEO",
      "Next.js",
      "Python",
      "Continuous Learning",
    ],
  };

  return (
    <div className='wrapper'>
      <h1 className='resume-h1'>Resume</h1>
      <button><img src={dlfile} alt="" /></button>
      <div className='resume-wrapper'>
        <div className='resume-header'>
          <h2>Adam Konber</h2>
          <h2>FullStack Engineer - FE Focused</h2>
          <h3>Denver, CO | konber3@gmail.com</h3>
        </div>
        <p>
          Full-Stack React Developer with a strong foundation in front-end engineering and a growing mastery of back-end technologies. Leveraging a unique background in research and development and business management to deliver user-centric, innovative software solutions. Adept at both creative problem-solving and collaborative planning, I bring a holistic approach to every project.
        </p>
        <h3>SKILLS</h3>
        <div className='skills-grid'>
          {Object.entries(skills).map(([category, skillsArray], index) => (
            <div key={index} className='skill-category'>
              <h4>{category.replace(/([A-Z])/g, ' $1').trim()}</h4>
              <div className='skill-items'>
                {skillsArray.map((skill, idx) => (
                  <div key={idx} className='skill-item'>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className='education-wrapper'>
          <h3>EDUCATION</h3>
          <h4>Turing School of Software and Design | Front End Engineering Certificate of Completion</h4>
          <ul>
            <li>1500 Hours of programming experience over a seven month, intensive ACCET-accredited software development program.</li>
            <li>Elected to the Student Leader Committee, leading and mentoring students through their learning experience.</li>
            <li>Recipient of Diversity and Inclusivity Scholarship</li>
          </ul>
        </div>
        <h3>RECENT PROJECTS</h3>
        <h4> CHATTR - NEXT.JS Application - <a href="https://github.com/Sterling47/ChatApp">(Repository)</a> Currently work in progress</h4>

        <span>Tech Stack:</span> Next.js | Prisma | Kinde Auth | Postgresql | Pusher.js
        <p>
        Chattr enables real-time messaging with Pusher, private and public room creation, user authentication, and a customizable friends list, built with server-side and client-side rendering for seamless collaboration and connectivity.</p>
        <ul>
          <li>Dynamic UI: Utilized React's state management and CRUD operations to create a responsive, interactive user interface.</li>
          <li>Enhanced UX: Implemented Framer-Motion for seamless animation transitions, elevating user engagement.</li>
          <li>Tested Reliability: Ensured application stability with comprehensive Cypress testing across all user flows.</li>
        </ul>
        <h4>Ingredient Search - FullStack (FE Repo) (BE Repo) (Deploy) 85 Hours</h4>
        <span>Tech Stack:</span> React.js, Express.js, PostgreSQL, Knex.js, HTML, CSS, JavaScript
        <p>Designed and developed a full-stack application that enables users to efficiently search, view, and manage detailed food ingredient information.</p>
        <ul>
          <li>
            Full-Stack Development: Developed a responsive frontend and a robust backend, integrating migration files, seed files, and environment variables for secure and efficient data management.
          </li>
          <li>
            Data Management: Utilized CSV files for data import and PostgreSQL for reliable, scalable database management.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Resume