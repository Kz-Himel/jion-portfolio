"use client";

import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  {
    label: "Home",
    href: "#home",
  },

  {
    label: "About",
    href: "#about",
  },

  {
    label: "Skills",
    href: "#skills",
  },

  {
    label: "Projects",
    href: "#projects",
  },

  {
    label: "Experience",
    href: "#experience",
  },

  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.replace("#", ""));

      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);

        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);

          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);

    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <motion.nav
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,

          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass border-b border-white/[0.06] py-3"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();

              handleNavClick("#home");
            }}
            className="flex items-center gap-2 group"
            whileHover={{
              scale: 1.02,
            }}
          >
            <div className="relative w-9 h-9">
              <div className="absolute inset-0 bg-brand-orange rounded-lg rotate-45 group-hover:rotate-[60deg] transition-transform duration-300" />

              <div className="absolute inset-[3px] bg-dark-base rounded-md rotate-45" />

              <span className="absolute inset-0 flex items-center justify-center font-display font-bold text-sm text-brand-orange z-10">
                SG
              </span>
            </div>

            <div>
              <div className="font-display font-bold text-white text-sm leading-none">
                Md Jion Mia
              </div>

              {/* <div className="font-mono text-[10px] text-brand-orange/70 tracking-widest uppercase">
                Designer
              </div> */}
            </div>
          </motion.a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.href.replace("#", "");

              return (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 group ${
                      isActive
                        ? "text-brand-orange"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {link.label}

                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-brand-orange transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex">
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => handleNavClick("#contact")}
              className="btn-primary px-5 py-2 rounded-lg text-sm font-semibold text-white relative z-10 overflow-hidden"
            >
              <span className="relative z-10">Hire Me</span>
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white/80 p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <motion.div
              animate={{
                rotate: mobileOpen ? 90 : 0,
              }}
            >
              {mobileOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenuAlt3 className="w-6 h-6" />
              )}
            </motion.div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              x: "100%",
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: "100%",
            }}
            transition={{
              duration: 0.4,

              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="fixed inset-0 z-40 glass flex flex-col"
          >
            <div className="flex-1 flex flex-col items-center justify-center gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: i * 0.08,
                  }}
                  onClick={() => handleNavClick(link.href)}
                  className={`font-display text-3xl font-bold transition-colors ${
                    active === link.href.replace("#", "")
                      ? "gradient-text-orange"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
