"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export interface AnimatedTextProps
  extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  initialOpacity?: number;
  finalOpacity?: number;
  initialY?: number;
  finalY?: number;
  duration?: number;
  delay?: number;
  offset?: number;
  animateOnlyOnce?: boolean;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  initialOpacity = 0,
  finalOpacity = 1,
  initialY = -20,
  finalY = 0,
  duration = 0.5,
  delay = 0.1,
  animateOnlyOnce = true,
  offset = 0.1,
  className = "",
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: animateOnlyOnce,
    margin: `${offset * 100}% 0% 0% 0%`,
  });

  const words = text.split(" ").filter(Boolean);

  return (
    <div ref={ref} className={className} {...rest}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: initialOpacity, y: initialY }}
          animate={isInView ? { opacity: finalOpacity, y: finalY } : {}}
          transition={{ duration, delay: index * delay }}
          style={{ display: "inline-block", marginLeft: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;
