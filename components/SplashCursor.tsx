// @ts-ignore
  
"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useMouse } from "@uidotdev/usehooks";
import { motion } from "framer-motion";

export const SplashCursor = () => {
  const mouse = useMouse();
  const splashRef = useRef(null);

  // Delay initial mount for framer-motion presence
  useEffect(() => {
    setTimeout(() => {
      splashRef?.current?.classList.remove("opacity-0");
    }, 10);
  }, []);

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-50 flex items-center justify-center opacity-0 transition-opacity duration-300",
      )}
      ref={splashRef}
    >
      <motion.div
        className="relative"
        animate={{
          x: mouse.x ?? 0,
          y: mouse.y ?? 0,
        }}
        transition={{
          type: "spring",
          mass: 0.01,
          damping: 12,
          stiffness: 100,
        }}
      >
        <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white shadow-lg backdrop-blur-md">
          Coding that <strong>just feels</strong> right.
        </span>
      </motion.div>
    </div>
  );
};
