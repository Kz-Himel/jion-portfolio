import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import FloatingParticles from "@/components/ui/FloatingParticles";

export default function Home() {
  return (
    <main className="relative bg-[#030303] overflow-x-hidden">
      <CustomCursor />
      <FloatingParticles />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
