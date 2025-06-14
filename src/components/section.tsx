import { ReactNode } from 'react';

export default function Section({ children }: { children: ReactNode }) {
  return (
    <section className="w-full rounded-2xl bg-[#030f1a]/70 backdrop-blur-[2px] border border-white/20 shadow-md p-6 sm:p-8">
      {children}
    </section>
  );
}
