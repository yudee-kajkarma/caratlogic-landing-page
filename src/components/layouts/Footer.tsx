import React from "react";
import Link from "next/link";
import { ArrowRight, EnvelopeSimple, Globe, ShareNetwork, UsersThree } from "@phosphor-icons/react";
import { AuroraBackground } from "../ui/aurora-background";

export function Footer() {
    return (
        <footer className="w-full relative bg-white dark:bg-[#141e15]">
            {/* Dark CTA Section */}
            <AuroraBackground className="dark bg-[#1E293B] py-24 px-6 relative !h-auto flex items-center justify-center">
                <div className="max-w-xl mx-auto flex flex-col items-center gap-8 text-center relative z-20">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-white text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight tracking-tight">
                            Don't Wait - Start Free Today
                        </h2>
                        <p className="text-slate-300 text-base md:text-lg font-normal max-w-md mx-auto leading-relaxed">
                            Experience the premium diamond management SaaS platform trusted by global jewelers.
                        </p>
                    </div>
                    
                    <div className="w-full max-w-md">
                        <form className="flex flex-col sm:flex-row w-full gap-3" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex flex-1 items-stretch rounded-xl bg-slate-800 border border-slate-700 focus-within:border-primary transition-colors overflow-hidden">
                                <EnvelopeSimple className="self-center ml-4 text-slate-400 text-xl" />
                                <input 
                                    className="w-full border-none bg-transparent text-white focus:ring-0 placeholder:text-slate-500 text-[15px] py-4 px-3 outline-none" 
                                    placeholder="Enter your work email" 
                                    type="email"
                                    required
                                />
                            </div>
                            <button className="bg-primary hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-primary/20 active:scale-95 whitespace-nowrap flex items-center justify-center gap-2 group">
                                Start Trial
                                <ArrowRight weight="bold" className="text-sm group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                        <p className="text-slate-400 text-sm mt-6">14-day free trial. No credit card required.</p>
                    </div>
                </div>
            </AuroraBackground>

            {/* Bottom Light Section */}
            <div className="max-w-[1240px] mx-auto px-6 lg:px-12 pt-16 pb-12 relative z-10 border-t border-slate-100 dark:border-slate-800">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-8 lg:gap-12">
                    
                    {/* Brand Column */}
                    <div className="col-span-2 lg:col-span-2 flex flex-col gap-6 lg:pr-12">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3 tracking-tight">
                                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                                    <Globe weight="fill" className="text-2xl" />
                                </div>
                                Carat Logic
                            </span>
                        </Link>
                        <p className="text-slate-600 dark:text-slate-400 text-[15px] leading-relaxed max-w-sm">
                            Streamlining the global diamond supply chain with precision, transparency, and AI-driven insights.
                        </p>
                        <div className="flex items-center gap-5 mt-4 text-slate-400">
                            <a href="#" className="hover:text-primary hover:-translate-y-1 transition-all p-2 bg-slate-50 dark:bg-slate-800 rounded-full">
                                <Globe className="text-xl" />
                            </a>
                            <a href="#" className="hover:text-primary hover:-translate-y-1 transition-all p-2 bg-slate-50 dark:bg-slate-800 rounded-full">
                                <ShareNetwork className="text-xl" />
                            </a>
                            <a href="#" className="hover:text-primary hover:-translate-y-1 transition-all p-2 bg-slate-50 dark:bg-slate-800 rounded-full">
                                <UsersThree className="text-xl" />
                            </a>
                        </div>
                    </div>

                    {/* Nav Columns */}
                    <div className="flex flex-col gap-6 col-span-1">
                        <h3 className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider">Product</h3>
                        <nav className="flex flex-col gap-4">
                            <a className="text-slate-500 dark:text-slate-400 hover:text-primary text-[15px] transition-colors" href="#">Inventory</a>
                            <a className="text-slate-500 dark:text-slate-400 hover:text-primary text-[15px] transition-colors" href="#">Analytics</a>
                            <a className="text-slate-500 dark:text-slate-400 hover:text-primary text-[15px] transition-colors" href="#">Global Sales</a>
                            <a className="text-slate-500 dark:text-slate-400 hover:text-primary text-[15px] transition-colors" href="#">API Access</a>
                        </nav>
                    </div>

                    <div className="flex flex-col gap-6 col-span-1">
                        <h3 className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider">Company</h3>
                        <nav className="flex flex-col gap-4">
                            <a className="text-slate-500 dark:text-slate-400 hover:text-primary text-[15px] transition-colors" href="#">About Us</a>
                            <a className="text-slate-500 dark:text-slate-400 hover:text-primary text-[15px] transition-colors" href="#">Careers</a>
                            <a className="text-slate-500 dark:text-slate-400 hover:text-primary text-[15px] transition-colors" href="#">Press Kit</a>
                            <a className="text-slate-500 dark:text-slate-400 hover:text-primary text-[15px] transition-colors" href="#">Contact</a>
                        </nav>
                    </div>

                    <div className="flex flex-col gap-6 col-span-1">
                        <h3 className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider">Legal</h3>
                        <nav className="flex flex-col gap-4">
                            <a className="text-slate-500 dark:text-slate-400 hover:text-primary text-[15px] transition-colors" href="#">Privacy Policy</a>
                            <a className="text-slate-500 dark:text-slate-400 hover:text-primary text-[15px] transition-colors" href="#">Terms of Service</a>
                            <a className="text-slate-500 dark:text-slate-400 hover:text-primary text-[15px] transition-colors" href="#">Security</a>
                            <a className="text-slate-500 dark:text-slate-400 hover:text-primary text-[15px] transition-colors" href="#">GDPR</a>
                        </nav>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-[14px]">© {new Date().getFullYear()} Carat Logic Inc. All rights reserved.</p>
                    <div className="flex items-center gap-8 text-slate-500 text-[14px]">
                        <span className="flex items-center gap-2 cursor-pointer hover:text-slate-800 transition-colors">
                            <Globe weight="bold" /> English (US)
                        </span>
                        <span>USD ($)</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
