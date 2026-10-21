import {
  nitj,
  du,
  ecell,
  gdsc,
  virtual,
  portfolio,
  chatbot,
  recruitment,
  cluboard,
} from "../assets";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";

import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiDocker,
  SiGit,
  SiPostman,
  SiGooglecloud,
  SiOpenai,
  SiVite,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

export const resumeLink =
  "https://drive.google.com/file/d/1EpD5jOWKvY_8QI9YSDEsAYlaz6plLyBN/view";
export const repoLink = "https://github.com/khanshahnwaz/khan_shahnwaz_portfolio";
export const callToAction = "https://www.linkedin.com/in/khanshahnwaz";

export const navLinks = [
  { id: "skills", title: "Skills & Experience" },
  { id: "education", title: "Education" },
  { id: "projects", title: "Projects" },
  { id: "achievements", title: "Coding Profiles" },
  { id: "extraCurricular", title: "Leadership" },
  { id: "contactMe", title: "Contact" },
];

export const aboutMe = {
  name: "Shahnwaz Khan",
  githubUsername: "khanshahnwaz",
  tagLine: "MCA @ NIT Jamshedpur '27 | Software Engineer | Full Stack & AI",
  intro:
    "MCA student at NIT Jamshedpur and software developer focused on full-stack systems, backend engineering, and practical AI applications. I enjoy building reliable products, exploring algorithms, and turning complex problems into useful software.",
};

export const educationList = [
  {
    id: "education-1",
    icon: nitj,
    title: "National Institute of Technology Jamshedpur",
    degree: "Master of Computer Applications (MCA)",
    duration: "August 2024 – May 2027",
    content1: "Expected graduation: May 2027",
    content2: "Focus: software engineering, algorithms, databases, and AI applications",
  },
  {
    id: "education-2",
    icon: du,
    title: "Acharya Narendra Dev College, University of Delhi",
    degree: "B.Sc. (Hons.) Computer Science",
    duration: "2020 – 2023",
    content1: "Graduated with 9.1/10 CGPA",
    content2: "Coursework included data structures, DBMS, software engineering, and machine learning",
  },
];

export const achievements = [
  {
    id: "coding-1",
    icon: portfolio,
    event: "LeetCode",
    position: "Knight · 1900 rating",
    content1: "Solved 850+ problems",
    content2: "Strong focus on data structures, algorithms, and problem solving",
    project: "https://leetcode.com/",
  },
  {
    id: "coding-2",
    icon: chatbot,
    event: "GeeksforGeeks",
    position: "500+ problems solved",
    content1: "Consistent practice across core CS and algorithmic topics",
    project: "https://www.geeksforgeeks.org/",
  },
  {
    id: "coding-3",
    icon: recruitment,
    event: "CodeChef",
    position: "1500 rating",
    content1: "Competitive programming and algorithmic problem solving",
    project: "https://www.codechef.com/",
  },
  {
    id: "coding-4",
    icon: cluboard,
    event: "Hacktoberfest",
    position: "Open-source participation",
    content1: "Contributed to open-source projects",
    project: "https://hacktoberfest.com/",
  },
];

