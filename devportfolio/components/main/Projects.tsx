"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import StarryBackground from './StarryBackground';
import ProjectCard from '../sub/ProjectCard';
import { MdArrowUpward, MdArrowDownward } from 'react-icons/md'; // Import both arrow-up and arrow-down icons

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView_title = useInView(ref);
  const isInView_button = useInView(ref, { once: true });

  const [showMore, setShowMore] = useState(false); // State to toggle more/less
  const [scrollPos, setScrollPos] = useState(0); // State to store the scroll position

  const cards = [
    {
      src: '/portf.png', // Ensure you use unique images for each project
      title: 'License Plate Detection and Recognition',
      description: 'This project involves detecting and recognizing license plates from images using YOLOv5 for detection and PaddleOCR for recognition.',
      skills: ['YOLOv5', 'PaddleOCR', 'Flask', 'Database Storage', 'API Integration'],
      githubLink: 'https://github.com/rohanvenkatesha/License-Plate-Detection-using-Yolov5-and-Recognition-using-PaddleOCR',
    },
    {
      src: '/portf.png', // Update with unique project image
      title: 'Retrieval Augmented Generation Chatbot',
      description: 'This project involves analyzing PDFs and images, allowing users to ask content-based questions using Streamlit, LangChain, FAISS, and Google Generative AI.',
      skills: ['Streamlit', 'LangChain', 'FAISS', 'Google Generative AI', 'Python', 'NLP'],      
      githubLink: 'https://github.com/rohanvenkatesha/Retrieval-Augmented-Generation-RAG-Chatbot',
    },
    {
      src: '/portf.png', // Update with unique project image
      title: ' Sarcasm Detection Using Natural Language Processing',
      description: 'This project implements a sarcasm detection system using Flask and NLP, allowing users to input sentences and check for sarcasm. It also includes a text-to-speech (TTS) system using Google TTS for auditory feedback.',
      skills: ['Flask', 'NLP', 'Google TTS', 'Python', 'Web Development', 'Text-to-Speech'],      
      githubLink: 'https://github.com/rohanvenkatesha/Sarcasm-Detection-using-Natural-Language-Processing',
    },
    {
      src: '/portf.png', // Ensure you use unique images for each project
      title: 'License Plate Detection and Recognition',
      description: 'This project involves detecting and recognizing license plates from images using YOLOv5 for detection and PaddleOCR for recognition.',
      skills: ['YOLOv5', 'PaddleOCR', 'Flask', 'Database Storage', 'API Integration'],
      githubLink: 'https://github.com/rohanvenkatesha/License-Plate-Detection-using-Yolov5-and-Recognition-using-PaddleOCR',
    },
    {
      src: '/portf.png', // Ensure you use unique images for each project
      title: 'License Plate Detection and Recognition',
      description: 'This project involves detecting and recognizing license plates from images using YOLOv5 for detection and PaddleOCR for recognition.',
      skills: ['YOLOv5', 'PaddleOCR', 'Flask', 'Database Storage', 'API Integration'],
      githubLink: 'https://github.com/rohanvenkatesha/License-Plate-Detection-using-Yolov5-and-Recognition-using-PaddleOCR',
    },
    {
      src: '/portf.png', // Ensure you use unique images for each project
      title: 'License Plate Detection and Recognition',
      description: 'This project involves detecting and recognizing license plates from images using YOLOv5 for detection and PaddleOCR for recognition.',
      skills: ['YOLOv5', 'PaddleOCR', 'Flask', 'Database Storage', 'API Integration'],
      githubLink: 'https://github.com/rohanvenkatesha/License-Plate-Detection-using-Yolov5-and-Recognition-using-PaddleOCR',
    },
    {
      src: '/portf.png', // Ensure you use unique images for each project
      title: 'License Plate Detection and Recognition',
      description: 'This project involves detecting and recognizing license plates from images using YOLOv5 for detection and PaddleOCR for recognition.',
      skills: ['YOLOv5', 'PaddleOCR', 'Flask', 'Database Storage', 'API Integration'],
      githubLink: 'https://github.com/rohanvenkatesha/License-Plate-Detection-using-Yolov5-and-Recognition-using-PaddleOCR',
    },
    // Add more projects
  ];

  const displayedCards = showMore ? cards : cards.slice(0, 6); // Show 6 or all cards based on toggle

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
      className="montserrat-reg w-full h-auto flex flex-col items-center justify-center relative gap-3 py-20 px-10"
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
        <h1 className="montserrat-hero text-[40px] cursor-pointer bg-gradient-right py-10">Projects</h1>
      </motion.div>

      <div className="h-full w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-10">
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
              description={card.description} // Pass description as a prop
              skills={card.skills}
              githubLink={card.githubLink}
            />
          </motion.div>
        ))}
      </div>

      {isInView_button && cards.length > 6 && (
        <motion.a
          onClick={() => {
            handleScrollPosition();
            setShowMore(!showMore);
          }}
          className="Welcome-box mt-5"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {showMore ? (
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
