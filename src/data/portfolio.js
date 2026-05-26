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
  role: "Frontend Developer",
  location: "India",
  availability: "Open to internships and frontend roles",
  email: "",
  phone: "+919548477167",
  resume: "/ANIKET-RESUME.pdf",
  github: "https://github.com/AniketXcode",
  linkedin: "https://www.linkedin.com/in/aniketxcode/",
  leetcode: "https://leetcode.com/u/uqHeK1S5S8/",
  intro:
    "I build fast, responsive React interfaces with clean component structure, practical animation, and a focus on real user workflows.",
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
  { label: "Contact", href: "#contact", icon: Mail },
];

export const highlights = [
  { label: "React projects", value: "6+", icon: Blocks },
  { label: "Live deployments", value: "4", icon: Globe2 },
  { label: "Core stack", value: "MERN", icon: Server },
];

export const projects = [
  {
    title: "Next-Meet",
    image: "/meet.png",
    github: "https://github.com/AniketXcode/Next-Meet.git",
    demo: "https://next-meet-chi.vercel.app/",
    type: "Video meeting platform",
    summary:
      "A real-time meeting experience focused on clean joining flow, responsive layouts, and production deployment.",
    stack: ["React", "Tailwind", "WebRTC", "Vercel"],
    impact: ["Live meeting UI", "Responsive experience", "Deployment-ready build"],
  },
  {
    title: "Xlense Analytics",
    image: "/xlense.png",
    github: "https://github.com/AniketXcode/Xlense-Analytics.git",
    demo: "https://xlens-alpha.vercel.app/",
    type: "Analytics dashboard",
    summary:
      "A dashboard-style interface built for scanning metrics, visual hierarchy, and fast front-end interaction.",
    stack: ["React", "Charts", "Tailwind", "Vercel"],
    impact: ["Dashboard UX", "Data-focused layout", "Reusable UI sections"],
  },
  {
    title: "BlogHub",
    image: "/blog.png",
    github: "https://github.com/AniketXcode/Blog-Hub.git",
    demo: "https://github.com/AniketXcode/Blog-Hub.git",
    type: "Content platform",
    summary:
      "A blog application concept with content cards, navigation patterns, and a foundation for publishing workflows.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    impact: ["Full-stack pattern", "Content structure", "API-ready architecture"],
  },
];

export const projectStorageKey = "aniket-owner-projects-v1";

export const projectImageOptions = [
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
    skills: ["Node.js", "Express.js", "REST APIs", "Authentication", "Form handling"],
  },
  {
    title: "Data",
    icon: Database,
    skills: ["MongoDB", "JSON", "API integration", "Dashboard UI"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Vite", "Vercel", "ESLint", "Responsive testing"],
  },
];

export const timeline = [
  {
    title: "Frontend focused developer",
    meta: "React, Tailwind, animation systems",
    icon: BriefcaseBusiness,
    text:
      "Building practical web interfaces with reusable components, clean layout systems, and polished interaction states.",
  },
  {
    title: "MERN stack learning path",
    meta: "Node.js, Express, MongoDB",
    icon: GraduationCap,
    text:
      "Expanding from front-end UI into full-stack flows, API design, and deployable project architecture.",
  },
  {
    title: "Open for opportunities",
    meta: "Internship and frontend roles",
    icon: Rocket,
    text:
      "Looking for teams where I can contribute UI work, learn production practices, and grow with strong engineering feedback.",
  },
];

export const valueCards = [
  {
    title: "Clean UI systems",
    text: "Component-driven layouts, consistent spacing, and reusable patterns instead of one-off styling.",
    icon: Sparkles,
  },
  {
    title: "Performance mindset",
    text: "Lightweight pages, optimized images, stable layouts, and animation that does not block the main workflow.",
    icon: BadgeCheck,
  },
  {
    title: "Product thinking",
    text: "Interfaces designed around what users need to do, not only how the page looks in a screenshot.",
    icon: Blocks,
  },
];
