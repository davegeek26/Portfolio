"use client";

import { motion } from "framer-motion";

const allSkills = [
  "JavaScript",
  "TypeScript",
  "Python",
  "C++",
  "SQL",
  "HTML / CSS",
  "Next.js (App Router)",
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "CSS Modules",
  "Shadcn/ui",
  "Supabase (PostgreSQL, Auth)",
  "Stripe (PaymentIntents + Webhooks)",
  "Session-based authentication",
  "FastAPI",
  "REST APIs",
  "Server Actions (Next.js)",
  "Docker",
  "Git & GitHub workflows",
  "Linux / POSIX",
  "OS concepts (virtual memory, file systems, allocators)",
];

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C++", "SQL", "HTML / CSS"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Frontend",
    skills: [
      "Next.js (App Router)",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "CSS Modules",
      "Shadcn/ui",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Backend / Infra",
    skills: [
      "Supabase (PostgreSQL, Auth)",
      "Stripe (PaymentIntents + Webhooks)",
      "Session-based authentication",
      "FastAPI",
      "REST APIs",
      "Server Actions (Next.js)",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Dev / Systems",
    skills: [
      "Docker",
      "Git & GitHub workflows",
      "Linux / POSIX",
      "OS concepts (virtual memory, file systems, allocators)",
    ],
    color: "from-green-500 to-emerald-500",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 sm:px-8 md:px-12 lg:px-16 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold text-black dark:text-white mb-16"
        >
          Core Skills
        </motion.h2>

        {/* Horizontal Scrolling Skills Marquee */}
        <div className="mb-16 relative">
          {/* Fade overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-50 via-zinc-50/50 to-transparent dark:from-zinc-950 dark:via-zinc-950/50 z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-50 via-zinc-50/50 to-transparent dark:from-zinc-950 dark:via-zinc-950/50 z-10 pointer-events-none" />
          
          {/* First row - scrolling left */}
          <div className="overflow-hidden mb-4">
            <div className="flex animate-scroll">
              {[...allSkills, ...allSkills].map((skill, index) => {
                const gradients = [
                  "from-blue-500 to-cyan-500",
                  "from-purple-500 to-pink-500",
                  "from-orange-500 to-red-500",
                  "from-green-500 to-emerald-500",
                  "from-indigo-500 to-blue-500",
                  "from-pink-500 to-rose-500",
                ];
                const gradient = gradients[index % gradients.length];
                return (
                  <div
                    key={`${skill}-${index}`}
                    className={`flex-shrink-0 mx-3 px-6 py-3 bg-gradient-to-r ${gradient} rounded-full text-white font-medium whitespace-nowrap shadow-lg hover:scale-110 transition-transform cursor-default`}
                  >
                    {skill}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Second row - scrolling right (reverse) */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-reverse">
              {[...allSkills, ...allSkills].map((skill, index) => {
                const gradients = [
                  "from-cyan-500 to-blue-500",
                  "from-pink-500 to-purple-500",
                  "from-red-500 to-orange-500",
                  "from-emerald-500 to-green-500",
                  "from-blue-500 to-indigo-500",
                  "from-rose-500 to-pink-500",
                ];
                const gradient = gradients[index % gradients.length];
                return (
                  <div
                    key={`reverse-${skill}-${index}`}
                    className={`flex-shrink-0 mx-3 px-6 py-3 bg-gradient-to-r ${gradient} rounded-full text-white font-medium whitespace-nowrap shadow-lg hover:scale-110 transition-transform cursor-default`}
                  >
                    {skill}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
