"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import StarryBackground from './StarryBackground';
import ProjectCard from '../sub/ProjectCard';


const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const cards = [
    {
      src: '/portf.png',
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      src: '/portf.png',
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      src: '/portf.png',
      title: 'Project 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center relative gap-3"
      id="projects">
      <StarryBackground />
       <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="mb-6"
              >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          My Projects
        </h1>
      </motion.div>

      <div className="h-full w-full flex flex-col md:flex-row gap-5 px-10">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
              delay: index * 0.5, // Stagger delay for each card
            }}
            className="w-full md:w-1/3"
          >
            <ProjectCard
              src={card.src}
              title={card.title}
              description={card.description}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
