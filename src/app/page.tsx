import Image from 'next/image'
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Skills from "./components/Skills"
import Work from "./components/Work"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black container mx-auto px-12 ">
      <Navbar/>
      <HeroSection/>
      <About/>
      <Work/>
      <Skills/>
    </main>
  )
}