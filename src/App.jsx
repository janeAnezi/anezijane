import About from "./Sections/About"
import Hero from "./Sections/Hero"
import NavBar from "./Sections/NavBar"
import Projects from "./Sections/Projects"
import Clients from "./Sections/Review"
import Contact from "./Sections/Contact"
import Footer from "./Sections/Footer"
import Experience from "./Sections/Experience"

export default function App() {
  return (
    <main className='max-w-7xl mx-auto'>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Experience/>
      <Contact />
      <Footer />
    </main>
  )
}
