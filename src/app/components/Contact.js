"use client";

import { motion } from "framer-motion";

const links = [
  { label: "GitHub", href: "https://github.com/davegeek26", placeholder: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/david-zapata-uf/", placeholder: true },
  { label: "Email", href: "mailto:davidzap26@gmail.com", placeholder: true },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 sm:px-8 md:px-12 lg:px-16 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold mb-8 text-cyan-600 dark:text-cyan-400"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto"
        >
          Let's work together!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {links.map((link, index) => {
            const gradients = [
              "from-blue-500 to-cyan-500",
              "from-purple-500 to-pink-500",
              "from-orange-500 to-red-500",
            ];
            const gradient = gradients[index % gradients.length];
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={`px-6 py-3 bg-gradient-to-r ${gradient} text-white font-medium rounded-lg hover:scale-105 transition-transform shadow-lg hover:shadow-xl`}
              >
                {link.label}
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

