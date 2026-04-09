"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        id: "01",
        title: "NexusAgent: Enterprise-Grade Autonomous AI Platform",
        category: "AI / Backend",
        description: "Engineered a reactive multi-agent backend using Project Reactor, handling 800 QPS with sub-50ms latency. Designed a 4-stage Deep Research Engine via ReAct patterns and an advanced RAG pipeline with PgVector.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?fit=crop&w=500&h=300",
        links: { code: "#" }
    },
    {
        id: "02",
        title: "NFT Digital Collectibles Platform",
        category: "Blockchain / Backend",
        description: "Optimized MySQL with composite indexes and implemented strict cache-database consistency via Redis. Built a scalable order module using XXL-JOB and integrated Dubbo for microservice RPC communication within Docker.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?fit=crop&w=500&h=300",
        links: { code: "#", demo: "#" }
    },
    {
        id: "03",
        title: "AI Infrastructure & Model Serving Home Lab",
        category: "Infrastructure / LLMs",
        description: "Architected a local LLM serving environment using Docker and deployed OpenClaw for local inference. Benchmarked GPU inference latency and optimized memory / KV-cache on high-performance GPU hardware.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?fit=crop&w=500&h=300",
        links: { code: "#" }
    }
];

export function ProjectList() {
    return (
        <section id="projects" className="max-w-4xl space-y-8 pt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Selected Projects</h2>

            <div className="space-y-12">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="group relative flex flex-col gap-6 overflow-hidden rounded-xl border border-gray-200 bg-white/50 p-6 transition-all hover:border-gray-900 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900/50 dark:hover:border-white md:flex-row"
                    >
                        {/* Scanline Effect Overlay */}
                        <div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            style={{ background: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))", backgroundSize: "100% 2px, 3px 100%" }}
                        />

                        {/* Thumbnail */}
                        <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 md:w-72">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:grayscale-0 grayscale"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col justify-center space-y-3 z-20">
                            <div className="flex items-center justify-between">
                                <h3 className="font-mono text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <span className="text-xs font-mono text-gray-400 dark:text-gray-500">
                                    ID: {project.id}
                                </span>
                            </div>

                            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 font-mono tracking-wide uppercase">
                                {project.category}
                            </p>

                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex gap-4 pt-2">
                                {project.links.code && (
                                    <a href={project.links.code} className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors border border-gray-200 dark:border-gray-700 px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                                        <Github className="h-4 w-4" /> <span className="font-mono">CODE</span>
                                    </a>
                                )}
                                {project.links.demo && (
                                    <a href={project.links.demo} className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors border border-gray-200 dark:border-gray-700 px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                                        <ExternalLink className="h-4 w-4" /> <span className="font-mono">DEMO</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
