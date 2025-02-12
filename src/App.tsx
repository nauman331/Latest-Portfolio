import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react";
import Cursor from "./components/mycomponents/cursor";
import Loader from "./components/mycomponents/loader";
const Home = lazy(() => import("./screens/home"));
const Nav = lazy(() => import("./components/mycomponents/navbar"));
const Footer = lazy(() => import("./components/mycomponents/footer"));
const Skills = lazy(() => import("./screens/skills"));

function App() {


  return (
    <div style={{cursor: "none"}}>
      <Cursor />
      <Suspense fallback={<Loader />}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        <Footer />
      </Suspense>

    </div>
  )
}

export default App
