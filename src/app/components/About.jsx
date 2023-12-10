"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";

const AboutSection = () => {
 

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          👋 Hi, I'm Ashutosh, a passionate and detail-oriented full-stack developer specializing in frontend technologies like Next.js, React, and Tailwind CSS. With a B.Tech in Computer Science and Engineering, I bring a strong foundation in coding and a creative approach to web development. My journey involves transforming ideas into seamless, user-centric experiences. Let's innovate together and shape the future of the web!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;