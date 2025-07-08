"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";

export default function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -1000, y: -1000 });
  const animationId = useRef<number>(0);
  const lastZoom = useRef(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    const getZoomLevel = () => {
      return window.devicePixelRatio || 1;
    };

    const getCurrentDimensions = () => {
      // Use visualViewport if available (better for zoom detection)
      if (window.visualViewport) {
        return {
          width: window.visualViewport.width,
          height: window.visualViewport.height,
        };
      }
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    };

    const updateCanvas = () => {
      const dimensions = getCurrentDimensions();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = dimensions.width * dpr;
      canvas.height = dimensions.height * dpr;
      canvas.style.width = `${dimensions.width}px`;
      canvas.style.height = `${dimensions.height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      return dimensions;
    };

    const initializeStars = () => {
      const dimensions = updateCanvas();
      stars = Array.from({ length: 130 }, () => ({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.2 + 0.5,
      }));
    };

    const redistributeStars = (newDimensions: {
      width: number;
      height: number;
    }) => {
      // Keep stars within new boundaries and redistribute them
      stars.forEach((star) => {
        // Clamp existing stars to new boundaries
        star.x = Math.min(Math.max(star.x, 0), newDimensions.width - 1);
        star.y = Math.min(Math.max(star.y, 0), newDimensions.height - 1);
      });

      // Add more stars if we have more space, or remove some if less space
      const targetStarCount = Math.floor(
        (newDimensions.width * newDimensions.height) / 8000
      );
      const clampedTargetCount = Math.max(80, Math.min(200, targetStarCount));

      if (stars.length < clampedTargetCount) {
        // Add stars
        const newStars = Array.from(
          { length: clampedTargetCount - stars.length },
          () => ({
            x: Math.random() * newDimensions.width,
            y: Math.random() * newDimensions.height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            radius: Math.random() * 1.2 + 0.5,
          })
        );
        stars.push(...newStars);
      } else if (stars.length > clampedTargetCount) {
        // Remove excess stars
        stars = stars.slice(0, clampedTargetCount);
      }
    };

    const draw = () => {
      const currentDimensions = getCurrentDimensions();
      const currentZoom = getZoomLevel();

      // Check if zoom level changed or dimensions changed
      if (currentZoom !== lastZoom.current) {
        lastZoom.current = currentZoom;
        updateCanvas();
        redistributeStars(currentDimensions);
      }

      ctx.clearRect(0, 0, currentDimensions.width, currentDimensions.height);

      const starColor =
        getComputedStyle(document.body)
          .getPropertyValue("--background-inverse")
          .trim() || "#ffffff";

      const strokeColor =
        getComputedStyle(document.body)
          .getPropertyValue("--stroke-color")
          .trim() || "#d1d5db";

      // Draw stars
      stars.forEach((star) => {
        ctx.fillStyle = starColor;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      //Connect stars
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = 0.6;
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }
      }

      // Connect stars to mouse
      stars.forEach((star) => {
        const dx = star.x - mouse.current.x;
        const dy = star.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.strokeStyle = strokeColor;
          ctx.lineWidth = 0.5;
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(mouse.current.x, mouse.current.y);
          ctx.stroke();
        }
      });

      // Animate stars
      stars.forEach((star) => {
        star.x += star.vx;
        star.y += star.vy;
        if (star.x < 0 || star.x > currentDimensions.width) star.vx *= -1;
        if (star.y < 0 || star.y > currentDimensions.height) star.vy *= -1;
      });

      animationId.current = requestAnimationFrame(draw);
    };

    // Initialize
    initializeStars();
    lastZoom.current = getZoomLevel();

    // Start animation
    draw();

    const handleResize = () => {
      const newDimensions = updateCanvas();
      redistributeStars(newDimensions);
    };

    const handleVisualViewportChange = () => {
      const newDimensions = updateCanvas();
      redistributeStars(newDimensions);
    };

    // Listen for both resize and visualViewport changes
    window.addEventListener("resize", handleResize);
    if (window.visualViewport) {
      window.visualViewport.addEventListener(
        "resize",
        handleVisualViewportChange
      );
    }

    window.addEventListener("mousemove", (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener(
          "resize",
          handleVisualViewportChange
        );
      }
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 -z-10 bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </motion.div>
  );
}
