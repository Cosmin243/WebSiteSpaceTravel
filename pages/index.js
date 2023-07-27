import Hero from "./Components/Hero"
import Projects from "./Components/Projects"
import Prices from "./Components/Prices"
import Contact from "./Components/Contact"

export default function Home() {
  return (
    <main className="mx-20">
      <h1 className="text-white text-center text-2xl font-bold mt-10">Cosmin Leonte</h1>
      <Hero id="hero" />
      <Projects id="projects" />
      <Prices id="prices" />
      <Contact id="contact" />
    </main>
  )
}
