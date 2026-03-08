import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
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

    return (
        <section className="flex flex-col gap-16 md:gap-32 px-6 lg:px-12 py-24 max-w-[1240px] mx-auto bg-transparent">
            {features.map((feature, idx) => (
                <div key={idx} className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-20 ${feature.reversed ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image Side */}
                    <motion.div 
                        initial={{ opacity: 0, x: feature.reversed ? 40 : -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="w-full lg:w-1/2 relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
                    >
                        <Image src={feature.image} alt={feature.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay pointer-events-none"></div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div 
                        initial={{ opacity: 0, x: feature.reversed ? -40 : 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        className="w-full lg:w-1/2 flex flex-col gap-6"
                    >
                        <h2 className="text-slate-900 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                            {feature.title}
                        </h2>
                        <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                            {feature.description}
                        </p>
                        <ul className="flex flex-col gap-4 mt-2">
                            {feature.points.map((point, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle weight="fill" className="text-primary text-2xl shrink-0" />
                                    <span className="text-slate-700 font-medium text-lg">{point}</span>
                                </li>
                            ))}
                        </ul>
                        {feature.button && (
                            <button className="bg-primary hover:bg-emerald-700 transition-colors mt-4 text-white font-bold py-4 px-8 rounded-xl w-fit shadow-lg shadow-primary/20">
                                {feature.button}
                            </button>
                        )}
                    </motion.div>
                </div>
            ))}
        </section>
    );
}
