"use client";

import { motion } from "framer-motion";

const links = [
  { label: "GitHub", href: "https://github.com/DavidZapata26" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/david-zapata-uf/" },
  { label: "Email", href: "mailto:davidzap26@gmail.com" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const headingVariants = {
  hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.5, rotate: -8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
};

const gradients = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-orange-500 to-red-500",
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-16 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.h2
          variants={headingVariants}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8 text-cyan-600 dark:text-cyan-400"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          variants={subtitleVariants}
          className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 mb-8 sm:mb-12 max-w-2xl mx-auto"
        >
          Let&apos;s work together!
        </motion.p>
        <motion.div
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-4"
        >
          {links.map((link, index) => {
            const gradient = gradients[index % gradients.length];
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                variants={linkVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -2, 2, 0],
                  transition: { rotate: { duration: 0.4 } },
                }}
                whileTap={{ scale: 0.9 }}
                className={`px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r ${gradient} text-sm sm:text-base text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-shadow`}
              >
                {link.label}
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
