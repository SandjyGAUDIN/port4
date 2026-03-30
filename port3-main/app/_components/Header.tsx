"use client";
import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import { GithubIcon } from "./icons/githubicon";
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    
    const texts = [
        <span key="portfolio">Port<span className="text-blue-600">folio.</span></span>,
        <span key="name">Sandjy <span className="text-blue-600">Gaudin.</span></span>
    ];

    useEffect(() => {
        const cycleTexts = () => {
            timeoutRef.current = setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % texts.length);
                cycleTexts();
            }, 5000);
        };
        cycleTexts();
        return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
    }, [texts.length]);

    const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
        e.preventDefault();
        if (pathname === '/') {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
                window.history.pushState(null, '', hash);
            }
        } else {
            window.location.href = `/${hash}`;
        }
        setIsMenuOpen(false);
    };

    const navLinks = [
        { name: "Accueil", href: "#Accueil" },
        { name: "À propos", href: "#Propos" },
        { name: "Stack technique", href: "#Competences" }, // Libellé raccourci pour gagner de la place
        { name: "Réalisations", href: "#E5" },       // Libellé raccourci
        { name: "Contact", href: "#Contact" },
    ];

    return (
        <header className="sticky top-0 w-full py-4 bg-background/80 backdrop-blur-md z-50 border-b border-secondary/50">
            <Section className="flex items-center justify-between gap-4">
                {/* Logo Section */}
                <div className="relative min-w-[150px] h-8 flex items-center">
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={currentIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.4 }}
                            className="text-xl font-bold tracking-tight whitespace-nowrap"
                        >
                            {texts[currentIndex]}
                        </motion.h1>
                    </AnimatePresence>
                </div>
                
                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center flex-1 justify-end">
                    <ul className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link 
                                    href={`/${link.href}`} 
                                    onClick={(e) => handleNavigation(e, link.href)}
                                    className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Social/Action Button */}
                <div className="hidden sm:flex items-center ml-4">
                    <Link href="https://https://github.com/SandjyGAUDIN" target="_blank">
                        <Button variant="ghost" size="sm" className="px-3">
                            <GithubIcon size={18} />
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Trigger */}
                <Button 
                    variant="ghost" 
                    size="icon" 
                    className="lg:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>
            </Section>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-background border-t overflow-hidden"
                    >
                        <Section className="flex flex-col py-6 gap-4">
                            {navLinks.map((link) => (
                                <Link 
                                    key={link.name}
                                    href={`/${link.href}`} 
                                    onClick={(e) => handleNavigation(e, link.href)} 
                                    className="text-lg font-medium hover:text-blue-600"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <hr />
                            <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                <GithubIcon size={18} className="mr-2" /> GitHub
                            </Button>
                        </Section>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};