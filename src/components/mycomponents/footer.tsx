
import { Facebook, Linkedin, Github } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Footer = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <footer className="bg-neutral-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 text-center md:text-left">

        {/* Brand Name */}
        <div className="text-2xl font-bold">
          M. <span className={theme === "dark" ? "text-[#9C27B0]" : "text-[#C62828]"}>Nauman</span>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/nauman331" target="_blank" className={theme === "dark" ? "hover:text-[#9C27B0]" : "hover:text-[#C62828]"}>
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-nauman-72a2b2298?utm_source=share&utm_compaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className={theme === "dark" ? "hover:text-[#9C27B0]" : "hover:text-[#C62828]"}>
            <Linkedin size={24} />
          </a>
          <a href="https://www.tiktok.com/@naumansoftwareengineer?_t=ZS-8uRvIidEiee&_r=1" target="_blank" className={theme === "dark" ? "hover:text-[#9C27B0]" : "hover:text-[#C62828]"}>
            <FaTiktok size={24} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100091209582055&mibextid=dZk1I5icssMIZk4L" target="_blank" className={theme === "dark" ? "hover:text-[#9C27B0]" : "hover:text-[#C62828]"}>
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
