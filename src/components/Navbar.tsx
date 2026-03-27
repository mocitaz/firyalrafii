"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setMobileMenuOpen(false);
        }
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                isScrolled ? "bg-background/90 backdrop-blur-md border-border py-4" : "bg-transparent border-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                <a href="#" className="flex flex-col relative group z-50">
                    <span className="font-heading font-extrabold text-2xl tracking-tighter text-foreground uppercase">
                        FIRYAL
                    </span>
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-foreground transition-all duration-300 group-hover:w-full"></span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={(e) => handleScrollTo(e, link.href)}
                                    className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-6 border-l border-border pl-6">
                        <ThemeToggle />
                        <Button
                            className="bg-foreground text-background font-mono text-xs font-bold uppercase tracking-widest px-6 h-10 rounded-none hover:bg-muted-foreground transition-all group border border-transparent hover:border-foreground"
                            onClick={() => window.open("/cv.pdf", "_blank")}
                        >
                            CV <Download className="w-4 h-4 ml-2 group-hover:translate-y-[-2px] transition-transform" />
                        </Button>
                    </div>
                </nav>

                {/* Mobile Nav Toggle */}
                <div className="flex items-center gap-4 md:hidden z-50">
                    <ThemeToggle />
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 text-foreground focus:outline-none border border-border bg-card"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-6 md:hidden shadow-lg"
                    >
                        <ul className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleScrollTo(e, link.href)}
                                        className="block text-xl font-heading font-bold uppercase tracking-wider text-foreground hover:text-muted-foreground transition-colors border-b border-border/50 pb-4"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <Button
                            className="w-full justify-center bg-foreground text-background font-mono font-bold uppercase tracking-widest h-14 rounded-none"
                            onClick={() => window.open("/cv.pdf", "_blank")}
                        >
                            Download CV <Download className="w-5 h-5 ml-2" />
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
