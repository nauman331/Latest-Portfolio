import "../../assets/loading.css"
const loader = () => {
  return (
    <div className="z-[999] h-screen w-screen bg-white flex items-center justify-center fixed top-0 left-0 right-0 bottom-0">
      <div className="loader"></div>
    </div>
  )
}

export default loader