'use client';
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
        <span key="portfolio">Port<span className="text-blue-700">folio.</span></span>,
        <span key="name">Sandjy <span className="text-blue-700">Gaudin.</span></span>
    ];

    useEffect(() => {
        const cycleTexts = () => {
            timeoutRef.current = setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % texts.length);
                cycleTexts();
            }, 5000);
        };

        cycleTexts();
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [texts.length]);

    const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
        e.preventDefault();
        
        if (pathname === '/') {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                window.scrollTo({
                    top: element.offsetTop - 100,
                    behavior: 'smooth'
                });
                window.history.pushState(null, '', hash);
            }
        } else {
            window.location.href = `/${hash}`;
        }
        
        setIsMenuOpen(false);
    };

    return (
        <header className="sticky top-0 py-3 bg-background z-50 border-b">
            <Section className="flex items-center justify-between">
                <Link href="/" className="min-w-[180px] h-8 flex items-center justify-start overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={currentIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="text-lg font-geist-mono text-primary whitespace-nowrap absolute"
                        >
                            {texts[currentIndex]}
                        </motion.h1>
                    </AnimatePresence>
                </Link>
                
                {/* Version PC */}
                <nav className="hidden sm:flex items-center gap-2">
                    <ul className="flex gap-6">
                        <li><Link href="/#Accueil" onClick={(e) => handleNavigation(e, '#Accueil')} className="text-[15px] hover:text-blue-500">Accueil</Link></li>
                        <li><Link href="/#Propos" onClick={(e) => handleNavigation(e, '#Propos')} className="text-[15px] hover:text-blue-500">À propos</Link></li>
                        <li><Link href="/#Competences" onClick={(e) => handleNavigation(e, '#Competences')} className="text-[15px] hover:text-blue-500">Stack technique et applications</Link></li>
                        <li><Link href="/#E5" onClick={(e) => handleNavigation(e, '#E5')} className="text-[15px] hover:text-blue-500">Mes réalisations</Link></li>
                        <li><Link href="/#Contact" onClick={(e) => handleNavigation(e, '#Contact')} className="text-[15px] hover:text-blue-500">Contact</Link></li>
                    </ul>
                </nav>

                {/* Bouton hamburger */}
                <Button 
                    variant="ghost" 
                    size="icon" 
                    className="sm:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>
            </Section>

            {/* Menu mobile */}
            {isMenuOpen && (
                <div className="sm:hidden bg-background border-t">
                    <Section className="flex flex-col py-4 space-y-3">
                        <Link href="/#Accueil" onClick={(e) => handleNavigation(e, '#Accueil')} className="py-2 px-4 hover:bg-gray-100 rounded">Accueil</Link>
                        <Link href="/#Propos" onClick={(e) => handleNavigation(e, '#Propos')} className="py-2 px-4 hover:bg-gray-100 rounded">À propos</Link>
                        <Link href="/#Competences" onClick={(e) => handleNavigation(e, '#Competences')} className="py-2 px-4 hover:bg-gray-100 rounded">Stack technique et applications</Link>
                        <Link href="/#E5" onClick={(e) => handleNavigation(e, '#E5')} className="py-2 px-4 hover:bg-gray-100 rounded">Mes réalisations</Link>
                        <Link href="/#Contact" onClick={(e) => handleNavigation(e, '#Contact')} className="py-2 px-4 hover:bg-gray-100 rounded">Contact</Link>
                        <Button variant="outline" className="mt-2">
                            <GithubIcon size={16} className="mr-2" />
                            GitHub
                        </Button>
                    </Section>
                </div>
            )}
        </header>
    );
};