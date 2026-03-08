"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";

export const CTASection = () => {
  return (
    <section className="w-full bg-[#111827] pb-24 md:pb-32 pt-10 relative overflow-hidden flex justify-center">
      {/* Container matching image rounded dark blocks */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[1240px] mx-6 lg:mx-12 bg-[#0b1410] border border-white/5 rounded-[40px] px-6 py-20 md:py-28 relative overflow-hidden flex flex-col items-center justify-center text-center isolate"
      >
        {/* Abstract glowing waves logic simulating bottom image background */}
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[100%] bg-gradient-to-tr from-[#2E7D32]/40 to-transparent rounded-full opacity-60 blur-3xl -z-10"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[80%] bg-[#5ecf78]/20 rounded-full opacity-40 blur-3xl -z-10"></div>

        <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-bold text-white mb-6 tracking-tight leading-[1.1] max-w-3xl">
          Transform Your Diamond Operations Today
        </h2>
        
        <p className="text-[#9CA3AF] text-[16px] md:text-[18px] max-w-xl mb-10 leading-[1.6]">
          Modern diamond businesses require structured systems, automation, and real-time control. Experience the next generation of diamond ERP software.
        </p>

        <Link href="#demo">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-4 bg-white text-[#111827] pl-8 pr-2 py-2 rounded-full font-bold text-[16px] hover:bg-gray-100 transition-all shadow-xl"
          >
            <span>Book a Private Demo</span>
            <div className="flex items-center justify-center w-[46px] h-[46px] rounded-full bg-[#111827] text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight weight="bold" className="w-[18px] h-[18px]" />
            </div>
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};
