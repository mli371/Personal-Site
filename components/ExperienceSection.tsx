import { experiences } from "@/data/profile";

export function ExperienceSection() {
    return (
        <section id="experience" className="mx-auto w-full max-w-6xl scroll-mt-28">
            <div className="mb-8 max-w-3xl space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Research Experience</p>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                    Evaluation work for AI systems that need measurable robustness.
                </h2>
            </div>

            <div className="space-y-5">
                {experiences.map((item) => (
                    <article key={`${item.role}-${item.organization}`} className="rounded-lg border border-white/10 bg-white/[0.035] p-6 sm:p-7">
                        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                                <p className="text-base text-slate-300">{item.organization}</p>
                                {item.advisor && (
                                    <p className="text-sm text-slate-500">Advisor: {item.advisor}</p>
                                )}
                            </div>
                            <div className="text-left lg:text-right">
                                <p className="text-sm font-medium text-slate-300">{item.dates}</p>
                                <p className="mt-1 text-sm text-slate-500">{item.location}</p>
                            </div>
                        </div>

                        <ul className="mt-6 grid gap-3 text-sm leading-7 text-slate-400 lg:grid-cols-3">
                            {item.bullets.map((bullet) => (
                                <li key={bullet} className="rounded-md border border-white/[0.08] bg-slate-950/35 p-4">
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}
