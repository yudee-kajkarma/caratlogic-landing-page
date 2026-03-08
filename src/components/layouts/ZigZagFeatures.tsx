import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "motion/react";
import { CheckCircle } from "@phosphor-icons/react";

export function ZigZagFeatures() {
    const features = [
        {
            title: "Built For Performance",
            description: "Optimize your entire workflow with tools specifically designed for high-value diamond trading.",
            points: ["Real-time inventory sync", "Automated grading reports", "RapNet integration ready"],
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000",
            reversed: false,
        },
        {
            title: "Global Market Insights",
            description: "Stay ahead of price fluctuations with deep analytics powered by global market data.",
            points: ["Predictive pricing models", "Historical trend analysis"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
            reversed: true,
            button: "Explore Analytics"
        }
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants:Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="flex flex-col gap-24 md:gap-32 px-6 lg:px-12 py-32 max-w-[1240px] mx-auto bg-transparent overflow-hidden">
            {features.map((feature, idx) => (
                <div key={idx} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${feature.reversed ? 'lg:flex-row-reverse' : ''}`}>
                    
                    {/* Image Side with Hover/Scroll Parallax feel */}
                    <motion.div 
                        initial={{ opacity: 0, x: feature.reversed ? 60 : -60, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                        className="w-full lg:w-1/2 relative group"
                    >
                        <motion.div 
                            whileHover={{ scale: 1.02, rotate: feature.reversed ? 1 : -1 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] ring-1 ring-slate-900/5"
                        >
                            <Image src={feature.image} alt={feature.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            {/* Subtle Inner Glow */}
                            <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/20 pointer-events-none"></div>
                        </motion.div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="w-full lg:w-1/2 flex flex-col gap-6 lg:py-6"
                    >
                        <motion.h2 
                            variants={itemVariants}
                            className="text-[#0F172A] text-4xl lg:text-[44px] font-extrabold leading-[1.1] tracking-[-0.02em]"
                        >
                            {feature.title}
                        </motion.h2>
                        
                        <motion.p 
                            variants={itemVariants}
                            className="text-[#64748B] text-lg lg:text-[19px] leading-[1.6] max-w-lg mb-2"
                        >
                            {feature.description}
                        </motion.p>
                        
                        <motion.ul 
                            variants={containerVariants}
                            className="flex flex-col gap-4 mt-2"
                        >
                            {feature.points.map((point, i) => (
                                <motion.li key={i} variants={itemVariants} className="flex items-center gap-4">
                                    <div className="flex items-center justify-center bg-white rounded-full shadow-sm text-[#2E7D32]">
                                        <CheckCircle weight="fill" className="text-[26px]" />
                                    </div>
                                    <span className="text-[#334155] font-medium text-[17px]">{point}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                        
                        {feature.button && (
                            <motion.div variants={itemVariants} className="mt-8">
                                <button className="bg-[#2E7D32] hover:bg-[#236026] text-white font-semibold py-3.5 px-8 rounded-xl transition-all shadow-[0_8px_20px_-6px_rgba(46,125,50,0.4)] hover:shadow-[0_12px_25px_-8px_rgba(46,125,50,0.5)] active:scale-[0.98] focus:ring-4 ring-[#2E7D32]/20">
                                    {feature.button}
                                </button>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            ))}
        </section>
    );
}
