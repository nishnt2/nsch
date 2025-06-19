'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    const resizeCanvas = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();

    const width = window.innerWidth;
    const height = window.innerHeight;

    const stars = Array.from({ length: 130 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.2 + 0.5,
    }));

    // Shooting stars (light theme only)
    let shootingStars: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      color: string;
    }[] = [];

    const colors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#E96479'];

    const spawnShootingStar = () => {
      shootingStars.push({
        x: Math.random() * width,
        y: Math.random() * height * 0.5,
        vx: 4 + Math.random() * 2,
        vy: 2 + Math.random() * 1.5,
        alpha: 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    };

    let shootingTimer = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains('dark');

      const starColor =
        getComputedStyle(document.body)
          .getPropertyValue('--background-inverse')
          .trim() || '#ffffff';

      const strokeColor =
        getComputedStyle(document.body)
          .getPropertyValue('--stroke-color')
          .trim() || '#d1d5db';

      if (isDark) {
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
              ctx.lineWidth = 0.5;
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
            ctx.lineWidth = 0.4;
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(mouse.current.x, mouse.current.y);
            ctx.stroke();
          }
        });

        // Animate stars
        stars.forEach((star) => {
          star.x += star.vx;
          star.y += star.vy;
          if (star.x < 0 || star.x > width) star.vx *= -1;
          if (star.y < 0 || star.y > height) star.vy *= -1;
        });
      } else {
        // Light theme: colorful shooting stars
        if (shootingTimer <= 0) {
          const spawnCount = Math.floor(Math.random() * 2) + 1; // 1 or 2 at a time
          for (let i = 0; i < spawnCount; i++) {
            spawnShootingStar();
          }
          shootingTimer = Math.floor(Math.random() * 40) + 10; // next burst in 10–50 frames
        } else {
          shootingTimer--;
        }

        shootingStars = shootingStars.filter((s) => s.alpha > 0);
        shootingStars.forEach((s) => {
          ctx.beginPath();
          ctx.strokeStyle = `${s.color}${Math.floor(s.alpha * 255)
            .toString(16)
            .padStart(2, '0')}`;
          ctx.lineWidth = 2;
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(s.x - 20, s.y - 10);
          ctx.stroke();

          s.x += s.vx;
          s.y += s.vy;
          s.alpha -= 0.01;
        });
      }

      requestAnimationFrame(draw);
    };

    draw();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
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
