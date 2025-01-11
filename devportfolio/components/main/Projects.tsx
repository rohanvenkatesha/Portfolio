"use client"
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import StarryBackground from './StarryBackground';
import ProjectCard from '../sub/ProjectCard';
import { MdArrowUpward, MdArrowDownward } from 'react-icons/md'; // Import both arrow-up and arrow-down icons

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView_title = useInView(ref, { once: false });
  const isInView_button = useInView(ref, { once: true });

  const [showMore, setShowMore] = useState(false); // State to toggle more/less
  const [scrollPos, setScrollPos] = useState(0); // State to store the scroll position

  const cards = [
    {
      src: '/portf.png',
      title: 'Project 1',
      description: 'Description for project 1',
      githubLink: 'https://github.com/rohanvenkatesha/MarketBasket-Apriori-Analysis',
    },
    {
      src: '/portf.png',
      title: 'Project 2',
      description: 'Description for project 2',
      githubLink: 'https://github.com/rohanvenkatesha/MarketBasket-Apriori-Analysis',
    },
    {
      src: '/portf.png',
      title: 'Project 3',
      description: 'Description for project 3',
      githubLink: 'https://github.com/rohanvenkatesha/MarketBasket-Apriori-Analysis',
    },
    {
      src: '/portf.png',
      title: 'Project 4',
      description: 'Description for project 4',
      githubLink: 'https://github.com/rohanvenkatesha/MarketBasket-Apriori-Analysis',
    },
    {
      src: '/portf.png',
      title: 'Project 5',
      description: 'Description for project 5',
      githubLink: 'https://github.com/rohanvenkatesha/MarketBasket-Apriori-Analysis',
    },
    {
      src: '/portf.png',
      title: 'Project 6',
      description: 'Description for project 6',
      githubLink: 'https://github.com/rohanvenkatesha/MarketBasket-Apriori-Analysis',
    },
    {
      src: '/portf.png',
      title: 'Project 7',
      description: 'Description for project 7',
      githubLink: 'https://github.com/rohanvenkatesha/MarketBasket-Apriori-Analysis',
    },
    {
      src: '/portf.png',
      title: 'Project 8',
      description: 'Description for project 8',
      githubLink: 'https://github.com/rohanvenkatesha/MarketBasket-Apriori-Analysis',
    },
  ];

  const displayedCards = showMore ? cards : cards.slice(0, 6); // Show 6 or all cards based on toggle

  // Function to store the current scroll position when toggling between View More/View Less
  const handleScrollPosition = () => {
    setScrollPos(window.scrollY); // Store the current scroll position
  };

  // Remove auto scroll logic to focus on toggle functionality
  useEffect(() => {
    if (!showMore) {
      window.scrollTo({
        top: scrollPos, // Scroll back to the previous position
        behavior: 'smooth',
      });
    }
  }, [showMore, scrollPos]);

  return (
    <section
      className="w-full h-full flex flex-col items-center justify-center relative gap-3 pt-20 py-20"
      id="projects"
      ref={ref}
    >
      <StarryBackground />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView_title ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mb-6"
      >
        <h1 className="text-[40px] font-semibold cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 hover:bg-gradient-to-l transition-all duration-1000 py-10">
          My Projects
        </h1>
      </motion.div>

      <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-5 px-10">
        {displayedCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              type: 'spring',
              stiffness: 60,
              delay: index * 0.3,
            }}
            className="w-full"
          >
            <ProjectCard
              src={card.src}
              title={card.title}
              description={card.description}
              githubLink={card.githubLink}
            />
          </motion.div>
        ))}
      </div>

      {/* Conditionally render the View More button based on visibility */}
      {isInView_button && cards.length > 6 && ( // Show button only if the section is in view
        <motion.a
          onClick={() => {
            handleScrollPosition(); // Store the current scroll position when toggling
            setShowMore(!showMore);
          }}
          className="Welcome-box py-[9px] px-[7px] border border-[#7042f88b] opacity-[1] flex items-center mt-5"
          whileHover={{ scale: 1.1 }} // Add animation on hover
          whileTap={{ scale: 0.95 }}  // Add tap effect
        >
          {showMore ? (
            <>
              <MdArrowUpward className="text-[#b49bff] mr-[10px] h-5 w-5" />
              <h1 className="button text-center text-white cursor-pointer">View Less</h1>
            </>
          ) : (
            <>
              <MdArrowDownward className="text-[#b49bff] mr-[10px] h-5 w-5" />
              <h1 className="button text-center text-white cursor-pointer">View More</h1>
            </>
          )}
        </motion.a>
      )}
    </section>
  );
};

export default Projects;
