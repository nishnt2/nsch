import { Badge } from "@/components/ui/badge";

import { techStack } from "@/lib/constants";
import AnimatedBlock from "./animation/animated-block";

export default function TechStack() {
  return (
    <div className="flex gap-3 flex-wrap justify-center w-[100%] sm:w-[90%] m-auto">
      {techStack.map(({ name, icon }, index) => (
        <AnimatedBlock
          fullWidth={false}
          animateWhenInView={false}
          key={name}
          delay={index / 10 + 0.01}
          className="max-w-max"
          initialY={-8}
          finalY={0}
          initialOpacity={0}
          finalOpacity={1}
        >
          <Badge
            size={"sm"}
            variant="outline"
            className="flex items-center gap-2 px-2 py-2 text-xs font-medium"
          >
            {icon}
            {name}
          </Badge>
        </AnimatedBlock>
      ))}
    </div>
  );
}
