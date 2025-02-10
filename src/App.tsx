import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
const Home = lazy(() => import("./screens/home"));
const Nav = lazy(() => import("./components/mycomponents/navbar"));
const Footer = lazy(() => import("./components/mycomponents/footer"));
function App() {


  return (
    <>
      <Suspense fallback={<h1>Loading....</h1>}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Suspense>

    </>
  )
}

export default App
