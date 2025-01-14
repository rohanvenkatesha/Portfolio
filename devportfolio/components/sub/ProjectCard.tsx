import { ArrowUpRightIcon } from '@heroicons/react/24/outline'; // Import the icon
import { motion } from "framer-motion"; // Import motion for animation
import Image from "next/image";
import { Card, CardHeader, CardBody, Link, Button } from "@nextui-org/react"; // Import NextUI Card components
import React, { useState } from "react";
import { FaGithub } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'; // Chevron Icons for toggle
import { IoLogoYoutube } from 'react-icons/io'; // Import YouTube logo from react-icons

// Helper function to generate a random color
function getRandomColor(): string {
  const r = Math.floor(Math.random() * 256); // Random red value [0, 255]
  const g = Math.floor(Math.random() * 256); // Random green value [0, 255]
  const b = Math.floor(Math.random() * 256); // Random blue value [0, 255]
  const alpha = 0.2; // Set opacity to 0.2 for a dim effect
  return `rgba(${r}, ${g}, ${b}, ${alpha})`; // RGBA color with alpha for opacity
}
interface Props {
  src: string;
  title: string;
  description: string;
  skills: string[];
  githubLink: string;
  youtubeLink?: string;
}

const ProjectCard = ({ src, title, description, skills, githubLink, youtubeLink}: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle "Read more" / "Read less"
  const toggleDescription = () => setIsExpanded(!isExpanded);

  return (
    <Card className="py-2 group relative flex flex-col justify-between bg-gradient-to-r from-gray-800 to-gray-1000 bg-opacity-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mx-auto">
      {/* Card Header */}
      <CardHeader className="pb-0 pt-2 px-4 py-4 flex-col items-start">
        <p className="text-tiny uppercase font-semibold text-white">{title}</p>
      </CardHeader>

      {/* Card Body with Image */}
      <CardBody className="overflow-visible relative bg-transparent">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className='w-full rounded-lg mx-4'
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black "></div>

        {/* GitHub Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-2 bg-black text-white rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            whileHover={{ scale: 1.1 }} // Scale on hover
            whileTap={{ scale: 0.95 }}  // Scale on tap
          >
            <FaGithub className="mr-2 text-lg" /> {/* GitHub icon */}
            <span className="text-sm font-semibold">GitHub</span> {/* Button text */}
          </motion.a>
        </div>
      </CardBody>

      {/* Project Description */}
      <div className="px-4 py-2 text-white text-sm">
        <p
          className={`line-clamp-2 ${isExpanded ? 'line-clamp-none' : ''} transition-all duration-300`}
          style={{ fontSize: '0.75rem' }} // Smaller text size
        >
          {description}
        </p>

        {description.length > 100 && ( // Show Read More only if text is long
          <button
            onClick={toggleDescription}
            className="flex items-center text-white text-xs mt-1 group hover:text-blue-400 transition-all duration-300 relative"
          >
            <span
              className={`mr-2 transition-all duration-300 group-hover:translate-x-2 ${
                isExpanded ? 'rotate-180' : ''
              }`}
            >
              {isExpanded ? (
                <IoIosArrowUp className="text-sm transform rotate-180" /> // Up Chevron for Read Less
              ) : (
                <IoIosArrowDown className="text-sm" /> // Down Chevron for Read More
              )}
            </span>
            <span className="font-semibold">
              {isExpanded ? 'Read less' : 'Read more'}
            </span>
          </button>
        )}

      {/* Conditionally render YouTube link if available */}

      {youtubeLink && (
        <div className="mt-4 flex justify-center">
          <motion.a
            href={youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-start text-white text-xs font-semibold hover:text-red-600 transition-all duration-300"
            whileHover={{ scale: 1.1 }} // Slight zoom on hover
            whileTap={{ scale: 0.95 }}  // Scale down on tap
          >
            {/* YouTube Logo */}
            <IoLogoYoutube className="mr-3 text-2xl text-red-500" />
            
            {/* Text */}
            <span className="text-sm font-semibold tracking-wide">Watch Now</span>
          </motion.a>
        </div>
      )}


      </div>

      {/* Render skills */}
      <div className="p-4 flex flex-wrap gap-2 mt-1">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="text-white text-xs py-1 px-3 rounded-full inline-block cursor-pointer transition-transform transform hover:scale-105"
            style={{
              backgroundColor: getRandomColor(), // Assign random color to each skill pill
              fontSize: '0.65rem', // Smaller text size for the skill pill
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', // Soft shadow for depth
            }}
          >
            {skill}
          </span>
        ))}
      </div>


    </Card>
  );
};

export default ProjectCard;
