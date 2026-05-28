import { expertiseItems } from "@/data/profile";

export function BentoGrid() {
    return (
        <section id="expertise" className="mx-auto w-full max-w-6xl scroll-mt-28">
            <div className="mb-8 max-w-3xl space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Expertise</p>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                    Backend infrastructure for retrieval-heavy AI products.
                </h2>
                <p className="text-base leading-7 text-slate-400">
                    My strongest work sits at the boundary between AI retrieval quality and classical backend reliability, including transactional order systems.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {expertiseItems.map((item) => (
                    <article
                        key={item.title}
                        className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-6 transition hover:border-cyan-300/25 hover:bg-white/[0.055]"
                    >
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent opacity-0 transition group-hover:opacity-100" />
                        <div className="relative z-10 flex h-full flex-col gap-6">
                            <div className="flex items-start justify-between gap-4">
                                <div className="rounded-md border border-white/10 bg-slate-950/60 p-3 text-cyan-200">
                                    <item.icon className="h-5 w-5" />
                                </div>
                                <p className="max-w-44 text-right text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                                    {item.signal}
                                </p>
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                                <p className="text-sm leading-7 text-slate-400">{item.description}</p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
