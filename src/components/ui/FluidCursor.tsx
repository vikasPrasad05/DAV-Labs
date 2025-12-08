"use client";
import { useEffect } from "react";
import { useMotionValue, useSpring, motion } from "framer-motion";

export const FluidCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 bg-cyan-500 rounded-full blur-2xl pointer-events-none z-50 mix-blend-screen opacity-60"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        scale: 5, // Makes the glow large and diffuse
      }}
    />
  );
};