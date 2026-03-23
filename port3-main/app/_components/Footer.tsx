'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import LegalContent from './legal'; // <--- Import de ton fichier legal.tsx

export function Footer() {
    const pathname = usePathname();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Bloque le scroll quand la modal est là
    useEffect(() => {
        document.body.style.overflow = isModalOpen ? 'hidden' : 'unset';
    }, [isModalOpen]);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
        if (pathname !== '/') {
            e.preventDefault();
            window.location.href = `/${hash}`;
            return;
        }
        e.preventDefault();
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
            window.scrollTo({ top: element.offsetTop - 100, behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-background text-white border-t border-gray-800 relative">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Portfolio</h3>
                        <p className="text-gray-400 text-sm">Développeur passionné créant des solutions innovantes et performantes.</p>
                        <div className="flex space-x-4">
                            <a href="https://github.com/SandjyGAUDIN" target="_blank" className="text-gray-400 hover:text-white transition-colors"><FaGithub size={20} /></a>
                            <a href="https://www.linkedin.com/in/sandjy-gaudin-665525290/" target="_blank" className="text-gray-400 hover:text-white transition-colors"><FaLinkedin size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-blue-400">Navigation</h4>
                        <ul className="space-y-2 text-sm text-gray-400 font-medium">
                            <li><Link href="#Accueil" onClick={(e) => handleScroll(e, '#Accueil')} className="hover:text-white transition-colors">Accueil</Link></li>
                            <li><Link href="#Propos" onClick={(e) => handleScroll(e, '#Propos')} className="hover:text-white transition-colors">À propos</Link></li>
                            <li><Link href="#Competences" onClick={(e) => handleScroll(e, '#Competences')} className="hover:text-white transition-colors">Compétences</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-blue-400">Liens</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/Projets" className="hover:text-white transition-colors font-medium">Mes projets</Link></li>
                            <li><Link href="#Contact" onClick={(e) => handleScroll(e, '#Contact')} className="hover:text-white transition-colors font-medium">Contact</Link></li>
                            {/* BOUTON POUR OUVRIR LA MODAL */}
                            <li>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="hover:text-white transition-colors cursor-pointer font-medium"
                                >
                                    Mentions légales
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-blue-400">Contact</h4>
                        <p className="text-gray-400 text-sm italic">sandjygaudin51@gmail.com</p>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-xs">
                    <p>© {new Date().getFullYear()} Portfolio de Sandjy GAUDIN.</p>
                </div>
            </div>

            {/* STRUCTURE DE LA MODAL */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
                    <div className="relative bg-gray-900 border border-gray-700 w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl shadow-2xl">
                        <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-4 flex justify-between items-center z-20">
                            <span className="text-white font-bold uppercase text-xs tracking-widest">Mentions Légales</span>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white text-3xl leading-none">&times;</button>
                        </div>

                        {/* APPEL DU CONTENU DE LEGAL.TSX */}
                        <LegalContent />

                        <div className="p-4 border-t border-gray-800 text-center bg-gray-900">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-2 rounded font-bold text-sm transition-all shadow-lg shadow-blue-900/20"
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </footer>
    );
}