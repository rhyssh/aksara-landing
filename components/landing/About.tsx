import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Workflow, Rocket } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom web applications built with React, Next.js, and modern frameworks for optimal performance and user experience.",
    gradient: "from-[#2EC4B6]/20 to-[#3EDBF0]/20",
  },
  {
    icon: Database,
    title: "System Integration",
    description: "Seamlessly connect your existing systems with new solutions, ensuring smooth data flow and operational efficiency.",
    gradient: "from-[#3EDBF0]/20 to-[#7DF9FF]/20",
  },
  {
    icon: Workflow,
    title: "Digital Solutions",
    description: "End-to-end digital transformation services from strategy to implementation, tailored to your business needs.",
    gradient: "from-[#2EC4B6]/20 to-[#7DF9FF]/20",
  },
  {
    icon: Rocket,
    title: "Product Development",
    description: "Turn your ideas into reality with our full-stack product development services, from MVP to enterprise solutions.",
    gradient: "from-[#3EDBF0]/20 to-[#2EC4B6]/20",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5F7FA] via-white to-[#F5F7FA] dark:from-[#0a1929] dark:via-[#0F2A3F] dark:to-[#0a1929]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 bg-gradient-to-r from-[#2EC4B6]/20 to-[#3EDBF0]/20 rounded-full text-sm text-[#0F2A3F] dark:text-white border border-[#3EDBF0]/30">About Akarsa Project</span>
          <h2 className="text-4xl md:text-5xl mb-6 text-[#0F2A3F] dark:text-white">
            Your Digital
            <span className="bg-gradient-to-r from-[#2EC4B6] to-[#3EDBF0] bg-clip-text text-transparent"> Transformation </span>
            Partner
          </h2>
          <p className="text-lg text-[#0F2A3F]/70 dark:text-white/70 max-w-3xl mx-auto">
            We specialize in creating innovative digital solutions that empower businesses to thrive in the modern digital landscape. Our team of experts combines technical excellence with creative thinking to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <GlassCard key={service.title} delay={index * 0.1} className="p-6 group">
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-[#0F2A3F] dark:text-white" />
              </div>
              <h3 className="text-xl mb-3 text-[#0F2A3F] dark:text-white">{service.title}</h3>
              <p className="text-[#0F2A3F]/70 dark:text-white/70 leading-relaxed">{service.description}</p>
            </GlassCard>
          ))}
        </div>

        {/* Stats Section */}
        <GlassCard className="mt-16 p-8 md:p-12 max-w-5xl mx-auto" delay={0.5}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="text-5xl mb-2 bg-gradient-to-r from-[#2EC4B6] to-[#3EDBF0] bg-clip-text text-transparent">50+</div>
              <p className="text-[#0F2A3F]/70 dark:text-white/70">Projects Completed</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <div className="text-5xl mb-2 bg-gradient-to-r from-[#2EC4B6] to-[#3EDBF0] bg-clip-text text-transparent">95%</div>
              <p className="text-[#0F2A3F]/70 dark:text-white/70">Client Satisfaction</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <div className="text-5xl mb-2 bg-gradient-to-r from-[#2EC4B6] to-[#3EDBF0] bg-clip-text text-transparent">24/7</div>
              <p className="text-[#0F2A3F]/70 dark:text-white/70">Support Available</p>
            </motion.div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
