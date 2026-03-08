"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, GraphIcon } from "@phosphor-icons/react";
import { BentoGrid } from "../components/layouts/BentoGrid";
import { FeaturesSection } from "../components/layouts/FeaturesSection";

import { ZigZagFeatures } from "../components/layouts/ZigZagFeatures";
import { Testimonials } from "../components/layouts/Testimonials";
import { PricingSection } from "../components/layouts/PricingSection";
import { Footer } from "../components/layouts/Footer";
import { ArrowsClockwise, ShieldCheck } from "@phosphor-icons/react";
import { CTASection } from "@/components/layouts/CTASection";
export default function Home() {
    return (
        <div className="min-h-screen w-full relative">
          <CTASection />
            {/* Dashboard/Laptop Image Section */}
            <div className="relative w-full max-w-[1240px] px-6 lg:px-12 mx-auto z-20 flex flex-col items-center pb-24">
                <div className="relative w-full max-w-[1000px]">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0.32, 0.72, 0, 1],
                        }}
                        className="relative w-full aspect-[16/10] z-10"
                    >
                        <Image
                            src="/laptop-bg.png"
                            alt="Platform Interface"
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                        />
                    </motion.div>

                    {/* Floating Badges */}
                    <div className="absolute inset-0 z-20 pointer-events-none font-display">
                        <motion.div 
                            initial={{ opacity: 0, x: -20, y: 20 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="absolute top-[18%] left-[2%] md:left-[-2%] z-30 pointer-events-auto"
                        >
                            <motion.div 
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="flex items-center gap-3 sm:gap-4 bg-white dark:bg-[#1E293B] p-3 sm:p-4 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-slate-100 dark:border-slate-800"
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#e8f5e9] dark:bg-primary/20 flex items-center justify-center text-primary">
                                    <ArrowsClockwise weight="bold" className="text-xl sm:text-2xl" />
                                </div>
                                <div className="text-left pr-2">
                                    <p className="text-[14px] sm:text-[16px] font-bold text-slate-900 dark:text-white leading-tight mb-0.5 tracking-tight">Real-time Sync</p>
                                    <p className="text-[11px] sm:text-[13px] text-slate-500 font-medium">Global Inventory</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 20, y: 20 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ delay: 1.0, duration: 0.5 }}
                            className="absolute bottom-[12%] right-[2%] md:right-[0%] z-30 pointer-events-auto"
                        >
                            <motion.div 
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                className="flex items-center gap-3 sm:gap-4 bg-white dark:bg-[#1E293B] p-3 sm:p-4 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-slate-100 dark:border-slate-800"
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#e8f5e9] dark:bg-primary/20 flex items-center justify-center text-primary">
                                    <GraphIcon weight="bold" className="text-xl sm:text-2xl" />
                                </div>
                                <div className="text-left pr-2">
                                    <p className="text-[14px] sm:text-[16px] font-bold text-slate-900 dark:text-white leading-tight mb-0.5 tracking-tight">Integrated KYC</p>
                                    <p className="text-[11px] sm:text-[13px] text-slate-500 font-medium">Customer KYC integrated</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bento Grid Section */}
            <BentoGrid />

            {/* modern sections inspired by references */}
            <ZigZagFeatures />
            <FeaturesSection />
            <Testimonials />
            <PricingSection />
            <Footer />
        </div>
    );
}
