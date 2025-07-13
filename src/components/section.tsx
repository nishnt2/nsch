import { ReactNode } from "react";
import clsx from "clsx"; // Optional but helpful for cleaner conditional classes

export default function Section({
  children,
  classname = "",
  glassMorphed = true,
  title = "",
}: {
  children: ReactNode;
  classname?: string;
  glassMorphed?: boolean;
  title?: string;
}) {
  return (
    <section
      className={clsx(
        classname,
        "w-full  p-4 sm:p-6",
        glassMorphed
          ? "bg-glassBg backdrop-blur-[2px] rounded-md border border-white/5 shadow-md"
          : "bg-transparent backdrop-blur-0"
      )}
    >
      {title ? (
        <h2 className="mb-4 lg:mb-6 text-sectionTitle text-lg md:text-md font-medium">
          _{title}{" "}
        </h2>
      ) : null}

      {children}
    </section>
  );
}
