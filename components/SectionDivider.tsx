"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
    return (
        <div className="relative py-12 flex justify-center overflow-hidden w-full max-w-5xl mx-auto">
            {/* Simple Track */}
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-800/60" />
            </div>
            
            {/* Center Core Glow */}
            <div className="relative flex justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="h-1 w-32 rounded-full bg-gradient-to-r from-blue-900/0 via-cyan-600/40 to-blue-900/0 blur-md absolute top-1/2 -mt-[2px] z-0"
                />
            </div>

            {/* Sweeping Plasma Plasma Laser */}
            <motion.div
                initial={{ left: "-50%", opacity: 0 }}
                whileInView={{ left: "150%", opacity: [0, 1, 1, 0] }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className="absolute top-1/2 -mt-[2px] h-[3px] w-1/3 rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[2px] z-10"
            />
            
            {/* Bright Core of the Laser */}
            <motion.div
                initial={{ left: "-50%", opacity: 0 }}
                whileInView={{ left: "150%", opacity: [0, 1, 1, 0] }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className="absolute top-1/2 -mt-[1px] h-[1px] w-1/4 rounded-full bg-gradient-to-r from-transparent via-white to-transparent z-20"
            />
        </div>
    );
}
