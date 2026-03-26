import React, { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle, ArrowUpRight } from "@phosphor-icons/react";
import { AnimatedNumber } from "../../../components/motion-primitives/animated-number";

export function PricingSection() {
    const [isInView, setIsInView] = useState(false);
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    const plans = [
        {
            name: "Starter",
            price: 199,
            period: "/Month",
            description: "Essential features for growing diamond businesses",
            features: [
                "Up to 500 stones",
                "Single location",
                "Basic reporting",
                "Email support",
                "Data encryption",
            ],
            cta: "Get Started",
            highlighted: false,
        },
        {
            name: "Professional",
            price: 499,
            period: "/Month",
            description: "Advanced tools for scaling your operations",
            features: [
                "Unlimited inventory",
                "Multi-user access",
                "API Integrations",
                "Market analysis tools",
                "Priority support",
            ],
            cta: "Go Professional",
            highlighted: true,
        },
        {
            name: "Enterprise",
            price: null,
            period: "",
            description: "Custom solutions for global diamond enterprises",
            features: [
                "Global supply chain",
                "Dedicated manager",
                "On-premise option",
                "Custom integrations",
                "24/7 dedicated support",
            ],
            cta: "Contact Sales",
            highlighted: false,
        },
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
                className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto"
            >
                {plans.map((plan, idx) => {
                    const isHovered = hoveredIdx === idx;
                    const isCustom = plan.price === null;

                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            onMouseEnter={() => setHoveredIdx(idx)}
                            onMouseLeave={() => setHoveredIdx(null)}
                            className="relative group"
                        >
                            {/* Outer glow on hover */}
                            <motion.div
                                className="absolute -inset-3 rounded-[2rem] bg-primary/8 blur-2xl pointer-events-none"
                                animate={{ opacity: isHovered ? 0.6 : 0 }}
                                transition={{ duration: 0.4 }}
                            />

                            {/* Card */}
                            <motion.div
                                animate={{
                                    y: isHovered ? -6 : 0,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 25,
                                }}
                                className="relative overflow-hidden rounded-3xl p-8 md:p-10 flex flex-col h-full cursor-pointer"
                                style={{
                                    background: plan.highlighted
                                        ? "linear-gradient(175deg, rgba(46,125,50,0.18) 0%, rgba(46,125,50,0.06) 40%, rgba(250,247,240,0.7) 100%)"
                                        : "linear-gradient(175deg, rgba(46,125,50,0.10) 0%, rgba(46,125,50,0.03) 40%, rgba(250,247,240,0.6) 100%)",
                                    border: plan.highlighted
                                        ? "1.5px solid rgba(46,125,50,0.25)"
                                        : "1px solid rgba(46,125,50,0.10)",
                                }}
                            >
                                {/* Shimmer effect on hover */}
                                <motion.div
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        background:
                                            "linear-gradient(105deg, transparent 40%, rgba(46,125,50,0.06) 50%, transparent 60%)",
                                    }}
                                    animate={{
                                        x: isHovered
                                            ? ["-100%", "200%"]
                                            : "-100%",
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        ease: "easeInOut",
                                    }}
                                />

                                {/* Popular badge */}
                                {plan.highlighted && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: 0.4,
                                            type: "spring",
                                        }}
                                        className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-2xl rounded-tr-3xl uppercase tracking-widest"
                                    >
                                        Popular
                                    </motion.div>
                                )}

                                {/* Plan name */}
                                <p className="text-slate-600 text-sm font-semibold tracking-wide mb-5">
                                    {plan.name} Package
                                </p>

                                {/* Price */}
                                <div className="flex items-baseline gap-0.5 mb-3">
                                    {isCustom ? (
                                        <span className="text-4xl lg:text-[2.75rem] font-black text-slate-900 tracking-tight">
                                            Custom
                                        </span>
                                    ) : (
                                        <>
                                            <span className="text-4xl lg:text-[2.75rem] font-black text-slate-900 tracking-tight">
                                                $
                                            </span>
                                            <span className="text-4xl lg:text-[2.75rem] font-black text-slate-900 tracking-tight">
                                                <AnimatedNumber
                                                    value={
                                                        isInView
                                                            ? plan.price
                                                            : 0
                                                    }
                                                />
                                            </span>
                                            <span className="text-4xl lg:text-[2.75rem] font-black text-slate-900 tracking-tight">
                                                .00
                                            </span>
                                        </>
                                    )}
                                    {plan.period && (
                                        <span className="text-slate-400 text-base font-medium ml-1">
                                            {plan.period}
                                        </span>
                                    )}
                                </div>

                                {/* Description */}
                                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                                    {plan.description}
                                </p>

                                {/* Divider */}
                                <div className="w-full h-px bg-slate-900/10 mb-8" />

                                {/* Features list */}
                                <ul className="flex flex-col gap-4 mb-10 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.3,
                                                delay: idx * 0.1 + i * 0.06,
                                            }}
                                            className="flex items-center gap-3"
                                        >
                                            <CheckCircle
                                                weight="fill"
                                                className="text-primary text-xl shrink-0"
                                            />
                                            <span className="text-slate-700 text-sm font-bold">
                                                {feature}
                                            </span>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className={`relative z-10 w-full py-4 px-6 rounded-2xl font-bold text-sm tracking-wide transition-all duration-300 mt-auto flex items-center justify-center gap-2 ${
                                        plan.highlighted
                                            ? "bg-primary text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35"
                                            : "bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-lg"
                                    }`}
                                >
                                    {plan.cta}
                                    <motion.span
                                        className="inline-flex"
                                        animate={
                                            isHovered
                                                ? { x: 2, y: -2 }
                                                : { x: 0, y: 0 }
                                        }
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 20,
                                        }}
                                    >
                                        <ArrowUpRight
                                            weight="bold"
                                            className="text-base"
                                        />
                                    </motion.span>
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}
