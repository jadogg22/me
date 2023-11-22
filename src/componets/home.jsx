import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi"

const Home = () => {
  {/* TEST COLORS */ }
  const midnightBlue = '#191970'


  return (
    <div name="home" className="w-full h-screen bg-zinc-800">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#ffc777]">Hi, my name is</p>
        <h1 className="text-3xl sm:text-7xl fond-bold text-[#82aaff]">Jaden Anderson</h1>
        <h2 className="text 3xl sm:text-7xl font-bold text-white"> I'm <i>Trying</i> to be a Software Engeneer </h2>
        <p className="text-white py-4 max-w-[700px]"> specializing in building execptional digital experiances,
          Currently, I'm focused at refining my skill in school were
          I am learning various Languages and Technologys. </p>
        <div>
          <button className="text-white border-2 px-6 py-3 my-3 flex items-center hover:bg-[#82aaff] hover:text-zinc-800">View Work <HiArrowNarrowRight className="ml-2" /></button>
        </div>
      </div>
    </div>
  )
}

export default Home
