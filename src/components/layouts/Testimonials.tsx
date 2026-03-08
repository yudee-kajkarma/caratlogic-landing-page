import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Star } from "@phosphor-icons/react";
import Marquee from "react-fast-marquee";

export function Testimonials() {
    const testimonials = [
        {
            name: "James Sterling",
            role: "Antwerp Diamond Club",
            quote: `"The transition to this ERP was seamless. Our inventory accuracy improved by 40% in the first quarter."`,
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        },
        {
            name: "Elena Rossi",
            role: "Lux Gem Co.",
            quote: `"The UI is incredibly clean. My team actually enjoys using it every day. The RapNet integration is a life saver."`,
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        },
        {
            name: "Alexei Volkov",
            role: "Global Traders",
            quote: `"Game changer for our multi-branch operations. Real-time sync works flawlessly across continents."`,
            avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
        },
        {
            name: "Sarah Chen",
            role: "Chen Jewelers",
            quote: `"The WhatsApp automated memos have completely transformed how we do B2B sales. Highly recommended."`,
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29028704d",
        },
        {
            name: "Michael Cohen",
            role: "Diamond House NY",
            quote: `"Security was our biggest concern, but Carat Logic's enterprise-grade cloud put our minds at ease instantly."`,
            avatar: "https://i.pravatar.cc/150?u=a04258114e29026704d",
        }
    ];

    return (
        <section className="bg-slate-50 py-24 w-full overflow-hidden relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-100 blur-[100px] rounded-full pointer-events-none opacity-30"></div>
            
            <div className="max-w-[1440px] mx-auto relative z-10 w-full">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-slate-900 text-3xl md:text-5xl font-extrabold mb-16 text-center tracking-tight px-6"
                >
                    Trusted by Industry Leaders
                </motion.h2>
                
                {/* Marquee Container */}
                <div className="w-full relative">
                    {/* Fade Edges */}
                    <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
                    
                    <Marquee 
                        gradient={false} 
                        speed={45} 
                        pauseOnHover={true} 
                        className="py-4 overflow-hidden"
                    >
                        {testimonials.map((testimonial, idx) => (
                            <div 
                                key={idx}
                                className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 transition-all duration-300 flex flex-col justify-between w-[380px] md:w-[450px] h-[280px] mx-4 cursor-grab active:cursor-grabbing"
                            >
                                <div>
                                    <div className="flex text-amber-400 mb-6 gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} weight="fill" className="text-xl" />
                                        ))}
                                    </div>
                                    <p className="text-slate-600 italic text-lg leading-relaxed mb-8 line-clamp-3">
                                        {testimonial.quote}
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 border-t border-slate-100 pt-6 mt-auto">
                                    <div className="relative w-14 h-14 rounded-full overflow-hidden bg-slate-200 shrink-0 border-2 border-slate-50">
                                        <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-lg">{testimonial.name}</p>
                                        <p className="text-sm text-slate-500 font-medium">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
}
