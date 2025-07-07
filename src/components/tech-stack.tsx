// components/TechStack.tsx
"use client";

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
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const techStack = [
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

export default function TechStack() {
  return (
    <div className="flex gap-3 flex-wrap justify-center w-[90%] m-auto">
      {techStack.map(({ name, icon }) => (
        <Badge
          key={name}
          size={"sm"}
          variant="outline"
          className="flex items-center gap-2 px-2 py-2 text-xs font-medium"
        >
          {icon}
          {name}
        </Badge>
      ))}
    </div>
  );
}
