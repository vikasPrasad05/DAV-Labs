"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";

export function HyperText({ text, className }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState(text);
  const [trigger, setTrigger] = useState(false);
  const iterations = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!trigger) {
        setDisplayText(text);
        return;
      }

      if (iterations.current < text.length) {
        setDisplayText((t) =>
          t
            .split("")
            .map((l, i) => {
              if (i < iterations.current) {
                return text[i];
              }
              return alphabets[Math.floor(Math.random() * alphabets.length)];
            })
            .join("")
        );
        iterations.current += 1 / 10; // Speed of decoding
      } else {
        setTrigger(false);
        iterations.current = 0;
      }
    }, 30); 

    return () => clearInterval(interval);
  }, [text, trigger]);

  return (
    <motion.span
      className={className}
      onMouseEnter={() => setTrigger(true)}
    >
      {displayText}
    </motion.span>
  );
}