"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export function Skills() {
    const categories = [
        {
            title: "Data Analytics",
            skills: ["Microsoft Excel", "VLOOKUP/XLOOKUP", "Pivot Tables", "Data Cleaning", "Data Query"]
        },
        {
            title: "Development",
            skills: ["HTML", "CSS", "MySQL", "PHP", "TypeScript", "React", "Next.js"]
        },
        {
            title: "Soft Skills",
            skills: ["Communication", "Problem Solving", "Adaptability", "Collaboration", "Testing", "UAT"]
        }
    ];

    return (
        <section id="skills" className="py-32 relative bg-background border-b border-border">
            <div className="container px-6 md:px-12">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-4 mb-20 text-center items-center"
                >
                    <div className="flex items-center gap-3 text-foreground font-mono text-xs tracking-[0.2em] uppercase font-bold">
                        <Terminal className="w-4 h-4" />
                        <span>04. Toolkit</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-heading font-extrabold uppercase tracking-tight">Core Capabilities</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex flex-col border border-border bg-card p-10 hover:shadow-[-8px_8px_0_0_rgba(255,255,255,0.1)] transition-all duration-300 dark:hover:shadow-[-8px_8px_0_0_rgba(100,100,100,0.5)]"
                        >
                            <h3 className="text-2xl font-bold font-heading uppercase tracking-widest mb-8 text-foreground pb-4 border-b border-border">
                                {category.title}
                            </h3>
                            <div className="flex flex-col gap-4">
                                {category.skills.map((skill, i) => (
                                    <div
                                        key={i}
                                        className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors cursor-default"
                                    >
                                        <div className="w-0 h-px bg-foreground transition-all duration-300 group-hover:w-6"></div>
                                        <span className="font-mono text-sm uppercase tracking-widest font-semibold">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
