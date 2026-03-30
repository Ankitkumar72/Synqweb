"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Pricing"],
    Resources: ["Changelog", "Support"],
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
              {/* X */}
              <Link href="https://x.com/SynqApp_" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 bg-white border border-black/5 rounded-full flex items-center justify-center hover:bg-black hover:border-black hover:scale-110 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-black group-hover:text-white transition-colors">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              {/* LinkedIn */}
              <Link href="#" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 bg-white border border-black/5 rounded-full flex items-center justify-center hover:bg-black hover:border-black hover:scale-110 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-black group-hover:text-white transition-colors">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zM3.557 20.452h3.56V9h-3.56v11.452z" />
                </svg>
              </Link>
              {/* Instagram */}
              <Link href="#" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 bg-white border border-black/5 rounded-full flex items-center justify-center hover:bg-black hover:border-black hover:scale-110 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-black group-hover:text-white transition-colors">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.607.058 1.266.07 1.646.07 4.852s-.012 3.586-.07 4.852c-.062 1.366-.333 2.633-1.308 3.608-.975.976-2.242 1.246-3.607 1.308-1.266.058-1.646.07-4.852.07s-3.586-.012-4.852-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.607-.058-1.266-.07-1.646-.07-4.852s.012-3.586.07-4.852c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.607-1.308 1.266-.058 1.646-.07 4.852-.07ZM12 0C8.741 0 8.332.014 7.052.072 5.772.13 4.902.333 4.145.63c-.783.303-1.448.71-2.11 1.372C1.373 2.665.966 3.33.663 4.113.366 4.87.163 5.74.105 7.02.047 8.3.032 8.709.032 11.97s.015 3.67.073 4.95c.058 1.28.26 2.15.557 2.907.303.783.71 1.448 1.372 2.11.662.662 1.327 1.07 2.11 1.372.757.297 1.627.5 2.907.557 1.28.058 1.688.073 4.948.073s3.668-.015 4.948-.073c1.28-.058 2.15-.26 2.907-.557.783-.303 1.448-.71 2.11-1.372.662-.662 1.07-1.327 1.372-2.11.297-.757.5-1.627.557-2.907.058-1.28.073-1.688.073-4.948s-.015-3.668-.073-4.948c-.058-1.28-.26-2.15-.557-2.907-.303-.783-.71-1.448-1.372-2.11-.662-.662-1.327-1.07-2.11-1.372-.757-.297-1.627-.5-2.907-.557-1.28-.058-1.688-.073-4.948-.073ZM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4.162 4.162 0 1 1 0-8.324A4.162 4.162 0 0 1 12 16ZM18.406 4.155a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
                </svg>
              </Link>
              {/* Discord */}
              <Link href="https://discord.gg/BjVNVCk3" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 bg-white border border-black/5 rounded-full flex items-center justify-center hover:bg-black hover:border-black hover:scale-110 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-black group-hover:text-white transition-colors">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.862-1.297 1.197-1.99a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.294a.073.073 0 0 1 .077-.01 13.525 13.525 0 0 0 8.216 0 .073.073 0 0 1 .077.01c.12.102.246.2.372.294a.077.077 0 0 1-.006.128 12.51 12.51 0 0 1-1.872.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.947 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z" />
                </svg>
              </Link>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-widest text-black">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => {
                  const href = link === "Changelog"
                    ? "/changelog"
                    : link === "Support"
                      ? "/support"
                      : link === "Privacy"
                        ? "/privacy"
                        : link === "Terms"
                          ? "/terms"
                          : link === "Refund"
                            ? "/refund"
                            : link === "Pricing"
                              ? "/#pricing"
                              : link === "Features"
                                ? "/#product"
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
            © 2026 Synq
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
