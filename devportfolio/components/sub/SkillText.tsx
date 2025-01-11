"use client"
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function SkillText() {
    const ref = useRef(null);
    const isInView = useInView(ref);
  
    return (
      <div className='montserrat-reg w-full h-auto flex flex-col items-center justify-center gap-3 pt-20'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <h1 className='montserrat-hero text-[40px] font-semibold cursor-pointer bg-gradient-right'> My Skills </h1>
        </motion.div>
      </div>
    );
  }
