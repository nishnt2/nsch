"use client";
import { X } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect } from "react";
import { Button } from "./ui/button";

type MobileNavProps = {
  activeLink: string;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
  setIsContactDialogOpen: Dispatch<SetStateAction<boolean>>;
};

export default function MobileNavigation({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  activeLink,
  setIsContactDialogOpen,
}: MobileNavProps) {
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <div>
      {isMobileMenuOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Mobile Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", damping: 20, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] text-foreground  bg-[#010906]  z-[70] md:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-800 ">
                <Link
                  href="/"
                  className="text-lg font-code font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  &lt;Nsch/&gt;
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 dark:text-gray-200"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto">
                <ul className="space-y-6 p-4">
                  <li>
                    <Link
                      href="/about"
                      className={`hover:text-white ${
                        activeLink === "/about" && "text-white font-semibold"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
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
                      onClick={() => setIsMobileMenuOpen(false)}
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
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Articles
                    </Link>
                  </li>
                  <li>
                    <Button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsContactDialogOpen(true);
                      }}
                      className={`hover:text-white p-0 hover:bg-transparent contents bg-transparent text-base`}
                    >
                      Contact
                    </Button>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href="https://drive.google.com/file/d/1_lb0OMxyq3herSXslBV6O11ABo0Y6q59/view?usp=drive_link"
                      className={`hover:text-white `}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Resume
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}
