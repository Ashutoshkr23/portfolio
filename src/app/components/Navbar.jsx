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
          {/*<div className='lg:hidden flex'>
            <div className='navbar bg-dark flex justify-between px-5'>
                  <img src="/assets/images/navbar/Logo.png" alt="Bravos Logo" className="h-10 w-24 my-3.5" />
            </div>
              <div className='flex'>
                  <button
                      onClick={() => setIsOpen(!isOpen)}
                      type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                  </button>

                  {isOpen && (
                      <div className="absolute right-0 mt-2 w-56 bg-white border rounded-md shadow-lg z-10">
                          <div className="py-1">
                              <a
                                  href="#"
                                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              >
                                  Home
                              </a>
                              <a
                                  href="#"
                                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              >
                                  About
                              </a>
                              <a
                                  href="#"
                                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              >
                                  Contact
                              </a>
                          </div>
                      </div>
                  )}
              </div>
          </div>*/}
          <div className='lg:hidden '>
          <nav className="bg-dark px-2  sm:px-4 py-2.5  fixed w-full z-50 top-0 left-0">
              <div className="container flex flex-wrap items-center justify-between mx-auto">
                  <a href="#" className="flex items-center">
                      <img src="/assets/images/navbar/Logo.png" className="h-6 ml-3 sm:h-9 md:h-12" alt="Bravas Logo"/>
                  </a>
                  <div className="flex ">
                          <button className='h-10 btn w-28 ml-12 rounded text-white border border-white hover:bg-green-2 hover:border-none hover:font-bold my-auto mr-4'><a href="https://siddharth223358.typeform.com/to/zj0SLmyj" target="_blank">Get in Touch</a></button>
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
                                          </div>
                                          <div className='mt-auto'>
                                              <div className="flex flex-row flex-wrap justify-center mx-auto my-4 min-w-0 items-center" style={{ height: '40px', borderRadius: '19px', margin: 'auto' }}>
                                                  <div className="flex flex-row flex-wrap justify-center mx-auto my-4 min-w-0 items-center" style={{ height: '40px', width: '528px', borderRadius: '19px', margin: 'auto' }}>
                                                      <a href="https://www.facebook.com/bravasdigital" target="blank" className="w-11 h-10">
                                                          <img className="w-6 h-6 hover:scale-125 inline-block" src={"assets/images/footer/fb.svg"} alt="facebook icon" />
                                                      </a>
                                                      <a href="https://www.linkedin.com/company/bravasdigital" target="blank" className="w-11 h-10">
                                                          <img className="w-6 h-6 hover:scale-125 inline-block" src="assets/images/footer/linkedin.ico" alt="linkedin icon" />
                                                      </a>
                                                      <a href="https://www.instagram.com/bravasdigital/" target="blank" className="w-11 h-10">
                                                          <img className="w-6 h-6 hover:scale-125 inline-block" src={"assets/images/footer/instagram-light.ico"} alt="instagram icon" />
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