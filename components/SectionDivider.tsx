"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
    return (
        <div className="relative py-12">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-800" />
            </div>
            <div className="relative flex justify-center">
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: "100px", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-1 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 blur-sm"
                />
            </div>
        </div>
    );
}
