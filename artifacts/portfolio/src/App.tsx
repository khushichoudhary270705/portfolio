import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, ExternalLink } from "lucide-react";

import profileImg from "./assets/profile.png";
import project1Img from "./assets/project-1.png";

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

const Navbar = () => (
  <motion.nav
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 md:py-8 mix-blend-difference text-white"
  >
    <div className="font-sans text-sm font-medium tracking-widest uppercase">
      Khushi Choudhary
    </div>
    <div className="hidden md:flex gap-8 font-sans text-sm tracking-wide">
      <a href="#skills" className="hover:opacity-60 transition-opacity">Skills</a>
      <a href="#projects" className="hover:opacity-60 transition-opacity">Projects</a>
      <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
      <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
    </div>
  </motion.nav>
);

const Hero = () => (
  <section className="relative min-h-[100dvh] flex flex-col justify-end px-6 py-24 md:px-12 md:py-32">
    <div className="max-w-5xl">
      <FadeIn>
        <p className="font-sans text-sm tracking-widest uppercase text-muted-foreground mb-6">Software Engineering Student</p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] mb-8">
          Building things<br />
          that matter.
        </h1>
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className="text-lg md:text-2xl font-sans max-w-xl text-muted-foreground font-light leading-relaxed">
          B.Tech CS student at SRMCEM, Lucknow. Passionate about software development, problem solving, and building practical solutions with code.
        </p>
      </FadeIn>
      <FadeIn delay={0.2}>
        <div className="flex flex-wrap gap-6 mt-12">
          <a
            href="#projects"
            data-testid="link-view-work"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 font-sans text-sm uppercase tracking-widest hover:bg-muted-foreground transition-colors"
          >
            View My Work <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/khushi-choudhary"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-linkedin"
            className="inline-flex items-center gap-2 border border-border px-8 py-4 font-sans text-sm uppercase tracking-widest hover:bg-card transition-colors"
          >
            LinkedIn <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </FadeIn>
    </div>
  </section>
);

