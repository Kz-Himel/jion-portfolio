export const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};
export const fadeDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};
export const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};
export const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};
export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
export const staggerFast = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};
export const heroText = {
  hidden: { opacity: 0, y: 80, skewY: 5 },
  visible: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } },
};
export const float = {
  initial: { y: 0 },
  animate: { y: [-10, 10, -10], transition: { duration: 6, ease: "easeInOut", repeat: Infinity } },
};
export const glowPulse = {
  initial: { opacity: 0.4 },
  animate: { opacity: [0.4, 0.8, 0.4], scale: [1, 1.05, 1], transition: { duration: 3, ease: "easeInOut", repeat: Infinity } },
};
export const rotateSlowly = {
  initial: { rotate: 0 },
  animate: { rotate: 360, transition: { duration: 20, ease: "linear", repeat: Infinity } },
};
export const viewportOnce = { once: true, margin: "-50px" };