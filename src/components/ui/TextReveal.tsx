"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const TextReveal = ({ 
  children, 
  className 
}: { 
  children: string; 
  className?: string; 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <h2 
      ref={ref}
      className={`${className} overflow-hidden flex flex-wrap gap-x-3`}
    >
      {children.split(" ").map((word, i) => (
        <span key={i} className="relative overflow-hidden inline-block">
          <motion.span
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{
              duration: 0.8,
              ease: [0.2, 0.65, 0.3, 0.9], // Custom cubic-bezier for "luxury" feel
              delay: i * 0.1, // Stagger effect
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h2>
  );
};