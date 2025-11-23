"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export function ProfileSection() {
    return (
        <section className="max-w-3xl space-y-12 pt-12">
            <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                    Mingyang Li
                </h1>

                <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400">
                    <a href="mailto:lmy1132950969@gmail.com" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <Mail className="h-4 w-4" />
                        lmy1132950969@gmail.com
                    </a>
                    <a href="https://www.linkedin.com/in/mingyang-li-612081337/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                    </a>
                    <a href="https://github.com/mli371" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <Github className="h-4 w-4" />
                        GitHub
                    </a>
                </div>

                <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300">
                    <p>
                        I am a Software Engineer specializing in
                        <strong className="text-gray-900 dark:text-white"> Backend Development</strong>,
                        <strong className="text-gray-900 dark:text-white"> Cloud Infrastructure</strong>, and
                        <strong className="text-gray-900 dark:text-white"> AI/LLM Pipelines</strong>.
                    </p>
                    <p>
                        Currently pursuing my M.S. in Computer Science at UC Riverside. My expertise spans
                        building scalable microservices with Spring Boot, optimizing database performance,
                        and developing reproducible data pipelines for Large Language Model research.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-4">
                        {[
                            "Java", "Python", "Spring Boot", "MySQL", "Redis", "Kafka/RocketMQ",
                            "AWS", "Docker", "CI/CD", "Version Control", "OpenAI API",
                            "LLM pipeline", "Pandas", "Numpy", "Git", "Linux", "Agile", "Unit Testing"
                        ].map((skill, index) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1, y: [0, -3, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    delay: index * 0.1
                                }}
                                className="relative rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-700 dark:text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.2)] backdrop-blur-sm"
                                whileHover={{
                                    scale: 1.1,
                                    boxShadow: "0 0 20px rgba(6,182,212,0.5)",
                                    borderColor: "rgba(6,182,212,0.8)"
                                }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>

            <div id="education" className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h2>
                <div className="space-y-8">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-4">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">University of California, Riverside</h3>
                            <p className="text-gray-600 dark:text-gray-400">Master of Science in Computer Science</p>
                        </div>
                        <div className="text-left sm:text-right">
                            <span className="text-sm text-gray-500">Sep 2024 - Mar 2026 (Expected)</span>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-4">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Shanxi University</h3>
                            <p className="text-gray-600 dark:text-gray-400">Bachelor of Engineering in Software Engineering</p>
                        </div>
                        <div className="text-left sm:text-right">
                            <span className="text-sm text-gray-500">Sep 2020 - Jun 2024</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
