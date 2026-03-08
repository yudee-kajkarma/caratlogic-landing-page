"use client";

import React from "react";
import { motion } from "motion/react";
import { Lightning, Star } from "@phosphor-icons/react";

export const BentoGrid = () => {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-6 lg:px-12 py-16 md:py-24">
      {/* Section Title */}
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#1a2f22] leading-[1.1] tracking-tight whitespace-pre-line">
          {"Complete Control\nOver Your Inventory!"}
        </h2>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[auto]">
        
        {/* Top Left Card - Spans 2 columns */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="col-span-1 md:col-span-2 bg-[#f4f7f5] rounded-[32px] p-8 md:p-10 relative overflow-hidden min-h-[580px] md:min-h-0 md:h-[420px] isolate flex flex-col"
        >
          {/* Abstract background shapes */}
          <div className="absolute top-[-50px] right-[-100px] w-[500px] h-[500px] bg-white rounded-full blur-3xl opacity-60 -z-10"></div>
          
          <div className="absolute top-8 left-1/2 md:left-auto right-auto md:right-8 w-[320px] md:w-[380px] h-[340px] rounded-t-[32px] border-4 border-[#1a2f22] bg-white shadow-xl flex flex-col items-center pt-4 -translate-x-1/2 md:translate-x-0 scale-[0.85] sm:scale-100 origin-top">
             <div className="w-12 h-1.5 bg-[#e5e7eb] rounded-full mb-4"></div>
             <div className="w-full px-6 flex justify-between items-center mb-6">
                <span className="text-[#8c948e] text-sm font-medium">Global Stock</span>
                <div className="flex gap-2">
                    <span className="text-[#8c948e] text-[10px] sm:text-xs font-medium px-2 py-1 rounded-md bg-[#f4f7f5]">October 2021</span>
                    <span className="text-[#1a2f22] text-[10px] sm:text-xs font-semibold px-2 py-1 rounded-md bg-[#e5fbf0]">Month</span>
                </div>
             </div>
             {/* Graph Line Mockup */}
             <div className="w-full px-6 mb-4 relative h-20">
                <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-[#f0f2f1]"></div>
                <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 40" preserveAspectRatio="none">
                    <path d="M0 30 Q 10 20, 20 25 T 40 15 T 60 20 T 80 5 T 100 10" fill="none" stroke="#5ecf78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M0 30 Q 10 20, 20 25 T 40 15 T 60 20 T 80 5 T 100 10" fill="none" stroke="#a4ecd2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="opacity-30 blur-[2px]" />
                </svg>
             </div>
             {/* Floating Stats Card overlaying the phone */}
             <div className="absolute top-28 sm:top-32 -left-4 sm:-left-16 bg-white rounded-2xl shadow-xl p-3 sm:p-4 w-[160px] sm:w-[200px] border border-[#f0f2f1] flex flex-col">
                 <span className="text-[#8c948e] text-[10px] sm:text-xs font-medium mb-1">Total Stones</span>
                 <span className="text-xl sm:text-2xl font-bold text-[#1a2f22]">3,729</span>
                 <span className="text-[#5ecf78] text-[10px] font-bold mt-1 tracking-wider">+ 7.00%</span>
             </div>
             {/* List Mockup */}
             <div className="w-full px-6 flex flex-col gap-3 mt-4">
                 <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-[#e5fbf0] flex items-center justify-center text-[#5ecf78] font-bold text-sm">R</div>
                         <div className="flex flex-col">
                             <span className="text-[12px] sm:text-sm font-semibold text-[#1a2f22]">Antwerp Branch</span>
                             <span className="text-[8px] sm:text-[10px] text-[#8c948e]">4 locations</span>
                         </div>
                     </div>
                     <span className="text-[10px] sm:text-xs font-semibold text-[#8c948e] px-2 py-1 bg-[#f4f7f5] rounded-full">60%</span>
                 </div>
                 <div className="flex items-center justify-between opacity-50">
                     <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-[#fff4e5] flex items-center justify-center text-[#ffb020] font-bold text-sm">L</div>
                         <div className="flex flex-col">
                             <span className="text-[12px] sm:text-sm font-semibold text-[#1a2f22]">Mumbai Branch</span>
                             <span className="text-[8px] sm:text-[10px] text-[#8c948e]">2 locations</span>
                         </div>
                     </div>
                     <span className="text-[10px] sm:text-xs font-semibold text-[#8c948e] px-2 py-1 bg-[#f4f7f5] rounded-full">30%</span>
                 </div>
             </div>
          </div>

          <div className="flex flex-col justify-end h-full relative z-10 w-full md:w-1/2 pt-[360px] md:pt-0 mt-auto md:mt-0">
            <h3 className="text-[24px] md:text-[28px] font-bold text-[#1a2f22] mb-3 tracking-tight">Multi-Location Control</h3>
            <p className="text-[#4f5e55] text-[15px] md:text-[16px] leading-[1.5] font-medium pr-0 md:pr-10">
              Track polished diamonds, rough stones, parcels, and jewelry in real-time across branches.
            </p>
          </div>
        </motion.div>

        {/* Top Right Card - Spans 1 column */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="col-span-1 bg-[#5ecf78] rounded-[32px] p-8 md:p-10 relative overflow-hidden min-h-[460px] md:min-h-0 md:h-[420px] flex flex-col justify-end"
        >
          {/* Inner Floating Card */}
          <div className="absolute top-8 md:top-10 left-6 md:left-10 right-6 md:right-10 bg-white rounded-2xl p-6 shadow-xl z-10 origin-top scale-[0.9] sm:scale-100">
            <span className="text-[#1a2f22] text-sm font-semibold mb-3 block">Memo Issued</span>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#f4ebd0] flex items-center justify-center text-[#1a2f22] shrink-0">
                <Lightning weight="fill" className="text-[#5ecf78] w-6 h-6" />
              </div>
              <span className="text-[32px] md:text-[40px] font-light text-[#1a2f22] tracking-tight">132.567</span>
            </div>
            <div className="mt-8 flex flex-col gap-2">
              <div className="w-full h-2 rounded-full bg-[#e5fbf0]"></div>
              <div className="w-2/3 h-2 rounded-full bg-[#f4f7f5]"></div>
            </div>
          </div>
          {/* Faded background layer to give depth */}
          <div className="absolute top-12 md:top-14 left-6 md:left-10 right-6 md:right-10 bg-white/30 rounded-2xl h-[200px] -z-0 blur-sm scale-[1.05] md:scale-110 translate-y-4"></div>

          <div className="relative z-10 pt-[240px] md:pt-0 mt-auto md:mt-0">
            <h3 className="text-[24px] md:text-[28px] font-bold text-[#1a2f22] mb-3 tracking-tight">Memo Management</h3>
            <p className="text-[#1a2f22]/80 text-[15px] md:text-[16px] leading-[1.5] font-medium">
              Automate memo tracking, quotation generation, and quote-to-invoice conversions.
            </p>
          </div>
        </motion.div>

        {/* Bottom Left Card - Spans 1 column */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="col-span-1 bg-[#d1ff5e] rounded-[32px] p-8 md:p-10 relative overflow-hidden min-h-[460px] md:min-h-0 md:h-[420px] flex flex-col justify-end"
        >
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#e3ff99] blur-[80px] -z-10 rounded-full opacity-60"></div>
          
          {/* Inner Floating Card */}
          <div className="absolute top-10 md:top-12 left-6 md:left-10 right-6 md:right-10 bg-white rounded-[24px] p-5 md:p-6 shadow-2xl z-10 origin-top scale-[0.9] sm:scale-100">
            {/* Avatars */}
            <div className="flex -space-x-3 mb-4 md:mb-6">
              <img src="https://i.pravatar.cc/100?img=1" alt="Avatar" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover" />
              <img src="https://i.pravatar.cc/100?img=2" alt="Avatar" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover" />
              <img src="https://i.pravatar.cc/100?img=3" alt="Avatar" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover" />
              <img src="https://i.pravatar.cc/100?img=4" alt="Avatar" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover z-0 filter saturate-50" />
            </div>
            
            <h4 className="text-[#1a2f22] text-[16px] md:text-[18px] font-bold mb-4">Client inquiry response rate</h4>
            
            {/* Progress Bar */}
            <div className="w-full h-2.5 bg-[#f0f2f1] rounded-full mb-4 md:mb-6 relative">
              <div className="absolute top-0 left-0 h-full w-[65%] bg-[#5ecf78] rounded-full"></div>
              <div className="absolute top-1/2 left-[65%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#1a2f22] rounded-full border-2 border-white shadow-sm"></div>
            </div>
            
            <p className="text-[#4f5e55] text-[12px] md:text-sm font-medium">Respond instantly via WhatsApp</p>
          </div>
          
          {/* Faded cards below for stack effect */}
          <div className="absolute top-14 md:top-16 left-8 md:left-12 right-8 md:right-12 bg-white/40 h-[200px] rounded-[24px] blur-sm translate-y-12"></div>
          <div className="absolute top-18 md:top-20 left-10 md:left-14 right-10 md:right-14 bg-white/20 h-[200px] rounded-[24px] blur-md translate-y-24"></div>

          <div className="relative z-10 pt-[250px] md:pt-0 mt-auto md:mt-8">
            <h3 className="text-[24px] md:text-[28px] font-bold text-[#1a2f22] mb-2 md:mb-3 tracking-tight">WhatsApp Sales</h3>
            <p className="text-[#1a2f22]/80 text-[15px] md:text-[16px] leading-[1.5] font-medium pr-0 md:pr-4">
              Send live inventory links, automated follow-ups, and respond to clients instantly.
            </p>
          </div>
        </motion.div>

        {/* Bottom Right Card - Spans 2 columns */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="col-span-1 md:col-span-2 bg-[#1b2b22] rounded-[32px] p-8 sm:p-12 relative overflow-hidden min-h-[600px] md:min-h-0 md:h-[420px] flex flex-col justify-start md:justify-end isolate"
        >
          {/* Subtle light arc background */}
          <div className="absolute -top-[20%] -right-[10%] w-[80%] h-[120%] bg-gradient-to-bl from-[#2a4534] to-transparent rounded-full opacity-50 blur-3xl -z-10"></div>
          <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-[#5ecf78] opacity-[0.15] blur-[100px] -z-10"></div>

          <div className="w-full md:w-[50%] relative z-10 flex flex-col justify-start md:justify-center h-full pt-4 md:pt-8 object-top md:bottom-auto md:mb-0 mb-auto">
            <h3 className="text-[36px] sm:text-[48px] md:text-[64px] font-bold text-white mb-4 md:mb-6 tracking-tight leading-[1.1] z-10">
              Secure<br className="hidden md:block"/> Client Portal
            </h3>
            
            {/* Rating Stars - Stacked properly underneath */}
            <div className="flex items-center gap-3 z-10">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} weight="fill" className="text-[#d1ff5e] w-4 h-4 md:w-5 md:h-5" />
                ))}
              </div>
              <span className="text-white/80 text-[14px] md:text-[16px] font-medium">(5.0 ratings)</span>
            </div>
          </div>

          {/* Large Phone Graphic intersecting the bottom right corner */}
          <div className="absolute -bottom-20 -right-24 sm:-bottom-12 sm:-right-8 md:-bottom-12 md:-right-16 w-[320px] sm:w-[400px] h-[480px] sm:h-[550px] rotate-[-5deg] scale-[0.8] sm:scale-90 md:scale-100 origin-bottom-right">
            {/* Phone Hand Mockup Image / Design */}
            <div className="relative w-[320px] h-[600px] bg-white rounded-[50px] border-[12px] border-[#111] shadow-2xl ml-auto mt-12 overflow-hidden flex flex-col">
              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-black rounded-full z-20"></div>
              
              <div className="flex-1 w-full bg-[#f8faf9] pt-16 px-6 relative">
                 <div className="flex items-center justify-between mb-6 md:mb-8">
                    <div className="flex items-center gap-3">
                        <img src="https://i.pravatar.cc/100?img=5" alt="User" className="w-10 h-10 rounded-full" />
                        <div className="flex flex-col">
                            <span className="text-[10px] text-[#8c948e] font-medium leading-tight">Welcome Back,</span>
                            <span className="text-sm text-[#1a2f22] font-bold leading-tight">Mark Hussain</span>
                        </div>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-[#e5e7eb] flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-[#8c948e] rounded-full"></div>
                    </div>
                 </div>

                 <div className="w-full flex flex-col items-center justify-center mb-6 md:mb-8">
                    <span className="text-xs text-[#8c948e] mb-1">Available Stones</span>
                    <span className="text-[28px] md:text-[32px] font-bold text-[#1a2f22] tracking-tight">4,258</span>
                    <span className="text-[10px] text-[#8c948e] mt-1">Real-time sync</span>
                 </div>

                 {/* Lime Send Money Box */}
                 <div className="w-full bg-[#d1ff5e] rounded-[24px] p-4 md:p-5 relative shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-sm font-semibold text-[#1a2f22]">Share Stock List</span>
                        <div className="w-6 h-6 rounded-full border border-[#1a2f22]/20 flex items-center justify-center text-[#1a2f22] text-xs font-bold">+</div>
                    </div>
                    <div className="flex gap-2 md:gap-4 justify-between md:justify-start">
                        <div className="flex flex-col items-center gap-2">
                            <img src="https://i.pravatar.cc/100?img=6" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white" />
                            <span className="text-[10px] font-medium">Alexz</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <img src="https://i.pravatar.cc/100?img=7" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white scale-110 shadow-md" />
                            <span className="text-[10px] font-bold bg-white/50 px-2 py-0.5 rounded-full">Angel</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <img src="https://i.pravatar.cc/100?img=8" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white opacity-60" />
                            <span className="text-[10px] font-medium opacity-60">James</span>
                        </div>
                    </div>
                 </div>

                 {/* Last Transaction */}
                 <div className="mt-6 md:mt-8">
                    <span className="text-sm font-bold text-[#1a2f22] mb-3 md:mb-4 block">Recent Activity</span>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#e5fbf0] flex items-center justify-center text-[#5ecf78] font-bold">✓</div>
                        <div className="flex flex-col flex-1">
                            <span className="text-sm font-bold text-[#1a2f22]">Client Login</span>
                            <span className="text-[10px] text-[#8c948e]">Access Granted</span>
                        </div>
                    </div>
                 </div>
              </div>

              {/* Fake Hands - absolute positioning */}
              <div className="absolute -left-6 bottom-32 w-16 h-32 bg-[#dcb193] rounded-full rotate-[15deg] shadow-xl z-30 blur-[1px]"></div>
              <div className="absolute -right-4 bottom-10 w-20 h-40 bg-[#cfa182] rounded-full -rotate-[20deg] shadow-xl z-30 blur-[1px]"></div>
            </div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
};
