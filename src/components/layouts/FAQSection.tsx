"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CaretDown } from "@phosphor-icons/react";

const faqs = [
  {
    question: "What is diamond ERP software?",
    answer: "Diamond ERP software is a specialized business management system designed for diamond traders, jewelry manufacturers, and gemstone wholesalers. It includes inventory tracking, sales management, memo control, financial reporting, and marketplace-ready data formatting."
  },
  {
    question: "How is Carat Logic different from generic ERP systems?",
    answer: "Carat Logic is purpose-built for diamond businesses. It includes RapNet-ready data structure, advanced diamond attribute filtering, WhatsApp integration, automated memo workflows, and multi-location inventory management."
  },
  {
    question: "Can Carat Logic handle large diamond inventories?",
    answer: "Yes. Carat Logic is designed for scalability and supports both small inventories and high-volume operations with thousands of stones across multiple locations."
  },
  {
    question: "Does Carat Logic integrate with WhatsApp?",
    answer: "Yes. Carat Logic allows you to share live inventory, send stock lists, automate follow-ups, and communicate directly with buyers through WhatsApp integration."
  },
  {
    question: "Is Carat Logic cloud-based?",
    answer: "Yes. Carat Logic is a cloud-based diamond software platform, allowing secure remote access from anywhere in the world."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#111827] py-20 md:py-32 relative">
      <div className="w-full max-w-[800px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-white leading-[1.1] tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`border border-white/10 rounded-[24px] overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-[#1F2937]' : 'bg-[#1F2937]/30 hover:bg-[#1F2937]/50'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className="text-[16px] md:text-[18px] font-semibold text-white pr-8">
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-[#5ecf78] text-[#111827]' : 'bg-white/5 text-white'}`}>
                    <CaretDown 
                      weight="bold" 
                      className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                    />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 pt-0 text-[#9CA3AF] text-[15px] leading-[1.6]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
