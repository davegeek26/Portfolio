"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const allSkills = [
  "Python",
  "JavaScript",
  "TypeScript",
  "Java",
  "C++",
  "SQL",
  "LangChain",
  "MCP",
  "RAG",
  "Azure AI",
  "FastAPI",
  "Next.js",
  "React",
  "Node.js",
  "Express.js",
  "REST APIs",
  "PostgreSQL",
  "Supabase",
  "ChromaDB",
  "Docker",
  "AWS",
  "PyTorch",
  "OpenAI",
  "Stripe",
  "Git",
];

const firstName = "David".split("");
const lastName = "Zapata".split("");

const orbs = [
  { size: 350, x: "5%", y: "15%", color: "bg-cyan-500/10", delay: 0, duration: 20 },
  { size: 250, x: "65%", y: "55%", color: "bg-purple-500/10", delay: 2, duration: 25 },
  { size: 280, x: "75%", y: "10%", color: "bg-pink-500/8", delay: 4, duration: 22 },
  { size: 180, x: "15%", y: "65%", color: "bg-indigo-500/10", delay: 1, duration: 18 },
];

// Orbs are hidden on small screens via CSS, rendered smaller on md

// Each character flips in from below with 3D rotation
const charVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -90, scale: 0.5 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      delay: i * 0.05,
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  }),
};

// Last name chars start after first name finishes
const lastNameCharVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -90, scale: 0.5 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      delay: firstName.length * 0.05 + 0.08 + i * 0.05,
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  }),
};

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Multi-layer parallax — each line at different speed
  const nameY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const lineY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const marqueeY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const totalCharDelay = (firstName.length + lastName.length) * 0.05 + 0.08;

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 dark:from-blue-950/10 dark:via-purple-950/10 dark:to-pink-950/10 pointer-events-none" />

      {/* Floating orbs — hidden on mobile to prevent overflow */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${orb.color} blur-3xl pointer-events-none hidden sm:block`}
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            scale: orbScale,
          }}
          animate={{
            x: [0, 30, -20, 10, 0],
            y: [0, -25, 15, -10, 0],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}

      {/* Grid pattern */}
      <motion.div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          y: gridY,
        }}
      />

      <div className="max-w-6xl w-full relative z-10">
        {/* Line 1: First name — massive, each char independently animated */}
        <motion.div style={{ y: nameY, perspective: 600 }} className="overflow-visible">
          <h1 className="flex flex-wrap" style={{ perspective: 600 }}>
            {firstName.map((char, i) => (
              <motion.span
                key={`f-${i}`}
                custom={i}
                variants={charVariants}
                initial="hidden"
                animate="visible"
                className="inline-block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-zinc-900 dark:text-white"
                style={{ transformOrigin: "bottom center" }}
              >
                {char}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* Line 2: Last name — same size, staggered after first name */}
        <motion.div style={{ y: nameY, perspective: 600 }} className="-mt-2 sm:-mt-4 overflow-visible">
          <h1 className="flex flex-wrap" style={{ perspective: 600 }}>
            {lastName.map((char, i) => (
              <motion.span
                key={`l-${i}`}
                custom={i}
                variants={lastNameCharVariants}
                initial="hidden"
                animate="visible"
                className="inline-block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-cyan-600 dark:text-cyan-400"
                style={{ transformOrigin: "bottom center" }}
              >
                {char}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* Animated divider line that draws itself */}
        <motion.div style={{ y: lineY }} className="my-4 sm:my-6 md:my-8">
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{
              delay: totalCharDelay + 0.2,
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="h-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 origin-left max-w-md"
          />
        </motion.div>

        {/* Line 3: Role + school */}
        <motion.div style={{ y: subtitleY }}>
          <motion.p
            initial={{ opacity: 0, x: -40, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{
              delay: totalCharDelay + 0.5,
              type: "spring",
              stiffness: 100,
              damping: 18,
            }}
            className="text-base sm:text-lg md:text-2xl font-medium text-zinc-600 dark:text-zinc-400 mb-1 sm:mb-2"
          >
            Software Engineer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -40, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{
              delay: totalCharDelay + 0.65,
              type: "spring",
              stiffness: 100,
              damping: 18,
            }}
            className="text-sm sm:text-base md:text-lg text-zinc-500 dark:text-zinc-500"
          >
            University of Florida &middot; Computer Science
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -40, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{
              delay: totalCharDelay + 0.8,
              type: "spring",
              stiffness: 100,
              damping: 18,
            }}
            className="text-sm sm:text-base md:text-lg text-amber-500 dark:text-amber-400 font-medium mt-1 sm:mt-2"
          >
            1x Hackathon Winner
          </motion.p>
        </motion.div>

        {/* Skills marquee — full width, no card */}
        <motion.div
          style={{ y: marqueeY }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: totalCharDelay + 0.9,
            type: "spring",
            stiffness: 80,
            damping: 18,
          }}
          className="relative mt-8 sm:mt-12 md:mt-16"
        >
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white via-white/60 to-transparent dark:from-black dark:via-black/60 z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white via-white/60 to-transparent dark:from-black dark:via-black/60 z-10 pointer-events-none" />

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
      </div>
    </section>
  );
}
