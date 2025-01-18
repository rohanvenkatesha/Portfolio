"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import StarryBackground from './StarryBackground';
import ProjectCard from '../sub/ProjectCard';
import { MdArrowUpward, MdArrowDownward } from 'react-icons/md'; // Import both arrow-up and arrow-down icons
import cards from '@/constants/Projectdata';

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView_title = useInView(ref);
  const isInView_button = useInView(ref, { once: true });

  const [showMore, setShowMore] = useState(false); // State to toggle more/less
  const [scrollPos, setScrollPos] = useState(0); // State to store the scroll position
  const [displayCount, setDisplayCount] = useState(6); // Track how many cards are displayed


  const handleViewMore = () => {
    setDisplayCount((prevCount) => prevCount + 6); // Increase the display count by 6
  };

  const handleViewLess = () => {
    setDisplayCount(6); // Reset the display count to 6
  };

  const displayedCards = cards.slice(0, displayCount); // Slice the cards to show based on count

  const handleScrollPosition = () => {
    setScrollPos(window.scrollY); // Store the current scroll position
  };

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
      className="montserrat-reg w-full h-auto flex flex-col items-center justify-center relative gap-3 py-20 px-10 mx-auto"
      id="projects"
      ref={ref}
    >
      <StarryBackground />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView_title ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mb-8"
      >
        <h1 className="montserrat-hero text-[40px] font-semibold cursor-pointer bg-gradient-right py-10">Projects</h1>
      </motion.div>

      <div className="h-full w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-10">
        {displayedCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              type: 'spring',
              stiffness: 60,
              delay: index * 0.2,
            }}
            className="w-full"
          >
            <ProjectCard
              src={card.src}
              title={card.title}
              description={card.description}
              skills={card.skills}
              githubLink={card.githubLink}
              youtubeLink={card.youtubeLink ? card.youtubeLink : undefined} // Only pass youtubeLink if it exists
            />
          </motion.div>
        ))}
      </div>

      {isInView_button && cards.length > 6 && (
        <motion.a
          onClick={() => {
            if (displayCount >= cards.length) {
              handleViewLess(); // Reset to 6 if all cards are already displayed
            } else {
              handleViewMore(); // Otherwise, show more cards
            }
          }}
          className="Welcome-box mt-5"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {displayCount >= cards.length ? (
            <>
              <MdArrowUpward className="arrow-icon-color mr-[10px] h-5 w-5" />
              <h1 className="button text-center text-white cursor-pointer">View Less</h1>
            </>
          ) : (
            <>
              <MdArrowDownward className="arrow-icon-color mr-[10px] h-5 w-5" />
              <h1 className="button text-center text-white cursor-pointer">View More</h1>
            </>
          )}
        </motion.a>
      )}
    </section>
  );
};
export default Projects;