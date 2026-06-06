import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

import profileImg from "./assets/profile.png";
import project1Img from "./assets/project-1.png";
import project2Img from "./assets/project-2.png";
import project3Img from "./assets/project-3.png";
import project4Img from "./assets/project-4.png";

// --- Components ---

const FadeIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay }}
    className={className}
  >
    {children}
  </motion.div>
);

// --- Sections ---

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 md:py-8 mix-blend-difference text-white"
    >
      <div className="font-sans text-sm font-medium tracking-widest uppercase">
        Elias Vance
      </div>
      <div className="hidden md:flex gap-8 font-sans text-sm tracking-wide">
        <a href="#work" className="hover:opacity-60 transition-opacity">Work</a>
        <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
        <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-end px-6 py-24 md:px-12 md:py-32">
      <div className="max-w-5xl">
        <FadeIn>
          <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] mb-8">
            Shaping space<br />
            and object.
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-lg md:text-2xl font-sans max-w-xl text-muted-foreground font-light leading-relaxed">
            Industrial designer and architect based in Copenhagen. Crafting environments that breathe and objects that endure.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

const SelectedWork = () => {
  const projects = [
    {
      id: 1,
      title: "Oakhaven Pavilion",
      category: "Architecture",
      year: "2023",
      image: project1Img,
      aspect: "aspect-[4/3]",
    },
    {
      id: 2,
      title: "Model 42 Chair",
      category: "Industrial Design",
      year: "2022",
      image: project2Img,
      aspect: "aspect-[3/4]",
    },
    {
      id: 3,
      title: "Kierkegaard Gallery",
      category: "Interior Architecture",
      year: "2024",
      image: project3Img,
      aspect: "aspect-[16/9]",
    },
    {
      id: 4,
      title: "Vela Espresso Machine",
      category: "Product Design",
      year: "2023",
      image: project4Img,
      aspect: "aspect-square",
    },
  ];

  return (
    <section id="work" className="py-24 md:py-48 px-6 md:px-12 bg-card">
      <FadeIn>
        <h2 className="text-sm font-sans tracking-widest uppercase mb-16 text-muted-foreground">Selected Work (2021—2024)</h2>
      </FadeIn>

      <div className="flex flex-col gap-32 md:gap-48">
        {projects.map((project, i) => (
          <div key={project.id} className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center ${i % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
            
            <div className={`col-span-1 md:col-span-7 ${i % 2 === 1 ? 'md:col-start-6' : ''}`}>
              <FadeIn>
                <div className={`overflow-hidden relative group ${project.aspect} bg-muted`}>
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </FadeIn>
            </div>

            <div className={`col-span-1 md:col-span-4 ${i % 2 === 1 ? 'md:col-start-1 md:row-start-1' : 'md:col-start-9'}`}>
              <FadeIn delay={0.2} className="flex flex-col justify-center h-full">
                <p className="text-sm font-sans text-muted-foreground mb-4">{project.category} / {project.year}</p>
                <h3 className="text-3xl md:text-5xl mb-6">{project.title}</h3>
                <button className="flex items-center gap-2 text-sm font-sans uppercase tracking-widest group border-b border-border pb-1 w-max">
                  View Project
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </FadeIn>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 md:py-48 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-center">
        <div className="col-span-1 md:col-span-5 md:col-start-2">
          <FadeIn>
            <div className="aspect-[3/4] overflow-hidden bg-muted">
              <img
                src={profileImg}
                alt="Elias Vance in studio"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </FadeIn>
        </div>
        
        <div className="col-span-1 md:col-span-4 md:col-start-8">
          <FadeIn delay={0.2}>
            <h2 className="text-4xl md:text-6xl mb-8">Quiet intention.</h2>
            <div className="font-sans text-muted-foreground space-y-6 text-lg leading-relaxed font-light">
              <p>
                I believe that good design is an act of subtraction. By stripping away the non-essential, we uncover the structural truth of an object or space.
              </p>
              <p>
                For over a decade, I have worked across scales—from monumental concrete pavilions to intimate domestic objects. Regardless of the medium, the philosophy remains constant: respect the material, honor the context, and leave room for the human experience.
              </p>
              <p>
                Currently running an independent practice in Copenhagen, collaborating with select clients globally.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    { role: "Principal", company: "Studio Vance", years: "2020—Present" },
    { role: "Lead Architect", company: "Nordic Forms", years: "2015—2020" },
    { role: "Senior Designer", company: "Atelier K", years: "2012—2015" },
    { role: "MArch", company: "Royal Danish Academy", years: "2012" },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-sm font-sans tracking-widest uppercase mb-16 opacity-60">Experience</h2>
        </FadeIn>
        <div className="flex flex-col">
          {experiences.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-primary-foreground/20 group">
                <h3 className="text-2xl md:text-4xl group-hover:translate-x-2 transition-transform duration-500">{exp.role}</h3>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-12 mt-4 md:mt-0 font-sans text-primary-foreground/60">
                  <span className="text-lg">{exp.company}</span>
                  <span className="text-sm tracking-wider uppercase">{exp.years}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-48 px-6 md:px-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <FadeIn>
            <h2 className="text-5xl md:text-7xl mb-8">Let's build something enduring.</h2>
            <p className="font-sans text-muted-foreground text-lg mb-12 max-w-sm">
              Currently accepting inquiries for architectural commissions and industrial design collaborations for Q3 2025.
            </p>
            <a href="mailto:hello@eliasvance.studio" className="inline-flex items-center gap-3 text-xl hover:text-muted-foreground transition-colors">
              <Mail className="w-5 h-5" />
              hello@eliasvance.studio
            </a>
          </FadeIn>
        </div>
        
        <div>
          <FadeIn delay={0.2}>
            <form className="flex flex-col gap-8 font-sans" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs tracking-widest uppercase text-muted-foreground">Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="bg-transparent border-b border-border pb-4 focus:outline-none focus:border-foreground transition-colors rounded-none placeholder:text-muted/50"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs tracking-widest uppercase text-muted-foreground">Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="bg-transparent border-b border-border pb-4 focus:outline-none focus:border-foreground transition-colors rounded-none placeholder:text-muted/50"
                  placeholder="jane@example.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs tracking-widest uppercase text-muted-foreground">Inquiry</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="bg-transparent border-b border-border pb-4 focus:outline-none focus:border-foreground transition-colors resize-none rounded-none placeholder:text-muted/50"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button className="bg-foreground text-background py-4 px-8 w-max uppercase tracking-widest text-sm hover:bg-muted-foreground transition-colors">
                Send Message
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-border font-sans text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Elias Vance. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
          <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-foreground transition-colors">Are.na</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-serif selection:bg-foreground selection:text-background">
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
