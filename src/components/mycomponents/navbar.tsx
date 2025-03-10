import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUp, Sun, Moon } from "lucide-react";
import { ScrollProgress } from "../magicui/scroll-progress";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import { Facebook, Github, Linkedin } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { toggleTheme, setTheme } from "../../store/themeSlice";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  const links = [
    { name: "Home", href: "/" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (!storedTheme) {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const defaultTheme = systemPrefersDark ? "dark" : "light";
      dispatch(setTheme(defaultTheme));
      localStorage.setItem("theme", defaultTheme);
      toast.success("System's Default Theme Applied! You can change it anytime from Navbar.", { duration: 5000 });
    }
  }, [dispatch]);

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
            ${theme === "dark" ? "bg-gray-900/90 text-white" : "bg-white/90 text-black"}
            ${isScrolled
              ? "fixed top-0 left-0 right-0 w-screen backdrop-blur-md shadow-md py-4 border-b border-gray-200"
              : "mt-8 mb-0 transform backdrop-blur-md shadow-md rounded-full md:px-8 px-3 md:py-5 py-3 w-full border border-gray-200"
            }`}
        >
          <div className="flex items-center justify-between mx-auto max-w-6xl px-6">
            <div className="text-xl font-bold">
              <span>M.</span>
              <span className={theme === "dark" ? "text-[#9C27B0]" : "text-[#C62828]"}>Nauman</span>
            </div>
            <div className="hidden md:flex space-x-6 font-medium">
              {links.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${theme === "dark" ? "hover:text-[#9C27B0]" : "hover:text-[#C62828]"} transition-colors  ${location.pathname === item.href
                    ? `${theme === "dark" ? "border-b border-[#9C27B0]" : "border-b border-[#C62828]"} pointer-events-none cursor-not-allowed`
                    : ""
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => dispatch(toggleTheme())} className={theme === "dark" ? "text-white" : "text-black"}>
                {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
              </button>
              <button
                className={`md:hidden ${theme === "dark" ? "text-white" : "text-black"}`}
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
            className={`relative z-50 w-full shadow-lg rounded-lg py-6 flex flex-col space-y-4 items-center border ${theme === "dark" ? "bg-gray-900/90 text-white" : "bg-white/90 text-black"}
              transform transition-transform duration-700 ease-out animate-slide-down`}
          >
            {links.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${theme === "dark" ? "hover:text-[#9C27B0]" : "hover:text-[#C62828]"} transition-colors  ${location.pathname === item.href
                  ? `${theme === "dark" ? "border-b border-[#9C27B0]" : "border-b border-[#C62828]"} pointer-events-none cursor-not-allowed`
                  : ""
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex w-full items-center justify-center gap-5 flex-wrap mt-10">
              <a href="https://github.com/nauman331" className={`${theme === "dark" ? "bg-[#9C27B0]" : "bg-[#C62828]"} transition-colors text-white p-2 rounded-full cursor-pointer`}>
                <Github />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100091209582055&mibextid=dZk1I5icssMIZk4L" className={`${theme === "dark" ? "bg-[#9C27B0]" : "bg-[#C62828]"} transition-colors text-white p-2 rounded-full cursor-pointer`}>
                <Facebook />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-nauman-72a2b2298?utm_source=share&utm_compaign=share_via&utm_content=profile&utm_medium=android_app" className={`${theme === "dark" ? "bg-[#9C27B0]" : "bg-[#C62828]"} transition-colors text-white p-2 rounded-full cursor-pointer`}>
                <Linkedin />
              </a>
              <a href="https://www.tiktok.com/@naumansoftwareengineer?_t=ZS-8uRvIidEiee&_r=1" className={`${theme === "dark" ? "bg-[#9C27B0]" : "bg-[#C62828]"} transition-colors text-white p-3 rounded-full cursor-pointer`}>
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
      )}

      {showScrollTop ? (
        <button
          onClick={scrollToTop}
          className={`fixed z-[999] bottom-6 right-6 ${theme === "dark" ? "bg-[#9C27B0]" : "bg-[#C62828]"} text-white p-3 rounded-full shadow-lg 
            transition-all duration-300 transform opacity-100 translate-y-0 scale-100 hover:scale-110 active:scale-95 animate-fade-in`}
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