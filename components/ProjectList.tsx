import type { ComponentType } from "react";
import { Github, ExternalLink } from "lucide-react";
import { projectVisualIcons, projects } from "@/data/profile";
import { cn } from "@/lib/utils";

const accentStyles = {
    cyan: {
        border: "border-cyan-300/20",
        glow: "bg-cyan-300/[0.12]",
        text: "text-cyan-100",
        chip: "border-cyan-300/20 bg-cyan-300/[0.08] text-cyan-100",
        line: "from-cyan-300/70",
    },
    emerald: {
        border: "border-emerald-300/20",
        glow: "bg-emerald-300/[0.12]",
        text: "text-emerald-100",
        chip: "border-emerald-300/20 bg-emerald-300/[0.08] text-emerald-100",
        line: "from-emerald-300/70",
    },
    violet: {
        border: "border-violet-300/20",
        glow: "bg-violet-300/[0.12]",
        text: "text-violet-100",
        chip: "border-violet-300/20 bg-violet-300/[0.08] text-violet-100",
        line: "from-violet-300/70",
    },
};

export function ProjectList() {
    return (
        <section id="projects" className="mx-auto w-full max-w-6xl scroll-mt-28">
            <div className="mb-8 max-w-3xl space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Selected Projects</p>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                    Systems projects shaped around retrieval, concurrency, and agent workflows.
                </h2>
            </div>

            <div className="space-y-5">
                {projects.map((project, index) => {
                    const styles = accentStyles[project.accent];
                    const visualIcons = projectVisualIcons[project.accent];

                    return (
                        <article
                            key={project.title}
                            className={cn(
                                "group relative overflow-hidden rounded-lg border bg-white/[0.035] p-5 transition hover:bg-white/[0.055] sm:p-6 lg:p-7",
                                styles.border
                            )}
                        >
                            <div className={cn("absolute right-[-7rem] top-[-7rem] h-56 w-56 rounded-full blur-3xl", styles.glow)} />
                            <div className="relative grid gap-7 lg:grid-cols-[18rem_minmax(0,1fr)] lg:items-stretch">
                                <ProjectVisual index={index + 1} icons={visualIcons} accent={project.accent} />

                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                        <div className="space-y-2">
                                            <p className={cn("text-sm font-semibold", styles.text)}>{project.period}</p>
                                            <h3 className="text-2xl font-semibold text-white">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <div className="flex shrink-0 gap-2">
                                            {project.links?.code && (
                                                <ProjectLink href={project.links.code} label="Code" icon={Github} />
                                            )}
                                            {project.links?.demo && (
                                                <ProjectLink href={project.links.demo} label="Demo" icon={ExternalLink} />
                                            )}
                                        </div>
                                    </div>

                                    <p className="max-w-3xl text-base leading-7 text-slate-300">{project.summary}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className={cn("rounded-md border px-2.5 py-1.5 text-xs font-medium", styles.chip)}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <ul className="grid gap-3 text-sm leading-7 text-slate-400">
                                        {project.outcomes.map((outcome) => (
                                            <li key={outcome} className="flex gap-3">
                                                <span className={cn("mt-3 h-px w-5 shrink-0 bg-gradient-to-r to-transparent", styles.line)} />
                                                <span>{outcome}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

function ProjectVisual({
    index,
    icons,
    accent,
}: {
    index: number;
    icons: Array<ComponentType<{ className?: string }>>;
    accent: "cyan" | "emerald" | "violet";
}) {
    const styles = accentStyles[accent];

    return (
        <div className={cn("relative min-h-60 overflow-hidden rounded-md border bg-slate-950/50 p-5", styles.border)}>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />
            <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                    <span className={cn("font-mono text-sm", styles.text)}>PROJECT_{String(index).padStart(2, "0")}</span>
                    <span className="rounded-full border border-white/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Backend
                    </span>
                </div>

                <div className="grid grid-cols-3 gap-3 py-8">
                    {icons.map((Icon, iconIndex) => (
                        <div
                            key={iconIndex}
                            className="flex aspect-square items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-slate-200"
                        >
                            <Icon className="h-6 w-6" />
                        </div>
                    ))}
                </div>

                <div className="space-y-2">
                    <div className="h-2 rounded-full bg-white/10">
                        <div className={cn("h-2 w-3/4 rounded-full bg-gradient-to-r to-transparent", styles.line)} />
                    </div>
                    <div className="h-2 w-2/3 rounded-full bg-white/[0.08]" />
                    <div className="h-2 w-1/2 rounded-full bg-white/[0.08]" />
                </div>
            </div>
        </div>
    );
}

function ProjectLink({
    href,
    label,
    icon: Icon,
}: {
    href: string;
    label: string;
    icon: ComponentType<{ className?: string }>;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
        >
            <Icon className="h-4 w-4" />
            {label}
        </a>
    );
}
