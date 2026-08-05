"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";
import {
  FaWhatsapp,
  FaFacebookMessenger,
  FaLinkedinIn,
  FaBehance,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { portfolioData } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeUp, fadeRight, stagger, viewportOnce } from "@/lib/animations";

function hexToRgb(hex) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r
    ? `${parseInt(r[1], 16)},${parseInt(r[2], 16)},${parseInt(r[3], 16)}`
    : "255,107,26";
}

const contactMethods = [
  {
    icon: <FiMail className="w-5 h-5" />,
    label: "Email",
    value: portfolioData.personal.email,
    href: `mailto:${portfolioData.personal.email}`,
    appScheme: null,
    color: "#FF6B1A",
    desc: "Response within 24h",
  },
  {
    icon: <FiPhone className="w-5 h-5" />,
    label: "Phone",
    value: portfolioData.personal.phone,
    href: `tel:${portfolioData.personal.phone}`,
    appScheme: null,
    color: "#00D4FF",
    desc: "Mon–Fri, 9AM–6PM EST",
  },
  {
    icon: <FaWhatsapp className="w-5 h-5" />,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: `https://wa.me/${portfolioData.personal.whatsapp}`,
    appScheme: `whatsapp://send?phone=${portfolioData.personal.whatsapp}`,
    color: "#25D366",
    desc: "Quick response guaranteed",
  },
  {
    icon: <FaFacebookMessenger className="w-5 h-5" />,
    label: "Messenger",
    value: "Message on Facebook",
    href: "https://m.me/alexnovadesign",
    appScheme: "fb-messenger://user/alexnovadesign",
    color: "#0099FF",
    desc: "Available on messenger",
  },
];

const socials = [
  {
    icon: <FaBehance />,
    href: "https://www.behance.net/mdjionmia",
    label: "Behance",
  },
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/mdjionmia",
    label: "LinkedIn",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/jion.cmt",
    label: "Instagram",
  },
  {
    icon: <FaFacebook />,
    href: "https://www.facebook.com/md.jion.mia.2025",
    label: "Facebook",
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  // App redirect handler with fallback to web browser
  const handleLinkClick = (e, method) => {
    if (!method.appScheme) return;

    e.preventDefault();

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = method.appScheme;

      setTimeout(() => {
        if (!document.hidden) {
          window.location.href = method.href;
        }
      }, 1500);
    } else {
      window.open(method.href, "_blank", "noopener,noreferrer");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setSent(true);
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        console.error("Failed to send message via Resend");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setSending(false);
      setTimeout(() => setSent(false), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-28 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[700px] h-[400px] bg-brand-orange/5 rounded-full blur-[120px] sm:blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          label="Get In Touch"
          title="Let's Create"
          highlight="Together"
          description="Have a project in mind? Let's build something extraordinary."
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start mt-8 md:mt-12">
          {/* Left Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger}
            className="lg:col-span-2 space-y-5"
          >
            {/* Availability Badge */}
            <motion.div
              variants={fadeUp}
              className="glass-orange rounded-2xl p-5 glow-orange"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-white/60 uppercase tracking-widest">
                  Currently Available
                </span>
              </div>
              <p className="font-display font-bold text-white text-xl">
                Open to New Projects
              </p>
              <p className="text-white/50 text-sm mt-1">
                Taking on select brand identity & UI/UX projects.
              </p>
            </motion.div>

            {/* Contact Methods - 2 Columns on SM/MD Screens */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
            >
              {contactMethods.map((method, i) => (
                <motion.a
                  key={i}
                  href={method.href}
                  onClick={(e) => handleLinkClick(e, method)}
                  variants={fadeUp}
                  whileHover={{ x: 4, scale: 1.01 }}
                  className="flex items-center gap-3.5 glass rounded-2xl p-4 group cursor-pointer transition-all duration-300 border border-white/5 hover:border-white/10"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `rgba(${hexToRgb(method.color)},0.1)`,
                      color: method.color,
                      boxShadow: `0 0 15px rgba(${hexToRgb(method.color)},0.2)`,
                    }}
                  >
                    {method.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-[10px] text-white/40 uppercase tracking-wider mb-0.5">
                      {method.label}
                    </div>
                    <div className="text-white/90 text-sm font-medium truncate">
                      {method.value}
                    </div>
                    <div className="text-white/40 text-xs truncate">
                      {method.desc}
                    </div>
                  </div>

                  <div
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-sm font-bold"
                    style={{ color: method.color }}
                  >
                    →
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeUp} className="pt-2">
              <p className="font-mono text-[10px] text-white/40 uppercase tracking-[0.3em] mb-3">
                Find me on
              </p>

              <div className="flex gap-3 flex-wrap">
                {socials.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 border border-white/5"
                    title={s.label}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeRight}
            className="lg:col-span-3"
          >
            <div className="glass rounded-3xl p-6 sm:p-8 gradient-border relative overflow-hidden">
              <div className="absolute top-0 right-0 w-60 h-60 bg-brand-orange/5 rounded-full blur-[80px] pointer-events-none" />

              <h3 className="font-display font-bold text-white text-2xl mb-2">
                Send a Message
              </h3>
              <p className="text-white/50 text-sm mb-6 sm:mb-8">
                Fill out the form and I'll get back to you within 24 hours.
              </p>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-400/10 flex items-center justify-center mb-4">
                    <FiCheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="font-display font-bold text-white text-xl mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-white/50">
                    Thanks for reaching out. I will respond within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          name: e.target.value,
                        })
                      }
                      className="w-full glass rounded-xl px-4 py-3 text-white bg-transparent outline-none focus:border-brand-orange/50 transition-colors border border-white/10"
                    />

                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          email: e.target.value,
                        })
                      }
                      className="w-full glass rounded-xl px-4 py-3 text-white bg-transparent outline-none focus:border-brand-orange/50 transition-colors border border-white/10"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Subject"
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        subject: e.target.value,
                      })
                    }
                    className="w-full glass rounded-xl px-4 py-3 text-white bg-transparent outline-none focus:border-brand-orange/50 transition-colors border border-white/10"
                  />

                  <textarea
                    rows={5}
                    required
                    placeholder="Message"
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        message: e.target.value,
                      })
                    }
                    className="w-full glass rounded-xl px-4 py-3 text-white bg-transparent resize-none outline-none focus:border-brand-orange/50 transition-colors border border-white/10"
                  />

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-4 rounded-xl bg-brand-orange hover:bg-brand-orange/90 transition-colors text-white font-medium flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {sending ? "Sending..." : "Send Message"}
                    <FiSend />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
