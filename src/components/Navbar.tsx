"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 glass shadow-sm" : "py-6 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
             <div className="w-3.5 h-3.5 bg-white rounded-full"></div>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-foreground">Synq</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <Link href="#product" className="text-sm font-semibold text-foreground/50 hover:text-primary transition-colors">Product</Link>
          <Link href="#pricing" className="text-sm font-semibold text-foreground/50 hover:text-primary transition-colors">Pricing</Link>
          <Link href="#company" className="text-sm font-semibold text-foreground/50 hover:text-primary transition-colors">Company</Link>
        </div>

        <div className="flex items-center gap-6">
          <button className="hidden sm:block text-sm font-bold text-foreground/60 hover:text-primary transition-colors">
            Log in
          </button>
          <button className="bg-foreground text-background text-sm font-black px-6 py-3 rounded-full hover:bg-foreground/90 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-foreground/10">
            Get Started
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
