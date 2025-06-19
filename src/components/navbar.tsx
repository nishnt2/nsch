'use client';
import Link from 'next/link';
import { Button } from './ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 h-nav z-50 mx-auto w-full max-w-[100%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] backdrop-blur-md bg-white/70 dark:bg-gray-900/70  sm:rounded-xl shadow-xl">
      <div className="flex h-16 items-center justify-between px-4">
        {/* Left: Logo */}
        <Link
          href="/"
          className="lg:text-xl md:text-lg font-code font-medium text-gray-900 dark:text-white"
        >
          Nishant{' '}
          <span className="inline-block animate-wave origin-[70%_70%] text-2xl">
            👋
          </span>
        </Link>

        {/* Web Navigation */}
        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-200 font-medium">
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>

        <ThemeSwitch />

        {/* Mobile Hamburger */}
        <button className="md:hidden text-gray-700 dark:text-gray-200 text-2xl">
          ☰
        </button>
      </div>
    </nav>
  );
}

function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? (
        <Sun className="pointer h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="pointer h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
