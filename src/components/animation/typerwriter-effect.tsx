"use client";
import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
export const TypewriterEffectSmooth = ({
  words,
  className,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, { once: true });

  return (
    <div className={cn(className)}>
      <div ref={ref} className="flex flex-wrap leading-tight text-sm">
        {wordsArray.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block mr-1.5">
            {word.text.map((char, index) => (
              <motion.span
                key={`char-${idx}-${index}`}
                className={cn("inline-block", word.className)}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{
                  delay: idx * 0.2 + index * 0.06, // staggered by word + char
                  duration: 0.4,
                  ease: "easeIn",
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
