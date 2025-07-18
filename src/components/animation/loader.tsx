"use client";
import React from "react";
import { motion } from "framer-motion";

const ConstellationLoader = () => {
  const stars = [
    { x: 50, y: 30, delay: 0 },
    { x: 80, y: 20, delay: 0.2 },
    { x: 120, y: 40, delay: 0.4 },
    { x: 90, y: 70, delay: 0.6 },
    { x: 60, y: 80, delay: 0.8 },
    { x: 30, y: 60, delay: 1.0 },
    { x: 100, y: 50, delay: 1.2 },
    { x: 140, y: 70, delay: 1.4 },
  ];

  const connections = [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
    { from: 4, to: 5 },
    { from: 5, to: 0 },
    { from: 1, to: 6 },
    { from: 6, to: 3 },
    { from: 6, to: 7 },
  ];

  return (
    // <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[indigo-950] via-indigo-900 to-blue-950">
    <div className="flex items-center justify-center min-h-screen bg-[#010906]">
      <div className="relative">
        <motion.div
          className="relative w-48 h-32"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Constellation lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 170 100">
            {connections.map((connection, index) => {
              const fromStar = stars[connection.from];
              const toStar = stars[connection.to];

              return (
                <motion.line
                  key={index}
                  x1={fromStar.x}
                  y1={fromStar.y}
                  x2={toStar.x}
                  y2={toStar.y}
                  stroke="rgba(147, 197, 253, 0.6)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 2,
                    delay: index * 0.1 + 0.5,
                    ease: "easeInOut",
                  }}
                />
              );
            })}
          </svg>

          {stars.map((star, index) => (
            <motion.div
              key={index}
              className="absolute w-2 h-2 bg-blue-200 rounded-full shadow-lg"
              style={{
                left: `${(star.x / 170) * 100}%`,
                top: `${(star.y / 100) * 100}%`,
                transform: "translate(-50%, -50%)",
                boxShadow: "0 0 8px rgba(147, 197, 253, 0.8)",
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0.7, 1],
                scale: [0, 1.2, 0.8, 1],
              }}
              transition={{
                duration: 2,
                delay: star.delay,
                ease: "easeOut",
              }}
            />
          ))}

          {stars.map((star, index) => (
            <motion.div
              key={`twinkle-${index}`}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${(star.x / 170) * 100}%`,
                top: `${(star.y / 100) * 100}%`,
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                opacity: [0, 1, 0, 1, 0],
                scale: [0.5, 1.5, 0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 3,
                delay: star.delay + 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-blue-300 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ConstellationLoader;
