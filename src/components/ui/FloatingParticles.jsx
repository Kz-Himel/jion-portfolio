"use client";

import { useEffect, useRef } from "react";

export default function FloatingParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

    const colors = [
      "rgba(255,107,26,",
      "rgba(0,212,255,",
      "rgba(255,140,66,",
    ];

    const particles = Array.from(
      { length: 60 },
      () => ({
        x: Math.random() * canvas.width,

        y: Math.random() * canvas.height,

        size: Math.random() * 2 + 0.5,

        speedX: (Math.random() - 0.5) * 0.4,

        speedY: (Math.random() - 0.5) * 0.4,

        opacity: Math.random() * 0.5 + 0.1,

        color:
          colors[
            Math.floor(
              Math.random() * colors.length
            )
          ],
      })
    );

    let animId;

    const animate = () => {
      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      particles.forEach((p) => {
        p.x += p.speedX;

        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;

        if (p.x > canvas.width) p.x = 0;

        if (p.y < 0) p.y = canvas.height;

        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();

        ctx.arc(
          p.x,
          p.y,
          p.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `${p.color}${p.opacity})`;

        ctx.fill();
      });

      animId = requestAnimationFrame(
        animate
      );
    };

    animate();

    const onResize = () => {
      canvas.width = window.innerWidth;

      canvas.height = window.innerHeight;
    };

    window.addEventListener(
      "resize",
      onResize
    );

    return () => {
      cancelAnimationFrame(animId);

      window.removeEventListener(
        "resize",
        onResize
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}