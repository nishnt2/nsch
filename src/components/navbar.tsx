import Link from 'next/link';
import { Button } from './ui/button';
import { Moon, Sun } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-4 z-50 mx-auto w-full max-w-[100%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] backdrop-blur-md bg-white/70 dark:bg-gray-900/70  rounded-xl shadow-xl">
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

        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-gray-700 dark:text-gray-200 text-2xl">
          ☰
        </button>
      </div>
    </nav>
  );
}
