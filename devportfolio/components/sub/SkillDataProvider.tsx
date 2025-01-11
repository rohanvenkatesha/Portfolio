"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  skillName: string; // Name of the skill to display on hover
}

const SkillDataProvider = ({ src, width, height, index, skillName }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  })

  const [hovered, setHovered] = useState(false);

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const animationDelay = 0.3

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      variants={imageVariants}
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
      transition={{ duration: 0.5, delay: index * animationDelay }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ position: 'relative', display: 'inline-block', cursor: 'pointer' }}
    >
      {/* Image with scaling effect */}
      <motion.div
        style={{ position: 'relative' }}
        animate={{
          scale: hovered ? 1.1 : 1,  // Slightly enlarge image when hovered
        }}
        transition={{
          duration: 0.3,  // Duration of scale animation
          ease: 'easeInOut',  // Easing for smooth animation
        }}
      >
        <Image
          src={src}
          width={width}
          height={height}
          alt='skill image'
        />
      </motion.div>

      {/* Skill Name Displayed on Hover */}
      {hovered && (
        <motion.div
        className='montserrat-reg'
          style={{
            position: 'absolute',
            bottom: '100%', // Position the text near the top of the image
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'white',
            fontSize: '10px', // Very small font size
            fontWeight: 'normal', // Normal font weight
            zIndex: 10,
            pointerEvents: 'none', // Prevent interference with image hover
            marginBottom: '5px', // Add some space between the text and the image
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {skillName}
        </motion.div>
      )}
    </motion.div>
  )
}

export default SkillDataProvider;
