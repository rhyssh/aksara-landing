"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { useData } from "@/contexts/DataContext";
import { useRouter } from "next/navigation";

export function Portfolio() {
  const { projects, categories, techStacks } = useData();
  const router = useRouter(); // ← Ganti dari useNavigate

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTechStack, setSelectedTechStack] = useState<string>("all");

  // Filter published projects only
  const publishedProjects = projects.filter((p) => p.status === "published");

  const filteredProjects = useMemo(() => {
    return publishedProjects.filter((project) => {
      const categoryMatch = selectedCategory === "all" || project.categories.includes(selectedCategory);
      const techStackMatch = selectedTechStack === "all" || project.techStack.includes(selectedTechStack);
      return categoryMatch && techStackMatch;
    });
  }, [publishedProjects, selectedCategory, selectedTechStack]);

  const handleProjectClick = (slug: string) => {
    router.push(`/project/${slug}`); // ← Ganti dari navigate()
  };

  return (
    <section id="portfolio" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F5F7FA] to-white dark:from-[#0F2A3F] dark:via-[#0a1929] dark:to-[#0F2A3F]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12">
          <span className="inline-block px-4 py-2 mb-4 bg-gradient-to-r from-[#2EC4B6]/20 to-[#3EDBF0]/20 rounded-full text-sm text-[#0F2A3F] dark:text-white border border-[#3EDBF0]/30">Our Work</span>
          <h2 className="text-4xl md:text-5xl mb-6 text-[#0F2A3F] dark:text-white">
            Featured
            <span className="bg-gradient-to-r from-[#2EC4B6] to-[#3EDBF0] bg-clip-text text-transparent"> Projects </span>
          </h2>
          <p className="text-lg text-[#0F2A3F]/70 dark:text-white/70 max-w-3xl mx-auto">Explore our portfolio of successful projects that have helped businesses achieve their digital transformation goals.</p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="mb-12">
          <GlassCard className="p-6 max-w-5xl mx-auto" hover={false}>
            <div className="mb-6">
              <h3 className="text-sm mb-3 text-[#0F2A3F]/70 dark:text-white/70">Filter by Category</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === "all" ? "bg-gradient-to-r from-[#2EC4B6] to-[#3EDBF0] text-white shadow-lg" : "bg-white/50 dark:bg-white/10 text-[#0F2A3F] dark:text-white hover:bg-white/80 dark:hover:bg-white/20"
                  }`}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedCategory === category.id ? "bg-gradient-to-r from-[#2EC4B6] to-[#3EDBF0] text-white shadow-lg" : "bg-white/50 dark:bg-white/10 text-[#0F2A3F] dark:text-white hover:bg-white/80 dark:hover:bg-white/20"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm mb-3 text-[#0F2A3F]/70 dark:text-white/70">Filter by Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTechStack("all")}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedTechStack === "all" ? "bg-gradient-to-r from-[#2EC4B6] to-[#3EDBF0] text-white shadow-lg" : "bg-white/50 dark:bg-white/10 text-[#0F2A3F] dark:text-white hover:bg-white/80 dark:hover:bg-white/20"
                  }`}
                >
                  All
                </button>
                {techStacks.slice(0, 8).map((tech) => (
                  <button
                    key={tech.id}
                    onClick={() => setSelectedTechStack(tech.id)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                      selectedTechStack === tech.id ? "bg-gradient-to-r from-[#2EC4B6] to-[#3EDBF0] text-white shadow-lg" : "bg-white/50 dark:bg-white/10 text-[#0F2A3F] dark:text-white hover:bg-white/80 dark:hover:bg-white/20"
                    }`}
                  >
                    <span>{tech.icon}</span>
                    <span>{tech.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <GlassCard key={project.id} delay={index * 0.1} className="overflow-hidden group cursor-pointer">
              <div className="relative h-48 bg-gradient-to-br from-[#2EC4B6]/20 to-[#3EDBF0]/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-50">{project.categories.includes("3") ? "🛍️" : project.categories.includes("4") ? "📊" : project.categories.includes("2") ? "📱" : "💻"}</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button onClick={() => handleProjectClick(project.slug)} className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors">
                    <Eye className="w-5 h-5 text-[#0F2A3F]" />
                  </button>
                  {project.externalLink && (
                    <a href={project.externalLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors">
                      <ExternalLink className="w-5 h-5 text-[#0F2A3F]" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl mb-2 text-[#0F2A3F] dark:text-white group-hover:text-[#2EC4B6] dark:group-hover:text-[#3EDBF0] transition-colors">{project.title}</h3>
                <p className="text-[#0F2A3F]/70 dark:text-white/70 mb-4 line-clamp-2">{project.shortDescription}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((techId) => {
                    const tech = techStacks.find((t) => t.id === techId);
                    return tech ? (
                      <span key={techId} className="px-3 py-1 bg-gradient-to-r from-[#2EC4B6]/10 to-[#3EDBF0]/10 rounded-full text-xs text-[#0F2A3F] dark:text-white">
                        {tech.icon} {tech.name}
                      </span>
                    ) : null;
                  })}
                  {project.techStack.length > 3 && <span className="px-3 py-1 bg-gradient-to-r from-[#2EC4B6]/10 to-[#3EDBF0]/10 rounded-full text-xs text-[#0F2A3F] dark:text-white">+{project.techStack.length - 3} more</span>}
                </div>

                <button onClick={() => handleProjectClick(project.slug)} className="text-[#2EC4B6] hover:text-[#3EDBF0] dark:text-[#3EDBF0] dark:hover:text-[#2EC4B6] transition-colors flex items-center gap-2 group/btn">
                  <span>View Details</span>
                  <Eye className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </GlassCard>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-lg text-[#0F2A3F]/70">No projects found with the selected filters.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
