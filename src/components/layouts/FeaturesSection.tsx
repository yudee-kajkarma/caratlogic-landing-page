"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DeviceMobile, Headset, Bank, Swap, ShieldCheck, ChartLineUp, ArrowRight } from "@phosphor-icons/react";

const features = [
  {
    icon: <DeviceMobile weight="fill" className="w-7 h-7" />,
    title: "Complete Inventory Control",
    description: "Manage polished diamonds, rough stones, parcels, and jewelry with real-time multi-location tracking and barcode readiness.",
  },
  {
    icon: <Swap weight="fill" className="w-7 h-7" />,
    title: "Automated Workflows",
    description: "One-click quotation generation, quote-to-invoice automation, and intelligent memo lifecycle tracking.",
  },
  {
    icon: <Headset weight="fill" className="w-7 h-7" />,
    title: "WhatsApp Integration",
    description: "Share live inventory links, automate follow-up reminders, and notify clients about new arrivals directly via WhatsApp.",
  },
  {
    icon: <ChartLineUp weight="fill" className="w-7 h-7" />,
    title: "Financial Intelligence",
    description: "Revenue tracking dashboards, outstanding payment reports, and profitability analysis for informed decisions.",
  },
  {
    icon: <ShieldCheck weight="fill" className="w-7 h-7" />,
    title: "Enterprise Cloud Security",
    description: "Encrypted infrastructure, role-based access control, and automatic data backups to protect high-value assets.",
  },
  {
    icon: <Bank weight="fill" className="w-7 h-7" />,
    title: "Marketplace Readiness",
    description: "Built on a RapNet-ready data architecture designed specifically to support international diamond trading and scaling.",
  },
];

export const FeaturesSection = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="features" className="w-full bg-[#111827] py-24 md:py-32 relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#2E7D32]/10 blur-[120px] rounded-full pointer-events-none -z-0 focus:outline-none"></div>
      
      <div className="w-full max-w-[1240px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.15em] text-[13px] font-semibold text-[#5ecf78] mb-4 block"
          >
            Core Infrastructure
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[32px] sm:text-[40px] md:text-[56px] font-bold text-white leading-[1.1] tracking-tight max-w-3xl mx-auto"
          >
            Everything you need to run your diamond enterprise.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {features.map((feature, index) => {
             const isHovered = hoveredIdx === index;
             
             return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => setHoveredIdx(index)} // For mobile interactivity
                className={`relative bg-[#1F2937]/40 backdrop-blur-md rounded-[24px] p-8 flex flex-col items-start transition-all duration-500 cursor-pointer overflow-hidden border ${isHovered ? 'border-[#5ecf78]/50 shadow-[0_0_40px_-10px_rgba(94,207,120,0.2)]' : 'border-white/5'} group`}
                style={{
                  transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                }}
              >
                {/* Glow effect that follows hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-[#5ecf78]/10 to-transparent opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''}`} />

                <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 ${isHovered ? 'bg-[#5ecf78] text-[#111827] shadow-[0_0_20px_rgba(94,207,120,0.5)] scale-110' : 'bg-[#5ecf78]/10 text-[#5ecf78]'}`}>
                  {feature.icon}
                </div>
                
                <h3 className={`relative text-[22px] font-bold mb-3 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-slate-100'}`}>
                  {feature.title}
                </h3>
                
                <p className={`relative text-[15px] leading-[1.6] transition-colors duration-300 ${isHovered ? 'text-slate-300' : 'text-[#9CA3AF]'}`}>
                  {feature.description}
                </p>

                {/* Animated Learn More indicator */}
                <div className={`relative mt-8 flex items-center gap-2 text-sm font-bold overflow-hidden transition-all duration-500 ${isHovered ? 'text-[#5ecf78] opacity-100 h-6' : 'text-transparent opacity-0 h-0'}`}>
                   Explore feature <ArrowRight weight="bold" className={`transition-transform duration-500 ${isHovered ? 'translate-x-0' : '-translate-x-4'}`} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};
