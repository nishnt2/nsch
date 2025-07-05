'use client';
import React, { ReactNode, useRef } from 'react';

import { motion, useInView } from 'motion/react';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  initialOpacity?: number;
  finalOpacity?: number;
  initialY?: number;
  finalY?: number;
  duration?: number;
  delay?: number;
  offset?: number;
  animateOnlyOnce?: boolean;
}

const AnimatedText: React.FC<IProps> = ({
  initialOpacity = 0,
  finalOpacity = 1,
  initialY = -20, // Starting 10 pixels above its final position
  finalY = 0, // Ending at its original position
  duration = 0.5,
  delay = 0.1,
  animateOnlyOnce = true,
  offset = 0.1, //when  element 10% from top inside viewport
  children,
  className = '',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: animateOnlyOnce,
    margin: `${offset * 100}% 0% 0% 0%`,
  });

  const splitAndAnimate = (node: ReactNode, wordIndex = 0): ReactNode => {
    if (typeof node === 'string') {
      return node
        .split(' ')
        .filter((item) => item)
        .map((word, index) => (
          <motion.span
            key={wordIndex + index}
            initial={{ opacity: initialOpacity, y: initialY }}
            animate={isInView ? { opacity: finalOpacity, y: finalY } : {}}
            transition={{ duration, delay: (wordIndex + index) * delay }}
            style={{ display: 'inline-block', marginLeft: '0.25em' }}
          >
            {word}
          </motion.span>
        ));
    }

    if (React.isValidElement(node) && node.props.children) {
      return React.cloneElement(node, {
        children: React.Children.map(node.props.children, (child, index) =>
          splitAndAnimate(child, wordIndex + index)
        ),
      } as any);
    }

    return node;
  };

  return (
    <div ref={ref} className={className}>
      {splitAndAnimate(children)}
    </div>
  );
};

export default AnimatedText;
