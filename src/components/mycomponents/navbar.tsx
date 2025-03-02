import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowUp } from "lucide-react";
import { ScrollProgress } from "../magicui/scroll-progress";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Testimonials", href: "testimonials" },
    { name: "Contact", href: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
        setShowScrollTop(true);
      } else {
        setIsScrolled(false);
        setShowScrollTop(false);
      }
    };

    const handleResize = () => {
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <ScrollProgress />
      <div className="container flex items-center justify-center mx-auto">
        <nav
          className={`w-full transition-all duration-300 z-50 
            ${isScrolled
              ? "fixed top-0 left-0 right-0 w-screen bg-white/90 backdrop-blur-md shadow-md py-4 border-b border-gray-200"
              : "mt-8 transform bg-white/80 backdrop-blur-md shadow-md rounded-full px-8 py-5 w-full border border-gray-200"
            }`}
        >
          <div className="flex items-center justify-between mx-auto max-w-6xl px-6">
            <div className="text-xl font-bold">
              <span className="text-black">M.</span>
              <span className="text-[#C62828]">Nauman</span>
            </div>
            <div className="hidden md:flex space-x-6 font-medium">
              {links.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="hover:text-red-500 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </div>
      {isOpen && (
        <>
          <div
            className="fixed h-screen p-6 flex items-center justify-center inset-0 bg-black/50 backdrop-blur-md z-40 transition-opacity"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="relative z-50 bg-white w-full shadow-lg rounded-lg py-6 flex flex-col space-y-4 items-center border border-black/50 transform transition-transform duration-700 ease-out animate-bounce-slide-in"
            >
              {links.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="hover:text-red-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}

      {showScrollTop ? (
        <button
          onClick={scrollToTop}
          className="fixed z-[999] bottom-6 right-6 bg-[#C62828] text-white p-3 rounded-full shadow-lg 
            transition-all duration-300 transform opacity-100 translate-y-0 scale-100 hover:bg-red-600 hover:scale-110 active:scale-95 animate-fade-in"
        >
          <ArrowUp size={24} />
        </button>
      ) : (
        <a
          href="https://wa.me/YOUR_NUMBER"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed z-[999] bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg 
            transition-all duration-300 transform opacity-100 translate-y-0 scale-100 hover:bg-green-600 hover:scale-110 active:scale-95 animate-fade-in"
        >
          <FaWhatsapp size={24} />
        </a>
      )}

      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: scale(0.9); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in {
            animation: fadeIn 0.4s ease-in-out;
          }
        `}
      </style>
    </>
  );
};

export default Navbar;