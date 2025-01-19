"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-20 w-full z-[20]"
    >
      <div className="montserrat-reg h-full w-full flex flex-col gap-4 justify-center text-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="montserrat-hero flex flex-col gap-2 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi, I am <br />
            <span className="cursor-pointer bg-gradient-right">
              {" "}
              Rohan Venkatesha{" "}
            </span>
            <br />
            Senior Software Engineer.
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-300 my-5 max-w-[500px]"
        >
          With 4+ years of experience in backend & API development,
          infrastructure systems engineering, and cloud & on-prem deployments,
          I am a seasoned Full stack engineer with Passionate about building
          scalable software solutions and delivering results using modern
          technologies.
        </motion.p>
        <motion.div 
        className="flex space-x-4 gap-2 items-center"
        variants={slideInFromLeft(1)}>
          <motion.a
            // variants={slideInFromLeft(1)}
            className="Welcome-box flex items-center"
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1zf7aHGIk7Qymr7dP7ilbvY25KHc0bVIb/view?usp=drive_link"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowDownCircleIcon className="arrow-icon-color mr-[10px] h-5 w-5" />
            <h1 className="button text-white cursor-pointer">
            Resume
            </h1>
          </motion.a>
          <motion.a
            // variants={slideInFromLeft(1)}
            href="https://github.com/rohanvenkatesha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}>
          <FaGithub className="h-6 w-6" />
          </motion.a>
          <motion.a
            // variants={slideInFromLeft(1)}
            href="https://www.linkedin.com/in/rohan-venkatesha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-white transition duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}>
          <FaLinkedin className="h-6 w-6" />
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <div className="relative rounded-full ml-2 p-1">
          <div className="absolute inset-0 rounded-full gradient-border-animation"></div>
          <Image
            src="/home.jpg"
            alt="profile picture"
            height={400}
            width={400}
            className="relative rounded-full bg-white"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
