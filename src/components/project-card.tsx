import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";
import { ProjectType } from "@/lib/types";
import { SiGithub } from "react-icons/si";
import { Badge } from "./ui/badge";
import { BiLinkExternal } from "react-icons/bi";

type ProjectCardProps = {
  project: ProjectType;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-auto flex flex-col gap-4 border-gray-700  pt-0">
      <video
        src={project.asset}
        className="w-full object-cover min-h-44  rounded-md"
        autoPlay
        loop
        muted
        playsInline
      />

      <CardHeader className="text-sm md:text-md font-medium text-textClr flex items-center justify-between min-h-7">
        <CardTitle>{project.title}</CardTitle>
        <div className="flex gap-3">
          {project.webUrl ? (
            <Link
              href={project.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Web url"
            >
              <BiLinkExternal size={18} />
            </Link>
          ) : project.casestudy ? (
            <Link
              href={`/casestudy/${project.casestudy}`}
              aria-label="Casestudy url"
              rel="noopener noreferrer"
            >
              <BiLinkExternal size={18} />
            </Link>
          ) : null}
          {project.github ? (
            <Link
              href={project.github}
              target="_blank"
              aria-label="Github Link"
              rel="noopener noreferrer"
            >
              <SiGithub size={18} />
            </Link>
          ) : null}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-[13px] min-h-[100px] ">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.keywords.map((keyword, index) => (
            <Badge
              key={index}
              className="text-xs text-textClr bg-transparent border-gray-700 font-normal px-2.5 py-1 rounded-md "
            >
              {keyword}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
