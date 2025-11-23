"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Server, Code2, Layers, GitBranch } from "lucide-react";

const items = [
    {
        title: "LLM Engineering",
        description: "Fine-tuning and deploying Large Language Models.",
        icon: Server,
        className: "col-span-1 md:col-span-2 bg-gray-900 text-white",
    },
    {
        title: "NFT & Blockchain",
        description: "Smart contract development (Solidity) and Web3 integration.",
        icon: Code2,
        className: "col-span-1 bg-gray-100",
    },
    {
        title: "Full Stack AI",
        description: "Building AI-powered applications with modern frameworks.",
        icon: Layers,
        className: "col-span-1 bg-gray-100",
    },
    {
        title: "Open Source",
        description: "Contributing to the crypto and AI developer community.",
        icon: GitBranch,
        className: "col-span-1 md:col-span-2 bg-gray-50",
    },
];

export function BentoGrid() {
    return (
        <section id="about" className="mx-auto max-w-5xl px-4 py-24">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-gray-900">
                Technical Expertise
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 h-[600px]">
                {items.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className={cn(
                            "group relative flex flex-col justify-between overflow-hidden rounded-3xl p-8 transition-all hover:shadow-xl",
                            item.className
                        )}
                    >
                        <div>
                            <div className="mb-4 rounded-full bg-white/20 p-2 w-fit backdrop-blur-sm">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="mt-2 text-sm opacity-80">{item.description}</p>
                        </div>
                        <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-2xl transition-all group-hover:scale-150" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
