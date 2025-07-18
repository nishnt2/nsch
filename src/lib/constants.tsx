import Image from "next/image";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiPrisma,
  SiStoryblok,
  SiFramer,
  SiGit,
  SiRedux,
  SiDocker,
} from "react-icons/si";

export const techStack = [
  { name: "React", icon: <SiReact color="#61DAFB" /> },
  { name: "Next.js", icon: <SiNextdotjs color="#eee" /> },
  { name: "Redux", icon: <SiRedux color="#764ABC" /> },

  {
    name: "JavaScript",
    icon: <SiJavascript color="#F7DF1E" />,
  },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
  { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "Framer Motion", icon: <SiFramer color="#0055FF" /> },
  { name: "Git", icon: <SiGit color="#F05032" /> },
  { name: "Docker", icon: <SiDocker color="#2496ED" /> },
  { name: "Storyblok", icon: <SiStoryblok color="#1475C6" /> },

  { name: "Prisma", icon: <SiPrisma color="#2D3748" /> },
  {
    name: "Convex",
    icon: (
      <Image src="/assets/convex-icon.png" alt="Java" width={18} height={18} />
    ),
  },
  {
    name: "Java",
    icon: (
      <Image src="/assets/java-icon.png" alt="Java" width={18} height={18} />
    ),
  },
];

export const experiences = [
  {
    company: "Appcore Labs India",
    position: "Full Stack Engineer",
    duration: "2022 - Present",
    location: "Remote, India",
    description: [
      "Built fast, scalable apps with React and Next.js, improving performance and reducing load time by 30%.",
      "Integrated and structured dynamic content using Storyblok CMS, enabling flexible content management and faster delivery.",
      "Wrote Convex queries/mutations for real-time data sync and reduced backend complexity.",
      "Built reusable UI components with ShadCN UI for consistent cross-browser design.",
      "Implemented dynamic tables (TanStack Table) with sorting, filtering, and pagination.",
    ],
  },
  {
    company: "Fyntune Solutions Pvt. Ltd.",
    position: "ReactJs Developer",
    duration: "2021 - 2022",
    location: "Remote, India",
    description: [
      "Built an InsurTech platform integrating third-party APIs for quotes and policy handling.",
      "Managed complex state using Redux Toolkit and RTK Query with modular, cached data flow.",
      "Used TypeScript to improve code reliability and developer efficiency.",
    ],
  },
];
