"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Personal",
    price: "$0",
    description: "Perfect for individuals starting their focus journey.",
    features: ["Unlimited tasks", "3 workspaces", "Basic focus timer", "Community access"],
    button: "Get Started",
    popular: false
  },
  {
    name: "Pro Flow",
    price: "$24.99",
    description: "The ultimate toolkit for deep work and high performance.",
    features: ["Everything in Personal", "AI auto-scheduling", "Advanced analytics", "Priority support"],
    button: "Go Pro Now",
    popular: true
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-foreground/5 to-transparent"></div>

      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <h2 className="text-5xl font-black tracking-tight mb-8">Focus-based pricing.</h2>
          <p className="text-xl text-foreground/40 font-medium leading-relaxed">
            Choose the plan that fits your ambition. No hidden fees. <br />
            <span className="text-sm text-foreground/30">Includes a 7-day money-back guarantee on all Pro plans.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-10 rounded-[2.5rem] border ${plan.popular ? 'border-primary ring-1 ring-primary/20 shadow-2xl shadow-primary/10' : 'border-foreground/5 bg-foreground/[0.02]'} flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className="text-foreground/40 font-medium">/month</span>
                </div>
                <p className="mt-4 text-sm text-foreground/50">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/70">
                    <Check size={16} className="text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.popular
                ? 'bg-primary text-white hover:bg-primary/90 hover:scale-[1.02] shadow-xl shadow-primary/20'
                : 'bg-foreground text-background hover:bg-foreground/90 hover:scale-[1.02]'
                }`}>
                {plan.button}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
