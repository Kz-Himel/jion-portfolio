"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import { portfolioData } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import { viewportOnce } from "@/lib/animations";

const categories = [
  "All",
  "Brand Identity",
  "UI/UX Design",
  "Social Media",
  "Print & Packaging",
];

export default function Projects() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-brand-cyan/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="My Work"
          title="Featured"
          highlight="Projects"
          description="A selection of premium projects spanning brand identity, UI/UX, and digital design."
        />

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-brand-orange text-white shadow-orange-glow"
                  : "glass text-white/50 hover:text-white"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -10 }}
                className="project-card group relative glass rounded-3xl overflow-hidden cursor-pointer gradient-border"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  <div className="project-overlay absolute inset-0 bg-brand-orange/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-14 h-14 glass-orange rounded-full flex items-center justify-center glow-orange">
                      <FiArrowUpRight className="text-brand-orange w-6 h-6" />
                    </div>
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-brand-orange/90 text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}

                  <div className="absolute top-4 right-4 glass text-white/60 text-[10px] font-mono px-3 py-1 rounded-full">
                    {project.year}
                  </div>
                </div>

                <div className="p-6">
                  <span className="font-mono text-[10px] text-brand-cyan/70 uppercase tracking-[0.2em]">
                    {project.category}
                  </span>

                  <h3 className="font-display font-bold text-white text-xl mt-2 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-white/45 text-sm leading-relaxed line-clamp-2 mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-white/40 glass px-2.5 py-1 rounded-md border border-white/[0.04]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 text-brand-orange text-sm font-medium group/btn hover:gap-3 transition-all duration-300">
                    <span>View Case Study</span>
                    <FiExternalLink className="w-3.5 h-3.5 group-hover/btn:rotate-45 transition-transform" />
                  </button>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-orange via-brand-cyan to-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          className="text-center mt-14"
        >
          <p className="text-white/40 mb-5 font-mono text-sm">
            Want to see more of my work?
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl border border-brand-orange/30 text-brand-orange font-semibold hover:bg-brand-orange/10 transition-all duration-300 inline-flex items-center gap-2 glow-orange"
          >
            View Full Portfolio <FiArrowUpRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}