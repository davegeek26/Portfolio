"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";

const projects = [
  {
    title: "AI Microservice for Video App",
    subtitle: "University of Florida · Jan 2026 – Present",
    status: "In Progress",
    category: "AI / ML",
    description: [
      "Designed a dedicated AI microservice using FastAPI, exposing RESTful endpoints for text-based AI reasoning to a Vite SPA.",
      "Built concurrent load testing to benchmark latency, optimizing success rates under simulated multi-user traffic.",
      "Developed a real-time AI chatbot for live meeting assistance by feeding transcript text into a RAG pipeline, with automated post-meeting summaries triggered on meeting conclusion.",
    ],
    highlights: [
      "FastAPI microservice architecture",
      "Real-time RAG chatbot",
      "Load testing & latency optimization",
      "Token-level LLM cost control",
    ],
    tech: ["Python", "FastAPI", "RAG", "LangChain", "Vite"],
    liveUrl: "#",
    codeUrl: "https://github.com/Esierra422/Notus",
  },
  {
    title: "AI Real Estate Personal Assistant",
    subtitle: "Personal Project · Feb 2026",
    status: "Complete",
    category: "AI / ML",
    description: [
      "Architected a Model Context Protocol (MCP) system to build an AI real-estate assistant, exposing 11 remote tools across 4 MCP servers.",
      "Built an async FastAPI backend performing agent orchestration and exposing AI responses in JSON format over HTTP endpoints, integrated into a Next.js interface.",
      "Built persistent CRM storage allowing the agent to reason over client preferences, with Zillow API data retrieval as an MCP tool to fetch listings using saved preferences in SQLite.",
    ],
    highlights: [
      "MCP multi-server architecture",
      "Agent orchestration",
      "Persistent CRM with SQLite",
      "Zillow API integration",
    ],
    tech: ["Python", "FastAPI", "MCP", "Next.js", "SQLite"],
    liveUrl: "#",
    codeUrl: "https://github.com/davegeek26/AI-RealEstate-System",
  },
  {
    title: "Document-Specific Query System",
    subtitle: "Personal Project · Nov 2025",
    status: "Complete",
    category: "AI / ML",
    description: [
      "Built an AI-powered, document-specific Q&A end-to-end system using Retrieval-Augmented Generation (RAG), where a tool-calling LLM agent retrieves relevant context from a persistent vector database before generating targeted responses.",
      "Developed a FastAPI backend with RESTful endpoints to receive frontend queries, run retrieval, and return structured responses to a web interface.",
      "Embedded document chunks using OpenAI embeddings and stored vectors in ChromaDB for efficient semantic similarity search.",
    ],
    highlights: [
      "RAG & vector search",
      "FastAPI REST backend",
      "OpenAI embeddings + ChromaDB",
      "LLM agent tool integration",
    ],
    tech: ["Python", "LangChain", "FastAPI", "RAG", "OpenAI API"],
    liveUrl: "#",
    codeUrl: "https://github.com/davegeek26/RAG-Backend",
  },
  {
    title: "ML Research — Trading Algorithm",
    subtitle: "Research Project · Sep – Dec 2025",
    status: "Complete",
    category: "AI / ML",
    description: [
      "Assisted in developing a Recurrent Neural Network for a trading algorithm using PyTorch that integrated technical indicators and established day trading strategies to predict short-term price movements.",
      "Conducted extensive backtesting using historical market data to evaluate model performance under varying market conditions, achieving a 56% win rate.",
    ],
    highlights: [
      "RNN with PyTorch",
      "Technical indicator integration",
      "Historical backtesting",
      "56% win rate achieved",
    ],
    tech: ["Python", "PyTorch", "NumPy", "Pandas"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Royal Mafia Clothing",
    subtitle: "Full-Stack E-Commerce Platform",
    status: "Active Development",
    category: "Full-Stack",
    description: [
      "Built with Next.js + React, featuring tailored product pages, cart UI, and checkout UX. CSS powers slick hover animations and a looping, horizontally-scrolling product showcase.",
      "Session-based cart & user tracking with HTTP-only cookies. Zero-trust architecture where the client never controls prices or totals.",
      "Stripe integration creates PaymentIntents only after server-side validation. Webhooks confirm payment completion, and orders persist only after Stripe verification.",
    ],
    highlights: [
      "E-commerce backend infrastructure",
      "Session handling & auth",
      "Stripe payment integration",
      "Full lifecycle ownership",
    ],
    tech: ["Next.js", "React", "Stripe", "Supabase", "Express.js"],
    liveUrl: "https://royalmafia.vercel.app/",
    codeUrl: "https://github.com/davegeek26/royal-mafia-nextjs",
  },
  {
    title: "NEPSIS",
    subtitle: "Gamified Productivity App",
    status: "Complete",
    category: "Frontend",
    description: [
      "Frontend-focused project built with React + TypeScript. Kanban-style task board using CSS Grid + Flexbox.",
      "Component-level state management with parent-child communication via callbacks. Dynamic styling via CSS Modules.",
    ],
    highlights: [
      "Strong React fundamentals",
      "UI state management",
      "Component architecture",
      "UX-driven feature design",
    ],
    tech: ["React", "TypeScript", "CSS Modules"],
    liveUrl: "https://nepsis-frontend-portfolio.vercel.app/",
    codeUrl: "https://github.com/davegeek26/Nepsis-Frontend-Portfolio",
  },
];

const categories = ["All", "AI / ML", "Full-Stack", "Frontend"];

const statusColors = {
  "In Progress": "bg-amber-500",
  "Active Development": "bg-emerald-500",
  Complete: "bg-cyan-500",
};

// Alternating card entrance: even from left, odd from right
const cardVariants = {
  hidden: (i) => ({
    opacity: 0,
    x: i % 2 === 0 ? -60 : 60,
    y: 30,
    rotateY: i % 2 === 0 ? 6 : -6,
  }),
  visible: (i) => ({
    opacity: 1,
    x: 0,
    y: 0,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 16,
      delay: i * 0.08,
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.9,
    filter: "blur(4px)",
    transition: { duration: 0.25 },
  },
};

function TiltCard({ children, index }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring-smoothed rotations so movement feels organic
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });
  const scale = useSpring(1, { stiffness: 300, damping: 25 });
  const z = useSpring(0, { stiffness: 300, damping: 25 });

  // Glow position follows the cursor
  const glowX = useSpring(useTransform(x, [-0.5, 0.5], [0, 100]), { stiffness: 200, damping: 30 });
  const glowY = useSpring(useTransform(y, [-0.5, 0.5], [0, 100]), { stiffness: 200, damping: 30 });

  function handleMouseMove(e) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    // Normalize to -0.5 ... 0.5
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseEnter() {
    scale.set(1.03);
    z.set(30);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    scale.set(1);
    z.set(0);
  }

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        z,
        transformStyle: "preserve-3d",
      }}
      className="group relative rounded-2xl will-change-transform"
    >
      {/* Cursor-tracking glow */}
      <motion.div
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]) =>
              `radial-gradient(circle at ${gx}% ${gy}%, rgba(6,182,212,0.5), rgba(168,85,247,0.3) 40%, rgba(236,72,153,0.2) 70%, transparent 100%)`
          ),
          filter: "blur(3px)",
        }}
      />
      {children}
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 18 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-cyan-600 dark:text-cyan-400"
        >
          Featured Projects
        </motion.h2>

        {/* Category filter pills with layoutId sliding indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-300"
            >
              {/* Sliding highlight */}
              {active === cat && (
                <motion.span
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-cyan-600 rounded-full shadow-lg shadow-cyan-600/25"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <span
                className={`relative z-10 ${
                  active === cat
                    ? "text-white"
                    : "text-zinc-600 dark:text-zinc-400"
                }`}
              >
                {cat}
              </span>
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start" style={{ perspective: 1200 }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <TiltCard key={project.title} index={index}>

                <div className="relative bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-6 group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-cyan-500/10 transition-all duration-300">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="flex items-start justify-between gap-2 sm:gap-3">
                      <div className="min-w-0">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-1 text-cyan-700 dark:text-cyan-300">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-1">
                          {project.subtitle}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-medium text-zinc-600 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-900 whitespace-nowrap flex-shrink-0">
                        <span
                          className={`inline-block w-1.5 h-1.5 rounded-full ${
                            statusColors[project.status] || "bg-zinc-400"
                          } ${
                            project.status !== "Complete" ? "animate-pulse" : ""
                          }`}
                        />
                        {project.status}
                      </span>
                    </div>

                    <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                      {project.description.map((para, i) => (
                        <p
                          key={i}
                          className="text-zinc-700 dark:text-zinc-300 leading-relaxed"
                        >
                          {para}
                        </p>
                      ))}
                    </div>

                    <div className="mt-2 sm:mt-3">
                      <h4 className="text-[10px] sm:text-xs font-semibold text-zinc-900 dark:text-zinc-100 mb-1.5 sm:mb-2 uppercase tracking-wide">
                        Skills Demonstrated
                      </h4>
                      <ul className="space-y-1.5">
                        {project.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="text-zinc-600 dark:text-zinc-400 text-xs flex items-start"
                          >
                            <span className="mr-2 text-cyan-500 dark:text-cyan-600">
                              ▸
                            </span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-950/30 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {(project.liveUrl || project.codeUrl) && (
                      <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
                        {project.liveUrl && project.liveUrl !== "#" && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 rounded-full text-sm font-medium bg-cyan-600 text-white hover:bg-cyan-500 transition-colors shadow-sm"
                          >
                            Live Demo
                          </motion.a>
                        )}
                        {project.codeUrl && project.codeUrl !== "#" && (
                          <motion.a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 rounded-full text-sm font-medium border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                          >
                            View Code
                          </motion.a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </TiltCard>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
