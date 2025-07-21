import React, { useState, useEffect } from 'react';
import { CiCloudSun, CiCloudMoon } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5"; 

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Load dark mode from localStorage
  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle dark mode and store in localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  return (
    <nav className='bg-blue-300 dark:bg-gray-900 w-full flex items-center justify-between p-3 text-black dark:text-white relative transition-colors duration-300'>
      {/* Logo */}
      <div className='flex items-center gap-1'>
        <FaCartShopping className='text-xl font-bold' />
        <span className='text-xl font-bold'>Shop Me</span>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex gap-6 font-semibold'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Trendy Products</a></li>
        <li><a href="#">Women Wear</a></li>
        <li><a href="#">Men Wear</a></li>
      </ul>

      {/* Dark mode toggle */}
      <div className='cursor-pointer' onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <CiCloudSun className='text-3xl hover:scale-105 transition-transform duration-300' /> : <CiCloudMoon className='text-3xl hover:scale-110 transition-transform duration-300' />}
      </div>

      {/* Hamburger or Close Icon */}
      <div className='md:hidden cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <IoClose className='text-3xl' /> : <GiHamburgerMenu className='text-2xl' />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className='absolute top-16 left-0 w-full bg-blue-300 dark:bg-gray-900 flex flex-col gap-4 p-4 font-semibold md:hidden z-10 transition-all duration-300'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Trendy Products</a></li>
          <li><a href="#">Women Wear</a></li>
           <li><a href="#">Men Wear</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
