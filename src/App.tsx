import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
const Home = lazy(() => import("./screens/home"))
function App() {


  return (
    <>
      <Suspense fallback={<h1>Loading....</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>

    </>
  )
}

export default App
