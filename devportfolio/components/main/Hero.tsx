import React from 'react'
import HeroContent from '../sub/HeroContent'
// import Star from 'next/script';

const Hero = () => {
  return (
    <div id="about-me" className='relative flex flex-col h-full w-full'>
        {/* <video
            autoPlay
            muted
            loop
            className='rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-cover'
            >
                <source src='/blackhole.webm' type='video/webm' />
            </video> */}
            {/* <img 
    src="/gg5.jpg" 
    alt="Black Hole" 
    className="absolute inset-0 h-full w-full object-cover z-[1]"
/> */}

            <HeroContent />
    </div>
  );
};

export default Hero