"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { CheckCircle, ArrowLeft, ArrowRight } from "@phosphor-icons/react";

const features = [
    {
        title: "Built For Performance",
        description:
            "Optimize your entire workflow with tools specifically designed for high-value diamond trading.",
        points: [
            "Real-time inventory sync",
            "Automated grading reports",
            "RapNet integration ready",
        ],
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000",
        accent: "#2E7D32",
    },
    {
        title: "Global Market Insights",
        description:
            "Stay ahead of price fluctuations with deep analytics powered by global market data.",
        points: ["Predictive pricing models", "Historical trend analysis"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
        accent: "#1565C0",
    },
    {
        title: "Secure Transactions",
        description:
            "End-to-end encrypted trading platform with multi-layer authentication and audit trails.",
        points: [
            "Bank-grade encryption",
            "Two-factor authentication",
            "Complete audit logs",
        ],
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1000",
        accent: "#6A1B9A",
    },
    {
        title: "Smart Inventory",
        description:
            "AI-powered inventory management that predicts demand and optimizes your stock levels.",
        points: [
            "Demand forecasting",
            "Auto-reorder alerts",
            "Multi-location tracking",
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
        accent: "#E65100",
    },
    {
        title: "Seamless Integration",
        description:
            "Connect with your existing tools and platforms through our robust API ecosystem.",
        points: [
            "REST & GraphQL APIs",
            "Webhook automation",
            "50+ integrations",
        ],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000",
        accent: "#00838F",
    },
];

const AUTOPLAY_MS = 5000;

function mod(n: number, m: number) {
    return ((n % m) + m) % m;
}

export function ZigZagFeatures() {
    const [active, setActive] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const total = features.length;

    const goTo = useCallback(
        (idx: number) => setActive(mod(idx, total)),
        [total],
    );
    const next = useCallback(
        () => setActive((p) => mod(p + 1, total)),
        [total],
    );
    const prev = useCallback(
        () => setActive((p) => mod(p - 1, total)),
        [total],
    );

    // Auto-play: advance every 5s, pause on hover
    useEffect(() => {
        if (isPaused) {
            if (timerRef.current) clearInterval(timerRef.current);
            return;
        }
        timerRef.current = setInterval(next, AUTOPLAY_MS);
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isPaused, next]);

    // Compute position offsets for each card: -2, -1, 0 (center), +1, +2
    function getOffset(idx: number) {
        let diff = idx - active;
        // wrap around
        if (diff > total / 2) diff -= total;
        if (diff < -total / 2) diff += total;
        return diff;
    }

    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-[#2E7D32]/5 via-transparent to-[#1565C0]/5 rounded-full blur-3xl" />
            </div>

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                className="text-center px-6 mb-16 md:mb-20 max-w-3xl mx-auto"
            >
                <span className="inline-block text-[#2E7D32] text-sm font-bold tracking-widest uppercase mb-4">
                    Why CaratLogic
                </span>
                <h2 className="text-[#0F172A] text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.08] tracking-[-0.03em] mb-5">
                    Everything you need to{" "}
                    <span className="bg-gradient-to-r from-[#2E7D32] to-[#1565C0] bg-clip-text text-transparent">
                        scale your business
                    </span>
                </h2>
                <p className="text-[#64748B] text-lg md:text-xl leading-relaxed">
                    A comprehensive suite of tools designed for modern diamond
                    traders.
                </p>
            </motion.div>

            {/* 3D Carousel */}
            <div
                className="relative w-full max-w-6xl mx-auto px-4"
                style={{ perspective: "1200px" }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div className="relative h-[480px] md:h-[540px] lg:h-[580px] flex items-center justify-center">
                    {features.map((feature, idx) => {
                        const offset = getOffset(idx);
                        const absOffset = Math.abs(offset);

                        // Only render visible cards (-1..+1)
                        if (absOffset > 1) return null;

                        const isCenter = offset === 0;
                        const translateX = offset * 420;
                        const translateZ = isCenter ? 0 : -200;
                        const rotateY = offset * -35;
                        const scale = isCenter ? 1 : 0.85;
                        const opacity = isCenter ? 1 : 0.6;
                        const zIndex = isCenter ? 10 : 5;

                        return (
                            <motion.div
                                key={idx}
                                animate={{
                                    x: translateX,
                                    z: translateZ,
                                    rotateY,
                                    scale,
                                    opacity,
                                }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.32, 0.72, 0, 1],
                                }}
                                onClick={() => goTo(idx)}
                                className="absolute w-[90%] max-w-[580px] lg:max-w-[620px] cursor-pointer"
                                style={{
                                    zIndex,
                                    transformStyle: "preserve-3d",
                                }}
                            >
                                <div className="rounded-2xl overflow-hidden bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-slate-100 select-none">
                                    {/* Image */}
                                    <div className="relative h-[220px] md:h-[280px] lg:h-[300px] overflow-hidden">
                                        <Image
                                            src={feature.image}
                                            alt={feature.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                                        <div className="absolute bottom-4 left-5 right-5">
                                            <h3 className="text-white text-xl md:text-2xl font-extrabold tracking-tight drop-shadow-lg">
                                                {feature.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 md:p-6">
                                        <p className="text-[#64748B] text-sm md:text-[15px] leading-relaxed mb-4">
                                            {feature.description}
                                        </p>
                                        <ul className="flex flex-col gap-2.5">
                                            {feature.points.map((point, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-center gap-2.5"
                                                >
                                                    <CheckCircle
                                                        weight="fill"
                                                        className="text-[20px] flex-shrink-0"
                                                        style={{
                                                            color: feature.accent,
                                                        }}
                                                    />
                                                    <span className="text-[#334155] font-medium text-sm md:text-[15px]">
                                                        {point}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Progress bar */}
                                        <div className="h-1 rounded-full mt-5 bg-slate-100 overflow-hidden">
                                            <motion.div
                                                className="h-full rounded-full"
                                                style={{ backgroundColor: feature.accent }}
                                                initial={{ width: "0%" }}
                                                animate={{
                                                    width: isCenter ? "100%" : "0%",
                                                }}
                                                transition={
                                                    isCenter
                                                        ? { duration: AUTOPLAY_MS / 1000, ease: "linear" }
                                                        : { duration: 0.2 }
                                                }
                                                key={isCenter ? `progress-${active}` : undefined}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prev}
                    className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-slate-200/60 flex items-center justify-center text-slate-700 hover:bg-white hover:scale-110 active:scale-95 transition-all cursor-pointer"
                >
                    <ArrowLeft weight="bold" className="text-lg" />
                </button>
                <button
                    onClick={next}
                    className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-slate-200/60 flex items-center justify-center text-slate-700 hover:bg-white hover:scale-110 active:scale-95 transition-all cursor-pointer"
                >
                    <ArrowRight weight="bold" className="text-lg" />
                </button>
            </div>

            {/* Dot Indicators with progress */}
            <div className="flex items-center justify-center gap-2.5 mt-10 md:mt-14">
                {features.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => goTo(idx)}
                        className="relative p-1 cursor-pointer"
                    >
                        <div
                            className="rounded-full h-2.5 transition-all duration-300"
                            style={{
                                width: active === idx ? 32 : 10,
                                backgroundColor:
                                    active === idx ? "#2E7D32" : "#CBD5E1",
                            }}
                        />
                    </button>
                ))}
            </div>
        </section>
    );
}
