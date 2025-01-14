'use client';
import { useState, useEffect, useRef } from 'react';
import { Socials } from '@/constants';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Ref to the menu
  const buttonRef = useRef<HTMLButtonElement>(null); // Ref to the hamburger button

  const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent click event from propagating to the document
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // If the click is outside of the menu and button, close the menu
      if (
        menuRef.current && 
        !menuRef.current.contains(e.target as Node) && 
        buttonRef.current && 
        !buttonRef.current.contains(e.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='header-fixed'>
      <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
      <a href='#about-me' className='h-auto w-auto flex flex-row items-center'>
      {/* Desktop Logo */}
      <Image
        src="/NavLogo.png"
        alt="desktop logo"
        width={40}
        height={40}
        className="cursor-pointer hover:scale-110 transition-transform duration-300 hidden sm:block max-w-[40px] max-h-[40px]"
      />

      {/* Mobile Logo */}
      <Image
        src="/home.jpg"  // Update with the path to the mobile logo
        alt="mobile logo"
        width={40}
        height={40}
        className="cursor-pointer hover:scale-110 transition-transform duration-300 sm:hidden max-w-[40px] max-h-[40px] rounded-full"
      />

      <span className='font-bold ml-[10px] hidden md:block cursor-pointer bg-gradient-right-light'>
        Rohan Venkatesha
      </span>
    </a>

        {/* Navbar links (for larger screens) */}
        <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
          <div className='flex items-center w-full h-auto justify-between border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 hidden md:flex'>
            <a href='#skills' className='cursor-pointer bg-gradient-right-light'>
              Skills
            </a>
            <a href='#timeline' className='cursor-pointer bg-gradient-right-light'>
              Timeline
            </a>
            <a href='#projects' className='cursor-pointer bg-gradient-right-light'>
              Projects
            </a>
          </div>
        </div>

        {/* Social icons (hidden on mobile view) */}
        <div className='hidden md:flex flex-row gap-5'>
          {Socials.map((social) => (
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
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
            ref={buttonRef} // Attach the ref to the button
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
        ref={menuRef} // Attach the ref to the menu
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden absolute top-[65px] right-0 w-[200px] bg-gradient-right-nav text-gray-200 py-5 px-8 rounded-lg`}
      >
        <a href='#skills' className='block py-2' onClick={closeMenu}>
          Skills
        </a>
        <a href='#timeline' className='block py-2' onClick={closeMenu}>
          Experience
        </a>
        <a href='#projects' className='block py-2' onClick={closeMenu}>
          Projects
        </a>
        <a href='#contact' className='block py-2' onClick={closeMenu}>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
