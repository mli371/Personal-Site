"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const bootLines = [
    { text: "INITIALIZING KERNEL...", color: "text-gray-400" },
    { text: "LOADING MODULES: [AI, WEB3, REACT]", color: "text-blue-400" },
    { text: "VERIFYING SECURITY PROTOCOLS...", color: "text-yellow-400" },
    { text: "MOUNTING FILE SYSTEM...", color: "text-gray-400" },
    { text: "OPTIMIZING ASSETS...", color: "text-purple-400" },
    { text: "SYSTEM READY.", color: "text-green-500" },
];

export function IntroTerminal({ onComplete }: { onComplete: () => void }) {
    const [lines, setLines] = useState<{ text: string; color: string; time: string }[]>([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [showButton, setShowButton] = useState(false);

    // Generate base time once
    const [baseTime] = useState(() => new Date());

    useEffect(() => {
        if (currentLineIndex < bootLines.length) {
            const timeout = setTimeout(() => {
                // Calculate incremental time for each line (e.g., +800ms per line)
                const lineTime = new Date(baseTime.getTime() + currentLineIndex * 850);

                setLines((prev) => [
                    ...prev,
                    {
                        ...bootLines[currentLineIndex],
                        time: lineTime.toLocaleTimeString('en-US', { hour12: false })
                    }
                ]);
                setCurrentLineIndex((prev) => prev + 1);
            }, 400);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => setShowButton(true), 500);
            return () => clearTimeout(timeout);
        }
    }, [currentLineIndex, baseTime]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -1000, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-50 grid h-screen w-screen place-items-center bg-black font-mono"
        >
            {/* Terminal Window Container */}
            <div
                className="relative w-full border-4 border-white bg-black p-2 shadow-[0_0_50px_rgba(255,255,255,0.2)]"
                style={{ maxWidth: '800px' }}
            >
                {/* Title Bar */}
                <div className="mb-8 flex items-center justify-between border-b-4 border-white bg-white px-4 py-2 text-black">
                    <span className="text-xl font-black tracking-widest">TERMINAL_SESSION_01</span>
                    <div className="flex gap-3">
                        <div className="h-4 w-4 bg-black" />
                        <div className="h-4 w-4 bg-black" />
                        <div className="h-4 w-4 bg-black" />
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-col py-12 px-6 md:px-16">
                    <div className="space-y-3">
                        {lines.map((line, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className={`text-base md:text-2xl font-bold tracking-wider ${line.color} flex items-start justify-start gap-4 text-left`}
                            >
                                <span className="text-gray-500 text-base md:text-2xl font-normal whitespace-nowrap">[{line.time}]</span>
                                <span className="break-words">{line.text}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Explicit spacer to force separation */}
                    <div style={{ height: '60px' }} />

                    {showButton && (
                        <div className="flex justify-center">
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onComplete}
                            className="font-black uppercase tracking-widest transition-all"
                            style={{
                                backgroundColor: 'transparent',
                                color: 'white',
                                borderWidth: '4px', // Force thick border
                                borderColor: 'white', // Force white border
                                borderStyle: 'solid',
                                fontSize: '1.25rem', // text-xl equivalent
                                padding: '0.75rem 2.5rem', // px-10 py-3 equivalent
                                marginBottom: '40px' // Add spacing below button
                            }}
                        >
                            Start System
                        </motion.button>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
