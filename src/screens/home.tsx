import Hero from "@/components/mycomponents/hero"
import Scroll from "@/components/mycomponents/scroll"
import Skills from "./skills"
import Projects from "./projects"
import Testinomials from "./testinomials"

const Home = () => {
  return (
    <section className="w-full">
      <Hero />
      <Scroll />
      <Skills />
      <Projects />
      <Testinomials />
    </section>
  )
}

export default Home