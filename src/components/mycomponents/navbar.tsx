import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUp, Sun, Moon } from "lucide-react";
import { ScrollProgress } from "../magicui/scroll-progress";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import { Facebook, Github, Linkedin } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const location = useLocation(); // Get current route

  const links = [
    { name: "Home", href: "/" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
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

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

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
              ? "fixed top-0 left-0 right-0 w-screen bg-white/90 dark:bg-gray-900 backdrop-blur-md shadow-md py-4 border-b border-gray-200 dark:border-gray-700"
              : "mt-8 mb-0 transform bg-white/80 dark:bg-gray-900 backdrop-blur-md shadow-md rounded-full md:px-8 px-3 md:py-5 py-3 w-full border border-gray-200 dark:border-gray-700"
            }`}
        >
          <div className="flex items-center justify-between mx-auto max-w-6xl px-6">
            <div className="text-xl font-bold">
              <span className="text-black dark:text-white">M.</span>
              <span className="text-[#C62828]">Nauman</span>
            </div>
            <div className="hidden md:flex space-x-6 font-medium">
              {links.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`hover:text-red-500 transition-colors dark:text-white ${location.pathname === item.href
                    ? "text-gray-500 dark:text-gray-400 pointer-events-none cursor-not-allowed"
                    : ""
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <button onClick={toggleTheme} className="text-gray-700 dark:text-white">
                {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
              </button>
              <button
                className="md:hidden text-gray-700 dark:text-white"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {isOpen && (
        <div
          className="fixed h-screen p-6 flex items-center justify-center inset-0 bg-black/50 backdrop-blur-md z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative z-50 bg-white dark:bg-gray-900 w-full shadow-lg rounded-lg py-6 flex flex-col space-y-4 items-center border border-black/50 dark:border-white/50
              transform transition-transform duration-700 ease-out animate-slide-down"
          >
            {links.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`hover:text-red-500 transition-colors dark:text-white ${location.pathname === item.href
                  ? "text-gray-500 dark:text-gray-400 pointer-events-none cursor-not-allowed"
                  : ""
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex w-full items-center justify-center gap-5 flex-wrap mt-10">
              <a href="https://github.com/nauman331" className="bg-[#C62828] text-white p-2 rounded-full cursor-pointer">
                <Github />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100091209582055&mibextid=dZk1I5icssMIZk4L" className="bg-[#C62828] text-white p-2 rounded-full cursor-pointer">
                <Facebook />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-nauman-72a2b2298?utm_source=share&utm_compaign=share_via&utm_content=profile&utm_medium=android_app" className="bg-[#C62828] text-white p-2 rounded-full cursor-pointer">
                <Linkedin />
              </a>
              <a href="https://www.tiktok.com/@naumansoftwareengineer?_t=ZS-8uRvIidEiee&_r=1" className="bg-[#C62828] text-white p-3 rounded-full cursor-pointer">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
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
          href="https://api.whatsapp.com/send?phone=923027731120&text=Hello!%20Are%20You%20Available."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed z-[999] bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg 
            transition-all duration-300 transform opacity-100 translate-y-0 scale-100 hover:bg-green-600 hover:scale-110 active:scale-95 animate-fade-in"
        >
          <FaWhatsapp size={24} />
        </a>
      )}
    </>
  );
};

export default Navbar;