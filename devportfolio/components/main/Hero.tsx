import React from 'react'
import HeroContent from '../sub/HeroContent'
// import Star from 'next/script';

const Hero = () => {
  return (
    <div id="about-me" className='relative flex flex-col h-auto w-full py-10' >
            <HeroContent />
    </div>
  );
};

export default Hero