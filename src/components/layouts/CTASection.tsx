"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { AuroraBackground } from "../ui/aurora-background";

export const CTASection = () => {
    return (
        <section className="w-full  pt-10 relative overflow-hidden flex justify-center">
            {/* Container matching image rounded dark blocks */}
            <AuroraBackground className="w-full h-fit   border border-white/5 px-6 py-20  relative overflow-hidden flex flex-col items-center justify-center text-center isolate">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-[1240px] mx-6 lg:mx-12  border border-white/5 rounded-[40px] px-6 py-20 md:py-28 relative overflow-hidden flex flex-col items-center justify-center text-center isolate"
                >
                    <span className="inline-block text-[#2E7D32] text-sm font-bold tracking-widest uppercase mb-6">
                        Cloud-Based Diamond & Gem Inventory Management Software
                    </span>

                    <h1 className="text-[36px] sm:text-[48px] md:text-[64px] font-bold text-black mb-6 tracking-tight leading-[1.1] max-w-4xl">
                        Streamline Your Diamond and Gem Inventory Operations with Precision
                    </h1>

                    <p className="text-[#9CA3AF] text-[16px] md:text-[18px] max-w-2xl mb-10 leading-[1.6]">
                        Enterprise-grade diamond inventory management built for
                        wholesalers, gemstone traders, jewelry manufacturers, and
                        global dealers who require structured control over
                        high-value inventory.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Link href="#demo">
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="group flex items-center gap-4 bg-white text-[#111827] pl-8 pr-2 py-2 rounded-full font-bold text-[16px] hover:bg-gray-100 transition-all shadow-xl"
                            >
                                <span>Get a Private Demo</span>
                                <div className="flex items-center justify-center w-[46px] h-[46px] rounded-full bg-[#111827] text-white transition-transform duration-300 group-hover:rotate-45">
                                    <ArrowUpRight
                                        weight="bold"
                                        className="w-[18px] h-[18px]"
                                    />
                                </div>
                            </motion.div>
                        </Link>
                        <Link href="#product">
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="text-[#111827] font-semibold text-[15px] px-6 py-3 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all"
                            >
                                View Platform Overview
                            </motion.div>
                        </Link>
                    </div>
                </motion.div>
            </AuroraBackground>
        </section>
    );
};
