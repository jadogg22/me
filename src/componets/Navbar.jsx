import React, { useState } from 'react'
import { FaBars, FaTimes, FaFacebook, FaGithub, FaEnvelope } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from "react-icons/bs"

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {

    console.log("button clicked", nav);

    setNav(!nav);
  };


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-zinc-800 text-white'>
      <div>
        Jaden Anderson
      </div>

      {/* actuall nav */}
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>contact</li>
      </ul>


      {/* Hamburgur menu*/}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Moble Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-zinc-800 flex flex-col justify-center items-center'} >
        <li className='py-6  text-3xl '>Home</li>
        <li className='py-6  text-3xl '>About</li>
        <li className='py-6  text-3xl '>Skills</li>
        <li className='py-6  text-3xl '>Work</li>
        <li className='py-6  text-3xl '>Contact</li>
      </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full' href='https://www.facebook.com/jadogg22'>Facebook <FaFacebook size={30} /></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700'>
            <a className='flex justify-between items-center w-full' href='https://github.com/jadogg22'>GitHub <FaGithub size={30} /></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500'>
            <a className='flex justify-between items-center w-full' href='/'>Email <FaEnvelope size={30} /></a>
          </li>


        </ul>


      </div>
    </div >
  )
};

export default Navbar;
