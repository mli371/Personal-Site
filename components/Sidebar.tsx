"use client";

import { useState } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import Image from "next/image";
import { navItems, profile } from "@/data/profile";

export function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#07090d]/85 px-4 py-3 backdrop-blur-xl lg:hidden">
                <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
                    <Link href="#about" onClick={closeMenu} className="flex min-w-0 items-center gap-3">
                        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/15">
                            <Image src="/portrait.jpg" alt={profile.name} fill className="object-cover" sizes="40px" />
                        </div>
                        <div className="min-w-0">
                            <p className="truncate text-sm font-semibold text-white">{profile.name}</p>
                            <p className="truncate text-xs text-slate-400">{profile.shortRole}</p>
                        </div>
                    </Link>

                    <button
                        type="button"
                        onClick={() => setIsOpen((value) => !value)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-slate-100 transition hover:bg-white/10"
                        aria-label={isOpen ? "Close navigation" : "Open navigation"}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

                {isOpen && (
                    <div className="mx-auto mt-4 max-w-5xl space-y-3 pb-2">
                        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.08] px-3 py-1.5 text-xs font-semibold text-emerald-100">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                            {profile.status}
                        </div>
                        <nav className="grid grid-cols-2 gap-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={closeMenu}
                                    className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </header>

            <aside className="fixed left-0 top-0 z-30 hidden h-screen w-72 flex-col justify-between border-r border-white/10 bg-[#07090d]/80 p-8 backdrop-blur-xl lg:flex">
                <div className="space-y-9">
                    <Link href="#about" className="block space-y-5">
                        <div className="relative h-28 w-28 overflow-hidden rounded-full border border-white/15 bg-white/5">
                            <Image
                                src="/portrait.jpg"
                                alt={profile.name}
                                fill
                                className="object-cover"
                                sizes="112px"
                                priority
                            />
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold text-white">
                                {profile.name}
                            </h1>
                            <p className="mt-1 text-sm leading-6 text-slate-400">
                                {profile.shortRole}
                            </p>
                            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.08] px-3 py-1.5 text-xs font-semibold text-emerald-100">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                                {profile.status}
                            </div>
                        </div>
                    </Link>

                    <nav className="space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="block rounded-md px-3 py-2.5 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-white"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="space-y-5">
                    <a
                        href={profile.cvPath}
                        download="Mingyang_Li_CV.pdf"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-cyan-300/30 bg-cyan-300/10 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-300/15"
                    >
                        <Download className="h-4 w-4" />
                        Download CV
                    </a>
                    <div className="flex gap-3">
                        {profile.contacts.map((contact) => (
                            <a
                                key={contact.label}
                                href={contact.href}
                                target={contact.href.startsWith("http") ? "_blank" : undefined}
                                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                aria-label={contact.label}
                                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                            >
                                <contact.icon className="h-4 w-4" />
                            </a>
                        ))}
                    </div>
                </div>
            </aside>
        </>
    );
}
