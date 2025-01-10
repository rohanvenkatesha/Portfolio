"use client"
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function SkillText() {
    const ref = useRef(null);
    const isInView = useInView(ref);
  
    return (
      <div className='w-full h-auto flex flex-col items-center justify-center gap-3'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <span className='text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500'>
            My Skills
          </span>
        </motion.div>
      </div>
    );
  }
