"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
    
  return (
    <section className="lg:py-16 text-green-2">
      <div className="flex flex-col-reverse md:flex-row md:justify-between ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start mt-12 sm:mt-20 lg:mt-4"
        >
          <h1 className="text-green-2 mb-4 text-3xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-white bg-clip-text bg-gradient-to-r from-green to-green-2">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Ashutosh",
                1000,
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Transforming concepts into captivating web experiences with code.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-green to-green-2 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-green to-green-2 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-12 sm:mt-20 lg:mt-4"
        >
          <div className="rounded-full bg-[#181818] overflow-hidden w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
  <video
    autoPlay
    loop
    muted
    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
    width={400}
    height={400}
  >
    <source src="/Video/hero2.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;