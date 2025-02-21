import { Route, Routes } from "react-router-dom"
import { lazy, Suspense, useEffect, useState } from "react";
import Cursor from "./components/mycomponents/cursor";
import Loader from "./components/mycomponents/loader";
const Home = lazy(() => import("./screens/home"));
const Nav = lazy(() => import("./components/mycomponents/navbar"));
const Footer = lazy(() => import("./components/mycomponents/footer"));
const Skills = lazy(() => import("./screens/skills"));
const Projects = lazy(() => import("./screens/projects"));
const Testinomials = lazy(() => import("./screens/testinomials"));
const Contact = lazy(() => import("./screens/contact"));

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div style={{ cursor: isMobile ? "auto" : "none" }}>
      {!isMobile && <Cursor />}
      <Suspense fallback={<Loader />}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonials" element={<Testinomials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Suspense>

    </div>
  )
}

export default App
