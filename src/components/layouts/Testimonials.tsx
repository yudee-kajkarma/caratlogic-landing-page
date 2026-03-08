import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Star } from "@phosphor-icons/react";

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
            quote: `"The UI is incredibly clean. My team actually enjoys using it every day."`,
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        },
        {
            name: "Alexei Volkov",
            role: "Global Diamond Traders",
            quote: `"Game changer for our multi-branch operations. Real-time sync works flawlessly across continents."`,
            avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
        }
    ];

    return (
        <section className="bg-slate-50 py-24 px-6 lg:px-12 w-full overflow-hidden">
            <div className="max-w-[1240px] mx-auto">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-slate-900 text-3xl md:text-5xl font-extrabold mb-12 text-center tracking-tight"
                >
                    Trusted by Industry Leaders
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex text-amber-400 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} weight="fill" className="text-xl" />
                                    ))}
                                </div>
                                <p className="text-slate-600 italic text-lg leading-relaxed mb-8">
                                    {testimonial.quote}
                                </p>
                            </div>
                            <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-slate-200 shrink-0">
                                    <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 text-lg">{testimonial.name}</p>
                                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
