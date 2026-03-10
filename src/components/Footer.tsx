import React from "react";
import Link from "next/link";
import { Github, Twitter } from "lucide-react";

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
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="text-xl font-bold tracking-tight">Synq</span>
            </Link>
            <p className="text-sm text-foreground/40 max-w-xs leading-relaxed">
              The productivity tool built for deep work and high-performance focus. Master your day in absolute flow.
            </p>
            <div className="flex gap-4">
               <Link href="#" className="p-2 bg-foreground/[0.03] rounded-lg hover:text-primary transition-colors"><Twitter size={18} /></Link>
               <Link href="#" className="p-2 bg-foreground/[0.03] rounded-lg hover:text-primary transition-colors"><Github size={18} /></Link>
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

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-foreground/5 gap-4">
          <div className="text-[10px] font-bold uppercase tracking-widest text-foreground/30">
            © 2026 Synq Productivity Inc.
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-foreground/30">
             <Link href="#" className="hover:text-foreground transition-colors">STATUS</Link>
             <Link href="#" className="hover:text-foreground transition-colors">DOCS</Link>
             <Link href="#" className="hover:text-foreground transition-colors">API</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
