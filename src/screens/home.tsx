import { lazy, Suspense } from "react";
import Loader from "@/components/mycomponents/loader";
const Hero = lazy(() => import("@/components/mycomponents/hero"));
const Scroll = lazy(() => import("@/components/mycomponents/scroll"));
const Skills = lazy(() => import("./skills"));
const Projects = lazy(() => import("./projects"));
const Testimonials = lazy(() => import("./testinomials"));
const Contact = lazy(() => import("./contact"));

const Home = () => {
  return (
    <section className="w-full">
      <Suspense fallback={<Loader />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Scroll />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Contact />
      </Suspense>
    </section>
  );
};

export default Home;
