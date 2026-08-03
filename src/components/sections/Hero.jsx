"use client";

import { motion } from "framer-motion";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { portfolioData } from "@/data/portfolio";
import { float, glowPulse, rotateSlowly, heroText } from "@/lib/animations";
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
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden py-16 lg:py-24"
    >
      {/* Background patterns and glowing effects */}
      <div className="absolute inset-0 grid-pattern opacity-30 z-0" />

      <motion.div
        variants={glowPulse}
        initial="initial"
        animate="animate"
        className="absolute top-1/4 -left-20 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-brand-orange/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none"
      />

      <motion.div
        variants={glowPulse}
        initial="initial"
        animate="animate"
        className="absolute bottom-1/4 -right-20 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-brand-cyan/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none"
      />

      <motion.div
        variants={rotateSlowly}
        initial="initial"
        animate="animate"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] xl:w-[800px] h-[600px] xl:h-[800px] border border-white/[0.03] rounded-full pointer-events-none hidden lg:block"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full flex-1 flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Content Column */}
          <div className="flex-1 text-center lg:text-left w-full max-w-2xl lg:max-w-none">
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 glass-orange px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-xs text-brand-orange/90 tracking-widest uppercase">
                Available for Work
              </span>
              <HiOutlineLightningBolt className="text-brand-orange w-3.5 h-3.5" />
            </motion.div>

            {/* Subtitle / Tagline */}
            <div className="overflow-hidden mb-2">
              <motion.p
                variants={heroText}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                className="font-mono text-brand-orange/80 text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase"
              >
                {portfolioData.personal.tagline}
              </motion.p>
            </div>

            {/* Main Title Heading */}
            <div className="overflow-hidden mb-6">
              <motion.h1
                variants={heroText}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
                className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight"
              >
                <span className="text-white block">Creative</span>
                <span className="gradient-text-orange block">Designer</span>
                <span className="text-white/30 block">&amp; Visual</span>
                <span className="gradient-text-cyan block">Artist</span>
              </motion.h1>
            </div>

            {/* Short Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-white/60 text-base sm:text-lg max-w-xl leading-relaxed lg:mx-0 mx-auto"
            >
              {portfolioData.personal.bio}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() =>
                  document.querySelector("#projects")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="btn-primary px-7 py-3.5 rounded-xl font-semibold text-white text-base relative z-10 inline-flex items-center gap-2 justify-center shadow-lg"
              >
                <span>View My Work</span>
                <FiArrowDown className="animate-bounce" />
              </motion.button>

              <motion.a
                href="/resume.pdf" // আপনার রেজুমি ফাইলের সঠিক পাথ দিন
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 rounded-xl font-semibold text-white/80 hover:text-white border border-white/10 glass transition-all duration-300 inline-flex items-center gap-2 justify-center"
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
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-lg lg:mx-0 mx-auto border-t border-white/10 pt-6"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="font-display font-black text-2xl sm:text-3xl gradient-text-orange">
                    {stat.value}
                  </div>
                  <div className="text-white/40 text-[11px] sm:text-xs mt-1 font-mono uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual Image Column */}
          <div className="flex-shrink-0 relative mt-4 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="relative w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px]"
            >
              {/* Decorative Rings */}
              <div className="absolute inset-0 rounded-full border border-brand-orange/20 animate-pulse-slow pointer-events-none" />
              <div className="absolute inset-3 sm:inset-4 rounded-full border border-brand-cyan/10 pointer-events-none" />

              {/* Profile Wrapper */}
              <motion.div
                variants={float}
                initial="initial"
                animate="animate"
                className="absolute inset-6 sm:inset-8 rounded-full glass-orange glow-orange overflow-hidden"
              >
                <div className="w-full h-full bg-gradient-to-br from-brand-orange/20 via-dark-600 to-brand-cyan/10 flex items-center justify-center relative">
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                  <Image
                    src="/images/Profile.png"
                    alt="Profile"
                    width={380}
                    height={380}
                    className="object-cover w-full h-full"
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
                  className={`absolute w-10 h-10 sm:w-12 sm:h-12 rounded-xl glass-orange flex items-center justify-center ${badge.style}`}
                  style={{
                    border: `1px solid ${badge.color}40`,
                    boxShadow: `0 0 15px ${badge.color}25`,
                  }}
                >
                  <span
                    className="font-mono text-xs font-bold"
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
          className="flex flex-col items-center gap-2 mt-12 sm:mt-16"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1"
          >
            <div className="w-1 h-2 rounded-full bg-brand-orange" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}