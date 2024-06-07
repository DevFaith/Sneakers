import React from 'react';
import { FaXTwitter, FaSquareInstagram, FaSquareFacebook, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='footer bg-slate-700 flex justify-center items-center gap-8 py-4'>
      <div className='flex gap-4 text-white text-2xl'>
        <a href="https://x.com/faith_wait15653" target="_blank" rel="noopener noreferrer" className='hover:text-blue-500 transition-colors duration-300'>
          <FaXTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='hover:text-pink-500 transition-colors duration-300'>
          <FaSquareInstagram />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='hover:text-blue-700 transition-colors duration-300'>
          <FaSquareFacebook />
        </a>
        <a href="https://www.linkedin.com/in/faith-waithera-0a4b3329b/" target="_blank" rel="noopener noreferrer" className='hover:text-blue-600 transition-colors duration-300'>
          <FaLinkedin />
        </a>
      </div>
      <p className='text-white'>&copy; 2024 Sneaking For Life</p>
    </div>
  );
}

export default Footer;
