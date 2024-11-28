import About from "./Sections/About"
import Hero from "./Sections/Hero"
import NavBar from "./Sections/NavBar"

export default function App() {
  return (
    <main className='max-w-7xl mx-auto'>
      <NavBar />
      <Hero />
      <About />
    </main>
  )
}
