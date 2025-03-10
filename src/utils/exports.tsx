import { JSX } from "react";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiShadcnui, SiTailwindcss, SiGoogleassistant, SiFramer, SiAndroidstudio, SiMysql, SiSocketdotio, SiRedux, SiFigma } from "react-icons/si";
import { TbCircleLetterMFilled, TbHexagonLetterE } from "react-icons/tb";
import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import project5 from "../assets/projects/project5.png";
import project6 from "../assets/projects/project6.png";
import project7 from "../assets/projects/project7.png";
import project8 from "../assets/projects/project8.png";
import project9 from "../assets/projects/project9.png";

import client1 from "../assets/clients/client1.webp";
import client2 from "../assets/clients/client2.webp";
import client3 from "../assets/clients/client3.webp";
import client4 from "../assets/clients/client4.webp";
import client5 from "../assets/clients/client5.webp";
import client6 from "../assets/clients/client6.png";
import { BsFiletypeScss } from "react-icons/bs";

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
  "Express JS": { icon: <TbHexagonLetterE className="text-zinc-400 text-2xl" />, color: "#64748b" },
  "React Native": { icon: <SiAndroidstudio className="text-green-600 text-2xl" />, color: "#16a34a" },
  "Tailwind Css": { icon: <SiTailwindcss className="text-cyan-500 text-2xl" />, color: "#06b6d4" },
  "Shadcn UI": { icon: <SiShadcnui className="text-gray-600 text-2xl" />, color: "#64748b" },
  "Typescript": { icon: <SiTypescript className="text-blue-600 text-2xl" />, color: "#2563eb" },
  "Framer": { icon: <SiFramer className="text-pink-500 text-2xl" />, color: "#ec4899" },
  "Figma": { icon: <SiFigma className="text-pink-500 text-2xl" />, color: "#f472b6" },
  "Leverage AI": { icon: <SiGoogleassistant className="text-gray-600 text-2xl" />, color: "#64748b" },
  "Scss": { icon: <BsFiletypeScss className="text-pink-400 text-2xl" />, color: "#f472b6" },
  "Magic UI": { icon: <TbCircleLetterMFilled className="text-purple-500 text-2xl" />, color: "#a855f7" },
  "Mongo DB": { icon: <FaDatabase className="text-green-700 text-2xl" />, color: "#15803d" },
  "MySQL": { icon: <SiMysql className="text-orange-800 text-2xl" />, color: "#c2410c" },
  "Socket. IO": { icon: <SiSocketdotio className="text-gray-600 text-2xl" />, color: "#64748b" },
  "RTK": { icon: <SiRedux className="text-purple-500 text-2xl" />, color: "#9333ea" },
};

export const projects = [
  {
    title: "Al Bashayera Auto Auctions",
    description: "Worked as supervisor and frontend developer for live auctions and selling system of cars with admin panel",
    techStack: ["React", "TypeScript", "Scss", "Node.js", "Express JS", "MongoDB", "RTK", "Socket.io"],
    github: "https://github.com/nauman331/Car_Auction",
    liveDemo: "https://abaautoauctions.com/",
    image: project1
  },
  {
    title: "CEP Exams",
    description: "Enhanced user Expereince on CEP Exams website(NextJs + TailwindCss) by adding features like search bar and pagination etc.",
    techStack: ["RTK", "TailwindCSS", "NextJS"],
    liveDemo: "https://cepexam.com/",
    image: project2

  },
  {
    title: "Zero To Hero DSA Repo",
    description: "My daily routine for learning something new and improving logic building",
    techStack: ["Javascript", "DSA", "Logic Building"],
    github: "https://github.com/nauman331/DSA-Javascript",
    image: project3
  },
  {
    title: "ZOI Network",
    description: "My Early full-stack mobile mining web application with admin panel including refferal system and tasks",
    techStack: ["React", "ZOD", "CSS", "Node.js", "MongoDB", "Express JS"],
    github: "https://github.com/nauman331/zoinetwork",
    liveDemo: "https://zoi-network.vercel.app",
    image: project4
  },
  {
    title: "Flappy Base",
    description: "A frontend pre-sale landing page for crypto coins",
    techStack: ["NextJS", "TailwindCSS"],
    liveDemo: "https://flappybird-gules-sigma.vercel.app/",
    image: project5

  },
  {
    title: "Prime BNB",
    description: "A blockchain-based opBNB(crypto) investment platform with web3.0 including refferal and rewards system.",
    techStack: ["Solidity JS", "React", "TailwindCSS", "Typescript", "web3.js"],
    github: "https://github.com/nauman331/PrimeBNB",
    liveDemo: "https://prime-bnb.vercel.app",
    image: project6
  },
  {
    title: "1Core",
    description: "A crypto mining responsive dashboard page for one of my client",
    techStack: ["HTML", "CSS", "Responsive Design"],
    github: "https://github.com/nauman331/onecore.github.io",
    liveDemo: "https://nauman331.github.io/onecore.github.io/",
    image: project7
  },
  {
    title: "My Old Portfolio",
    description: "My second portfolio website",
    techStack: ["React", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/nauman331/My-Portfolio",
    liveDemo: "https://mnauman-portfolio.vercel.app/",
    image: project8

  },
  {
    title: "My First Portfolio",
    description: "One of my first portfolio website",
    techStack: ["React", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/nauman331/Nauman-Portfolio",
    liveDemo: "https://naumans-portfolio.vercel.app/",
    image: project9

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
    body: "Nauman, I just have to say, you have done great job! Every functionality I told works perfectally, and the whole bidding process feels effortless. It’s super easy to use, and the design looks really professional. I can tell a lot of effort went into this. Honestly, great job—this feels like a high-quality auction site!",
    img: client6
  },
];
