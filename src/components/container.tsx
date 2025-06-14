import { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="w-full mx-auto px-4 sm:max-w-[700px] md:max-w-[900px]">
      {children}
    </div>
  );
}
