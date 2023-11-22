import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav[!nav];


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
        <FaBars />
      </div>

      {/* Moble Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-zinc-800 flex flex-col justify-center items-center'} >
        <li className='py-6  text-3xl '>Home</li>
        <li className='py-6  text-3xl '>About</li>
        <li className='py-6  text-3xl '>Skills</li>
        <li className='py-6  text-3xl '>Work</li>
        <li className='py-6  text-3xl '>Contact</li>
      </ul>
    </div >
  )
};

export default Navbar;
