"use client";

import { motion } from "framer-motion";

export function BackgroundEffects() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#0d0d12]">
            {/* Sci-Fi Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
            
            {/* Top Left Orb */}
            <motion.div
                animate={{
                    x: [0, 80, -40, 0],
                    y: [0, -80, 40, 0],
                    scale: [1, 1.1, 0.9, 1],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-cyan-600/30 blur-[120px]"
            />
            
            {/* Middle Right Orb */}
            <motion.div
                animate={{
                    x: [0, -100, 80, 0],
                    y: [0, 100, -80, 0],
                    scale: [1, 0.9, 1.2, 1],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[30%] -right-[15%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-blue-600/20 blur-[140px]"
            />
            
            {/* Bottom Left Orb */}
            <motion.div
                animate={{
                    x: [0, 60, -90, 0],
                    y: [0, 120, -40, 0],
                    scale: [1, 1.2, 0.9, 1],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-[20%] left-[10%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] rounded-full bg-purple-600/30 blur-[120px]"
            />
            
            {/* Shadow Mask to fade out the grid towards the edges and bottom */}
            <div 
                className="absolute inset-0"
                style={{
                    background: "radial-gradient(circle 1000px at 50% 100px, rgba(13, 13, 18, 0) 0%, #0d0d12 100%)"
                }}
            />
        </div>
    );
}
