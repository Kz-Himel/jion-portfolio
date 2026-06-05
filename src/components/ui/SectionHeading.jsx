"use client";

import { motion } from "framer-motion";

import {
  fadeUp,
  viewportOnce,
} from "@/lib/animations";

export default function SectionHeading({
  label,
  title,
  highlight,
  description,
  centered = true,
}) {
  return (
    <motion.div
      className={`mb-16 ${
        centered
          ? "text-center"
          : "text-left"
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{
        hidden: {},

        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.div
        variants={fadeUp}
        className="flex items-center gap-3 mb-4 justify-center"
      >
        <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-brand-orange" />

        <span className="font-mono text-xs tracking-[0.3em] uppercase text-brand-orange/80">
          {label}
        </span>

        <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-brand-orange" />
      </motion.div>

      <motion.h2
        variants={fadeUp}
        className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
      >
        {title}{" "}

        {highlight && (
          <span className="gradient-text-orange">
            {highlight}
          </span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeUp}
          className="mt-5 text-white/50 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      )}

      <motion.div
        variants={fadeUp}
        className={`mt-6 flex gap-1 ${
          centered
            ? "justify-center"
            : ""
        }`}
      >
        <span className="h-[2px] w-10 bg-brand-orange rounded-full" />

        <span className="h-[2px] w-4 bg-brand-cyan rounded-full" />

        <span className="h-[2px] w-2 bg-white/20 rounded-full" />
      </motion.div>
    </motion.div>
  );
}