"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const activeLink = usePathname();

  return (
    <nav className="xxl:text-base text-sm text-foreground sticky text- top-0 md:top-1 h-nav z-50 mx-auto w-full max-w-[100%] sm:max-w-[600px] md:max-w-[650px] lg:max-w-[700px] backdrop-blur-[2px] bg-white/70 dark:bg-gray-900/70  sm:rounded-xl shadow-xl">
      <div className="flex h-16 items-center justify-between px-2 ">
        {/* Left: Logo */}
        <Link href="/" className="text-sm font-code font-medium">
          &lt;Nsch/&gt;
        </Link>

        {/* Web Navigation */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <Link
              href="/about"
              className={`hover:text-white ${
                activeLink === "/about" && "text-white font-semibold"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`hover:text-white ${
                activeLink === "/projects" && "text-white font-semibold"
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/articles"
              className={`hover:text-white ${
                activeLink === "/articles" && "text-white font-semibold"
              }`}
            >
              Articles
            </Link>
          </li>
          <li>
            <Link
              href="mailto:nishantpatil2911@gmail.com"
              className={`hover:text-white ${
                activeLink === "/articles" && "text-white font-semibold"
              }`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://drive.google.com/file/d/1_lb0OMxyq3herSXslBV6O11ABo0Y6q59/view?usp=drive_link"
              className={`hover:text-white ${
                activeLink === "/articles" && "text-white font-semibold"
              }`}
            >
              Resume
            </Link>
          </li>
        </ul>

        <div>
          {/* Mobile Hamburger */}
          <ThemeSwitch />

          <Button
            variant="ghost"
            className="md:hidden  text-gray-700 dark:text-gray-200 text-2xl"
          >
            ☰
          </Button>
        </div>
      </div>
    </nav>
  );
}

function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="destructive"
      size="icon"
      className="bg-transparent"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <motion.div
          key="sun"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0, ease: "easeOut" }}
        >
          <Sun className="pointer h-[1.4rem] w-[1.4rem]" />
        </motion.div>
      ) : (
        <motion.div
          key="moon"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0, ease: "easeOut" }}
        >
          <Moon className="pointer h-[1.4rem] w-[1.4rem]" />
        </motion.div>
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
