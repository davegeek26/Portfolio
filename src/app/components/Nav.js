"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const navVariants = {
  hidden: { y: -100 },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: -20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
};

const logoVariants = {
  hidden: { opacity: 0, x: -30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 150, damping: 15, delay: 0.1 },
  },
};

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-16">
          <motion.button
            variants={logoVariants}
            onClick={() => scrollToSection("hero")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 hover:opacity-80 transition-opacity"
          >
            David Zapata
          </motion.button>
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                variants={linkVariants}
                onClick={() => scrollToSection(link.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
