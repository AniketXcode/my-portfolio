import {
  BadgeCheck,
  Blocks,
  BriefcaseBusiness,
  Code2,
  Database,
  Github,
  Globe2,
  GraduationCap,
  Linkedin,
  Mail,
  Rocket,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";

export const profile = {
  name: "Aniket",
  role: "MERN Stack Developer",
  location: "India",
  availability: "Open to full-stack internships and MERN developer roles",
  email: "",
  phone: "+919548477167",
  resume: "/ANIKET-RESUME.pdf",
  github: "https://github.com/AniketXcode",
  linkedin: "https://www.linkedin.com/in/aniketxcode/",
  leetcode: "https://leetcode.com/u/uqHeK1S5S8/",
  intro:
    "I build full-stack MERN applications with React frontends, Node.js/Express APIs, MongoDB data models, authentication flows, and deployment-ready code.",
};

export const navItems = [
  { label: "Home", href: "home" },
  { label: "Projects", href: "projects" },
  { label: "Skills", href: "skills" },
  { label: "About", href: "about" },
  { label: "Contact", href: "contact" },
];

export const socials = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "LeetCode", href: profile.leetcode, icon: Code2 },
  { label: "Contact", href: "contact", icon: Mail, internal: true },
];

export const highlights = [
  { label: "Full-stack projects", value: "6+", icon: Blocks },
  { label: "Live deployments", value: "4", icon: Globe2 },
  { label: "Primary stack", value: "MERN", icon: Server },
];

export const projects = [
  {
    title: "InterviewArc",
    image: "/Interviewarc.png",
    github: "https://github.com/AniketXcode/InterviewArc",
    demo: "https://interviewarc.tech/",
    type: "Web application",
    summary:
      "An AI-powered interview preparation platform that delivers realistic mock interviews with adaptive follow-up questions and resume-aware prompts, helping candidates build confidence and perform better in real hiring rounds.",
    stack: ["React", "Node.js", "AI/LLM", "MongoDB", "Vercel"],
    impact: [
      "AI-driven adaptive interview simulations",
      "Resume-aware question generation",
      "Performance tracking with detailed analytics",
    ],
  },
  {
    title: "Next-Meet",
    image: "/next.png",
    github: "https://github.com/AniketXcode/Next-Meet",
    demo: "https://next-meet-chi.vercel.app/",
    type: "Video meeting platform",
    summary:
      "A real-time video conferencing application built for seamless collaboration, featuring instant meeting creation, scheduling, and a responsive interface optimized for production use.",
    stack: ["React", "Node.js", "WebRTC", "Tailwind", "Vercel"],
    impact: [
      "Low-latency real-time communication via WebRTC",
      "Fully responsive meeting interface across devices",
      "Deployed in a production-ready environment",
    ],
  },
  {
    title: "Xlense Analytics",
    image: "/xlens.png",
    github: "https://github.com/AniketXcode/Xlense-Analytics",
    demo: "https://xlens-alpha.vercel.app/",
    type: "Analytics dashboard",
    summary:
      "A data visualization platform that transforms raw Excel data into interactive 2D and 3D charts, enabling users to extract insights through a clean, dashboard-driven interface.",
    stack: ["React", "Charts", "REST APIs", "Tailwind", "Vercel"],
    impact: [
      "Interactive 2D/3D chart generation from Excel data",
      "Modular reusable dashboard components",
      "Clean REST API-driven architecture",
    ],
  },
];

export const projectStorageKey = "aniket-owner-projects-v1";

export const projectImageOptions = [
  "/Interviewarc.png",
  "/next.png",
  "/xlens.png",
  "/meet.png",
  "/xlense.png",
  "/blog.png",
  "/Portfolio.png",
  "/todo.png",
  "/calculator.png",
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT/Auth", "Middleware", "Form handling"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "Mongoose", "Schemas", "CRUD", "JSON", "API integration"],
  },
  {
    title: "Deployment",
    icon: Wrench,
    skills: ["Git", "GitHub", "Vite", "Vercel", "Render", "ESLint", "Responsive testing"],
  },
];

export const timeline = [
  {
    title: "MERN stack developer",
    meta: "React, Node.js, Express, MongoDB",
    icon: BriefcaseBusiness,
    text:
      "Building end-to-end web applications with reusable React components, backend routes, API integration, and database-backed features.",
  },
  {
    title: "Backend and API practice",
    meta: "REST APIs, auth, CRUD workflows",
    icon: GraduationCap,
    text:
      "Strengthening server-side fundamentals through Express routes, middleware, request validation, authentication patterns, and MongoDB data modeling.",
  },
  {
    title: "Open for opportunities",
    meta: "Full-stack internships and MERN roles",
    icon: Rocket,
    text:
      "Looking for teams where I can contribute to UI, APIs, database flows, debugging, and production-ready feature delivery.",
  },
];

export const valueCards = [
  {
    title: "End-to-end thinking",
    text: "I connect UI screens with API contracts, database structure, validation, and user workflows.",
    icon: Sparkles,
  },
  {
    title: "Production mindset",
    text: "I care about deployable builds, stable layouts, clean code, meaningful errors, and maintainable project structure.",
    icon: BadgeCheck,
  },
  {
    title: "Job-ready workflow",
    text: "I can work across GitHub, deployment platforms, REST APIs, MongoDB, and responsive React UI.",
    icon: Blocks,
  },
];
