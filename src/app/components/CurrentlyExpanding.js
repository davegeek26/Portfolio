"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const EXPANDING_TEXT = `I'm currently focused on growing as a software engineer by learning more about backend development, API design, and reliable database systems. I want to understand how to build secure and scalable services, while also improving my knowledge of cloud computing with AWS, including things like serverless functions, storage, routing, and deployment. I'm also really interested in bringing AI into full stack applications, using modern AI tools to create smarter features like personalization, automation, search, and analytics. Overall, my goal is to become a well-rounded engineer who can design, build, secure, and scale real-world systems from end to end.`;

function useTypewriter(text, speed = 25) {
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

export default function CurrentlyExpanding() {
  const typedText = useTypewriter(EXPANDING_TEXT, 20);

  return (
    <section
      id="currently-expanding"
      className="py-24 px-6 sm:px-8 md:px-12 lg:px-16 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold mb-8 text-cyan-600 dark:text-cyan-400"
        >
          Currently Expanding
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed min-h-[12rem]">
            {typedText}
            <span className="inline-block w-3 h-5 align-middle bg-zinc-400/80 dark:bg-zinc-200/80 animate-pulse ml-1" />
          </p>
        </motion.div>
      </div>
    </section>
  );
}

