import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

export function ContactSection() {
    return (
        <section id="contact" className="mx-auto w-full max-w-6xl scroll-mt-28">
            <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/[0.07] p-6 sm:p-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-3xl space-y-3">
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100">Contact</p>
                        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                            Backend and AI platform work is where I am aiming next.
                        </h2>
                        <p className="text-base leading-7 text-slate-300">
                            {profile.availability} I am especially interested in teams where retrieval infrastructure, backend reliability, high-concurrency business systems, and applied AI meet real product constraints.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {profile.contacts.map((contact) => (
                            <a
                                key={contact.label}
                                href={contact.href}
                                target={contact.href.startsWith("http") ? "_blank" : undefined}
                                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-slate-950/35 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-cyan-200/40 hover:bg-slate-950/55"
                            >
                                <contact.icon className="h-4 w-4" />
                                {contact.label}
                                <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
