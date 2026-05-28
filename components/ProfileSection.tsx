import { ArrowUpRight, Download, MapPin } from "lucide-react";
import { education, profile, siteHighlights, skillGroups } from "@/data/profile";

export function ProfileSection() {
    return (
        <section id="about" className="mx-auto flex w-full max-w-6xl flex-col gap-12 scroll-mt-28 pt-6 lg:pt-10">
            <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_22rem] xl:items-end">
                <div className="space-y-8">
                    <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.08] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        {profile.role}
                    </div>

                    <div className="space-y-5">
                        <h1 className="max-w-4xl text-4xl font-semibold text-white sm:text-6xl lg:text-7xl">
                            {profile.name}
                        </h1>
                        <p className="max-w-4xl text-xl leading-8 text-slate-200 sm:text-2xl sm:leading-9">
                            {profile.headline}
                        </p>
                        <p className="max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
                            {profile.summary}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <a
                            href={profile.cvPath}
                            download="Mingyang_Li_CV.pdf"
                            className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-300 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                        >
                            <Download className="h-4 w-4" />
                            Download CV
                        </a>
                        {profile.contacts.map((contact) => (
                            <a
                                key={contact.label}
                                href={contact.href}
                                target={contact.href.startsWith("http") ? "_blank" : undefined}
                                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
                            >
                                <contact.icon className="h-4 w-4" />
                                {contact.label}
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-400">
                        <span className="inline-flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-slate-500" />
                            {profile.location}
                        </span>
                        <span>{profile.availability}</span>
                    </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                    {siteHighlights.map((item) => (
                        <div key={item.label} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                            <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_24rem]">
                <div className="rounded-lg border border-white/10 bg-white/[0.035] p-5 sm:p-6">
                    <div className="mb-5 flex items-center justify-between gap-4">
                        <h2 className="text-lg font-semibold text-white">Technical Skills</h2>
                        <ArrowUpRight className="h-4 w-4 text-slate-500" />
                    </div>
                    <div className="grid gap-5 md:grid-cols-2">
                        {skillGroups.map((group) => (
                            <div key={group.label} className="space-y-3">
                                <h3 className="text-sm font-semibold text-cyan-100">{group.label}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-md border border-white/10 bg-slate-950/45 px-2.5 py-1.5 text-xs font-medium text-slate-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/[0.035] p-5 sm:p-6">
                    <h2 className="text-lg font-semibold text-white">Education</h2>
                    <div className="mt-5 space-y-5">
                        {education.map((item) => (
                            <article key={item.school} className="space-y-2">
                                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between lg:flex-col">
                                    <div>
                                        <h3 className="font-semibold text-slate-100">{item.school}</h3>
                                        <p className="text-sm text-slate-400">{item.degree}</p>
                                    </div>
                                    <p className="text-sm text-slate-500">{item.dates}</p>
                                </div>
                                <p className="text-sm text-slate-500">{item.location}</p>
                                {item.coursework && (
                                    <p className="text-sm leading-6 text-slate-400">
                                        Coursework: {item.coursework.join(", ")}
                                    </p>
                                )}
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
