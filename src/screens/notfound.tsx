import { NavLink } from "react-router-dom"

const NotFound = () => {
  return (
    <>
<div className="grid h-screen place-content-center px-4">
  <h1 className="uppercase tracking-widest text-gray-500">404 | Not Found</h1>
  <NavLink to="/" className="bg-black p-5 text-white text-center rounded-full mt-10 hover:bg-white hover:border hover:border-black hover:text-black">Go To Home</NavLink>
</div>
    </>
  )
}

export default NotFound