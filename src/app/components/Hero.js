"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const allSkills = [
  "JavaScript",
  "TypeScript",
  "Python",
  "C++",
  "SQL",
  "LangChain",
  "LLM Integration",
  "RAG",
  "HTML/CSS",
  "Next.js",
  "Node.js",
  "React",
  "Tailwind CSS",
  "Supabase (PostgreSQL)",
  "Stripe",
  "REST APIs",
  "Git",
];

const ABOUT_TEXT =
  "Lifting weights, watching Barça, and thinking about the next product to build.";

function useTypewriter(text, speed = 5) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setDisplay(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  return display;
}

export default function Hero() {
  const typedAbout = useTypewriter(ABOUT_TEXT, 20);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 dark:from-blue-950/10 dark:via-purple-950/10 dark:to-pink-950/10 pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-5xl w-full relative z-10">
        {/* About card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-white/80 dark:bg-black/70 border border-zinc-200/70 dark:border-zinc-800/70 shadow-xl backdrop-blur-md p-6 sm:p-8 md:p-10"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-4">
            <span className="text-cyan-600 dark:text-cyan-400">
              David Zapata
            </span>
          </h1>
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500 mb-6">
            Software Engineering Student
          </p>

          <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-8 min-h-[4rem]">
            {typedAbout}
            <span className="inline-block w-3 h-5 align-middle bg-zinc-400/80 dark:bg-zinc-200/80 animate-pulse ml-1" />
          </p>

          {/* Horizontal Scrolling Skills Marquee inside card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-8"
          >
            {/* Fade overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/60 to-transparent dark:from-black dark:via-black/60 z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/60 to-transparent dark:from-black dark:via-black/60 z-10 pointer-events-none" />

            {/* First row - scrolling left */}
            <div className="overflow-hidden mb-3">
              <div className="flex animate-scroll">
                {[...allSkills, ...allSkills].map((skill, index) => {
                  const colors = [
                    "from-cyan-600 to-sky-500",
                    "from-zinc-800 to-zinc-600",
                    "from-emerald-600 to-emerald-500",
                    "from-indigo-600 to-indigo-500",
                  ];
                  const gradient = colors[index % colors.length];
                  return (
                    <div
                      key={`${skill}-${index}`}
                      className={`flex-shrink-0 mx-2 px-5 py-2 bg-gradient-to-r ${gradient} rounded-full text-white text-xs font-medium whitespace-nowrap shadow-md hover:scale-105 transition-transform cursor-default`}
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
                  const colors = [
                    "from-sky-500 to-cyan-600",
                    "from-zinc-700 to-zinc-500",
                    "from-emerald-500 to-emerald-600",
                    "from-indigo-500 to-indigo-600",
                  ];
                  const gradient = colors[index % colors.length];
                  return (
                    <div
                      key={`reverse-${skill}-${index}`}
                      className={`flex-shrink-0 mx-2 px-5 py-2 bg-gradient-to-r ${gradient} rounded-full text-white text-xs font-medium whitespace-nowrap shadow-md hover:scale-105 transition-transform cursor-default`}
                    >
                      {skill}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

