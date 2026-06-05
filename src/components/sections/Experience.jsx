"use client";
import { motion } from "framer-motion";
import {
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineLightningBolt,
  HiOutlineBadgeCheck,
} from "react-icons/hi";
import { portfolioData } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  stagger,
  viewportOnce,
} from "@/lib/animations";

const iconMap = {
  work: <HiOutlineBriefcase className="w-5 h-5" />,
  freelance: <HiOutlineLightningBolt className="w-5 h-5" />,
  education: <HiOutlineAcademicCap className="w-5 h-5" />,
  certification: <HiOutlineBadgeCheck className="w-5 h-5" />,
};

const typeColors = {
  work: {
    bg: "rgba(255,107,26,0.1)",
    text: "#FF6B1A",
    border: "rgba(255,107,26,0.2)",
    glow: "rgba(255,107,26,0.3)",
  },
  freelance: {
    bg: "rgba(255,179,71,0.1)",
    text: "#FFB347",
    border: "rgba(255,179,71,0.2)",
    glow: "rgba(255,179,71,0.25)",
  },
  education: {
    bg: "rgba(0,212,255,0.1)",
    text: "#00D4FF",
    border: "rgba(0,212,255,0.2)",
    glow: "rgba(0,212,255,0.3)",
  },
  certification: {
    bg: "rgba(100,220,100,0.1)",
    text: "#64DC64",
    border: "rgba(100,220,100,0.2)",
    glow: "rgba(100,220,100,0.25)",
  },
};

const typeLabel = {
  work: "Full-Time",
  freelance: "Freelance",
  education: "Education",
  certification: "Certificate",
};

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-orange/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="My Journey"
          title="Experience &"
          highlight="Education"
          description="A timeline of professional milestones, academic achievements, and continuous growth."
        />

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-brand-orange/20 to-transparent" />

          <div className="space-y-8">
            {experience.map((item, i) => {
              const colors = typeColors[item.type];
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  variants={isLeft ? fadeLeft : fadeRight}
                  className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-6 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      isLeft ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -4, scale: 1.01 }}
                      className="glass rounded-2xl p-6 cursor-pointer relative overflow-hidden group"
                      style={{
                        border: `1px solid ${colors.border}`,
                        background: colors.bg,
                      }}
                    >
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                        style={{
                          background: `radial-gradient(circle at ${
                            isLeft ? "100%" : "0%"
                          } 50%, ${colors.glow.replace(
                            "0.3",
                            "0.07"
                          )} 0%, transparent 70%)`,
                        }}
                      />

                      <div
                        className={`flex items-start gap-3 mb-4 ${
                          isLeft ? "lg:flex-row-reverse" : ""
                        }`}
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{
                            background: colors.bg,
                            color: colors.text,
                            boxShadow: `0 0 15px ${colors.glow}`,
                          }}
                        >
                          {iconMap[item.type]}
                        </div>

                        <div
                          className={
                            isLeft ? "lg:text-right flex-1" : "flex-1"
                          }
                        >
                          <div
                            className="flex items-center gap-2 flex-wrap mb-1"
                            style={{
                              justifyContent: isLeft
                                ? "flex-end"
                                : "flex-start",
                            }}
                          >
                            <span
                              className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full"
                              style={{
                                background: colors.bg,
                                color: colors.text,
                              }}
                            >
                              {typeLabel[item.type]}
                            </span>

                            <span className="font-mono text-[10px] text-white/30">
                              {item.period}
                            </span>
                          </div>

                          <h3 className="font-display font-bold text-white text-lg leading-tight">
                            {item.title}
                          </h3>

                          <p
                            style={{ color: colors.text }}
                            className="text-sm font-medium mt-0.5"
                          >
                            {item.organization}
                          </p>
                        </div>
                      </div>

                      <p className="text-white/50 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div
                        className={`flex flex-wrap gap-2 ${
                          isLeft ? "lg:justify-end" : ""
                        }`}
                      >
                        {item.highlights.map((h) => (
                          <span
                            key={h}
                            className="text-[10px] font-mono px-2.5 py-1 rounded-md"
                            style={{
                              background: colors.bg,
                              color: colors.text,
                              border: `1px solid ${colors.border}`,
                            }}
                          >
                            {h}
                          </span>
                        ))}
                      </div>

                      <div
                        className={`mt-4 flex ${
                          isLeft ? "lg:justify-end" : ""
                        }`}
                      >
                        <span className="text-white/25 font-mono text-[10px] glass px-3 py-1 rounded-full">
                          {item.duration}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={viewportOnce}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="w-12 h-12 rounded-full flex items-center justify-center z-10"
                      style={{
                        background: colors.bg,
                        border: `1px solid ${colors.border}`,
                        boxShadow: `0 0 20px ${colors.glow}`,
                        color: colors.text,
                      }}
                    >
                      {iconMap[item.type]}
                    </motion.div>
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
        >
          {[
            { label: "Years Experience", value: "6+", color: "#FF6B1A" },
            { label: "Certifications", value: "8", color: "#00D4FF" },
            { label: "Completed Courses", value: "15+", color: "#FFB347" },
            { label: "Design Awards", value: "12", color: "#64DC64" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="glass rounded-2xl p-6 text-center"
              style={{ border: `1px solid ${stat.color}15` }}
            >
              <div
                className="font-display font-black text-4xl mb-2"
                style={{
                  color: stat.color,
                  textShadow: `0 0 20px ${stat.color}40`,
                }}
              >
                {stat.value}
              </div>

              <div className="text-white/40 text-xs font-mono uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}