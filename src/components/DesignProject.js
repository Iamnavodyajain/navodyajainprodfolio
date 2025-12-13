// components/DesignProject.js - MotoKing Redesign (Clean & Focused)
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Layout, Target, Eye, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function DesignProject() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={containerRef}
      className="py-24 bg-linear-to-b from-[#151515] to-[#0E0E0E]"
    >
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#16A34A]/10 rounded-full mb-6 border border-[#16A34A]/20">
            <Palette size={18} className="text-[#22C55E]" />
            <span className="text-[#22C55E] font-semibold">Product UI Redesign</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-4">
            MotoKing Website Redesign
          </h2>

          <p className="text-lg text-[#A1A1A1] max-w-3xl mx-auto leading-relaxed">
            A focused redesign of MotoKing’s home and product pages to improve
            discoverability, decision clarity, and purchase confidence for users
            browsing premium superbike accessories.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >

            {/* Problem */}
            <div>
              <h3 className="text-xl font-bold text-[#EAEAEA] mb-3 flex items-center gap-3">
                <Target size={22} className="text-[#22C55E]" />
                Problem Framing
              </h3>
              <p className="text-[#A1A1A1] leading-relaxed">
                Users struggled to compare products, understand compatibility,
                and trust purchase decisions due to dense layouts, weak hierarchy,
                and limited visual guidance.
              </p>
            </div>

            {/* Approach */}
            <div>
              <h3 className="text-xl font-bold text-[#EAEAEA] mb-3 flex items-center gap-3">
                <Layout size={22} className="text-[#22C55E]" />
                Design Approach
              </h3>
              <ul className="space-y-2 text-[#A1A1A1] leading-relaxed list-disc list-inside">
                <li>Re-structured information hierarchy on home and product pages</li>
                <li>Improved product imagery emphasis and visual grouping</li>
                <li>Reduced cognitive load during selection and comparison</li>
                <li>Designed for faster scanning and clearer CTAs</li>
              </ul>
            </div>

            {/* Outcome */}
            <div>
              <h3 className="text-xl font-bold text-[#EAEAEA] mb-3 flex items-center gap-3">
                <Palette size={22} className="text-[#22C55E]" />
                Outcome & Learnings
              </h3>
              <p className="text-[#A1A1A1] leading-relaxed">
                The redesign demonstrates how thoughtful layout, visual clarity,
                and product-focused storytelling can directly support better
                user decisions without adding complexity.
              </p>
            </div>

            {/* CTA — LINKED */}
            <Link
              href="https://www.figma.com/design/yICiwfIBXmvdFBOTGzfRsM/MOTOKING?node-id=0-1&t=R9p4TJi1juXIt65e-1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View design screens on Figma"
            >
              <motion.div
                whileHover={{ scale: 1.02, x: 8 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-4 px-8 py-4 bg-[#1C1C1C] border border-[#2A2A2A] rounded-full hover:border-[#22C55E] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#22C55E]/20 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <Eye size={18} className="text-[#A1A1A1]" />
                  <span className="text-[#EAEAEA] font-semibold">
                    View Design Screens
                  </span>
                </div>

                <motion.div
                  animate={{ x: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.6 }}
                  className="w-10 h-10 bg-[#22C55E] rounded-full flex items-center justify-center ml-2"
                >
                  <ArrowRight size={16} className="text-white" />
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Right Image Preview */}
          <motion.div
            style={{ scale, y }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden border border-[#2A2A2A] shadow-2xl bg-[#0E0E0E]">
              <Image
                src="/motoking_UI.png"
                alt="MotoKing Website Redesign"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
