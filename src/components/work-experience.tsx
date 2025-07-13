import React from "react";
import { MapPin, Calendar } from "lucide-react";
import { experiences } from "@/lib/constants";

type WEStepType = {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: Array<string>;
};

const WorkExperienceStep = ({
  company,
  position,
  duration,
  location,
  description,
}: WEStepType) => {
  return (
    <div className="relative flex items-start space-x-4 pb-8">
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center relative">
        <div className="w-4 h-4 bg-sectionTitle rounded-full  z-10"></div>

        <div
          className="w-0.5 bg-gradient-to-b from-cyan-800 to-black absolute top-4 bottom-0 left-1/2 transform -translate-x-1/2"
          style={{ height: "calc(100% + 32px)" }}
        ></div>
      </div>

      {/* Content */}
      <div className="flex-1 pl-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
          <h3 className="text-lg font-medium text-textClr">{position}</h3>
          <div className="flex items-center space-x-2 text-sm ">
            <Calendar className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 mb-2">
          <h4 className="text-md font-medium ">{company}</h4>
        </div>

        <div className="flex items-center space-x-2 mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-sm text-gray-600">{location}</span>
        </div>

        <ul className="space-y-2">
          {description.map((point, index) => (
            <li key={index} className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-textClr rounded-full mt-2 flex-shrink-0"></div>
              <span className="opacity-70 leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const WorkExperienceTimeline = () => {
  return (
    <div className="">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <WorkExperienceStep
              key={index}
              company={exp.company}
              position={exp.position}
              duration={exp.duration}
              location={exp.location}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceTimeline;
