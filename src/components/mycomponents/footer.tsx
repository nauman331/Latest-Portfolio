import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 text-center md:text-left">

        {/* Brand Name */}
        <div className="text-2xl font-bold">
          M. <span className="text-[#C62828]">Nauman</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 mt-4 md:mt-0">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="text-gray-300 hover:text-red-500 transition duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com" target="_blank" className="hover:text-red-500 transition duration-300">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-red-500 transition duration-300">
            <Linkedin size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" className="hover:text-red-500 transition duration-300">
            <Twitter size={24} />
          </a>
          <a href="https://facebook.com" target="_blank" className="hover:text-red-500 transition duration-300">
            <Facebook size={24} />
          </a>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} M. Nauman | All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
