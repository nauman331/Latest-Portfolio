import { JSX } from "react";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiShadcnui, SiTailwindcss, SiFramer, SiAndroidstudio, SiMysql, SiSocketdotio, SiRedux } from "react-icons/si";
import { TbHexagonLetterE } from "react-icons/tb";
import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import project5 from "../assets/projects/project5.png";
import project6 from "../assets/projects/project6.png";
import project7 from "../assets/projects/project7.png";
import project8 from "../assets/projects/project8.png";

import client1 from "../assets/clients/client1.webp";
import client2 from "../assets/clients/client2.webp";
import client3 from "../assets/clients/client3.webp";
import client4 from "../assets/clients/client4.webp";
import client5 from "../assets/clients/client5.webp";
import client6 from "../assets/clients/client6.png";

export const skills = [
  "typescript",
  "javascript",
  "react",
  "android",
  "ios",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "heroku",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "figma",
  "mongodb",
  "mysql",
  "tailwindcss",
  "socketdotio",
  "framer",
  "redux",
  "shadcnui"
];

export const aboutskills: Record<string, { icon: JSX.Element; color: string }> = {
  "React JS": { icon: <FaReact className="text-blue-500 text-2xl" />, color: "#3b82f6" },
  "Node JS": { icon: <FaNodeJs className="text-green-500 text-2xl" />, color: "#22c55e" },
  "Express JS": { icon: <TbHexagonLetterE className="text-zinc-400 text-2xl" />, color: "#18181b" },
  "React Native": { icon: <SiAndroidstudio className="text-green-600 text-2xl" />, color: "#16a34a" },
  "Tailwind Css": { icon: <SiTailwindcss className="text-cyan-500 text-2xl" />, color: "#06b6d4" },
  "Shadcn UI": { icon: <SiShadcnui className="text-gray-900 text-2xl" />, color: "#18181b" },
  "Typescript": { icon: <SiTypescript className="text-blue-600 text-2xl" />, color: "#2563eb" },
  "Framer Motion": { icon: <SiFramer className="text-pink-500 text-2xl" />, color: "#ec4899" },
  "Mongo DB": { icon: <FaDatabase className="text-green-700 text-2xl" />, color: "#15803d" },
  "MySQL": { icon: <SiMysql className="text-orange-800 text-2xl" />, color: "#c2410c" },
  "Socket. IO": { icon: <SiSocketdotio className="text-gray-900 text-2xl" />, color: "#1e293b" },
  "Redux Toolkit": { icon: <SiRedux className="text-purple-500 text-2xl" />, color: "#9333ea" },
};

export const projects = [
  {
    title: "E-Commerce Website",
    description: "A full-stack MERN e-commerce platform with PayPal integration.",
    techStack: ["React", "TypeScript", "TailwindCSS", "Node.js", "MongoDB"],
    github: "#",
    liveDemo: "#",
    image: project1
  },
  {
    title: "Crypto Investment Platform",
    description: "A blockchain-based investment platform for staking BNB.",
    techStack: ["Solidity", "React", "TailwindCSS", "Node.js"],
    github: "#",
    liveDemo: "#",
    image: project2

  },
  {
    title: "Crypto Investment Platform",
    description: "A blockchain-based investment platform for staking BNB.",
    techStack: ["Solidity", "React", "TailwindCSS", "Node.js"],
    github: "#",
    liveDemo: "#",
    image: project3
  },
  {
    title: "E-Commerce Website",
    description: "A full-stack MERN e-commerce platform with PayPal integration.",
    techStack: ["React", "TypeScript", "TailwindCSS", "Node.js", "MongoDB"],
    github: "#",
    liveDemo: "#",
    image: project4
  },
  {
    title: "Crypto Investment Platform",
    description: "A blockchain-based investment platform for staking BNB.",
    techStack: ["Solidity", "React", "TailwindCSS", "Node.js"],
    github: "#",
    liveDemo: "#",
    image: project5

  },
  {
    title: "Crypto Investment Platform",
    description: "A blockchain-based investment platform for staking BNB.",
    techStack: ["Solidity", "React", "TailwindCSS", "Node.js"],
    github: "#",
    liveDemo: "#",
    image: project6
  },
  {
    title: "E-Commerce Website",
    description: "A full-stack MERN e-commerce platform with PayPal integration.",
    techStack: ["React", "TypeScript", "TailwindCSS", "Node.js", "MongoDB"],
    github: "#",
    liveDemo: "#",
    image: project7
  },
  {
    title: "Crypto Investment Platform",
    description: "A blockchain-based investment platform for staking BNB.",
    techStack: ["Solidity", "React", "TailwindCSS", "Node.js"],
    github: "#",
    liveDemo: "#",
    image: project8

  },
];

export const reviews = [
  {
    name: "AR Saleemi",
    username: "@arsaleemi",
    body: "I had a great experience working with Muhammad Nauman. They improved the user experience on my website by implementing effective search features and pagination. Their attention to detail and commitment to enhancing usability were impressive. I highly recommend Muhammad Nauman for UX-related projects.",
    img: client1
  },
  {
    name: "Edu Topia",
    username: "@edutopia",
    body: "Very fast developer! compeleted full webpage only in two days including all the responsive and animation work",
    img: client2
  },
  {
    name: "Mr Nabeel",
    username: "@mrnabeel",
    body: "The portfolio website you made for my sister zahra mauji is very beautifull. She loved it very much. I will love to work with you again",
    img: client3
  },
  {
    name: "Roi MH",
    username: "@roimh",
    body: "I already working with Muhammad Nauman from 1 year as he always provides best results in making responsive websites and aligning dashboards",
    img: client4
  },
  {
    name: "Graphion Media",
    username: "@graphionmedia",
    body: "Built very sleek and beautifull design website, loved his work and recommend for any frontend work.Highly recomended from me because of his elegent work",
    img: client5
  },
  {
    name: "Al Bashayera",
    username: "@albashayera",
    body: "Nauman, I just have to say, this platform is amazing! Everything runs so smoothly, and the whole bidding process feels effortless. It’s super easy to use, and the design looks really professional. I can tell a lot of effort went into this. Honestly, great job—this feels like a high-quality auction site!",
    img: client6
  },
];