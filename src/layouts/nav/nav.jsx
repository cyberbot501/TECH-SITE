import React, { useState, useEffect } from 'react';
import logo from '../../assets/Group 19.svg';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; 

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={` bg-[#171719] h-[100px] w-[100%] flex flex-row items-center justify-between px-[20px] md:px-[84px] sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <img src={logo} alt="logo" className='w-[70px] h-[70px] md:w-[100px] md:h-[100px]' />
      

      <div className='md:hidden'>
        <button onClick={toggleMenu} className='text-white'>
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>


      <ul className={`md:flex flex-row w-[399px] h-[44px] rounded-[25px] justify-evenly items-center bg-[#3B3F4070] hidden`}>
        <NavLink to='/' className='font-sans font-medium text-[17px] text-[#FFFFFF]'>Home</NavLink>
        <NavLink to='/about' className='font-sans font-medium text-[17px] text-[#FFFFFF]'>About Us</NavLink>
        <NavLink to='/products' className='font-sans font-medium text-[17px] text-[#FFFFFF]'>Products</NavLink>
        <NavLink to='/blog' className='font-sans font-medium text-[17px] text-[#FFFFFF]'>Blog</NavLink>
      </ul>


      <button className='w-[122px] h-[44px] bg-[#B0EF9A] rounded-[25px] text-[17.5px] font-sans font-medium text-[#171719] hidden md:block'>
        Buy Now
      </button>


      {menuOpen && (
        <div className='fixed flex flex-col items-center top-20 right-0 w-[250px] h-full bg-[#171719] p-5 z-50'>
          <ul className='flex items-center flex-col space-y-4'>
            <NavLink to='/' className='font-sans font-medium text-[17px] text-[#FFFFFF]'>Home</NavLink>
            <NavLink to='/about' className='font-sans font-medium text-[17px] text-[#FFFFFF]'>About Us</NavLink>
            <NavLink to='/products' className='font-sans font-medium text-[17px] text-[#FFFFFF]'>Products</NavLink>
            <NavLink to='/blog' className='font-sans font-medium text-[17px] text-[#FFFFFF]'>Blog</NavLink>
          </ul>
          <button className='w-[122px] h-[44px] bg-[#B0EF9A] rounded-[25px] text-[17.5px] font-sans font-medium text-[#171719] mt-5'>
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
}