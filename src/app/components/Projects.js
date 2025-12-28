"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "NEPSIS",
    subtitle: "Gamified Productivity App",
    status: "Complete",
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
  {
    title: "Royal Mafia Clothing",
    subtitle: "Full-Stack E-Commerce Platform",
    status: "Active Development",
    description: [
      "Built with Next.js + React, featuring tailored product pages, cart UI, and checkout UX. CSS powers slick hover animations and a looping, horizontally-scrolling product showcase that dynamically renders products and links to individual pages. ",
      "Session-based cart & user tracking with HTTP-only cookies. Cart state tied to backend sessions, not client-side storage. Zero-trust architecture where the client never controls prices or totals.",
      "Server re-validates product IDs, prices, inventory, and cart contents. Stripe integration creates PaymentIntents only after validation. Webhooks confirm payment completion, and orders persist only after Stripe verification.",
      "Supabase PostgreSQL manages products, orders, inventory, and sessions. Backend logic focuses on correctness and security, not over-engineering.",
    ],
    highlights: [
      "Real-world e-commerce backend infrastructure",
      "Session handling",
      "Secure payments",
      "Ownership of full lifecycle",
      "Creative Frontend designs",
    ],
    tech: ["Next.js", "React", "Stripe", "Supabase", "CSS"],
    liveUrl: "https://royalmafia.vercel.app/",
    codeUrl: "https://github.com/davegeek26/royal-mafia-nextjs",
  },
  {
    title: "AI App Builder",
    subtitle: "Lovable-Style SaaS",
    status: "Complete",
    description: [
      "AI-powered SaaS that generates full Next.js apps, runs them in isolated cloud sandboxes, and provides live previews.",
      "Secure Docker / E2B sandboxes with an AI system prompt that constrains model behavior, enforces filesystem rules, and grants terminal-level capabilities safely.",
      "tRPC for end-to-end type-safe APIs. Inngest for async workflows. Prisma + Neon for persistence. OpenAI GPT-4.1 API integration.",
    ],
    highlights: [
      "AI systems engineering",
      "Secure execution environments",
      "Advanced frontend/backend orchestration",
    ],
    tech: ["Next.js", "tRPC", "Docker", "OpenAI", "Prisma", "Inngest"],
    liveUrl: "#",
    codeUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold mb-12 text-cyan-600 dark:text-cyan-400"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              {/* Card content */}
              <div className="flex flex-col gap-4 h-full">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-1 text-cyan-700 dark:text-cyan-300">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-1">
                      {project.subtitle}
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-800 px-3 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-900">
                    {project.status}
                  </span>
                </div>

                <div className="space-y-3 text-sm">
                  {project.description.map((para, i) => (
                    <p
                      key={i}
                      className="text-zinc-700 dark:text-zinc-300 leading-relaxed"
                    >
                      {para}
                    </p>
                  ))}
                </div>

                <div className="mt-3">
                  <h4 className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 mb-2 uppercase tracking-wide">
                    Skills Demonstrated
                  </h4>
                  <ul className="space-y-1.5">
                    {project.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="text-zinc-600 dark:text-zinc-400 text-xs flex items-start"
                      >
                        <span className="mr-2 text-zinc-400 dark:text-zinc-600">
                          —
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {(project.liveUrl || project.codeUrl) && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-full text-sm font-medium bg-cyan-600 text-white hover:bg-cyan-500 transition-colors shadow-sm"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.codeUrl && project.codeUrl !== "#" && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-full text-sm font-medium border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

