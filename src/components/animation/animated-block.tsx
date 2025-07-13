"use client";
import React, { useRef } from "react";

import { motion, useInView } from "motion/react";

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  initialOpacity?: number;
  finalOpacity?: number;
  initialY?: string;
  finalY?: string;
  duration?: string;
  delay?: string;
  offset?: number;
  animateOnlyOnce?: boolean;
  animateWhenInView?: boolean;
  fullWidth?: boolean;
}

const AnimatedBlock: React.FC<IProps> = ({
  initialOpacity = 0,
  finalOpacity = 1,
  initialY = "-15",
  finalY = "0",
  duration = "1",
  delay = "0.2",
  fullWidth = true,
  animateOnlyOnce = true,
  offset = 0.1, //animates when element is 10% below from top inside viewport
  animateWhenInView = true,
  children,
}) => {
  const divRef = useRef(null);
  const isInView = useInView(divRef, {
    once: animateOnlyOnce,
    margin: `${offset * 100}% 0% 0% 0%`,
  });

  return (
    <motion.div
      className={`${fullWidth && "w-full"}`}
      ref={divRef}
      initial={{ opacity: initialOpacity, y: parseInt(initialY) }}
      animate={
        !animateWhenInView
          ? { opacity: finalOpacity, y: parseInt(finalY) }
          : animateWhenInView && isInView
          ? { opacity: finalOpacity, y: parseInt(finalY) }
          : {}
      }
      transition={{ duration: parseInt(duration), delay: parseFloat(delay) }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedBlock;
