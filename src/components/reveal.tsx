"use client";

import { MotionConfig, motion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

// Always render the same markup on server and client (no useReducedMotion branch): a different
// first render for reduced-motion visitors would leave the server's opacity:0 stuck on the DOM node.
// MotionConfig reducedMotion="user" drops the slide for those visitors and keeps a plain fade.
// Strong ease-out (starts fast, settles gently) and a short travel keep entrances quick and quiet.
export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
