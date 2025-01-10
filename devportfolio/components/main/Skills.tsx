import { Backend_skill, Frontend_skill, Full_stack, Other_skill } from '@/constants';
// import { transform } from 'next/dist/build/swc/generated-native'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider';
import SkillText from '../sub/SkillText';
import Image from 'next/image';

const Skills = () => {
  return (
    // <div>Skills</div>
    <section 
    id='skills'
    className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20'
    style={{transform: 'scale(1)'}}>
        <SkillText />
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-10 items-center'>
            {Frontend_skill.map((image, index) => (
                <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}/>
            ))}
        </div>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-10 items-center'>
            {Backend_skill.map((image, index) => (
                <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}/>
            ))}
        </div>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-10 items-center'>
            {Full_stack.map((image, index) => (
                <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}/>
            ))}
        </div>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-10 items-center'>
            {Other_skill.map((image, index) => (
                <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}/>
            ))}
        </div>
        <div className='w-full h-full absolute'>
            <div className='w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
            <Image 
                src="/gg5.jpg" 
                alt="Black Hole" 
                fill
                className="object-cover z-[1]" 
                />

            </div>
            {/* <video
            className='w-full h-auto'
            autoPlay
            preload='false'
            playsInline
            muted
            loop
            src='/blackhole.webm'/> */}
        </div>

        
    </section>
  );
};

export default Skills