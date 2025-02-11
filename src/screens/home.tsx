import Hero from "@/components/mycomponents/hero"
import Scroll from "@/components/mycomponents/scroll"
import Skills from "./skills"

const Home = () => {
  return (
    <section className="w-full">
      <Hero />
      <Scroll />
      <Skills />
    </section>
  )
}

export default Home