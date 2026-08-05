"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { FiCheckCircle } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";

import { portfolioData } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

import {
  fadeUp,
  fadeLeft,
  stagger,
  viewportOnce,
  float,
} from "@/lib/animations";

const highlights = [
  "Thumbnail Design",
  "Social Media Design",
  "Brand Identity & Logo Design",
  "Social Media & Campaign Design",
  "Print & Packaging Design",
  "Design System Architecture",
  "Creative Social Media Adds Design",
];

export default function About() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Decorative Glow - Scaled down for mobile */}
      <div className="absolute top-0 right-0 w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] bg-brand-cyan/5 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="About Me"
          title="The Designer"
          highlight="Behind the Work"
          description="Passionate about transforming complex ideas into elegant visual solutions."
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-8 md:mt-12">
          {/* LEFT SIDE - IMAGE & BADGES */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeLeft}
            className="relative max-w-md mx-auto lg:max-w-none w-full"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden gradient-border glass p-1">
              <div className="relative rounded-[20px] sm:rounded-[22px] overflow-hidden bg-gradient-to-br from-dark-600 to-dark-800 aspect-[4/5] sm:aspect-[4/4.5] lg:aspect-[4/5] flex items-center justify-center">
                
                {/* Hex Pattern Background */}
                <div className="absolute inset-0 hex-bg opacity-30" />

                {/* Main Profile Image Container */}
                <div className="relative z-20 w-[75%] sm:w-[80%] max-w-[340px] aspect-square flex items-center justify-center">
                  <Image
                    src="/images/Profile.png"
                    alt={personal.name || "Profile"}
                    fill
                    sizes="(max-width: 768px) 80vw, 370px"
                    priority
                    className="object-contain drop-shadow-[0_0_30px_rgba(0,212,255,0.35)]"
                  />
                </div>

                {/* Background Vector Graphics (Scale-safe SVG) */}
                <div className="absolute inset-0 z-10 pointer-events-none opacity-60 sm:opacity-100">
                  <svg viewBox="0 0 400 500" className="w-full h-full preserve-3d">
                    <defs>
                      <linearGradient id="about-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF6B1A" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#FF8C42" stopOpacity="0.6" />
                      </linearGradient>
                      <linearGradient id="about-grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#0099BB" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>

                    {/* Shapes */}
                    <rect x="20" y="360" width="360" height="120" rx="20" fill="rgba(255,107,26,0.05)" stroke="rgba(255,107,26,0.15)" strokeWidth="1" />
                    <circle cx="220" cy="230" r="35" fill="url(#about-grad1)" opacity="0.4" />
                    <rect x="230" y="370" width="120" height="80" rx="10" fill="rgba(0,212,255,0.08)" stroke="rgba(0,212,255,0.2)" strokeWidth="1" />
                    
                    {/* Color Swatches */}
                    <rect x="40" y="380" width="18" height="18" rx="4" fill="#FF6B1A" opacity="0.8" />
                    <rect x="64" y="380" width="18" height="18" rx="4" fill="#00D4FF" opacity="0.8" />
                    <rect x="88" y="380" width="18" height="18" rx="4" fill="#FF8C42" opacity="0.6" />
                  </svg>
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-dark-900/90 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Profile Info Glass Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-30">
                  <div className="glass-orange rounded-xl sm:rounded-2xl px-4 py-2.5 sm:px-5 sm:py-3 backdrop-blur-md">
                    <p className="font-display font-bold text-white text-base sm:text-lg truncate">
                      {personal.name}
                    </p>
                    <p className="text-brand-orange/90 text-xs sm:text-sm font-mono truncate">
                      {personal.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING BADGE 1: Projects Done (Desktop/Tablet) */}
            <motion.div
              variants={float}
              initial="initial"
              animate="animate"
              className="absolute -right-3 sm:-right-6 top-8 sm:top-12 z-40 glass-cyan rounded-xl sm:rounded-2xl px-3.5 py-2.5 sm:px-5 sm:py-4 glow-cyan hidden sm:block backdrop-blur-md border border-cyan-500/20"
            >
              <div className="font-display font-black text-2xl sm:text-3xl gradient-text-cyan">
                {personal.projects}
              </div>
              <div className="text-white/60 text-[10px] sm:text-xs font-mono uppercase tracking-wider mt-0.5">
                Projects Done
              </div>
            </motion.div>

            {/* FLOATING BADGE 2: Awards (Desktop/Tablet) */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute -left-3 sm:-left-6 bottom-16 sm:bottom-20 z-40 glass-orange rounded-xl sm:rounded-2xl px-3.5 py-2.5 sm:px-5 sm:py-4 glow-orange hidden sm:block backdrop-blur-md border border-orange-500/20"
            >
              <div className="flex items-center gap-2">
                <HiOutlineSparkles className="text-brand-orange w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <div>
                  <div className="font-display font-black text-lg sm:text-xl gradient-text-orange leading-none">
                    {personal.awards}
                  </div>
                  <div className="text-white/60 text-[10px] sm:text-xs font-mono uppercase tracking-wider mt-1">
                    Awards
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - TEXT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger}
            className="space-y-5 sm:space-y-6"
          >
            <motion.div variants={fadeUp}>
              <span className="font-mono text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase text-brand-orange/80 mb-2 sm:mb-3 block font-semibold">
                — Hello there
              </span>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Crafting digital{" "}
                <span className="gradient-text-mixed">experiences</span> that{" "}
                <span className="gradient-text-cyan">convert</span>
              </h3>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-white/70 leading-relaxed text-base sm:text-lg"
            >
              {personal.bio}
            </motion.p>

            {personal.bioExtended && (
              <motion.p
                variants={fadeUp}
                className="text-white/50 leading-relaxed text-sm sm:text-base"
              >
                {personal.bioExtended}
              </motion.p>
            )}

            {/* HIGHLIGHTS GRID */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2"
            >
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-center gap-3 glass rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 border border-white/5 hover:border-brand-orange/30 transition-colors"
                >
                  <FiCheckCircle className="text-brand-orange w-4 h-4 flex-shrink-0" />
                  <span className="text-white/80 text-xs sm:text-sm font-medium leading-snug">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}