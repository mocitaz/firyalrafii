import { Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-12 border-t border-border bg-background">
            <div className="container px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
                <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground text-center md:text-left">
                    &copy; {new Date().getFullYear()} Firyal Rafii Muzakki. <br className="md:hidden" />All rights reserved.
                </p>

                <div className="flex items-center gap-6 text-foreground">
                    <a href="https://linkedin.com/in/firyal-rafii-muzakki" target="_blank" rel="noreferrer" className="hover:text-muted-foreground hover:-translate-y-1 transition-all duration-300">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    </a>
                    <a href="mailto:firyalraffy@outlook.co.id" className="hover:text-muted-foreground hover:-translate-y-1 transition-all duration-300">
                        <Mail className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-muted-foreground hover:-translate-y-1 transition-all duration-300">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.26c3.1-.3 6.3-1.5 6.3-6.74a5.45 5.45 0 0 0-1.5-3.8 5.41 5.41 0 0 0-.1-3.76s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.41 5.41 0 0 0-.1 3.76 5.45 5.45 0 0 0-1.5 3.8c0 5.24 3.2 6.44 6.3 6.74a4.8 4.8 0 0 0-1 3.26v4" /><path d="M9 20c-5 1.5-5-2.5-7-3" /></svg>
                    </a>
                </div>

                <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground text-center md:text-right">
                    Engineered in <span className="text-foreground">Indonesia</span>
                </p>
            </div>
        </footer>
    );
}
