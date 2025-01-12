import { ArrowUpRightIcon } from '@heroicons/react/24/outline'; // Import the icon
import { motion } from "framer-motion"; // Import motion for animation
import Image from "next/image";
import { Card, CardHeader, CardBody } from "@nextui-org/react"; // Import NextUI Card components
import React, { useState } from "react";

// Helper function to generate a random color
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

interface Props {
  src: string;
  title: string;
  description: string;
  skills: string[];
  githubLink: string;
}

const ProjectCard = ({ src, title, description, skills, githubLink }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle "Read more" / "Read less"
  const toggleDescription = () => setIsExpanded(!isExpanded);

  return (
    <Card className="py-2 group relative flex flex-col justify-between bg-gradient-to-r from-gray-800 to-gray-1000 bg-opacity-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
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
          className="w-full rounded-lg mx-4"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black "></div>

        {/* GitHub Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-l from-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="Welcome-box"
            whileHover={{ scale: 1.1 }} // Add animation on hover
            whileTap={{ scale: 0.95 }}  // Add tap effect
          >
            <ArrowUpRightIcon className="arrow-icon-color mr-[10px] h-5 w-5" />
            <h1 className="button text-center text-white cursor-pointer">GitHub</h1>
          </motion.a>
        </div>
      </CardBody>

      {/* Project Description */}
      <div className="px-4 py-2 text-white text-sm">
        <p
          className={`line-clamp-3 ${isExpanded ? 'line-clamp-none' : ''} transition-all duration-300`}
          style={{ fontSize: '0.75rem' }} // Smaller text size
        >
          {description}
        </p>

        {description.length > 100 && ( // Show Read More only if text is long
          <button
            onClick={toggleDescription}
            className="text-blue-400 text-xs mt-1 hover:underline"
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        )}
      </div>

      {/* Render skills */}
      <div className="p-4 flex flex-wrap gap-2 mt-1">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="text-white text-xs py-1 px-2 rounded-full"
            style={{
              backgroundColor: getRandomColor(), // Assign random color to each skill pill
              fontSize: '0.65rem', // Smaller text size for the skill pill
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
