"use client"
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import StarryBackground from './StarryBackground'


export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref);

const Experience = () => {
  return (
    <section
    className=" montserrat-reg w-full h-auto flex flex-col items-center justify-center relative gap-3 py-20"
    id="experience"
  >
    <StarryBackground />

    <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mb-8"
            >
        <h1 className="montserrat-hero text-[40px] cursor-pointer bg-gradient-right py-10">Experience </h1>
      </motion.div>
    </section>
  )
}
};