"use client";

import React, { useEffect } from "react";
import { useParams, useRouter } from "next/navigation"; // ← Perbaikan utama
import { motion } from "framer-motion";
import { X, ExternalLink, ArrowLeft, CheckCircle2 } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { useData } from "@/contexts/DataContext";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function ProjectDetail() {
  const params = useParams(); // ← useParams() di Next.js
  const router = useRouter(); // ← useRouter() dari next/navigation
  const { projects, techStacks, categories } = useData();

  const slug = params.slug as string; // ← Ambil slug dari params
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F5F7FA] to-white">
        <GlassCard className="p-8 text-center">
          <h2 className="text-2xl mb-4 text-[#0F2A3F]">Project not found</h2>
          <button onClick={() => router.push("/")} className="px-6 py-3 bg-gradient-to-r from-[#2EC4B6] to-[#3EDBF0] text-white rounded-lg hover:shadow-lg transition-all">
            Back to Home
          </button>
        </GlassCard>
      </div>
    );
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F7FA] via-white to-[#F5F7FA] pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Back Button */}
        <motion.button initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} onClick={() => router.push("/")} className="mb-8 flex items-center gap-2 text-[#0F2A3F] hover:text-[#2EC4B6] transition-colors group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </motion.button>

        {/* Project Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <GlassCard className="p-8 mb-8">
            <h1 className="text-3xl md:text-4xl mb-4 text-[#0F2A3F]">{project.title}</h1>
            <p className="text-lg text-[#0F2A3F]/70 mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-4">
              {project.categories.map((catId) => {
                const category = categories.find((c) => c.id === catId);
                return category ? (
                  <span key={catId} className="px-4 py-2 bg-gradient-to-r from-[#2EC4B6]/20 to-[#3EDBF0]/20 rounded-lg text-[#0F2A3F] border border-[#3EDBF0]/30">
                    {category.name}
                  </span>
                ) : null;
              })}
            </div>

            {project.externalLink && (
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2EC4B6] to-[#3EDBF0] text-white rounded-lg hover:shadow-lg transition-all hover:shadow-[#3EDBF0]/30"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Visit Project</span>
              </a>
            )}
          </GlassCard>
        </motion.div>

        {/* Image Gallery */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <GlassCard className="p-8 mb-8">
            <h2 className="text-2xl mb-6 text-[#0F2A3F]">Project Gallery</h2>
            <div className="bg-gradient-to-br from-[#2EC4B6]/10 to-[#3EDBF0]/10 rounded-xl p-12 text-center">
              <div className="text-8xl mb-4">{project.categories.includes("3") ? "🛍️" : project.categories.includes("4") ? "📊" : project.categories.includes("2") ? "📱" : "💻"}</div>
              <p className="text-[#0F2A3F]/70">Project visuals showcase</p>
            </div>
          </GlassCard>
        </motion.div>

        {/* Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <GlassCard className="p-6 h-full">
              <h2 className="text-xl mb-4 text-[#0F2A3F]">Problem Statement</h2>
              <p className="text-[#0F2A3F]/70 leading-relaxed">{project.problemStatement}</p>
            </GlassCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <GlassCard className="p-6 h-full">
              <h2 className="text-xl mb-4 text-[#0F2A3F]">Our Solution</h2>
              <p className="text-[#0F2A3F]/70 leading-relaxed">{project.solution}</p>
            </GlassCard>
          </motion.div>
        </div>

        {/* Key Features */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
          <GlassCard className="p-8 mb-8">
            <h2 className="text-2xl mb-6 text-[#0F2A3F]">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#2EC4B6] flex-shrink-0 mt-1" />
                  <span className="text-[#0F2A3F]/70">{feature}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Tech Stack */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
          <GlassCard className="p-8 mb-8">
            <h2 className="text-2xl mb-6 text-[#0F2A3F]">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((techId) => {
                const tech = techStacks.find((t) => t.id === techId);
                return tech ? (
                  <div key={techId} className="px-5 py-3 bg-gradient-to-br from-[#2EC4B6]/20 to-[#3EDBF0]/20 rounded-xl border border-[#3EDBF0]/30 flex items-center gap-2">
                    <span className="text-2xl">{tech.icon}</span>
                    <span className="text-[#0F2A3F]">{tech.name}</span>
                  </div>
                ) : null;
              })}
            </div>
          </GlassCard>
        </motion.div>

        {/* Business Impact */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
          <GlassCard className="p-8 bg-gradient-to-br from-[#2EC4B6]/5 to-[#3EDBF0]/5">
            <h2 className="text-2xl mb-4 text-[#0F2A3F]">Business Impact</h2>
            <p className="text-lg text-[#0F2A3F]/70 leading-relaxed">{project.businessImpact}</p>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
