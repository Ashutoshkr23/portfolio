"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";

const Work = () => {
 

  return (
    <section className="text-white" id="about">
      <div className="flex flex-col-reverse md:flex-row md:justify-between py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-2 mt-8">Experience</h2>
          <p className="text-2xl text-gray-300 mt-4">Full Stack Developer <a href="https://www.alphamintlabs.com/" target="_blank" rel="noopener noreferrer"><span className="text-green-2 hover:text-[#60D9F9]">@ AlphamintLabs</span></a></p>
          <p className="text-sm opacity-80 mt-4">Dec 2022 - Present</p>
          <div className="flex gap-2 mt-4">
            <div className="h-6 w-4 ">
            <div className="h-4 my-1 w-4 rounded-lg bg-green-2 "></div>
            </div>
            <p>Led development for visually captivating landing pages such as <a href="https://www.bravasdigital.com/" target="_blank" rel="noopener noreferrer"><span className="text-green-2 hover:text-[#60D9F9]">Bravas Digital</span></a> and <a href="https://www.boysplayedwell.in/" target="_blank" rel="noopener noreferrer"><span className="text-green-2 hover:text-[#60D9F9]">Boys Played Well</span></a> using Next.js, ensuring high-performance frontend interfaces.</p>
          </div>
          <div className="flex gap-2 mt-4">
            <div className="h-6 w-4 ">
            <div className="h-4 my-1 w-4 rounded-lg bg-green-2 "></div>
            </div>
            <p>Actively contributed to both frontend and backend aspects of projects like <a href="https://www.loopcard.club/" target="_blank" rel="noopener noreferrer"><span className="text-green-2 hover:text-[#60D9F9]">LoopCard</span></a> and <a href="https://atelierx.vercel.app/" target="_blank" rel="noopener noreferrer"><span className="text-green-2 hover:text-[#60D9F9]">Atelier</span></a> showcasing adaptability and a comprehensive skill set.</p>
          </div>
          <div className="flex gap-2 mt-4">
            <div className="h-6 w-4 ">
            <div className="h-4 my-1 w-4 rounded-lg bg-green-2 "></div>
            </div>
            <p>Started as a beginner and rapidly acquired proficiency in React, Next.js, and MongoDB while actively contributing to real-world projects, highlighting a commitment to continuous learning and skill development.</p>
          </div>
        </div>
        <div className="rounded-[200px] w-[300px] h-[300px] mx-auto overflow-hidden">
        <Image src="/Images/Work.png" width={300} height={300} />
        </div>
      </div>
    </section>
  );
};

export default Work;