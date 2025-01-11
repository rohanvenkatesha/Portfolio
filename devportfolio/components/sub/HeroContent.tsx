"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight} from '@/utils/motion'
import { ArrowDownCircleIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';

const HeroContent = () => {
  return (
    <motion.div 
    initial="hidden"
    animate="visible"
    className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'>
        <div className='h-full w-full flex flex-col gap-4 justify-center text-start'>
            <motion.div
            variants={slideInFromLeft(0.5)}
            className='flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto'>
                <span>
                Hi, I am <br/>
                <span className='cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 hover:bg-gradient-to-l transition-all duration-1000'> Rohan Venkatesha </span>
                <br/>
                Senior Software Engineer.
                </span>
            </motion.div>
            <motion.p
            variants={slideInFromLeft(0.8)}
            className='text-lg text-gray-300 my-5 max-w-[600px]'>
               With 4+ years of experience in backend & API development, infrastructure systems engineering, and cloud & on-prem deployments, 
               I'm a seasoned Full stack engineer with Passionate about building scalable software solutions and delivering results using modern technologies.
            </motion.p>
            <div className="flex space-x-4">
            <motion.a
                variants={slideInFromLeft(1)}
                className="Welcome-box py-[9px] px-[7px] border border-[#7042f88b] opacity-[1] flex items-center"
                href='https://drive.google.com/file/d/1zf7aHGIk7Qymr7dP7ilbvY25KHc0bVIb/view?usp=drive_link'
                whileHover={{ scale: 1.1 }} // Add animation on hover
                whileTap={{ scale: 0.95 }}  // Add tap effect
            >   
                <ArrowDownCircleIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                <h1 className="button text-center text-white cursor-pointer">Download Resume</h1>
            </motion.a>
            </div>
        </div>

        <motion.div
        variants={slideInFromRight(0.8)}
        className='w-full h-full flex justify-center items-center'>
            <Image
            src='/home.jpg'
            alt='profile picture'
            height={350}
            width={350}
            className='home__img'
            />
        </motion.div>
    </motion.div>
  );
};

export default HeroContent