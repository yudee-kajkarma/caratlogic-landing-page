"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { BentoGrid } from "../components/layouts/BentoGrid";
import { FeaturesSection } from "../components/layouts/FeaturesSection";
import { FAQSection } from "../components/layouts/FAQSection";
import { CTASection } from "../components/layouts/CTASection";

export default function Home() {
    return (
        <div className="min-h-screen w-full relative">
            <main className="relative min-h-fit flex flex-col items-center justify-center overflow-hidden bg-[#FAFAFA]">
                {/* Background Image */}
                <div className="min-h-hit w-full relative">
                    {/* Dashed Center Fade Grid */}
                    <div
                        className="absolute inset-0 z-0 flex items-center justify-center"
                        style={{
                            backgroundImage: `
        linear-gradient(to right, #a4c2a5fc 1px, transparent 1px),
        linear-gradient(to bottom, #a4c2a5fc 1px, transparent 1px)
      `,
                            backgroundSize: "20px 20px",
                            backgroundPosition: "0 0, 0 0",
                            maskImage: `
       repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
          radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
      `,
                            WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
          radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
      `,
                            maskComposite: "intersect",
                            WebkitMaskComposite: "source-in",
                        }}
                    />
                    <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 pt-40 pb-20 flex flex-col items-center justify-center text-center">
                        {/* Pre-title Badge (styled like Image 2: plain uppercase text, tracking wide) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: [0.32, 0.72, 0, 1],
                            }}
                            className="mb-8"
                        >
                            <span className="uppercase tracking-[0.15em] text-[13px] font-semibold text-[#4B5563]">
                                Diamond ERP Software
                            </span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1,
                                ease: [0.32, 0.72, 0, 1],
                            }}
                            className="text-[40px] sm:text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-[#111827] max-w-4xl leading-[1.05]"
                        >
                            Diamond ERP Software for Jewelry & Diamond Businesses
                        </motion.h1>

                        {/* Subheading */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                                ease: [0.32, 0.72, 0, 1],
                            }}
                            className="mt-8 text-[17px] sm:text-[19px] text-[#4B5563] max-w-3xl font-medium leading-[1.6]"
                        >
                            Transform your diamond trading operations with real-time inventory control, automated sales workflows, and secure global access.
                        </motion.p>

                        {/* Call to Action */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.3,
                                ease: [0.32, 0.72, 0, 1],
                            }}
                            className="mt-12"
                        >
                            <Link href="#consultation">
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="group flex items-center gap-4 bg-primary text-white pl-7 pr-2 py-2 rounded-full font-semibold text-[16px] hover:brightness-110 transition-all shadow-md hover:shadow-lg"
                                >
                                    <span>Book a Private Demo</span>
                                    <div className="flex items-center justify-center w-[42px] h-[42px] rounded-full bg-white text-primary transition-transform duration-300 group-hover:rotate-45">
                                        <ArrowUpRight
                                            weight="bold"
                                            className="w-[18px] h-[18px]"
                                        />
                                    </div>
                                </motion.div>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </main>
            {/* Dashboard/Laptop Image Section */}
            <div className="relative w-full max-w-[1240px] px-6 lg:px-12 mx-auto  z-20 flex justify-center pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0.32, 0.72, 0, 1],
                    }}
                    className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden  bg-transparent"
                >
                    <Image
                        src="/laptop-bg.png"
                        alt="Platform Interface"
                        fill
                        className="object-contain object-top"
                        priority
                    />
                </motion.div>
            </div>

            {/* Bento Grid Section */}
            <BentoGrid />

            {/* modern sections inspired by references */}
            <FeaturesSection />
            <FAQSection />
            <CTASection />
        </div>
    );
}
