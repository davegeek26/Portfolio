"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const lines = [
  "I'm currently focused on building more sophisticated AI-driven systems and understanding how they operate beyond simple prompts.",
  "I'm especially interested in retrieval-augmented generation, agentic workflows, and how large language models can reason over real data through tools, memory, and orchestration.",
  "I'm also on track to complete the Microsoft Azure AI Engineer path certificate.",
  "There is so much potential in this area, and I'm excited to continue exploring and getting better at it day by day.",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
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

export default function CurrentlyExpanding() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [4, 0, -4]);

  return (
    <section
      ref={sectionRef}
      id="currently-expanding"
      className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-16 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black"
    >
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        style={{ perspective: 800 }}
      >
        <motion.h2
          variants={headingVariants}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8 text-cyan-600 dark:text-cyan-400"
        >
          Currently Expanding
        </motion.h2>
        <motion.div style={{ rotateX }}>
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
      </motion.div>
    </section>
  );
}
