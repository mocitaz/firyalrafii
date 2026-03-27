"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Invalid email address."),
    message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    function onSubmit(values: FormData) {
        console.log(values);
        alert("Message sent successfully (Simulation).");
        reset();
    }

    const contactInfo = [
        { icon: <Mail className="w-5 h-5" />, label: "firyalraffy@outlook.co.id", href: "mailto:firyalraffy@outlook.co.id" },
        { icon: <Phone className="w-5 h-5" />, label: "(+62) 811-234-0683", href: "tel:+628112340683" },
        { icon: <MapPin className="w-5 h-5" />, label: "Bandung, Indonesia", href: "#" },
        { icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>, label: "LinkedIn", href: "https://linkedin.com/in/firyal-rafii-muzakki" },
    ];

    return (
        <section id="contact" className="py-32 relative bg-background">
            <div className="container px-6 md:px-12">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-4 mb-20 text-center items-center"
                >
                    <div className="flex items-center gap-3 text-foreground font-mono text-xs tracking-[0.2em] uppercase font-bold">
                        <Send className="w-4 h-4" />
                        <span>06. Transmit</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-heading font-extrabold uppercase tracking-tight">Establish Connection</h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-6xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <h3 className="text-3xl font-bold font-heading uppercase mb-8 tracking-tighter">Initiate Contact</h3>
                        <p className="text-muted-foreground mb-12 text-lg font-light leading-relaxed">
                            Currently open formatting new opportunities and collaborations. Drop a highly structured query or a simple hello below.
                        </p>

                        <div className="flex flex-col gap-6">
                            {contactInfo.map((info, i) => (
                                <a
                                    key={i}
                                    href={info.href}
                                    target={info.href.startsWith("http") ? "_blank" : undefined}
                                    rel="noreferrer"
                                    className="flex items-center gap-6 group w-fit"
                                >
                                    <div className="w-14 h-14 border border-foreground flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                                        {info.icon}
                                    </div>
                                    <span className="text-sm font-mono font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                        {info.label}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="p-10 border border-border bg-card shadow-[12px_12px_0_0_rgba(100,100,100,0.1)]">
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                                <div className="space-y-3">
                                    <label className="text-xs font-mono font-bold uppercase tracking-widest text-foreground">Query Identifier [Name]</label>
                                    <Input
                                        className="h-14 bg-background border-border focus-visible:ring-foreground rounded-none px-4"
                                        {...register("name")}
                                    />
                                    {errors.name && (
                                        <p className="text-xs font-mono tracking-widest uppercase text-red-500 font-bold mt-2">{errors.name.message}</p>
                                    )}
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-mono font-bold uppercase tracking-widest text-foreground">Return Vector [Email]</label>
                                    <Input
                                        type="email"
                                        className="h-14 bg-background border-border focus-visible:ring-foreground rounded-none px-4"
                                        {...register("email")}
                                    />
                                    {errors.email && (
                                        <p className="text-xs font-mono tracking-widest uppercase text-red-500 font-bold mt-2">{errors.email.message}</p>
                                    )}
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-mono font-bold uppercase tracking-widest text-foreground">Payload [Message]</label>
                                    <Textarea
                                        className="min-h-[160px] bg-background border-border focus-visible:ring-foreground rounded-none p-4 resize-none"
                                        {...register("message")}
                                    />
                                    {errors.message && (
                                        <p className="text-xs font-mono tracking-widest uppercase text-red-500 font-bold mt-2">{errors.message.message}</p>
                                    )}
                                </div>

                                <Button type="submit" className="w-full h-16 text-sm font-bold tracking-[0.2em] uppercase bg-foreground text-background hover:bg-muted-foreground transition-all duration-300 rounded-none group">
                                    Execute Transmission
                                    <Send className="w-4 h-4 ml-4 group-hover:translate-x-2 transition-transform" />
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
