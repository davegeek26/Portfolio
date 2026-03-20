"use client";

import { motion } from "framer-motion";

const lines = [
  "I'm a Computer Science student at the University of Florida who loves building software products from the ground up, from designing backend systems and APIs to crafting frontends that feel fast and intuitive to use. Lately my focus has been on AI integration, specifically learning how to take systems that already work and make them smarter. That means getting into everything from retrieval-augmented generation and agentic workflows to security, testing, and real-world deployment. I'm especially drawn to the challenge of making AI feel like a natural part of an application rather than something tacked on at the end. Outside of coding you'll find me at the gym, watching or playing soccer, or thinking through the next startup idea."
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, x: -60, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 18,
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-16 bg-gradient-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-950"
    >
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          variants={headingVariants}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8 text-cyan-600 dark:text-cyan-400"
        >
          About Me
        </motion.h2>
        <div className="space-y-3 sm:space-y-4">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              variants={lineVariants}
              className="text-base sm:text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed"
            >
              {line}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
