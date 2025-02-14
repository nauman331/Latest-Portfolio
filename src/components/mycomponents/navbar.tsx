import { useState, useEffect } from "react";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUp } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [navbarFixed, setNavbarFixed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
      setNavbarFixed(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const menuItems = ["Home", "Skills", "Projects", "Testimonials", "Contact"];

  return (
    <>
      {/* Scroll Progress Bar */}
      <ScrollProgress className="top-0 z-[999]" />

      {/* Navbar */}
      <nav
        className={`transition-all duration-300 ${navbarFixed
            ? "fixed top-0 left-0 w-full bg-white/90 shadow-lg dark:bg-black/90 z-50"
            : "relative top-5 bg-white/80 shadow-md dark:bg-black/80 rounded-full container mx-auto h-24 md:h-auto"
          }`}
      >

        <div className="flex justify-between items-center py-4 px-6">
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

          {/* Mobile Menu Button */}
          {!isOpen && (
            <button
              className="md:hidden p-2 focus:outline-none z-50"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={28} />
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu with Smooth Close Transition */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%", transition: { duration: 0.3 } }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/70 backdrop-blur-lg flex justify-end z-50"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-2/3 bg-white dark:bg-gray-900 shadow-lg px-6 py-6 flex flex-col items-start space-y-6 h-full"
            >
              {/* Close Button */}
              <button className="self-end p-2 focus:outline-none" onClick={() => setIsOpen(false)}>
                <X size={28} />
              </button>
              {/* Mobile Links */}
              <ul className="flex flex-col space-y-6 text-lg font-medium w-full">
                {menuItems.map((item) => (
                  <li key={item}>
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="block w-full py-2 px-3 rounded-lg text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Scroll-to-Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.1, rotate: 10 }}
          className="fixed bottom-6 z-[999] right-6 bg-red-600 text-white p-3 rounded-full shadow-lg transition-all hover:bg-red-700 focus:outline-none flex items-center justify-center"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </>
  );
};

export default Navbar;
