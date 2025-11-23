"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const lines = [
    { text: "Initializing system...", color: "text-gray-400" },
    { text: "Loading modules...", color: "text-gray-400" },
    { text: "> whoami", color: "text-green-400" },
    { text: "AI & Blockchain Engineer", color: "text-white font-bold" },
    { text: "> cat skills.txt", color: "text-green-400" },
    { text: "LLMs, Solidity, Next.js, Python, Smart Contracts", color: "text-blue-300" },
];

export function Terminal() {
    const [visibleLines, setVisibleLines] = useState<number>(0);

    useEffect(() => {
        if (visibleLines < lines.length) {
            const timeout = setTimeout(() => {
                setVisibleLines((prev) => prev + 1);
            }, 800);
            return () => clearTimeout(timeout);
        }
    }, [visibleLines]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-lg overflow-hidden rounded-xl border border-white/10 bg-black/80 font-mono text-sm shadow-2xl backdrop-blur-md"
        >
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <div className="ml-2 text-xs text-gray-500">zsh — 80x24</div>
            </div>
            <div className="p-4 space-y-2 h-64 overflow-y-auto">
                {lines.slice(0, visibleLines).map((line, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={line.color}
                    >
                        {line.text}
                    </motion.div>
                ))}
                {visibleLines < lines.length && (
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="inline-block h-4 w-2 bg-gray-500 align-middle"
                    />
                )}
            </div>
        </motion.div>
    );
}
