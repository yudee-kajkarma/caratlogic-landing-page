"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import Link from "next/link";
import { CaretDown, ArrowUpRight } from "@phosphor-icons/react";
import Image from "next/image";

export function Header() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [showMarquee, setShowMarquee] = useState(true);
    const prevScrollY = useRef(0);

    useMotionValueEvent(scrollY, "change", (latest) => {
        // Navbar appearance logic
        if (latest > 10) {
            if (!isScrolled) setIsScrolled(true);
        } else {
            if (isScrolled) setIsScrolled(false);
        }

        // Marquee visibility logic
        if (latest <= 10) {
            if (!showMarquee) setShowMarquee(true);
        } else if (latest > prevScrollY.current && latest > 50) {
            if (showMarquee) setShowMarquee(false);
        } else if (latest < prevScrollY.current) {
            if (!showMarquee) setShowMarquee(true);
        }

        prevScrollY.current = latest;
    });

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Pages", href: "#pages" },
        { name: "Product", href: "#product" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <motion.header
                className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center w-full"
                initial={{
                    backgroundColor: "rgba(255, 255, 255, 0)",
                    borderBottom: "1px solid rgba(229, 231, 235, 0)",
                }}
                animate={{
                    backgroundColor: isScrolled
                        ? "rgba(255, 255, 255, 1)"
                        : "rgba(255, 255, 255, 0)",
                    borderBottom: isScrolled
                        ? "1px solid rgba(229, 231, 235, 1)"
                        : "1px solid rgba(229, 231, 235, 0)",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                {/* Marquee Container */}
                <motion.div
                    initial={{ height: "auto", opacity: 1 }}
                    animate={{
                        height: showMarquee ? "auto" : 0,
                        opacity: showMarquee ? 1 : 0,
                    }}
                    transition={{
                        duration: 0.4,
                        delay: showMarquee ? 0.1 : 0,
                        ease: [0.32, 0.72, 0, 1],
                    }}
                    className="w-full bg-primary text-white flex items-center justify-center overflow-hidden"
                >
                    <div className="w-full flex overflow-hidden whitespace-nowrap py-3">
                        <motion.div
                            className="flex items-center gap-8 min-w-max pr-8"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 25,
                            }}
                        >
                            {[...Array(4)].map((_, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-8 text-[14px]"
                                >
                                    <span>
                                        Unlock the power of real-time
                                        multi-location diamond inventory control
                                        -{" "}
                                        <Link
                                            href="#"
                                            className="underline underline-offset-4 hover:text-gray-300 transition-colors ml-1"
                                        >
                                            Discover more
                                        </Link>
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

                {/* Container for the content */}
                <div className="w-full max-w-[1440px] px-6 lg:px-12">
                    <div className="flex items-center justify-between h-20 md:h-24 transition-all duration-300">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-1 z-10">
                            <Image
                                src="/logo-full.png"
                                alt="Logo"
                                width={140}
                                height={40}
                            />
                            {/* <span className="text-[26px] font-bold tracking-tight text-[#111827] flex items-baseline">
                CaratLogic<span className="text-[8px] ml-[2px] mb-1 opacity-80 backdrop-blur-sm bg-gray-600/20 text-transparent leading-none select-none rounded-[1px] w-1 h-1 inline-block"></span>
              </span> */}
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="group flex items-center gap-1.5 text-[15px] font-medium text-[#111827] hover:text-[#4B5563] transition-colors"
                                >
                                    {link.name}
                                    <CaretDown
                                        weight="bold"
                                        className="w-3 h-3 text-[#111827] group-hover:text-[#4B5563] transition-colors"
                                    />
                                </Link>
                            ))}
                        </nav>

                        {/* Call to Action Button */}
                        <div className="flex items-center z-10">
                            <Link href="#trial">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group flex items-center gap-3 bg-[#111827] text-white pl-5 pr-1.5 py-1.5 rounded-full font-medium text-[15px] hover:bg-[#1F2937] transition-colors shadow-sm"
                                >
                                    <span>Book a Demo</span>
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#111827] transition-transform duration-300 group-hover:rotate-45">
                                        <ArrowUpRight
                                            weight="bold"
                                            className="w-[14px] h-[14px]"
                                        />
                                    </div>
                                </motion.div>
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.header>
        </>
    );
}

export default Header;
