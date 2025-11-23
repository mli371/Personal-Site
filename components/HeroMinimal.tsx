"use client";

import { motion } from "framer-motion";

export function HeroMinimal() {
    return (
        <section className="relative flex min-h-screen flex-col justify-center px-6 pt-20 overflow-hidden">
            {/* Dynamic Background Gradient */}
            <div className="absolute top-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-[100px] animate-pulse" />

            <div className="z-10 space-y-0">
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-[12vw] font-bold leading-[0.9] tracking-tighter text-black dark:text-white"
                >
                    SOFTWARE
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="text-[12vw] font-bold leading-[0.9] tracking-tighter text-gray-400 dark:text-gray-600"
                >
                    ENGINEER
                </motion.h1>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-12 flex max-w-xl flex-col gap-4 text-xl font-light leading-relaxed text-gray-600 dark:text-gray-400 z-10"
            >
                <p>
                    Specializing in the intersection of <span className="text-black dark:text-white font-medium">AI</span> and <span className="text-black dark:text-white font-medium">Web3</span>.
                </p>
                <p>
                    Building scalable systems for the next generation of the internet.
                </p>
            </motion.div>
        </section>
    );
}
