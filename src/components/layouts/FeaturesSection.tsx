"use client";

import React from "react";
import { motion } from "motion/react";
import { DeviceMobile, Headset, Bank, Swap, ShieldCheck, ChartLineUp } from "@phosphor-icons/react";

const features = [
  {
    icon: <DeviceMobile weight="fill" className="w-6 h-6 text-[#5ecf78]" />,
    title: "Complete Inventory Control",
    description: "Manage polished diamonds, rough stones, parcels, and jewelry with real-time multi-location tracking and barcode readiness.",
  },
  {
    icon: <Swap weight="fill" className="w-6 h-6 text-[#5ecf78]" />,
    title: "Automated Workflows",
    description: "One-click quotation generation, quote-to-invoice automation, and intelligent memo lifecycle tracking.",
  },
  {
    icon: <Headset weight="fill" className="w-6 h-6 text-[#5ecf78]" />,
    title: "WhatsApp Integration",
    description: "Share live inventory links, automate follow-up reminders, and notify clients about new arrivals directly via WhatsApp.",
  },
  {
    icon: <ChartLineUp weight="fill" className="w-6 h-6 text-[#5ecf78]" />,
    title: "Financial Intelligence",
    description: "Revenue tracking dashboards, outstanding payment reports, and profitability analysis for informed decisions.",
  },
  {
    icon: <ShieldCheck weight="fill" className="w-6 h-6 text-[#5ecf78]" />,
    title: "Enterprise Cloud Security",
    description: "Encrypted infrastructure, role-based access control, and automatic data backups to protect high-value assets.",
  },
  {
    icon: <Bank weight="fill" className="w-6 h-6 text-[#5ecf78]" />,
    title: "Marketplace Readiness",
    description: "Built on a RapNet-ready data architecture designed specifically to support international diamond trading and scaling.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="w-full bg-[#111827] py-24 md:py-32 relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#2E7D32]/10 blur-[120px] rounded-full pointer-events-none -z-0"></div>
      
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1F2937]/50 border border-white/5 backdrop-blur-sm rounded-[24px] p-8 flex flex-col items-start hover:bg-[#1F2937] transition-colors duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#5ecf78]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-[20px] font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-[#9CA3AF] text-[15px] leading-[1.6]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
