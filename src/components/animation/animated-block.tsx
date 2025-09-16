"use client";
import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  initialOpacity?: number;
  finalOpacity?: number;
  initialY?: number;
  finalY?: number;
  duration?: number;
  delay?: number;
  offset?: number;
  animateOnlyOnce?: boolean;
  animateWhenInView?: boolean;
  fullWidth?: boolean;
  critical?: boolean;
}

const AnimatedBlock: React.FC<IProps> = ({
  initialOpacity = 0,
  finalOpacity = 1,
  initialY = -15,
  finalY = 0,
  duration = 0.4,
  delay = 0.2,
  fullWidth = true,
  animateOnlyOnce = true,
  offset = 0.1,
  animateWhenInView = true,
  critical = false,
  children,
}) => {
  const divRef = useRef(null);
  const isInView = useInView(divRef, {
    once: animateOnlyOnce,
    margin: `${offset * 100}% 0% 0% 0%`,
  });

  const shouldReduceMotion = useReducedMotion();

  const initial =
    critical || shouldReduceMotion
      ? {}
      : { opacity: initialOpacity, y: initialY };
  const animate =
    !animateWhenInView || shouldReduceMotion
      ? { opacity: finalOpacity, y: finalY }
      : isInView
      ? { opacity: finalOpacity, y: finalY }
      : {};

  return (
    <motion.div
      className={fullWidth ? "w-full" : ""}
      ref={divRef}
      initial={initial}
      animate={animate}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedBlock;
