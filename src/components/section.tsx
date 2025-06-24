import { ReactNode } from 'react';
import clsx from 'clsx'; // Optional but helpful for cleaner conditional classes

export default function Section({
  children,
  glassMorphed = true,
  title = '',
}: {
  children: ReactNode;
  glassMorphed?: boolean;
  title?: string;
}) {
  return (
    <section
      className={clsx(
        'w-full  p-6 sm:p-8',
        glassMorphed
          ? 'bg-glassBg backdrop-blur-[2px] rounded-md border border-white/5 shadow-md'
          : 'bg-transparent backdrop-blur-0'
      )}
    >
      <h2 className="font-code">/{title} </h2>
      {children}
    </section>
  );
}
