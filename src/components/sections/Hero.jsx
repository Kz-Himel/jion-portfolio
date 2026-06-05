"use client";

import { motion } from "framer-motion";

import {
  FiArrowDown,
  FiDownload,
} from "react-icons/fi";

import {
  HiOutlineLightningBolt,
} from "react-icons/hi";

import { portfolioData } from "@/data/portfolio";

import {
  float,
  glowPulse,
  rotateSlowly,
  heroText,
} from "@/lib/animations";

const stats = [
  {
    label: "Years Exp.",
    value:
      portfolioData.personal
        .experience,
  },

  {
    label: "Projects",
    value:
      portfolioData.personal
        .projects,
  },

  {
    label: "Clients",
    value:
      portfolioData.personal
        .clients,
  },

  {
    label: "Awards",
    value:
      portfolioData.personal
        .awards,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-30 z-0" />

      <motion.div
        variants={glowPulse}
        initial="initial"
        animate="animate"
        className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-brand-orange/8 rounded-full blur-[120px] pointer-events-none"
      />

      <motion.div
        variants={glowPulse}
        initial="initial"
        animate="animate"
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-brand-cyan/6 rounded-full blur-[100px] pointer-events-none"
      />

      <motion.div
        variants={rotateSlowly}
        initial="initial"
        animate="animate"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.02] rounded-full pointer-events-none hidden lg:block"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          {/* Left */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="inline-flex items-center gap-2 glass-orange px-4 py-2 rounded-full mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

              <span className="font-mono text-xs text-brand-orange/90 tracking-widest uppercase">
                Available for Work
              </span>

              <HiOutlineLightningBolt className="text-brand-orange w-3 h-3" />
            </motion.div>

            <div className="overflow-hidden mb-2">
              <motion.p
                variants={heroText}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: 0.2,
                }}
                className="font-mono text-brand-orange/70 text-sm tracking-[0.3em] uppercase mb-3"
              >
                {
                  portfolioData.personal
                    .tagline
                }
              </motion.p>
            </div>

            <div className="overflow-hidden">
              <motion.h1
                variants={heroText}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: 0.3,
                }}
                className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tight"
              >
                <span className="text-white block">
                  Creative
                </span>

                <span className="gradient-text-orange block">
                  Designer
                </span>

                <span className="text-white/20 block">
                  &amp; Visual
                </span>

                <span className="gradient-text-cyan block">
                  Artist
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.7,
                duration: 0.7,
              }}
              className="mt-8 text-white/50 text-lg max-w-xl leading-relaxed lg:mx-0 mx-auto"
            >
              {
                portfolioData.personal
                  .bio
              }
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.9,
                duration: 0.6,
              }}
              className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={() =>
                  document
                    .querySelector(
                      "#projects"
                    )
                    ?.scrollIntoView(
                      {
                        behavior:
                          "smooth",
                      }
                    )
                }
                className="btn-primary px-8 py-4 rounded-xl font-semibold text-white text-base relative z-10 inline-flex items-center gap-2 justify-center"
              >
                <span className="relative z-10">
                  View My Work
                </span>

                <FiArrowDown className="relative z-10 animate-bounce" />
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="px-8 py-4 rounded-xl font-semibold text-white/80 text-base border border-white/10 hover:text-white glass transition-all duration-300 inline-flex items-center gap-2 justify-center"
              >
                <FiDownload className="w-4 h-4" />

                Download CV
              </motion.button>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.1,
                duration: 0.6,
              }}
              className="mt-14 grid grid-cols-4 gap-6 max-w-md lg:mx-0 mx-auto"
            >
              {stats.map(
                (stat, i) => (
                  <div
                    key={i}
                    className="text-center lg:text-left"
                  >
                    <div className="font-display font-black text-2xl md:text-3xl gradient-text-orange">
                      {
                        stat.value
                      }
                    </div>

                    <div className="text-white/40 text-xs mt-1 font-mono uppercase tracking-widest">
                      {
                        stat.label
                      }
                    </div>
                  </div>
                )
              )}
            </motion.div>
          </div>

          {/* Right */}
          <div className="flex-shrink-0 relative">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                rotate: -20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 1,
                ease: "backOut",
              }}
              className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px]"
            >
              <div className="absolute inset-0 rounded-full border border-brand-orange/20 animate-pulse-slow" />

              <div className="absolute inset-4 rounded-full border border-brand-cyan/10" />

              <motion.div
                variants={float}
                initial="initial"
                animate="animate"
                className="absolute inset-10 rounded-full glass-orange glow-orange overflow-hidden"
              >
                <div className="w-full h-full bg-gradient-to-br from-brand-orange/20 via-dark-600 to-brand-cyan/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 grid-pattern opacity-20" />

                  <svg
                    viewBox="0 0 200 200"
                    className="w-4/5 h-4/5 relative z-10"
                  >
                    <defs>
                      <linearGradient
                        id="fig-grad"
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
                          stopColor="#00D4FF"
                          stopOpacity="0.9"
                        />
                      </linearGradient>
                    </defs>

                    <circle
                      cx="100"
                      cy="55"
                      r="28"
                      fill="url(#fig-grad)"
                      opacity="0.9"
                    />

                    <path
                      d="M45 110 Q100 90 155 110 L160 170 Q100 185 40 170 Z"
                      fill="url(#fig-grad)"
                      opacity="0.7"
                    />

                    <rect
                      x="80"
                      y="130"
                      width="40"
                      height="5"
                      rx="2"
                      fill="#FF6B1A"
                      opacity="0.9"
                    />

                    <rect
                      x="96"
                      y="118"
                      width="8"
                      height="25"
                      rx="2"
                      fill="#00D4FF"
                      opacity="0.9"
                    />

                    <rect
                      x="20"
                      y="40"
                      width="20"
                      height="20"
                      rx="4"
                      fill="#FF6B1A"
                      opacity="0.4"
                      transform="rotate(15 20 40)"
                    />

                    <circle
                      cx="170"
                      cy="60"
                      r="10"
                      fill="#00D4FF"
                      opacity="0.4"
                    />
                  </svg>
                </div>
              </motion.div>

              {[
                {
                  label: "Figma",
                  color: "#F24E1E",
                  angle: 0,
                },

                {
                  label: "AI",
                  color: "#FF9A00",
                  angle: 90,
                },

                {
                  label: "PS",
                  color: "#31A8FF",
                  angle: 180,
                },

                {
                  label: "UX",
                  color: "#00D4FF",
                  angle: 270,
                },
              ].map((badge, i) => {
                const rad =
                  (badge.angle *
                    Math.PI) /
                  180;

                const r = 140;

                const x =
                  50 +
                  Math.cos(rad) *
                    r;

                const y =
                  50 +
                  Math.sin(rad) *
                    r;

                return (
                  <motion.div
                    key={
                      badge.label
                    }
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      delay:
                        1 +
                        i *
                          0.15,

                      type:
                        "spring",
                    }}
                    className="absolute w-12 h-12 rounded-xl glass-orange flex items-center justify-center"
                    style={{
                      left: `${x}%`,

                      top: `${y}%`,

                      transform:
                        "translate(-50%,-50%)",

                      border: `1px solid ${badge.color}30`,

                      boxShadow: `0 0 15px ${badge.color}30`,
                    }}
                  >
                    <span
                      className="font-mono text-xs font-bold"
                      style={{
                        color:
                          badge.color,
                      }}
                    >
                      {
                        badge.label
                      }
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.5,
          }}
          className="flex flex-col items-center gap-2 mt-16"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase">
            Scroll to explore
          </span>

          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat:
                Infinity,
            }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1"
          >
            <div className="w-1 h-2 rounded-full bg-brand-orange" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}