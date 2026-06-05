"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  const ringRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const ring = ringRef.current;

    if (!cursor || !ring) return;

    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;

      mouseY = e.clientY;

      cursor.style.transform = `translate(${mouseX - 6}px, ${
        mouseY - 6
      }px)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX - 20) * 0.15;

      ringY += (mouseY - ringY - 20) * 0.15;

      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;

      requestAnimationFrame(animate);
    };

    const onEnter = () => {
      ring.classList.add("hovering");
    };

    const onLeave = () => {
      ring.classList.remove("hovering");
    };

    window.addEventListener(
      "mousemove",
      onMouseMove
    );

    animate();

    const links =
      document.querySelectorAll("a, button");

    links.forEach((l) => {
      l.addEventListener("mouseenter", onEnter);

      l.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener(
        "mousemove",
        onMouseMove
      );

      links.forEach((l) => {
        l.removeEventListener(
          "mouseenter",
          onEnter
        );

        l.removeEventListener(
          "mouseleave",
          onLeave
        );
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor"
      />

      <div
        ref={ringRef}
        className="custom-cursor-ring"
      />
    </>
  );
}