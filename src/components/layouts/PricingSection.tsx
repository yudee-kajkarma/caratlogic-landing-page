import React, { useState } from "react";
import { motion } from "motion/react";
import { Check } from "@phosphor-icons/react";
import { AnimatedNumber } from "../../../components/motion-primitives/animated-number";

export function PricingSection() {
    const [isInView, setIsInView] = useState(false);
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    const plans = [
        {
            name: "Starter",
            price: "$199",
            period: "/mo",
            features: ["Up to 500 stones", "Single location", "Basic reporting"],
            cta: "Get Started",
            highlighted: false
        },
        {
            name: "Professional",
            price: "$499",
            period: "/mo",
            features: ["Unlimited inventory", "Multi-user access", "API Integrations", "Market analysis tools"],
            cta: "Go Professional",
            highlighted: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "",
            features: ["Global supply chain", "Dedicated manager", "On-premise option"],
            cta: "Contact Sales",
            highlighted: false
        }
    ];

    return (
        <section className="py-24 px-6 lg:px-12 max-w-[1240px] mx-auto w-full">
            <div className="text-center mb-16">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-slate-900 text-3xl md:text-5xl font-extrabold mb-4 tracking-tight"
                >
                    Flexible Pricing
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-slate-500 text-lg md:text-xl"
                >
                    Scalable solutions for every diamond business.
                </motion.p>
            </div>

            <motion.div 
                onViewportEnter={() => setIsInView(true)}
                viewport={{ margin: "-100px", once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center max-w-6xl mx-auto relative"
            >
                {plans.map((plan, idx) => {
                    const isHovered = hoveredIdx === idx;
                    const numPrice = parseInt(plan.price.replace(/[^0-9]/g, ''));
                    const isCustom = isNaN(numPrice);

                    return (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        onMouseEnter={() => setHoveredIdx(idx)}
                        onMouseLeave={() => setHoveredIdx(null)}
                        onClick={() => setHoveredIdx(idx)}
                        className={`bg-white p-8 md:p-10 rounded-3xl relative flex flex-col h-full transition-all duration-500 cursor-pointer overfl ${
                            plan.highlighted 
                            ? `border-2 ${isHovered ? 'border-primary shadow-2xl shadow-primary/20 scale-[1.07]' : 'border-primary/80 shadow-xl shadow-primary/10 scale-105'} z-10` 
                            : `border ${isHovered ? 'border-primary/30 shadow-xl shadow-slate-900/5 -translate-y-2' : 'border-slate-200'}`
                        }`}
                    >
                        {/* Glow effect that follows hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''}`} pointer-events-none="true" />
                        
                        {plan.highlighted && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap">
                                Most Popular
                            </div>
                        )}

                        <p className={`text-sm font-bold tracking-widest uppercase mb-2 ${plan.highlighted ? 'text-primary' : 'text-slate-500'}`}>
                            {plan.name}
                        </p>
                        
                        <div className="flex items-baseline gap-1 mb-6 relative">
                            {isCustom ? (
                                <span className="text-4xl lg:text-5xl font-black text-slate-900">{plan.price}</span>
                            ) : (
                                <>
                                    <span className="text-4xl lg:text-5xl font-black text-slate-900">$</span>
                                    <span className="text-4xl lg:text-5xl font-black text-slate-900">
                                        <AnimatedNumber value={isInView ? numPrice : 0} />
                                    </span>
                                </>
                            )}
                            <span className="text-slate-500 text-lg">{plan.period}</span>
                        </div>

                        <ul className="flex flex-col gap-4 mb-10 flex-grow mt-4">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="bg-primary/10 p-1 rounded-full shrink-0">
                                        <Check weight="bold" className="text-primary text-sm" />
                                    </div>
                                    <span className={`text-slate-600 ${plan.highlighted ? 'font-semibold' : ''}`}>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button className={`relative z-10 w-full py-4 text-sm uppercase tracking-wide rounded-xl font-bold transition-all duration-300 mt-auto
                            ${plan.highlighted 
                                ? 'bg-primary text-white hover:bg-emerald-700 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 focus:ring-4 ring-primary/20' 
                                : plan.name === 'Enterprise' ? 'bg-slate-900 text-white hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20' : 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white'}
                        `}>
                            {plan.cta}
                        </button>
                    </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}
