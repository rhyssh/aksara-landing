import React from "react";
import { motion } from "framer-motion";

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orb 1 */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#2EC4B6]/30 to-[#3EDBF0]/30 rounded-full blur-3xl"
      />

      {/* Gradient Orb 2 */}
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-gradient-to-br from-[#3EDBF0]/20 to-[#7DF9FF]/20 rounded-full blur-3xl"
      />

      {/* Gradient Orb 3 */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-br from-[#0F2A3F]/20 to-[#2EC4B6]/20 rounded-full blur-3xl"
      />

      {/* Floating geometric shapes */}
      <motion.div
        animate={{
          rotate: 360,
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-[#3EDBF0]/20 rounded-3xl"
      />

      <motion.div
        animate={{
          rotate: -360,
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/3 right-1/3 w-24 h-24 border-2 border-[#2EC4B6]/20 rounded-full"
      />
    </div>
  );
}

export function DarkFloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dark gradient orbs with glow */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -80, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-20 w-[400px] h-[400px] bg-gradient-to-br from-[#2EC4B6]/20 to-[#3EDBF0]/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-20 w-[450px] h-[450px] bg-gradient-to-br from-[#3EDBF0]/15 to-[#7DF9FF]/15 rounded-full blur-3xl"
      />

      {/* Geometric shapes with glow */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/3 right-1/4 w-40 h-40 border border-[#3EDBF0]/20 rounded-3xl shadow-[0_0_50px_rgba(62,219,240,0.1)]"
      />
    </div>
  );
}
