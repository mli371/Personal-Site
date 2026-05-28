import { Download, ExternalLink, FileText } from "lucide-react";
import { profile } from "@/data/profile";

export function CVViewer() {
    return (
        <section id="cv" className="mx-auto w-full max-w-6xl scroll-mt-28">
            <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-3xl space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Curriculum Vitae</p>
                    <h2 className="flex items-center gap-3 text-3xl font-semibold text-white sm:text-4xl">
                        <FileText className="h-7 w-7 text-cyan-200" />
                        Resume-ready details, embedded.
                    </h2>
                    <p className="text-base leading-7 text-slate-400">
                        Current resume with education, research, backend projects, and AI platform work.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3">
                    <a
                        href={profile.cvPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
                    >
                        <ExternalLink className="h-4 w-4" />
                        Open PDF
                    </a>
                    <a
                        href={profile.cvPath}
                        download="Mingyang_Li_CV.pdf"
                        className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-300 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                    >
                        <Download className="h-4 w-4" />
                        Download PDF
                    </a>
                </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-slate-950/40 px-4 py-3">
                    <div className="flex items-center gap-2">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
                        <div className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
                    </div>
                    <span className="truncate text-xs font-medium text-slate-500">{profile.cvPath}</span>
                </div>

                <div className="p-4 md:hidden">
                    <div className="rounded-md border border-white/10 bg-slate-950/45 p-5">
                        <p className="text-sm leading-6 text-slate-300">
                            Current resume PDF, ready for external viewing or download.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-3">
                            <a
                                href={profile.cvPath}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm font-semibold text-slate-200"
                            >
                                <ExternalLink className="h-4 w-4" />
                                Open PDF
                            </a>
                            <a
                                href={profile.cvPath}
                                download="Mingyang_Li_CV.pdf"
                                className="inline-flex items-center gap-2 rounded-md bg-cyan-300 px-3 py-2 text-sm font-semibold text-slate-950"
                            >
                                <Download className="h-4 w-4" />
                                Download
                            </a>
                        </div>
                    </div>
                </div>

                <iframe
                    src={`${profile.cvPath}#toolbar=0&navpanes=0`}
                    className="hidden h-[78vh] min-h-[640px] w-full border-0 bg-white md:block"
                    title="Mingyang Li CV"
                />
            </div>
        </section>
    );
}
