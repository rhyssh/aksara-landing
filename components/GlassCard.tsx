import React from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export function GlassCard({ children, className = "", hover = true, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      className={`
        backdrop-blur-xl bg-white/70 dark:bg-white/10 border border-white/40 dark:border-white/20
        rounded-2xl shadow-xl
        transition-all duration-300
        ${hover ? "hover:shadow-2xl hover:border-[#3EDBF0]/30" : ""}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

export function DarkGlassCard({ children, className = "", hover = true, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
      className={`
        backdrop-blur-xl bg-[#0F2A3F]/40 border border-white/10
        rounded-2xl shadow-2xl
        transition-all duration-300
        ${hover ? "hover:shadow-[0_0_30px_rgba(62,219,240,0.2)] hover:border-[#3EDBF0]/40" : ""}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
