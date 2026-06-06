"use client";
import { motion } from "framer-motion";
import {
  FaBehance,
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import { portfolioData } from "@/data/portfolio";

const socials = [
  { icon: <FaBehance />, href: "www.behance.net/mdjionmia", label: "Behance" },
  { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/mdjionmia", label: "LinkedIn" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/jion.cmt", label: "Instagram" },
  { icon: <FaFacebook />, href: "https://www.facebook.com/md.jion.mia.2025", label: "Twitter" },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 bg-brand-orange rounded-lg rotate-45" />
                <div className="absolute inset-[3px] bg-dark-base rounded-md rotate-45" />
                <span className="absolute inset-0 flex items-center justify-center font-display font-bold text-sm text-brand-orange z-10">
                  SG
                </span>
              </div>

              <div>
                <div className="font-display font-bold text-white text-sm">
                  Md Jion Mia
                </div>
                <div className="font-mono text-[10px] text-brand-orange/60 tracking-widest uppercase">
                  Graphics Designer
                </div>
              </div>
            </div>

            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              Crafting premium visual identities and digital experiences that
              transform brands worldwide.
            </p>

            <div className="flex gap-3 mt-6">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-white/40 hover:text-white transition-colors duration-200"
                  title={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-white/40 hover:text-brand-orange text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-brand-orange group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 mb-5">
              Contact
            </h4>

            <div className="space-y-3">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="text-white/40 hover:text-brand-orange text-sm transition-colors duration-200 block"
              >
                {portfolioData.personal.email}
              </a>

              <a
                href={`tel:${portfolioData.personal.phone}`}
                className="text-white/40 hover:text-brand-orange text-sm transition-colors duration-200 block"
              >
                {portfolioData.personal.phone}
              </a>

              <p className="text-white/25 text-sm">
                {portfolioData.personal.location}
              </p>
            </div>

            <div className="mt-6 glass-orange rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-[10px] text-white/50 uppercase tracking-wider">
                  Available for Projects
                </span>
              </div>
              <p className="text-white/60 text-xs">
                Lets build something great together.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.04]">
          <p className="text-white/25 text-xs font-mono">
            © {new Date().getFullYear()} Md Jion Mia All rights reserved.
          </p>

          <p className="text-white/20 text-xs font-mono">
            Built with <span className="text-brand-orange">♥</span> using Next.js
            & Framer Motion
          </p>

          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="w-9 h-9 glass-orange rounded-xl flex items-center justify-center text-brand-orange glow-orange"
          >
            <FiArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}