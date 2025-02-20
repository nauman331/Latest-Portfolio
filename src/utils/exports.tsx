import { JSX } from "react";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiShadcnui, SiTailwindcss, SiFramer, SiAndroidstudio, SiMysql, SiSocketdotio, SiRedux } from "react-icons/si";
import { TbHexagonLetterE } from "react-icons/tb";

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
  "Shadcn/magic UI": { icon: <SiShadcnui className="text-gray-900 text-2xl" />, color: "#18181b" },
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
    image: "https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Crypto Investment Platform",
    description: "A blockchain-based investment platform for staking BNB.",
    techStack: ["Solidity", "React", "TailwindCSS", "Node.js"],
    github: "#",
    liveDemo: "#",
    image: "https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  },
  {
    title: "Crypto Investment Platform",
    description: "A blockchain-based investment platform for staking BNB.",
    techStack: ["Solidity", "React", "TailwindCSS", "Node.js"],
    github: "#",
    liveDemo: "#",
    image: "https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  },
];