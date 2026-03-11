"use client";

import React from "react";
import Link from "next/link";
import { Github } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Integrations", "Pricing"],
    Resources: ["Blog", "Guides", "Community"],
    Legal: ["Privacy", "Terms", "Security"]
  };

  return (
    <footer className="pt-32 pb-16 bg-white border-t border-foreground/5">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 mb-24">
          <div className="col-span-2 lg:col-span-2 space-y-8">
            <Link href="/" className="group">
              <span className="text-3xl font-bold tracking-tighter text-black group-hover:opacity-80 transition-opacity">Synq</span>
            </Link>
            <p className="text-base text-foreground/50 max-w-sm leading-relaxed font-semibold">
              The ultimate flow-state workspace for modern knowledge workers.
            </p>
            <div className="flex gap-4">
               <Link href="#" className="w-12 h-12 bg-white border border-black/5 rounded-full flex items-center justify-center hover:bg-foreground/5 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-black/[0.03]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-black">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
               </Link>
               <Link href="#" className="w-12 h-12 bg-white border border-black/5 rounded-full flex items-center justify-center hover:bg-foreground/5 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-black border-black/[0.03]">
                  <Github size={20} strokeWidth={2.5} />
               </Link>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-widest text-foreground/30">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center pt-8 border-t border-foreground/5 gap-4">
          <div className="text-[10px] font-bold uppercase tracking-widest text-foreground/30">
            © 2026 Synq Productivity Inc.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
