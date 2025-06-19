import { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="w-full mx-auto mt-[2rem] px-4 md:px-0  max-w-[100%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]">
      {children}
    </div>
  );
}
