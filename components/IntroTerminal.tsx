"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/data/profile";

const bootLines = [
    "Loading profile data",
    "Indexing enterprise RAG work",
    "Checking backend systems",
    "Ready",
];

const storageKey = "mingyang-site-intro-seen-v2";

function hasSeenIntro() {
    try {
        return window.localStorage.getItem(storageKey) === "true";
    } catch {
        return false;
    }
}

function markIntroSeen() {
    try {
        window.localStorage.setItem(storageKey, "true");
    } catch {
        return;
    }
}

export function IntroTerminal() {
    const [isVisible, setIsVisible] = useState(false);
    const [visibleLines, setVisibleLines] = useState(0);

    const completeIntro = useCallback(() => {
        markIntroSeen();
        setIsVisible(false);
    }, []);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (hasSeenIntro() || prefersReducedMotion) {
            return;
        }

        const timer = window.setTimeout(() => {
            setIsVisible(true);
        }, 0);

        return () => window.clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isVisible || visibleLines >= bootLines.length) {
            return;
        }

        const timer = window.setTimeout(() => {
            setVisibleLines((value) => value + 1);
        }, 320);

        return () => window.clearTimeout(timer);
    }, [isVisible, visibleLines]);

    useEffect(() => {
        if (!isVisible) {
            return;
        }

        const timer = window.setTimeout(() => {
            completeIntro();
        }, 2600);

        return () => window.clearTimeout(timer);
    }, [completeIntro, isVisible]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-50 grid min-h-dvh place-items-center bg-[#07090d]/96 px-4 font-mono backdrop-blur-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                >
                    <div className="w-full max-w-2xl overflow-hidden rounded-lg border border-cyan-300/25 bg-slate-950 shadow-2xl shadow-cyan-950/30">
                        <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-white/[0.04] px-4 py-3">
                            <div className="flex items-center gap-2">
                                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                                <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                            </div>
                            <span className="truncate text-xs uppercase tracking-[0.2em] text-slate-500">
                                profile_boot
                            </span>
                        </div>

                        <div className="space-y-7 p-5 sm:p-7">
                            <div>
                                <p className="text-sm text-cyan-200">{profile.name}</p>
                                <p className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                                    {profile.shortRole}
                                </p>
                            </div>

                            <div className="space-y-2 text-sm text-slate-300">
                                {bootLines.slice(0, visibleLines).map((line, index) => (
                                    <motion.div
                                        key={line}
                                        className="flex items-center gap-3"
                                        initial={{ opacity: 0, x: -8 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <span className="text-slate-600">0{index + 1}</span>
                                        <span>{line}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                                    <div
                                        className="h-full rounded-full bg-cyan-300 transition-all duration-300"
                                        style={{ width: `${Math.max(20, (visibleLines / bootLines.length) * 100)}%` }}
                                    />
                                </div>
                                <button
                                    type="button"
                                    onClick={completeIntro}
                                    className="rounded-md border border-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 transition hover:border-cyan-300/40 hover:text-white"
                                >
                                    Skip
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
