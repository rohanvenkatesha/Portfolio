import { ArrowUpRightIcon } from '@heroicons/react/24/outline' // Add this import for the icon
import { motion } from "framer-motion"; // Import motion for animation
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  githubLink: string;
}

const ProjectCard = ({ src, title, description, githubLink }: Props) => {
  return (
    <div className="project-container group">
      {/* Image with hover effect */}
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain transition-all duration-300 group-hover:opacity-40"
      />

      {/* Overlay with GitHub button */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

      {/* Title and description */}
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
