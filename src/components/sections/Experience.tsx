"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2 } from "lucide-react";

export function Experience() {
    const experiences = [
        {
            id: 1,
            role: "Functional Tester",
            company: "Bank BJB",
            location: "Bandung, Indonesia",
            period: "Maret 2024 – September 2024",
            description: [
                "Executed comprehensive API functional testing utilizing Postman.",
                "Generated detailed UAT (User Acceptance Testing) documents mapping application logic and data queries.",
                "Demonstrated proficiency in MySQL data management and troubleshooting Dbeaver errors.",
                "Orchestrated cross-functional collaboration mapping test scenarios with developers."
            ]
        }
    ];

    return (
        <section id="experience" className="py-32 relative bg-background border-b border-border">
            <div className="container px-6 md:px-12 max-w-5xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-4 mb-20 text-center items-center"
                >
                    <div className="flex items-center gap-3 text-foreground font-mono text-xs tracking-[0.2em] uppercase font-bold">
                        <Briefcase className="w-4 h-4" />
                        <span>02. History</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-heading font-extrabold uppercase tracking-tight">Professional Track</h2>
                </motion.div>

                <div className="relative">
                    {/* Minimal vertical line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center w-full mb-16 last:mb-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Center Node */}
                            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-background border-2 border-foreground -translate-x-1/2 mt-6 md:mt-0 z-10 hidden md:block group-hover:scale-150 transition-transform"></div>

                            {/* Date container */}
                            <div className={`w-full md:w-1/2 flex ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                                <div className="text-sm font-mono tracking-widest uppercase text-muted-foreground border border-border px-4 py-2 bg-card">
                                    {exp.period}
                                </div>
                            </div>

                            {/* Content container */}
                            <div className="w-full md:w-1/2">
                                <div className="border border-border p-8 bg-card/50 hover:bg-card transition-colors duration-500 shadow-[8px_8px_0_0_rgba(0,0,0,1)] dark:shadow-[8px_8px_0_0_rgba(255,255,255,0.1)]">
                                    <h3 className="text-2xl font-bold font-heading uppercase tracking-wide mb-2">
                                        {exp.role}
                                    </h3>
                                    <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm mb-6">
                                        <Building2 className="w-4 h-4" />
                                        <span>{exp.company} • {exp.location}</span>
                                    </div>
                                    <ul className="flex flex-col gap-3">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex items-start gap-4 text-muted-foreground leading-relaxed">
                                                <span className="text-foreground shrink-0 mt-1 font-mono font-bold">-</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
