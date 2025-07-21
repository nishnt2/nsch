"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingWrapperProps {
  children: React.ReactNode;
  loader: React.ReactNode;
  duration?: number;
}

const LoadingWrapper: React.FC<LoadingWrapperProps> = ({
  children,
  loader,
  duration = 1000,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!mounted) return null; // To avoid mismatch on first load

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {loader}
        </motion.div>
      ) : (
        <motion.div
          className="min-h-[100vh] flex flex-col"
          key="content"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingWrapper;
