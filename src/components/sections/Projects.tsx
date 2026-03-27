"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function Projects() {
    const projects = [
        {
            id: 1,
            title: "Money Manager App",
            institution: "Telkom University",
            period: "Oct 2023 – Dec 2023",
            role: "IT Support & Product Design",
            tags: ["Support", "UI/UX", "Hardware", "Collaboration"],
            summary: "Delivered technical support and contributed to structural application features.",
            details: [
                "Delivered technical support to the development team, actively resolving hardware and application-related issues.",
                "Contributed to the structural design of application features and mapped out user flows to enhance the overall user experience.",
                "Collaborated cross-functionally to ensure the smooth daily operation of the system."
            ]
        },
        {
            id: 2,
            title: "Data Processing Module",
            institution: "Microsoft Excel Bootcamp",
            period: "Dec 2025 – Jan 2026",
            role: "Data Analyst Trainee",
            tags: ["Excel", "Analytics", "VLOOKUP", "Pivot"],
            summary: "Conducted exhaustive data processing and analysis tailored for administrative reporting.",
            details: [
                "Conducted data processing and analysis case studies tailored for administrative needs and operational reporting.",
                "Mastered and applied advanced Excel functionalities, including VLOOKUP/XLOOKUP, Pivot Tables, Data Cleaning, and conditional formulas to extract actionable insights."
            ]
        }
    ];

    return (
        <section id="projects" className="py-32 relative bg-background border-b border-border">
            <div className="container px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-4 mb-20 border-l-4 border-foreground pl-6"
                >
                    <div className="flex items-center gap-3 text-foreground font-mono text-xs tracking-[0.2em] uppercase font-bold">
                        <FolderGit2 className="w-4 h-4" />
                        <span>03. Execution</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-heading font-extrabold uppercase tracking-tight">Selected Work</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <Dialog key={project.id}>
                            <DialogTrigger className="w-full text-left bg-transparent border-none p-0 focus:outline-none">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: 0.1 * index }}
                                    className="group relative cursor-pointer outline-none block aspect-square md:aspect-auto md:h-[450px]"
                                >
                                    <div className="h-full flex flex-col p-10 border border-border bg-card/10 hover:bg-foreground hover:text-background transition-all duration-500 overflow-hidden">

                                        <div className="flex justify-between items-start mb-12">
                                            <FolderGit2 className="w-12 h-12 text-foreground group-hover:text-background transition-colors duration-300" />
                                            <div className="p-3 border border-border group-hover:border-background group-hover:bg-background group-hover:text-foreground transition-colors duration-300">
                                                <ExternalLink className="w-5 h-5" />
                                            </div>
                                        </div>

                                        <h3 className="text-3xl font-extrabold font-heading uppercase mb-3 leading-tight">
                                            {project.title}
                                        </h3>
                                        <p className="font-mono text-sm border-b border-border pb-6 mb-6 uppercase tracking-widest text-muted-foreground group-hover:text-background/70 group-hover:border-background/30 transition-colors">
                                            {project.institution}
                                        </p>
                                        <p className="text-muted-foreground group-hover:text-background/90 text-lg font-light line-clamp-3 mb-auto transition-colors">
                                            {project.summary}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-8">
                                            {project.tags.slice(0, 3).map((tag, i) => (
                                                <span key={i} className="px-3 py-1 text-xs font-mono font-bold uppercase tracking-widest border border-border group-hover:border-background/50 group-hover:text-background transition-colors">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </DialogTrigger>

                            <DialogContent className="sm:max-w-3xl bg-background border border-foreground p-0 rounded-none shadow-[15px_15px_0_0_rgba(100,100,100,0.2)]">
                                <div className="p-10 md:p-14">
                                    <DialogHeader className="mb-10 text-left border-b border-border pb-8">
                                        <DialogTitle className="text-4xl md:text-5xl font-heading font-extrabold uppercase tracking-tight text-foreground mb-4">
                                            {project.title}
                                        </DialogTitle>
                                        <DialogDescription className="font-mono text-sm tracking-widest uppercase text-foreground bg-muted p-2 inline-block">
                                            {project.role} • {project.period}
                                        </DialogDescription>
                                    </DialogHeader>

                                    <div className="space-y-8 text-muted-foreground text-lg font-light leading-relaxed">
                                        <ul className="flex flex-col gap-5">
                                            {project.details.map((item, i) => (
                                                <li key={i} className="flex items-start gap-4">
                                                    <span className="text-foreground shrink-0 mt-1 font-mono font-bold">/</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="pt-10 border-t border-border mt-10">
                                            <h4 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">Tech Stack</h4>
                                            <div className="flex flex-wrap gap-3">
                                                {project.tags.map((tag, i) => (
                                                    <span key={i} className="px-4 py-2 border border-border text-xs font-mono font-bold uppercase tracking-widest bg-card hover:bg-foreground hover:text-background transition-colors cursor-default">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="pt-10 flex items-center justify-end gap-6 mt-8">
                                            <Button variant="outline" className="h-12 border-foreground uppercase tracking-widest text-xs font-bold px-8 hover:bg-foreground hover:text-background rounded-none">
                                                <svg className="w-4 h-4 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.26c3.1-.3 6.3-1.5 6.3-6.74a5.45 5.45 0 0 0-1.5-3.8 5.41 5.41 0 0 0-.1-3.76s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.41 5.41 0 0 0-.1 3.76 5.45 5.45 0 0 0-1.5 3.8c0 5.24 3.2 6.44 6.3 6.74a4.8 4.8 0 0 0-1 3.26v4" /><path d="M9 20c-5 1.5-5-2.5-7-3" /></svg> Repository
                                            </Button>
                                            <Button className="h-12 bg-foreground text-background font-bold tracking-widest uppercase text-xs px-8 hover:bg-muted-foreground rounded-none">
                                                <ExternalLink className="w-4 h-4 mr-3" /> Live Demo
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
        </section>
    );
}
