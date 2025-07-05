'use client';

import { cn } from '@/lib/utils';
import { stagger, useAnimate, useInView } from 'motion/react';
import { useEffect } from 'react';

export const TypewriterEffectSmooth = ({
  words,
  className,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(''),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        'span',
        { opacity: 1, transform: 'translateY(0px)' },
        {
          duration: 0.6,
          delay: stagger(0.06),
          easing: 'ease-in-out',
        }
      );
    }
  }, [isInView, animate]);

  const renderWords = () => (
    <div ref={scope} className="flex flex-wrap leading-tight">
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block mr-1">
          {word.text.map((char, index) => (
            <span
              key={`char-${index}`}
              className={cn(
                'text-textClr opacity-0 inline-block',
                word.className
              )}
            >
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div className={cn('my-6', className)}>
      <div className="text-sm">{renderWords()}</div>
    </div>
  );
};
