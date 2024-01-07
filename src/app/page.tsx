import Image from 'next/image'
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Skills from "./components/Skills"
import Work from "./components/Work"
import Main from "./components/Main"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black container mx-auto px-6 sm:px-12">
      <Navbar/>
      <Main/>
      <HeroSection/>
      <About/>
      <Work/>
      <Skills/>
    </main>
  )
}