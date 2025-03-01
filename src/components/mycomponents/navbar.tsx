import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowUp } from "lucide-react";
import { ScrollProgress } from "../magicui/scroll-progress";

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

  // Handle navbar transition on scroll
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <ScrollProgress />
      <div className="flex container items-center justify-center">
      <nav
        className={`w-full transition-all duration-300 z-50 
          ${
            isScrolled
              ? "fixed top-0 left-0 right-0 w-screen bg-white/90 backdrop-blur-md shadow-md py-4 border-b border-gray-200"
              : "mt-8 transform bg-white/80 backdrop-blur-md shadow-md rounded-full px-8 py-5 w-full border border-gray-200"
          }`}
      >
        <div className="flex items-center justify-between mx-auto max-w-6xl px-6">
          {/* Logo */}
          <div className="text-xl font-bold">
            <span className="text-black">M.</span>
            <span className="text-[#C62828]">Nauman</span>
          </div>

          {/* Desktop Nav */}
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

          {/* Mobile Nav Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>
      </div>
      {/* Mobile Menu with Blur Background */}
      {isOpen && (
        <>
          {/* Overlay for Blur Effect */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-40 transition-opacity"
            onClick={() => setIsOpen(false)} // Close menu when clicking outside
          ></div>

          {/* Mobile Menu */}
          <div className="fixed top-16 right-4 bg-white w-48 shadow-lg rounded-lg py-4 flex flex-col space-y-4 items-center md:hidden border border-gray-200 z-50">
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
        </>
      )}

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed z-[999] bottom-6 right-6 bg-[#C62828] text-white p-3 rounded-full shadow-lg 
        transition-all duration-300 transform 
        ${
          showScrollTop
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-10 scale-0"
        } 
        hover:bg-red-600 hover:scale-110 active:scale-95`}
      >
        <ArrowUp size={24} className="animate-bounce-once" />
      </button>

      {/* Tailwind CSS animation (one-time bounce) */}
      <style>
        {`
          @keyframes bounceOnce {
            0% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
            100% { transform: translateY(0); }
          }
          .animate-bounce-once {
            animation: bounceOnce 0.4s ease-in-out;
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
