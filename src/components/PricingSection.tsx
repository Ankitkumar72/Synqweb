"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(true);

  const pricingPlans = [
    {
      name: "Personal",
      monthlyPrice: "$0",
      yearlyPrice: "$0",
      description: "Perfect for individuals starting their focus journey.",
      features: ["Unlimited tasks", "3 workspaces", "Basic focus timer", "Community access"],
      button: "Get Started",
      link: "https://synq-desktop.vercel.app/",
      disabled: false,
      popular: false
    },
    {
      name: "Pro Flow",
      monthlyPrice: "$3.99",
      yearlyPrice: "$24.99",
      monthlyEquivalent: "$2.08",
      description: "The ultimate toolkit for deep work and high performance.",
      features: ["Everything in Personal", "AI auto-scheduling", "Advanced analytics", "Priority support"],
      button: "Coming Soon",
      disabled: true,
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-foreground/5 to-transparent"></div>

      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-5xl font-black tracking-tight mb-8">Focus-based pricing.</h2>
          <p className="text-xl text-foreground/40 font-medium leading-relaxed mb-8">
            Choose the plan that fits your ambition. No hidden fees. <br />
            <span className="text-sm text-foreground/30">Includes a 7-day money-back guarantee on all Pro plans.</span>
          </p>

          {/* Toggle */}
          <div className="flex flex-col items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 bg-foreground/5 p-1.5 rounded-full border border-foreground/10">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${!isYearly ? "bg-white text-foreground shadow-sm" : "text-foreground/50 hover:text-foreground/80"}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all ${isYearly ? "bg-white text-foreground shadow-sm" : "text-foreground/50 hover:text-foreground/80"}`}
              >
                Yearly
                <span className="bg-[#63C7A9]/20 text-[#63C7A9] text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full">
                  Save 30%
                </span>
              </button>
            </div>
          </div>
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
              {plan.popular && isYearly && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg border border-primary/20">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>

                <div className="flex flex-col gap-1 min-h-[5.5rem] justify-center mt-2">
                  {plan.name === "Pro Flow" ? (
                    isYearly ? (
                      <>
                        <div className="flex items-baseline gap-1">
                          <span className="text-5xl font-black">{plan.yearlyPrice}</span>
                          <span className="text-foreground/40 font-medium">/year</span>
                        </div>
                        <div className="text-sm text-primary font-bold mt-1 bg-primary/5 border border-primary/20 px-2 py-1 rounded-lg self-start">
                          Equivalent to {plan.monthlyEquivalent} /month
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-baseline gap-1">
                          <span className="text-5xl font-black">{plan.monthlyPrice}</span>
                          <span className="text-foreground/40 font-medium">/month</span>
                        </div>
                        <div className="text-sm text-transparent select-none mt-1 py-1" aria-hidden="true">
                          Spacer
                        </div>
                      </>
                    )
                  ) : (
                    <>
                      <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-black">{plan.monthlyPrice}</span>
                        <span className="text-foreground/40 font-medium">/month</span>
                      </div>
                      <div className="text-sm text-transparent select-none mt-1 py-1" aria-hidden="true">
                        Spacer
                      </div>
                    </>
                  )}
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

              <button
                disabled={plan.disabled}
                onClick={() => {
                  if (plan.link) {
                    window.open(plan.link, "_blank", "noopener,noreferrer");
                  }
                }}
                className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.popular
                  ? (plan.disabled
                    ? 'bg-foreground/5 text-foreground/40 cursor-not-allowed border border-foreground/10'
                    : 'bg-primary text-white hover:bg-primary/90 hover:scale-[1.02] shadow-xl shadow-primary/20')
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
}
