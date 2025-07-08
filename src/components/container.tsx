import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="font-code flex-1 w-full mx-auto mt-4 px-2 md:px-0  max-w-[100%] sm:max-w-[600px] md:max-w-[650px] lg:max-w-[700px]">
      {children}
    </div>
  );
}
