import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import About from "./sections/About"
import Contact from "./sections/Contact"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">

      <Navbar />

      <Hero />

      <Projects />

      <About />

      <Contact />

    </div>
  )
}

export default App