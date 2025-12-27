"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ABOUT_TEXT = `I’m a Computer Science student at the University of Florida who 
enjoys building end-to-end software products, from backend architecture and APIs to 
clean, polished frontend experiences. A lot of my work focuses on full-stack applications 
where I take ownership of the entire lifecycle. That includes designing systems, 
validating data server-side, integrating payments, and building interfaces that feel 
fast and intuitive. I’m especially interested in developing scalable, secure systems 
while designing clean, aesthetic frontends that are engaging for users. 
Outside of coding, I spend a lot of time at the gym, watching/playing soccer, and casually 
day-dreaming about startup ideas. And yes, Barcelona is the best team in the world.`;

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

export default function About() {
  const typedAbout = useTypewriter(ABOUT_TEXT, 20);

  return (
    <section
      id="about"
      className="py-24 px-6 sm:px-8 md:px-12 lg:px-16 bg-gradient-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-950"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold mb-8 text-cyan-600 dark:text-cyan-400"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed min-h-[8rem]">
            {typedAbout}
            <span className="inline-block w-3 h-5 align-middle bg-zinc-400/80 dark:bg-zinc-200/80 animate-pulse ml-1" />
          </p>
        </motion.div>
      </div>
    </section>
  );
}

