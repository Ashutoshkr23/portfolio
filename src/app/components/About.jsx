"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";

const AboutSection = () => {
 

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/Images/About.png" width={300} height={300} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          👋 Hi,  I&apos;m{" "} Ashutosh, a passionate and detail-oriented full-stack developer specializing in frontend technologies like Next.js, React, and Tailwind CSS. With a B.Tech in Computer Science and Engineering, I bring a strong foundation in coding and a creative approach to web development. My journey involves transforming ideas into seamless, user-centric experiences. Let&apos;s innovate together and shape the future of the web!
          </p>
          <p className="text-3xl mt-12">Experience</p>
          <p className="text-2xl text-gray-300 mt-8">Full Stack Developer <a href="https://www.alphamintlabs.com/" target="_blank" rel="noopener noreferrer"><span className="text-green-2 hover:text-[#60D9F9]">@ AlphamintLabs</span></a></p>
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
      </div>
    </section>
  );
};

export default AboutSection;