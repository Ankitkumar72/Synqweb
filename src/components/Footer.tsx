"use client";

import React from "react";
import Link from "next/link";
import { Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Integrations", "Pricing"],
    Resources: ["Blog", "Guides", "Support"],
    Legal: ["Privacy", "Terms", "Refund"]
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
               <Link href="#" className="group w-12 h-12 bg-white border border-black/5 rounded-full flex items-center justify-center hover:bg-black hover:border-black hover:scale-110 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-black group-hover:text-white transition-colors">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
               </Link>
               <Link href="#" className="group w-12 h-12 bg-white border border-black/5 rounded-full flex items-center justify-center hover:bg-black hover:border-black hover:scale-110 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  <Linkedin size={20} strokeWidth={2.5} className="text-black group-hover:text-white transition-colors" />
               </Link>
               <Link href="#" className="group w-12 h-12 bg-white border border-black/5 rounded-full flex items-center justify-center hover:bg-black hover:border-black hover:scale-110 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  <Instagram size={20} strokeWidth={2.5} className="text-black group-hover:text-white transition-colors" />
               </Link>
               <Link href="#" className="group w-12 h-12 bg-white border border-black/5 rounded-full flex items-center justify-center hover:bg-black hover:border-black hover:scale-110 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-black group-hover:text-white transition-colors">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.862-1.297 1.197-1.99a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.294a.073.073 0 0 1 .077-.01 13.525 13.525 0 0 0 8.216 0 .073.073 0 0 1 .077.01c.12.102.246.2.372.294a.077.077 0 0 1-.006.128 12.51 12.51 0 0 1-1.872.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.947 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z"/>
                  </svg>
               </Link>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-widest text-black">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => {
                  const href = link === "Support" 
                    ? "/support" 
                    : link === "Privacy" 
                    ? "/privacy" 
                    : link === "Terms" 
                    ? "/terms" 
                    : link === "Refund" 
                    ? "/refund" 
                    : "#";
                  return (
                    <li key={link}>
                      <Link href={href} className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors">{link}</Link>
                    </li>
                  );
                })}
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