const Skills = () => {
  const skillGroups = [
    {
      label: "Languages",
      skills: ["Python", "Java", "C"],
    },
    {
      label: "Web",
      skills: ["HTML", "CSS", "JavaScript", "Django"],
    },
    {
      label: "Tools",
      skills: ["Git", "VS Code", "Excel"],
    },
    {
      label: "Concepts",
      skills: ["Data Structures", "OOP", "DBMS", "Operating Systems"],
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 bg-card">
      <FadeIn>
        <h2 className="text-sm font-sans tracking-widest uppercase mb-16 text-muted-foreground">Technical Skills</h2>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {skillGroups.map((group, i) => (
          <FadeIn key={group.label} delay={i * 0.1}>
            <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-6">{group.label}</p>
            <ul className="flex flex-col gap-3">
              {group.skills.map((skill) => (
                <li key={skill} className="text-xl md:text-2xl">{skill}</li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

const Projects = () => (
  <section id="projects" className="py-24 md:py-48 px-6 md:px-12">
    <FadeIn>
      <h2 className="text-sm font-sans tracking-widest uppercase mb-16 text-muted-foreground">Projects</h2>
    </FadeIn>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      <div className="col-span-1 md:col-span-7">
        <FadeIn>
          <div className="overflow-hidden relative group aspect-[4/3] bg-muted">
            <motion.img
              src={project1Img}
              alt="AI Caption Generator"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </FadeIn>
      </div>

      <div className="col-span-1 md:col-span-4 md:col-start-9">
        <FadeIn delay={0.2} className="flex flex-col justify-center h-full">
          <p className="text-sm font-sans text-muted-foreground mb-4">Web Development / 2024</p>
          <h3 className="text-3xl md:text-5xl mb-4">AI Caption Generator</h3>
          <p className="font-sans text-muted-foreground text-base leading-relaxed mb-4 font-light">
            A web application that automatically generates descriptive captions for images using AI. Built end-to-end with a Django backend and a clean, interactive frontend.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {["HTML", "CSS", "JavaScript", "Django"].map((tag) => (
              <span key={tag} className="font-sans text-xs uppercase tracking-widest border border-border px-3 py-1 text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
          <button data-testid="button-view-project-1" className="flex items-center gap-2 text-sm font-sans uppercase tracking-widest group border-b border-border pb-1 w-max">
            View Project
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </FadeIn>
      </div>
    </div>
  </section>
);

const Education = () => (
  <section className="py-24 md:py-32 px-6 md:px-12 bg-primary text-primary-foreground">
    <div className="max-w-4xl mx-auto">
      <FadeIn>
        <h2 className="text-sm font-sans tracking-widest uppercase mb-16 opacity-60">Education</h2>
      </FadeIn>
      <div className="flex flex-col">
        {[
          {
            degree: "B.Tech — Computer Science",
            institution: "SRMCEM, Lucknow",
            years: "2023—2027",
          },
          {
            degree: "Intermediate (CBSE)",
            institution: "Kendriya Vidyalaya No. 1 AFS Gorakhpur",
            years: "Completed",
          },
          {
            degree: "High School (CBSE)",
            institution: "Kendriya Vidyalaya No. 1 AFS Gorakhpur",
            years: "Completed",
          },
        ].map((edu, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-primary-foreground/20 group">
              <h3 className="text-xl md:text-3xl group-hover:translate-x-2 transition-transform duration-500">{edu.degree}</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-12 mt-4 md:mt-0 font-sans text-primary-foreground/60">
                <span className="text-base">{edu.institution}</span>
                <span className="text-sm tracking-wider uppercase">{edu.years}</span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

const Achievements = () => {
  const items = [
    "Participated in coding competitions and hackathons",
    "Scholarship Recipient for Academic Excellence",
    "Completed online certification — Forage",
    "Represented at State Level Badminton Competition",
    "Gold Medalist at Zonal Level Badminton Tournament",
    "NCC 'B' Certificate holder",
  ];

  return (
    <section id="about" className="py-24 md:py-48 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        <div className="col-span-1 md:col-span-5 md:col-start-2">
          <FadeIn>
            <div className="aspect-[3/4] overflow-hidden bg-muted">
              <img
                src={profileImg}
                alt="Khushi Choudhary"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </FadeIn>
        </div>

        <div className="col-span-1 md:col-span-4 md:col-start-8">
          <FadeIn delay={0.1}>
            <h2 className="text-4xl md:text-6xl mb-4">Khushi Choudhary</h2>
            <p className="font-sans text-muted-foreground text-lg mb-12 font-light leading-relaxed">
              Motivated CS student with a drive to build practical, impactful software. I bring the same dedication I've shown on the badminton court — discipline, persistence, and a competitive spirit — to everything I build.
            </p>
            <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-6">Achievements</p>
            <ul className="flex flex-col gap-4">
              {items.map((item, i) => (
                <FadeIn key={i} delay={0.1 + i * 0.05}>
                  <li className="flex gap-4 items-start font-sans text-base">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-24 md:py-48 px-6 md:px-12 bg-card">
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
      <div>
        <FadeIn>
          <h2 className="text-5xl md:text-7xl mb-8">Let's connect.</h2>
          <p className="font-sans text-muted-foreground text-lg mb-12 max-w-sm">
            Open to internships, project collaborations, and opportunities in software development.
          </p>
          <div className="flex flex-col gap-6">
            <a
              href="mailto:khushichoudhary270705@gmail.com"
              data-testid="link-email"
              className="inline-flex items-center gap-3 text-lg hover:text-muted-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
              khushichoudhary270705@gmail.com
            </a>
            <a
              href="tel:+917897056665"
              data-testid="link-phone"
              className="inline-flex items-center gap-3 text-lg hover:text-muted-foreground transition-colors"
            >
              <Phone className="w-5 h-5" />
              +91 7897056665
            </a>
            <span className="inline-flex items-center gap-3 text-lg text-muted-foreground">
              <MapPin className="w-5 h-5" />
              Lucknow, India
            </span>
            <a
              href="https://www.linkedin.com/in/khushi-choudhary"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-linkedin-contact"
              className="inline-flex items-center gap-3 text-lg hover:text-muted-foreground transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              linkedin.com/in/khushi-choudhary
            </a>
          </div>
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
                data-testid="input-name"
                className="bg-transparent border-b border-border pb-4 focus:outline-none focus:border-foreground transition-colors rounded-none placeholder:text-muted/50"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs tracking-widest uppercase text-muted-foreground">Email</label>
              <input
                type="email"
                id="email"
                data-testid="input-email"
                className="bg-transparent border-b border-border pb-4 focus:outline-none focus:border-foreground transition-colors rounded-none placeholder:text-muted/50"
                placeholder="your@email.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs tracking-widest uppercase text-muted-foreground">Message</label>
              <textarea
                id="message"
                data-testid="input-message"
                rows={4}
                className="bg-transparent border-b border-border pb-4 focus:outline-none focus:border-foreground transition-colors resize-none rounded-none placeholder:text-muted/50"
                placeholder="Tell me about the opportunity..."
              />
            </div>
            <button data-testid="button-send-message" className="bg-foreground text-background py-4 px-8 w-max uppercase tracking-widest text-sm hover:bg-muted-foreground transition-colors">
              Send Message
            </button>
          </form>
        </FadeIn>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 md:px-12 border-t border-border font-sans text-sm">
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground">
      <p>&copy; {new Date().getFullYear()} Khushi Choudhary. All rights reserved.</p>
      <div className="flex gap-8">
        <a
          href="https://www.linkedin.com/in/khushi-choudhary"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          LinkedIn
        </a>
        <a href="mailto:khushichoudhary270705@gmail.com" className="hover:text-foreground transition-colors">
          Email
        </a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-serif selection:bg-foreground selection:text-background">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
