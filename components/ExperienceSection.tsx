import { motion } from "framer-motion";

export function ExperienceSection() {
    return (
        <section id="experience" className="max-w-3xl space-y-8 pt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h2>
            <div className="space-y-12">
                <div className="relative border-l-2 border-transparent ml-3 pl-8 pb-8 last:pb-0"
                    style={{ borderImage: "linear-gradient(to bottom, #3b82f6, #a855f7) 1" }}>

                    <motion.div
                        className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <div className="absolute inset-0 rounded-full bg-white opacity-50 blur-[1px]" />
                    </motion.div>

                    <div className="group rounded-lg border border-gray-200 bg-white/50 p-6 transition-all hover:border-blue-500/50 hover:bg-blue-500/5 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] dark:border-gray-800 dark:bg-gray-900/50">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                                IT Operation & Maintenance Engineer
                            </h3>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 font-mono">
                                Jun 2023 - Nov 2023
                            </span>
                        </div>

                        <div className="mb-4 text-base font-medium text-gray-700 dark:text-gray-300">
                            Anhui Jiexi Pharmaceutical Co., Ltd.
                        </div>

                        <ul className="list-disc space-y-2 pl-4 text-gray-600 dark:text-gray-400">
                            <li>
                                Maintained ERP/OA systems, servers, and network devices; resolved 50+ incidents/month.
                            </li>
                            <li>
                                Managed provisioning, monitoring, and backup/recovery for enterprise servers.
                            </li>
                            <li>
                                Supported deployments and security rollout; documented SOPs for smoother handover.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
