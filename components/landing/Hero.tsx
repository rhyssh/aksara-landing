import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F7FA] via-[#E8F4F8] to-[#F5F7FA] dark:from-[#0a1929] dark:via-[#0F2A3F] dark:to-[#0a1929]">
        {/* Animated orbs */}
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
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-gradient-to-r from-[#2EC4B6]/20 to-[#3EDBF0]/20 backdrop-blur-sm rounded-full border border-[#3EDBF0]/30"
            >
              <Sparkles className="w-4 h-4 text-[#2EC4B6] dark:text-[#3EDBF0]" />
              <span className="text-sm text-[#0F2A3F] dark:text-white">Digital Solutions Provider</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-[#0F2A3F] dark:text-white leading-tight">
              <span className="block">Build Scalable</span>
              <span className="block bg-gradient-to-r from-[#2EC4B6] to-[#3EDBF0] bg-clip-text text-transparent">Digital Solutions</span>
              <span className="block">for Your Business</span>
            </h1>

            <p className="text-lg md:text-xl text-[#0F2A3F]/70 dark:text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
              We transform your ideas into powerful digital experiences. From web development to system integration, we deliver cutting-edge solutions that drive growth and innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="group px-8 py-4 bg-gradient-to-r from-[#2EC4B6] to-[#3EDBF0] text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-[#3EDBF0]/30 flex items-center justify-center gap-2"
              >
                <span>Konsultasi Sekarang</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 backdrop-blur-xl bg-white/70 border border-white/40 text-[#0F2A3F] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#3EDBF0]/30"
              >
                Lihat Portfolio
              </motion.button>
            </div>
          </motion.div>

          {/* Glass Card Showcase */}
          <GlassCard className="p-8 mt-16" delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-center p-6 rounded-xl bg-gradient-to-br from-[#2EC4B6]/10 to-transparent">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="text-xl mb-2 text-[#0F2A3F] dark:text-white">Fast Performance</h3>
                <p className="text-[#0F2A3F]/70 dark:text-white/70">Lightning-fast applications built with modern technology</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="text-center p-6 rounded-xl bg-gradient-to-br from-[#3EDBF0]/10 to-transparent">
                <div className="text-4xl mb-3">🎨</div>
                <h3 className="text-xl mb-2 text-[#0F2A3F] dark:text-white">Premium Design</h3>
                <p className="text-[#0F2A3F]/70 dark:text-white/70">Beautiful, user-friendly interfaces that convert</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="text-center p-6 rounded-xl bg-gradient-to-br from-[#2EC4B6]/10 to-transparent">
                <div className="text-4xl mb-3">🔒</div>
                <h3 className="text-xl mb-2 text-[#0F2A3F] dark:text-white">Secure & Scalable</h3>
                <p className="text-[#0F2A3F]/70 dark:text-white/70">Enterprise-grade security and infrastructure</p>
              </motion.div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
