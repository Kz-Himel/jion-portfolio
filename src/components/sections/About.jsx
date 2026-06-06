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
  "Brand Identity & Logo Design",
  "UI/UX Design & Prototyping",
  "Social Media & Campaign Design",
  "Print & Packaging Design",
  "Design System Architecture",
  "Creative Direction",
];

export default function About() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="About Me"
          title="The Designer"
          highlight="Behind the Work"
          description="Passionate about transforming complex ideas into elegant visual solutions."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-4">
          {/* LEFT SIDE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeLeft}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden gradient-border glass p-1">
              <div className="relative rounded-[22px] overflow-hidden bg-gradient-to-br from-dark-600 to-dark-800 aspect-[4/5]">
                {/* Background */}
                <div className="absolute inset-0 hex-bg opacity-30" />

                {/* Main Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* IMAGE */}
                  <div className="absolute top-8 z-20">
                    <Image
                      src="/images/Profile.png"
                      alt="Profile"
                      width={370}
                      height={370}
                      priority
                      className="object-contain drop-shadow-[0_0_30px_rgba(0,212,255,0.35)]"
                    />
                  </div>

                  {/* SVG Animation */}
                  <svg viewBox="0 0 400 500" className="w-full h-full">
                    <defs>
                      <linearGradient
                        id="about-grad1"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#FF6B1A"
                          stopOpacity="0.9"
                        />

                        <stop
                          offset="100%"
                          stopColor="#FF8C42"
                          stopOpacity="0.6"
                        />
                      </linearGradient>

                      <linearGradient
                        id="about-grad2"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#00D4FF"
                          stopOpacity="0.8"
                        />

                        <stop
                          offset="100%"
                          stopColor="#0099BB"
                          stopOpacity="0.6"
                        />
                      </linearGradient>
                    </defs>

                    <rect
                      x="20"
                      y="340"
                      width="360"
                      height="140"
                      rx="20"
                      fill="rgba(255,107,26,0.05)"
                      stroke="rgba(255,107,26,0.15)"
                      strokeWidth="1"
                    />

                    <rect
                      x="115"
                      y="190"
                      width="70"
                      height="6"
                      rx="3"
                      fill="rgba(255,255,255,0.15)"
                    />

                    <circle
                      cx="220"
                      cy="230"
                      r="35"
                      fill="url(#about-grad1)"
                      opacity="0.7"
                    />

                    <rect
                      x="190"
                      y="320"
                      width="20"
                      height="25"
                      rx="4"
                      fill="rgba(255,107,26,0.2)"
                    />

                    <rect
                      x="230"
                      y="370"
                      width="120"
                      height="80"
                      rx="10"
                      fill="rgba(0,212,255,0.08)"
                      stroke="rgba(0,212,255,0.2)"
                      strokeWidth="1"
                    />

                    <line
                      x1="290"
                      y1="400"
                      x2="330"
                      y2="360"
                      stroke="rgba(255,107,26,0.6)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    <rect
                      x="40"
                      y="370"
                      width="20"
                      height="20"
                      rx="4"
                      fill="#FF6B1A"
                      opacity="0.8"
                    />

                    <rect
                      x="64"
                      y="370"
                      width="20"
                      height="20"
                      rx="4"
                      fill="#00D4FF"
                      opacity="0.8"
                    />

                    <rect
                      x="88"
                      y="370"
                      width="20"
                      height="20"
                      rx="4"
                      fill="#FF8C42"
                      opacity="0.6"
                    />

                    <circle
                      cx="200"
                      cy="80"
                      r="30"
                      fill="url(#about-grad1)"
                      opacity="0.8"
                    />

                    <path
                      d="M155 140 Q200 120 245 140 L250 200 H150 Z"
                      fill="url(#about-grad1)"
                      opacity="0.6"
                    />
                  </svg>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />

                {/* Bottom Card */}
                <div className="absolute bottom-6 left-6 right-6 z-30">
                  <div className="glass-orange rounded-2xl px-5 py-3">
                    <p className="font-display font-bold text-white text-lg">
                      {personal.name}
                    </p>

                    <p className="text-brand-orange/80 text-sm font-mono">
                      {personal.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects */}
            <motion.div
              variants={float}
              initial="initial"
              animate="animate"
              className="absolute -right-6 top-16 z-40 glass-cyan rounded-2xl px-5 py-4 glow-cyan hidden lg:block"
            >
              <div className="font-display font-black text-3xl gradient-text-cyan">
                {personal.projects}
              </div>

              <div className="text-white/50 text-xs font-mono uppercase tracking-widest mt-1">
                Projects Done
              </div>
            </motion.div>
            {/* Awards */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute -left-6 bottom-20 glass-orange rounded-2xl px-5 py-4 glow-orange hidden lg:block"
            >
              <div className="flex items-center gap-2">
                <HiOutlineSparkles className="text-brand-orange w-5 h-5" />

                <div>
                  <div className="font-display font-black text-xl gradient-text-orange">
                    {personal.awards}
                  </div>

                  <div className="text-white/50 text-xs font-mono uppercase tracking-widest">
                    Awards
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger}
            className="space-y-6"
          >
            <motion.div variants={fadeUp}>
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-brand-orange/70 mb-3 block">
                — Hello there
              </span>

              <h3 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
                Crafting digital
                <br />
                <span className="gradient-text-mixed">
                  experiences
                </span> that <span className="gradient-text-cyan">convert</span>
              </h3>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-white/55 leading-relaxed text-lg"
            >
              {personal.bio}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-white/40 leading-relaxed"
            >
              {personal.bioExtended}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
            >
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-center gap-3 glass rounded-xl px-4 py-3"
                >
                  <FiCheckCircle className="text-brand-orange w-4 h-4 flex-shrink-0" />

                  <span className="text-white/70 text-sm">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
