import { Route, Routes } from "react-router-dom"
import { lazy, Suspense, useEffect, useState } from "react";
import Cursor from "./components/mycomponents/cursor";
import Loader from "./components/mycomponents/loader";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
const Home = lazy(() => import("./screens/home"));
const Nav = lazy(() => import("./components/mycomponents/navbar"));
const Footer = lazy(() => import("./components/mycomponents/footer"));
const Skills = lazy(() => import("./screens/skills"));
const Projects = lazy(() => import("./screens/projects"));
const Testinomials = lazy(() => import("./screens/testinomials"));
const Contact = lazy(() => import("./screens/contact"));
const NotFound = lazy(() => import("./screens/notfound"));

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const theme = useSelector((state: RootState) => state.theme.theme);
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);

  }, []);

  return (
    <div
      className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"} transition-colors duration-300 ease-in-out`}
      style={{ cursor: isMobile ? "auto" : "none" }}>
      {!isMobile && <Cursor />}
      <Suspense fallback={<Loader />}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonials" element={<Testinomials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Suspense>

    </div>
  )
}

export default App
