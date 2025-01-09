import { transform } from 'next/dist/build/swc/generated-native'
import React from 'react'

const Skills = () => {
  return (
    // <div>Skills</div>
    <section 
    id='skills'
    className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20'
    style={{transform: 'scale(0.9)'}}>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-10 items-center'>
            
        </div>
        {/* <h1 className='text-4xl font-bold text-white'>Skills</h1>
        <div className='flex flex-row gap-10 mt-10'>
            <div className='flex flex-col gap-5'>
                <h1 className='text-2xl font-bold text-white'>Languages</h1>
                <div className='flex flex-row gap-5'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-xl font-bold text-white'>Python</h1>
                        <h1 className='text-xl font-bold text-white'>JavaScript</h1>
                        <h1 className='text-xl font-bold text-white'>TypeScript</h1>
                        <h1 className='text-xl font-bold text-white'>Java</h1>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-xl font-bold text-white'>Go</h1>
                        <h1 className='text-xl font-bold text-white'>C++</h1>
                        <h1 className='text-xl font-bold text-white'>C#</h1>
                        <h1 className='text-xl font-bold text-white'>SQL</h1>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='text-2xl font-bold text-white'>Frameworks</h1>
                <div className='flex flex-row gap-5'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-xl font-bold text-white'>Django</h1>
                        <h1 className='text-xl font-bold text-white'>Flask</h1>
                        <h1 className='text-xl font-bold text-white'>Express.js</h1>
                        <h1 className='text-xl font-bold text-white'>React.js</h1>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-xl font-bold text-white'>Next.js</h1>
                        <h1 className='text-xl font-bold text-white'>Angular</h1>
                        <h1 className='text-xl font-bold text-white'>Spring Boot</h1>
                        <h1 className='text-xl font-bold text-white'>ASP.NET</h1>
                    </div>
                </div>
            </div>
        </div> */}
    </section>
  );
};

export default Skills