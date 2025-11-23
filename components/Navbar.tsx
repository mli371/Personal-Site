"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Home, User, Code, Mail } from "lucide-react";

const navItems = [
    { name: "Home", icon: Home, href: "#" },
    { name: "About", icon: User, href: "#about" },
    { name: "Projects", icon: Code, href: "#projects" },
    { name: "Contact", icon: Mail, href: "#contact" },
];

export function Navbar() {
    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-6 inset-x-0 max-w-fit mx-auto z-50"
        >
            <nav className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-lg ring-1 ring-black/5">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={cn(
                            "relative px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-black",
                            "group flex items-center gap-2"
                        )}
                    >
                        <item.icon className="w-4 h-4" />
                        <span className="hidden sm:inline">{item.name}</span>
                        <span className="absolute inset-0 -z-10 scale-90 rounded-full bg-gray-100 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100" />
                    </a>
                ))}
            </nav>
        </motion.div>
    );
}
