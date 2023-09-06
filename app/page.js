import Image from 'next/image'
import Nav from './components/Nav'
import Main from './components/Main'
import About from './components/About'
import Work from './components/Work'
import Tech from './components/Tech'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24 justify-between bg-[#100720] h-fit">
      <Nav />
      <Main />
      <About />
      <Work />
      <Tech />
      <Footer />
    </main>
  )
}
