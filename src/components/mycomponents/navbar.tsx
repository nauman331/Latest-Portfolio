import { useState, useEffect } from "react";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Home", "Skills", "Projects", "Testinomials", "Contact"];

  return (
    <>
      {/* Scroll Progress Bar */}
      <ScrollProgress className="top-0 z-[999]" />

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full transition-all duration-300 ${scrolling ? "bg-white/90 shadow-lg dark:bg-black/90" : "bg-transparent"
          } backdrop-blur-md z-50`}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold cursor-pointer">
            M. <span className="text-red-600">Nauman</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-lg font-medium">
            {menuItems.map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={`cursor-pointer transition-colors ${(item === "Home" && location.pathname === "/") || location.pathname === `/${item.toLowerCase()}`
                      ? "text-red-600 font-semibold"
                      : "hover:text-red-500"
                    }`}
                >
                  {item}
                </Link>

              </li>
            ))}
          </ul>

          {/* Mobile Menu Button (Only Shows When Menu is Closed) */}
          {!isOpen && (
            <button
              className="md:hidden p-2 focus:outline-none z-50"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={28} />
            </button>
          )}
        </div>

        {/* Mobile Menu (Fixed UI Issue) */}
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-screen w-2/3 bg-white dark:bg-black shadow-lg px-6 py-4 flex flex-col items-start space-y-6 md:hidden"
          >
            {/* Close Button Inside Mobile Menu */}
            <button
              className="self-end p-2 focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <X size={28} />
            </button>

            {/* Mobile Links */}
            <ul className="flex flex-col space-y-6 text-lg font-medium w-full">
              {menuItems.map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="block w-full py-2 px-3 rounded-lg text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
