"use client"
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function SkillText() {
    const ref = useRef(null);
    const isInView = useInView(ref);
  
    return (
      <div className='w-full h-auto flex flex-col items-center justify-center gap-3 pt-20'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <span className='text-[40px] font-semibold cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 hover:bg-gradient-to-l transition-all duration-1000'> My Skills </span>
        </motion.div>
      </div>
    );
  }
