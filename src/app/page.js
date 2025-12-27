"use client";

import { motion } from "framer-motion";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import CurrentlyExpanding from "./components/CurrentlyExpanding";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <CurrentlyExpanding />
      <Contact />
    </main>
  );
}
