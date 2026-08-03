"use client";

import { motion } from "framer-motion";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { portfolioData } from "@/data/portfolio";
import { heroText } from "@/lib/animations";
import Image from "next/image";

const stats = [
  {
    label: "Years Exp.",
    value: portfolioData.personal.experience,
  },
  {
    label: "Projects",
    value: portfolioData.personal.projects,
  },
  {
    label: "Clients",
    value: portfolioData.personal.clients,
  },
  {
    label: "Awards",
    value: portfolioData.personal.awards,
  },
];

const badges = [
  { label: "Figma", color: "#F24E1E", style: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
  { label: "AI", color: "#FF9A00", style: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2" },
  { label: "PS", color: "#31A8FF", style: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
  { label: "UX", color: "#00D4FF", style: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen lg:h-screen lg:min-h-[700px] flex flex-col justify-center items-center overflow-hidden py-10 lg:py-0 pt-24 lg:pt-16"
    >
      {/* Background patterns and glowing effects */}
      <div className="absolute inset-0 grid-pattern opacity-30 z-0" />

      {/* Enhanced Light Blur Orange Ambient Glow */}
      <div className="absolute top-1/3 -left-20 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-brand-orange/15 rounded-full blur-[120px] sm:blur-[150px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-brand-orange/10 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full flex-1 flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Content Column */}
          <div className="flex-1 text-center lg:text-left w-full max-w-xl lg:max-w-none">
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 glass-orange px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full mb-4 shadow-lg shadow-brand-orange/10"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-[11px] sm:text-xs text-brand-orange/90 tracking-widest uppercase">
                Available for Work
              </span>
              <HiOutlineLightningBolt className="text-brand-orange w-3.5 h-3.5" />
            </motion.div>

            {/* Subtitle / Tagline */}
            <div className="overflow-hidden mb-1">
              <motion.p
                variants={heroText}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                className="font-mono text-brand-orange/80 text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase"
              >
                {portfolioData.personal.tagline}
              </motion.p>
            </div>

            {/* Main Title Heading (2 Lines on MD/LG, 4 Lines on SM) */}
            <div className="overflow-hidden mb-4">
              <motion.h1
                variants={heroText}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
                className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight"
              >
                {/* Mobile (Small) Screen: 4 Lines */}
                <div className="md:hidden">
                  <span className="text-white block">Creative</span>
                  <span className="gradient-text-orange block">Designer</span>
                  <span className="text-white/30 block">&amp; Visual</span>
                  <span className="gradient-text-cyan block">Artist</span>
                </div>

                {/* Medium & Large Screen: 2 Lines */}
                <div className="hidden md:block">
                  <span className="block">
                    <span className="text-white">Creative </span>
                    <span className="gradient-text-orange">Designer</span>
                  </span>
                  <span className="block">
                    <span className="text-white/30">&amp; Visual </span>
                    <span className="gradient-text-cyan">Artist</span>
                  </span>
                </div>
              </motion.h1>
            </div>

            {/* Short Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-white/60 text-sm sm:text-base max-w-lg leading-relaxed lg:mx-0 mx-auto"
            >
              {portfolioData.personal.bio}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() =>
                  document.querySelector("#projects")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="btn-primary px-6 py-3 rounded-xl font-semibold text-white text-sm sm:text-base relative z-10 inline-flex items-center gap-2 justify-center shadow-lg"
              >
                <span>View My Work</span>
                <FiArrowDown className="animate-bounce" />
              </motion.button>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-xl font-semibold text-white/80 hover:text-white border border-white/10 glass transition-all duration-300 inline-flex items-center gap-2 justify-center text-sm sm:text-base"
              >
                <FiDownload className="w-4 h-4" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-md lg:mx-0 mx-auto border-t border-white/10 pt-4"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="font-display font-black text-xl sm:text-2xl gradient-text-orange">
                    {stat.value}
                  </div>
                  <div className="text-white/40 text-[10px] sm:text-[11px] mt-0.5 font-mono uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual Image Column with Musical BG & Unique Animation */}
          <div className="flex-shrink-0 relative my-auto">
            
            {/* --- Musical Equalizer Bars Background --- */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 opacity-25 pointer-events-none z-0">
              {[40, 70, 30, 85, 50, 95, 45, 75, 35, 60, 90, 40].map((height, idx) => (
                <motion.div
                  key={idx}
                  className="w-1.5 sm:w-2 bg-gradient-to-t from-brand-orange to-brand-cyan rounded-full"
                  animate={{
                    height: [`${height}%`, `${(height + 40) % 100}%`, `${height}%`],
                  }}
                  transition={{
                    duration: 1.2 + (idx % 4) * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>

            {/* Orange Soft Radial Glow Effect */}
            <div className="absolute inset-0 bg-brand-orange/20 rounded-full blur-3xl -z-10 scale-125" />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="relative w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] lg:w-[350px] lg:h-[350px] xl:w-[380px] xl:h-[380px] z-10"
            >
              {/* Outer Slow Dotted Rotating Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-brand-orange/30 pointer-events-none"
              />

              {/* Inner Pulsing Orange Glow Ring */}
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-3 sm:inset-4 rounded-full border border-brand-orange/40 shadow-[0_0_20px_rgba(255,154,0,0.2)] pointer-events-none"
              />

              {/* Profile Wrapper with Rhythm Motion */}
              <motion.div
                animate={{
                  y: [-6, 6, -6],
                  rotate: [-1, 1, -1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-5 sm:inset-7 rounded-full glass-orange overflow-hidden border border-brand-orange/30 shadow-[0_0_40px_rgba(255,115,0,0.25)]"
              >
                <div className="w-full h-full bg-gradient-to-br from-brand-orange/25 via-dark-600/90 to-brand-cyan/15 flex items-center justify-center relative">
                  <div className="absolute inset-0 grid-pattern opacity-25" />
                  <Image
                    src="/images/Profile.png"
                    alt="Profile"
                    width={380}
                    height={380}
                    className="object-cover w-full h-full scale-105"
                    priority
                  />
                </div>
              </motion.div>

              {/* Floating Skill Badges */}
              {badges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.15, type: "spring" }}
                  className={`absolute w-9 h-9 sm:w-11 sm:h-11 rounded-xl glass-orange flex items-center justify-center ${badge.style}`}
                  style={{
                    border: `1px solid ${badge.color}50`,
                    boxShadow: `0 0 15px ${badge.color}35`,
                  }}
                >
                  <span
                    className="font-mono text-[10px] sm:text-xs font-bold"
                    style={{ color: badge.color }}
                  >
                    {badge.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="hidden sm:flex flex-col items-center gap-1.5 mt-6 lg:mt-8"
        >
          <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] text-white/30 uppercase">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-4 h-7 rounded-full border border-white/20 flex items-start justify-center pt-1"
          >
            <div className="w-1 h-1.5 rounded-full bg-brand-orange" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}