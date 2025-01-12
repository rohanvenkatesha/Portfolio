import { Backend_skill, Frontend_skill, Full_stack, Other_skill } from '@/constants';
// import { transform } from 'next/dist/build/swc/generated-native'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider';
import SkillText from '../sub/SkillText';
import StarryBackground from './StarryBackground';
// import Image from 'next/image';

const Skills = () => {
  return (
    // <div>Skills</div>
    <section 
    id='skills'
    className="w-full h-full flex flex-col items-center justify-center relative gap-3 mt-10"
    style={{transform: 'scale(0.9)'}}>
        <SkillText />
        <StarryBackground/>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-10 items-center'>
            {Frontend_skill.map((image, index) => (
                <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                skillName={image.name}/>
            ))}
        </div>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-10 items-center'>
            {Backend_skill.map((image, index) => (
                <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                skillName={image.name}/>
            ))}
        </div>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-10 items-center'>
            {Full_stack.map((image, index) => (
                <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                skillName={image.name}/>
            ))}
        </div>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-10 items-center'>
            {Other_skill.map((image, index) => (
                <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                skillName={image.name}/>
            ))}
        </div>
        {/* <div className='w-full h-full absolute'>
        <div className='w-full h-full z-[-10] opacity-30 bg-[#ffffff] relative flex items-center justify-center bg-cover'> */}

            {/* <Image 
                src="/gg5.jpg" 
                alt="Black Hole" 
                fill
                className="object-cover z-[1]" 
                /> */}
            {/* </div>
        </div>             */}
            {/* <video
            className='w-full h-auto'
            autoPlay
            preload='false'
            playsInline
            muted
            loop
            src='/blackhole.webm'/>
        </div> */}
    </section>
  );
};

export default Skills