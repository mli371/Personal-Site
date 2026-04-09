"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Network, Database, Cpu, Server } from "lucide-react";

const items = [
    {
        title: "Autonomous AI Agents",
        description: "Orchestrating enterprise-grade Multi-Agent workflows with ReAct patterns and Project Reactor.",
        icon: Network,
        className: "col-span-1 md:col-span-2 bg-gradient-to-br from-blue-900/40 to-indigo-900/20 text-white border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.1)]",
    },
    {
        title: "RAG Pipelines",
        description: "Optimizing vector retrieval with PgVector and sliding-window chunking.",
        icon: Database,
        className: "col-span-1 bg-gradient-to-br from-cyan-900/30 to-blue-900/10 text-white border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.1)]",
    },
    {
        title: "GPU & Inference",
        description: "Deploying OpenClaw and fine-tuning KV-cache memory allocation on high-performance RTX hardware.",
        icon: Cpu,
        className: "col-span-1 bg-gradient-to-br from-purple-900/30 to-fuchsia-900/10 text-white border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.1)]",
    },
    {
        title: "High-Concurrency Backend",
        description: "Architecting resilient order modules via RocketMQ, XXL-JOB, and Redis double-delete sync strategies.",
        icon: Server,
        className: "col-span-1 md:col-span-2 bg-gradient-to-br from-emerald-900/30 to-teal-900/10 text-white border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.1)]",
    },
];

export function BentoGrid() {
    return (
        <section id="expertise" className="max-w-4xl pt-16">
            <h2 className="mb-12 text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400">
                Technical Expertise Grid
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2">
                {items.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className={cn(
                            "group relative flex flex-col justify-between overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl border backdrop-blur-md",
                            item.className
                        )}
                    >
                        <div className="z-10">
                            <div className="mb-6 rounded-full bg-white/10 p-3 w-fit backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-white/10">
                                <item.icon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold font-mono tracking-tight">{item.title}</h3>
                            <p className="mt-3 text-sm text-gray-300 leading-relaxed font-sans">{item.description}</p>
                        </div>
                        {/* Interactive Glow Effect */}
                        <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-100 opacity-0 pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-50 pointer-events-none" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
