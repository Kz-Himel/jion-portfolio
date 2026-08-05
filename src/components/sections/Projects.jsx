"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiExternalLink, FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
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

// স্লাইড অ্যানিমেশন ভেরিয়েন্ট
const sliderVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  }),
};

export default function Projects() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const ITEMS_PER_PAGE = 3;

  // ক্যাটাগরি ফিল্টার
  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  // পেজ পরিবর্তনের ফাংশন
  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentPage((prevPage) => {
      let nextPage = prevPage + newDirection;
      if (nextPage >= totalPages) nextPage = 0; // লুপ ব্যাক করবে
      if (nextPage < 0) nextPage = totalPages - 1;
      return nextPage;
    });
  };

  // ক্যাটাগরি চেঞ্জ হ্যান্ডলার
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(0);
  };

  // বর্তমান পেজের ৩টি কার্ড
  const currentProjects = filtered.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

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

        {/* Categories */}
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
              onClick={() => handleCategoryChange(cat)}
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

        {/* Grid / Slider Container */}
        <div className="relative min-h-[520px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentPage + activeCategory}
              custom={direction}
              variants={sliderVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentProjects.map((project) => (
                <motion.div
                  key={project.id}
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
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls / Arrows */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-6 mt-12">
            {/* Prev Arrow */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="p-4 rounded-full glass border border-white/10 text-white hover:text-brand-orange hover:border-brand-orange/50 transition-all duration-300"
              aria-label="Previous page"
            >
              <FiChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentPage ? 1 : -1);
                    setCurrentPage(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentPage === index
                      ? "w-8 bg-brand-orange glow-orange"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Arrow */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="p-4 rounded-full glass border border-white/10 text-white hover:text-brand-orange hover:border-brand-orange/50 transition-all duration-300"
              aria-label="Next page"
            >
              <FiChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}