"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export function CVViewer() {
    return (
        <section id="cv" className="max-w-4xl pt-16">
            <div className="mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h2 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 flex items-center gap-3">
                    <FileText className="h-6 w-6 text-gray-500 dark:text-gray-300" />
                    Curriculum Vitae
                </h2>
                
                <a 
                    href="/cv.pdf" 
                    download="Mingyang_Li_CV.pdf"
                    className="group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium tracking-wide text-white transition-all overflow-hidden w-fit cursor-pointer"
                >
                    <div className="absolute inset-0 bg-blue-600/50 backdrop-blur-md transition-all group-hover:bg-blue-500/60" />
                    <div className="absolute inset-0 rounded-full border border-blue-400/50 group-hover:border-blue-300/80 shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all" />
                    <Download className="h-4 w-4 relative z-10" />
                    <span className="relative z-10 font-bold uppercase">Download PDF</span>
                </a>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-3xl p-1 overflow-hidden group"
            >
                {/* Animated Edge Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-cyan-500/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Inner Bezel */}
                <div className="relative rounded-3xl bg-[#0d0d12]/60 backdrop-blur-xl border border-white/10 flex flex-col h-[80vh] min-h-[600px] overflow-hidden shadow-2xl">
                    {/* Top TopBar */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5 relative">
                        <div className="flex gap-1.5 relative z-10">
                            <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="text-xs font-mono text-gray-400 tracking-widest">~/restricted_access/cv.pdf</span>
                        </div>
                    </div>
                    
                    {/* The actual iframe */}
                    <iframe 
                        src="/cv.pdf#toolbar=0&navpanes=0&scrollbar=0" 
                        className="w-full h-full flex-1 bg-white/5 border-none"
                        title="Mingyang Li CV"
                    />
                </div>
            </motion.div>
        </section>
    );
}