export const skills = [
  {
    title: "Languages",
    items: [
      { id: "lang-1", icon: SiCplusplus, name: "C++" },
      { id: "lang-2", icon: SiPython, name: "Python" },
      { id: "lang-3", icon: SiJavascript, name: "JavaScript" },
      { id: "lang-4", icon: SiTypescript, name: "TypeScript" },
      { id: "lang-5", icon: DiJava, name: "Java" },
    ],
  },
  {
    title: "Frontend & Backend",
    items: [
      { id: "stack-1", icon: SiReact, name: "React" },
      { id: "stack-2", icon: SiNextdotjs, name: "Next.js" },
      { id: "stack-3", icon: SiTailwindcss, name: "Tailwind CSS" },
      { id: "stack-4", icon: SiNodedotjs, name: "Node.js" },
      { id: "stack-5", icon: SiExpress, name: "Express" },
      { id: "stack-6", icon: SiVite, name: "Vite" },
    ],
  },
  {
    title: "Databases, Tools & AI",
    items: [
      { id: "tools-1", icon: SiMongodb, name: "MongoDB" },
      { id: "tools-2", icon: SiPostgresql, name: "PostgreSQL" },
      { id: "tools-3", icon: SiMysql, name: "MySQL" },
      { id: "tools-4", icon: SiRedis, name: "Redis" },
      { id: "tools-5", icon: SiDocker, name: "Docker" },
      { id: "tools-6", icon: SiGit, name: "Git" },
      { id: "tools-7", icon: SiPostman, name: "Postman" },
      { id: "tools-8", icon: SiGooglecloud, name: "Google Cloud" },
      { id: "tools-9", icon: SiOpenai, name: "Generative AI" },
    ],
  },
];

