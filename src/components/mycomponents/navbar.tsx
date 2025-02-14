import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ScrollProgress } from "../magicui/scroll-progress";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ScrollProgress />
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-md shadow-md rounded-full px-8 py-3 flex items-center justify-between w-[90%] max-w-4xl z-50 border border-gray-200">
        {/* Logo */}
        <div className="text-xl font-bold">
          <span className="text-black">M.</span>
          <span className="text-red-500">Nauman</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 font-medium">
          {[
            { name: "Home", href: "home" },
            { name: "Skills", href: "skills" },
            { name: "Projects", href: "projects" },
            { name: "Testimonials", href: "testimonials" },
            { name: "Contact", href: "contact" },
          ].map((item) => (
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-14 right-0 bg-white/90 backdrop-blur-md w-48 shadow-lg rounded-lg py-4 flex flex-col space-y-4 items-center md:hidden border border-gray-200">
            {[
              { name: "Home", href: "home" },
              { name: "Skills", href: "skills" },
              { name: "Projects", href: "projects" },
              { name: "Testimonials", href: "testimonials" },
              { name: "Contact", href: "contact" },
            ].map((item) => (
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
        )}
      </nav>
    </>
  );
};

export default Navbar;
