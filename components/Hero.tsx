"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Terminal } from "@/components/Terminal";

export function Hero() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-20 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl space-y-8 flex flex-col items-center"
            >
                <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
                    Building the Future of AI & Web3.
                </h1>
                <p className="text-lg text-gray-600 sm:text-xl max-w-2xl">
                    Software Development Engineer. Specializing in Large Language Models,
                    NFT ecosystems, and decentralized architectures.
                </p>

                <div className="mt-8 w-full flex justify-center">
                    <Terminal />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10"
            >
                <ArrowDown className="h-6 w-6 animate-bounce text-gray-400" />
            </motion.div>
        </section>
    );
}
