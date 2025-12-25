import { motion } from "motion/react";
import { ReactNode } from "react";

interface SectionTransitionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function SectionTransition({ children, delay = 0, className = "" }: SectionTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
