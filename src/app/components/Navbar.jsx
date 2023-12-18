"use client";
import React, {useState , useEffect}from 'react'
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const [date, setDate] = useState();

    function getYear() {
        setDate(new Date().getFullYear());
    }

    useEffect(() => {
        getYear();
    }, [])

    const fadeIn = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.3
            }
        },
        exit: {
            opacity: 0,
        }
    }

   
  return (
      <section>
          {/*Laptop */}
          <div className='hidden bg-dark lg:block'>
              <div className='navbar z-50 fixed inset-x-0 bg-dark opacity-95'>
                  <div className='mx-16 my-auto h-20 flex content-center justify-between' >
                      <img src="/Images/Logo.jpeg" alt=" Logo" className="h-12 w-28 my-auto rounded-md drop-shadow-md" />
                      <div className='flex content-center'>
                          <ul className="flex content-center my-auto ">
                              <li className="text-white  text-sm px-1.5 font-extralight hover:font-bold "><a href={`#about`}>Home</a></li>
                              <li className="text-white  text-sm px-1.5 font-extralight hover:font-bold "><a href="#services">About Me</a></li>
                              <li className="text-white  text-sm px-1.5 font-extralight hover:font-bold "><a href="#team">Work</a></li>
                              <li className="text-white  text-sm px-1.5 font-extralight hover:font-bold "><a href="#work">Projects</a></li>
                          </ul>
                          <button className='h-10 btn w-40 ml-12 rounded hover:bg-green-2 hover:font-bold hover:border-none text-white border border-white my-auto'><a href="https://siddharth223358.typeform.com/to/zj0SLmyj" target="_blank">Get in Touch</a></button>
                      </div>
                  </div>

              </div>
          </div>
          {/*Mobiles*/}
          
          <div className='lg:hidden '>
          <nav className="bg-dark px-2  sm:px-4 py-2.5  fixed w-full z-50 top-0 left-0">
              <div className="container flex flex-wrap items-center justify-between mx-auto">
                  <a href="#" className="flex items-center">
                      <img src="/Images/Logo.jpeg" className="h-6 ml-3 sm:h-9 md:h-12" alt="Logo"/>
                  </a>
                  <div className="flex ">
                         
                      <button
                          onClick={() => setIsOpen(!isOpen)}
                          type="button" className="inline-flex relative z-[100] items-center ">
                              <div className='  h-3.5 w-5'>
                                  <div
                                      className={` h-0.5 bg-white w-5 origin-top-left ease-in duration-200 rounded-md ${isOpen ? 'rotate-45 translate-x-px' : 'rotate-0'}`}
                                  />
                                  <div
                                      className={` h-0.5 w-5 bg-white ease-in duration-200 rounded-md mt-1 ${isOpen ? 'hidden' : 'block'}`}
                                  />
                                  <div
                                      className={` h-0.5 w-5 bg-white ease-in duration-200  rounded-md mt-1  ${isOpen ? '-rotate-45 -translate-x-0.5 ' : 'rotate-0 '}`}
                                  />
                              </div>
                      </button>
                      {isOpen && (
                              <AnimatePresence>
                                  <motion.div variants={fadeIn} initial="initial" whileInView="animate" exit="exit" viewport={{ once: false }} className="absolute ease-in duration-800  w-full h-screen top-0 right-0 text-white   border-white border-8 bg-dark shadow-lg z-10">
                                      <div className='flex flex-col h-full  content-between'>
                                          <div className="flex flex-col mx-auto mt-20 text-center font-oswald tracking-light w-10/12 z-20">
                                              <div onClick={() => setIsOpen(!isOpen)} className="nav-link-container  py-2  border-b-2 border-white ">
                                                  <a href="#about" className="nav-link ">Home</a>
                                              </div>
                                              <div onClick={() => setIsOpen(!isOpen)} className="nav-link-container py-4  border-b-2 border-white">
                                                  <a href="#services" className="nav-link ">About Me</a>
                                              </div>
                                              <div onClick={() => setIsOpen(!isOpen)} className="nav-link-container py-4  border-b-2 border-white ">
                                                  <a href="#team" className="nav-link ">Work</a>
                                              </div>
                                              <div onClick={() => setIsOpen(!isOpen)} className="nav-link-container py-4  border-b-2 border-white ">
                                                  <a href="#work" className="nav-link ">Project</a>
                                              </div>
                                              <div onClick={() => setIsOpen(!isOpen)} className="nav-link-container py-4  border-b-2 border-white ">
                                                  <a href="#work" className="nav-link ">Contact</a>
                                              </div>
                                              
                                          </div>
                                          <div className='mt-auto'>
                                              <div className="flex flex-row flex-wrap justify-center mx-auto my-4 min-w-0 items-center" style={{ height: '40px', borderRadius: '19px', margin: 'auto' }}>
                                                  <div className="flex flex-row flex-wrap justify-center mx-auto my-4 min-w-0 items-center" style={{ height: '40px', width: '528px', borderRadius: '19px', margin: 'auto' }}>
                                                      <a href="https://github.com/Ashutoshkr23" target="blank" className="w-11 h-10">
                                                          <img className="w-6 h-6 hover:scale-125 inline-block" src={"/Images/Social/Github.png"} alt="Github icon" />
                                                      </a>
                                                      <a href="https://www.linkedin.com/in/ashutosh-kumar-68659316a/" target="blank" className="w-11 h-10">
                                                          <img className="w-6 h-6 hover:scale-125 inline-block" src="/Images/Social/LinkedIn.png" alt="linkedin icon" />
                                                      </a>
                                                      <a href="mailto:ashutoshkumar.23ak2@gmail.com" target="_blank" className="w-11 h-10">
    <img className="w-6 h-6 hover:scale-125 inline-block" src={"/Images/Social/mail.png"} alt="mail icon" />
</a>

                                                      <a href="https://twitter.com/Ashutosh2328" target="blank" className="w-11 h-10">
                                                          <img className="w-6 h-6 hover:scale-125 inline-block" src={"/Images/Social/Twitter.png"} alt="Twitter icon" />
                                                      </a>


                                                  </div>
                                              </div>
                                              <div className="text-center pb-6 text-white text-base opacity-80 ">© {date} BY ASHUTOSH KUMAR</div>
                                          </div>

                                      </div>

                                  </motion.div>
                              </AnimatePresence>
                          )}
                  </div>
              </div>
          </nav>
          </div>  
      </section>
  )
}

export default Navbar