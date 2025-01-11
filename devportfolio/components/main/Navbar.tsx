'use client';
import { useState } from 'react';
import { Socials } from '@/constants';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='montserrat-reg w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
      <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
        <a href='#about-me' className='h-auto w-auto flex flex-row items-center'>
          <Image
            src="/NavLogo.png"
            alt='logo'
            width={40}
            height={40}
            className='cursor-pointer hover:animate-slowspin'
          />
          <span className='font-bold ml-[10px] hidden md:block cursor-pointer bg-gradient-right-light'>Rohan Venkatesha</span>
        </a>

        {/* Navbar links (for larger screens) */}
        <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
        <div className='flex items-center w-full h-auto justify-between border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 hidden md:flex'>
            <a 
            href='#skills' 
            className='cursor-pointer bg-gradient-right-light'>
            Skills
            </a>
            <a 
            href='#experience' 
            className='cursor-pointer bg-gradient-right-light'>
            Experience
            </a>
            <a 
            href='#projects' 
            className='cursor-pointer bg-gradient-right-light'>
            Projects
            </a>
        </div>
        </div>

        {/* Social icons (hidden on mobile view) */}
        <div className='hidden md:flex flex-row gap-5'>
            {Socials.map((social) => (
                <a 
                href={social.url} // Update the URL to point to the social media profile
                target="_blank"    // Open the link in a new tab
                rel="noopener noreferrer" // To prevent any security risks
                key={social.name} 
                className='cursor-pointer'
                >
                <Image
                    src={social.src}
                    alt={social.name}
                    width={24}
                    height={24}
                />
                </a>
            ))}
        </div>

        {/* Hamburger icon (visible only on mobile view) */}
        <div className='md:hidden flex items-center ml-auto'>
          <button
            onClick={toggleMenu}
            className='hamburger-gradient'
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden absolute top-[65px] right-0 w-[200px] bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 text-gray-200 py-5 px-8 rounded-lg`}
      >
        <a href='#skills' className='block py-2' onClick={closeMenu}>Skills</a>
        <a href='#experience' className='block py-2' onClick={closeMenu}>Experience</a>
        <a href='#projects' className='block py-2' onClick={closeMenu}>Projects</a>
        <a href='#contact' className='block py-2' onClick={closeMenu}>Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
