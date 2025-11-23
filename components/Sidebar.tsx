"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";

export function Sidebar() {
    return (
        <aside className="fixed left-0 top-0 h-screen w-64 flex-col justify-between border-r border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-[#121212] hidden md:flex">
            <div className="space-y-8">
                <div className="space-y-4">
                    <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-gray-100 dark:border-gray-800">
                        <Image
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300"
                            alt="Profile"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                            Liming Yang
                        </h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Software Engineer
                        </p>
                    </div>
                </div>

                <nav className="space-y-2">
                    <Link
                        href="/"
                        className="block rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-white/5"
                    >
                        About
                    </Link>
                    <Link
                        href="#projects"
                        className="block rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5"
                    >
                        Projects
                    </Link>
                    <Link
                        href="#news"
                        className="block rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5"
                    >
                        News
                    </Link>
                    <Link
                        href="/cv.pdf"
                        className="block rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5"
                    >
                        CV
                    </Link>
                </nav>
            </div>

            <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <Mail className="h-5 w-5" />
                </a>
            </div>
        </aside>
    );
}