export const experiences = [
  {
    organisation: "Accenture",
    logo: portfolio,
    link: "https://www.accenture.com/",
    positions: [
      {
        title: "Advanced Application Engineer Intern",
        duration: "Summer 2026 · 8-week internship",
        content: [
          {
            text: "Worked on Generative AI application development and enterprise software engineering workflows.",
            link: "",
          },
          {
            text: "Gained exposure to building and integrating AI-enabled application features in a professional delivery environment.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Freelance Software Development",
    logo: chatbot,
    positions: [
      {
        title: "Full-Stack Developer",
        duration: "Project-based",
        content: [
          {
            text: "Contributed to a production web application with authentication, API integrations, backend workflows, and Stripe payment integration.",
            link: "https://github.com/khanshahnwaz/ParkingNearAirport",
          },
          {
            text: "Worked across frontend and backend features with an emphasis on maintainability and reliable user flows.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Virtual Lab · Acharya Narendra Dev College, University of Delhi",
    logo: virtual,
    link: "https://vlab.andcollege.du.ac.in/",
    positions: [
      {
        title: "Tech Lead",
        duration: "October 2022 – May 2023",
        content: [
          {
            text: "Led a team of 40+ students contributing to the digitization of learning through Virtual Lab modules.",
            link: "https://vlab.andcollege.du.ac.in/",
          },
          {
            text: "Coordinated software development lifecycle activities for 15+ modules.",
            link: "",
          },
        ],
      },
      {
        title: "Web Lead",
        duration: "April 2022 – October 2022",
        content: [
          {
            text: "Coordinated a team of six student developers and supported delivery across multiple modules.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "E-Cell · NIT Jamshedpur",
    logo: ecell,
    link: "https://ecellnitjsr.vercel.app/",
    positions: [
      {
        title: "Web Developer",
        duration: "October 2024 – Present",
        content: [
          {
            text: "Contribute to the E-Cell NIT Jamshedpur website and its ongoing web development work.",
            link: "https://ecellnitjsr.vercel.app/",
          },
        ],
      },
    ],
  },
];

export const projects = [
  {
    id: "project-hnsw",
    title: "Custom Vector Database · HNSW",
    github: "https://github.com/khanshahnwaz/Custom-Vector-Database-HNSW",
    image: portfolio,
    content:
      "Implemented a custom vector database with an on-disk vector workflow and a Hierarchical Navigable Small World (HNSW) approximate-nearest-neighbor index. Benchmarked retrieval on 384-dimensional vectors using cosine distance.",
    stack: [
      { id: "hnsw-1", icon: SiCplusplus, name: "C++" },
      { id: "hnsw-2", icon: SiPython, name: "Python" },
    ],
  },
  {
    id: "project-docs",
    title: "Google Docs Clone",
    github: "https://github.com/khanshahnwaz/google-docs-clone",
    link: "https://google-docs-clone-umber-eight.vercel.app/",
    image: cluboard,
    content:
      "A collaborative document-editing application inspired by Google Docs, built as a full-stack web project.",
    stack: [
      { id: "docs-1", icon: SiNextdotjs, name: "Next.js" },
      { id: "docs-2", icon: SiReact, name: "React" },
      { id: "docs-3", icon: SiTailwindcss, name: "Tailwind CSS" },
    ],
  },
  {
    id: "project-recommender",
    title: "Recommender System",
    github: "https://github.com/khanshahnwaz/Recommender-System",
    image: chatbot,
    content:
      "Recommendation project exploring how user or item information can be used to generate relevant personalized suggestions.",
    stack: [
      { id: "rec-1", icon: SiPython, name: "Python" },
    ],
  },
  {
    id: "project-parking",
    title: "ParkingNearAirport",
    github: "https://github.com/khanshahnwaz/ParkingNearAirport",
    image: recruitment,
    content:
      "Full-stack parking application work involving authentication, APIs, backend workflows, and Stripe payment integration.",
    stack: [
      { id: "parking-1", icon: SiReact, name: "React" },
      { id: "parking-2", icon: SiNodedotjs, name: "Node.js" },
      { id: "parking-3", icon: SiExpress, name: "Express" },
    ],
  },
  {
    id: "project-dsa",
    title: "DSA Tracker",
    github: "https://github.com/khanshahnwaz/DSA_Tracker_Frontend",
    link: "https://dsa-tracker-frontend-kappa.vercel.app/",
    image: recruitment,
    content:
      "A question-tracking application for organizing solved DSA problems and revisiting them efficiently, with a backend and Redis-assisted performance work.",
    stack: [
      { id: "dsa-1", icon: SiReact, name: "React" },
      { id: "dsa-2", icon: SiTailwindcss, name: "Tailwind CSS" },
      { id: "dsa-3", icon: SiMongodb, name: "MongoDB" },
      { id: "dsa-4", icon: SiRedis, name: "Redis" },
    ],
  },
  {
    id: "project-chatbot",
    title: "MERN ChatBot",
    github: "https://github.com/khanshahnwaz/MERN_ChatBot",
    link: "https://mern-chat-bot-six.vercel.app/",
    image: chatbot,
    content:
      "A MERN application integrating the Google Gemini API to provide a conversational AI experience.",
    stack: [
      { id: "bot-1", icon: SiReact, name: "React" },
      { id: "bot-2", icon: SiNodedotjs, name: "Node.js" },
      { id: "bot-3", icon: SiExpress, name: "Express" },
      { id: "bot-4", icon: SiMongodb, name: "MongoDB" },
    ],
  },
  {
    id: "project-publications",
    title: "Faculty Publication Management",
    github: "https://github.com/khanshahnwaz/Andc_Treasure_Data_Management",
    link: "https://khanshahnwaz.github.io/Andc_Treasure_Data_Management/",
    image: cluboard,
    content:
      "A faculty publication management system for collecting publication records, filtering results, and exporting data for administrative use.",
    stack: [
      { id: "pub-1", icon: SiReact, name: "React" },
      { id: "pub-2", icon: SiTailwindcss, name: "Tailwind CSS" },
      { id: "pub-3", icon: SiMongodb, name: "MongoDB" },
      { id: "pub-4", icon: SiExpress, name: "Express" },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/khanshahnwaz",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/khanshahnwaz",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:shahnwazkhan2007@gmail.com",
  },
];

export const extraCurricular = [
  {
    id: 1,
    organisation: "E-Cell · NIT Jamshedpur",
    title: "Web Developer & Executive Member",
    duration: "2024 – Present",
    content: [
      {
        text: "Contribute to the official E-Cell website and student entrepreneurship initiatives.",
        link: "https://ecellnitjsr.vercel.app/",
      },
    ],
    logo: ecell,
  },
  {
    id: 2,
    organisation: "Google Developer Student Club · NIT Jamshedpur",
    title: "Member",
    duration: "2024 – Present",
    content: [
      {
        text: "Participate in campus developer community activities and technical events.",
        link: "",
      },
    ],
    logo: gdsc,
  },
];
