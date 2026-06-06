// "use client";
// import { motion } from "framer-motion";
// import {
//   SiAdobephotoshop,
//   SiFigma,
//   SiCanva,
// } from "react-icons/si";

// import {
//   MdOutlineDesignServices,
//   MdBrandingWatermark,
// } from "react-icons/md";
// import { portfolioData } from "@/data/portfolio";
// import SectionHeading from "@/components/ui/SectionHeading";
// import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

// const iconMap = {
//   SiAdobephotoshop: <SiAdobephotoshop className="w-7 h-7" />,
//   // SiAdobeillustrator: <SiAdobeillustrator className="w-7 h-7" />,
//   SiFigma: <SiFigma className="w-7 h-7" />,
//   SiCanva: <SiCanva className="w-7 h-7" />,
//   MdOutlineDesignServices: <MdOutlineDesignServices className="w-7 h-7" />,
//   MdBrandingWatermark: <MdBrandingWatermark className="w-7 h-7" />,
//   // MdCampaign: <MdCampaign className="w-7 h-7" />,
//   // SiAdobeindesign: <SiAdobeindesign className="w-7 h-7" />,
// };

// function hexToRgb(hex) {
//   const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//   return r
//     ? `${parseInt(r[1], 16)},${parseInt(r[2], 16)},${parseInt(r[3], 16)}`
//     : "255,107,26";
// }

// const tools = [
//   "Adobe CC",
//   "Figma",
//   "Sketch",
//   "Notion",
//   "Slack",
//   "Zeplin",
//   "InVision",
//   "Webflow",
//   "Lottie",
//   "Spline",
// ];

// export default function Skills() {
//   const { skills } = portfolioData;

//   return (
//     <section id="skills" className="relative py-28 overflow-hidden">
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-orange/4 rounded-full blur-[150px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6">
//         <SectionHeading
//           label="My Skills"
//           title="Design"
//           highlight="Expertise"
//           description="A curated toolkit of industry-leading design tools."
//         />

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={viewportOnce}
//           variants={stagger}
//           className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5"
//         >
//           {skills.map((skill, i) => (
//             <motion.div
//               key={skill.id}
//               variants={fadeUp}
//               whileHover={{ y: -8, scale: 1.02 }}
//               className="group relative glass rounded-2xl p-6 cursor-pointer overflow-hidden"
//               style={{
//                 background: `linear-gradient(135deg, rgba(${hexToRgb(
//                   skill.color
//                 )},0.04) 0%, rgba(13,13,13,0.8) 100%)`,
//                 border: `1px solid rgba(${hexToRgb(skill.color)},0.12)`,
//               }}
//             >
//               <div
//                 className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
//                 style={{
//                   background: `radial-gradient(circle at 50% 0%, rgba(${hexToRgb(
//                     skill.color
//                   )},0.12) 0%, transparent 70%)`,
//                 }}
//               />

//               <div
//                 className="relative z-10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
//                 style={{
//                   background: `rgba(${hexToRgb(skill.color)},0.1)`,
//                   boxShadow: `0 0 20px rgba(${hexToRgb(skill.color)},0.2)`,
//                   color: skill.color,
//                 }}
//               >
//                 {iconMap[skill.icon] || (
//                   <MdOutlineDesignServices className="w-7 h-7" />
//                 )}
//               </div>

//               <h3 className="relative z-10 font-display font-bold text-white text-base mb-1">
//                 {skill.shortName}
//               </h3>

//               <p className="relative z-10 text-white/40 text-xs mb-4 leading-relaxed">
//                 {skill.description}
//               </p>

//               <div className="relative z-10">
//                 <div className="flex justify-between items-center mb-1.5">
//                   <span className="font-mono text-[10px] text-white/30 uppercase tracking-wider">
//                     Proficiency
//                   </span>
//                   <span
//                     className="font-mono text-[11px] font-bold"
//                     style={{ color: skill.color }}
//                   >
//                     {skill.level}%
//                   </span>
//                 </div>

//                 <div className="h-[3px] bg-white/5 rounded-full overflow-hidden">
//                   <motion.div
//                     initial={{ width: 0 }}
//                     whileInView={{ width: `${skill.level}%` }}
//                     viewport={{ once: true }}
//                     transition={{
//                       duration: 1.2,
//                       delay: i * 0.08,
//                       ease: "easeOut",
//                     }}
//                     className="h-full rounded-full"
//                     style={{
//                       background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
//                       boxShadow: `0 0 8px ${skill.color}60`,
//                     }}
//                   />
//                 </div>
//               </div>

//               <div
//                 className="relative z-10 mt-4 inline-block px-2 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider"
//                 style={{
//                   background: `rgba(${hexToRgb(skill.color)},0.1)`,
//                   color: `rgba(${hexToRgb(skill.color)},0.8)`,
//                 }}
//               >
//                 {skill.category}
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Marquee */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={viewportOnce}
//           className="mt-16 overflow-hidden"
//         >
//           <p className="text-center font-mono text-xs text-white/25 uppercase tracking-[0.3em] mb-6">
//             Also proficient with
//           </p>

//           <div className="relative">
//             <div className="flex gap-6 marquee-track">
//               {[...tools, ...tools].map((tool, i) => (
//                 <div
//                   key={i}
//                   className="flex-shrink-0 glass px-5 py-2.5 rounded-lg text-white/40 text-sm font-mono whitespace-nowrap border border-white/[0.04] hover:text-white/70 hover:border-brand-orange/20 transition-colors"
//                 >
//                   {tool}
//                 </div>
//               ))}
//             </div>

//             <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#030303] to-transparent pointer-events-none" />
//             <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#030303] to-transparent pointer-events-none" />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }