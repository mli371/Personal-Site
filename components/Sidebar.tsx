"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export function Sidebar() {
    return (
        <aside className="fixed left-0 top-0 h-screen w-64 flex-col justify-between border-r border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-[#121212] hidden md:flex">
            <div className="space-y-8">
                <div className="space-y-4">
                    <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-gray-100 dark:border-gray-800">
                        <Image
                            src="/portrait.jpg"
                            alt="Profile Name"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                            Mingyang Li
                        </h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Software Engineer
                        </p>
                    </div>
                </div>

                <nav className="space-y-2">
                    <Link
                        href="/#about"
                        className="block rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-white/5"
                    >
                        About
                    </Link>
                    <Link
                        href="/#projects"
                        className="block rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5"
                    >
                        Projects
                    </Link>
                    <Link
                        href="/#expertise"
                        className="block rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5"
                    >
                        Expertise
                    </Link>
                    <Link
                        href="/#cv"
                        className="block rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5"
                    >
                        CV
                    </Link>
                </nav>
            </div>

            <div className="flex gap-4">
                <a href="https://github.com/mli371" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                    <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/mingyang-li-612081337/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                    <Linkedin className="h-5 w-5" />
                </a>
                <a href="mailto:iam.alexli371@gmail.com" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                    <Mail className="h-5 w-5" />
                </a>
            </div>
        </aside>
    );
}
