'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import LegalContent from './legal';

export function Footer() {
    const pathname = usePathname();
    const [isModalOpen, setIsModalOpen] = useState(false);

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
        <footer className="bg-gray-950 text-white border-t border-gray-800">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Sandjy <span className="text-blue-500">Gaudin</span></h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Étudiant en BUT Informatique passionné par le développement logicel et web. Basé à Reims.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="https://github.com/SandjyGAUDIN" target="_blank" className="text-gray-400 hover:text-white transition-colors"><FaGithub size={22} /></Link>
                            <Link href="https://www.linkedin.com/in/sandjy-gaudin-665525290/" target="_blank" className="text-gray-400 hover:text-white transition-colors"><FaLinkedin size={22} /></Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-blue-400">Navigation</h4>
                        <ul className="space-y-3 text-sm text-gray-400 font-medium">
                            <li><Link href="#Accueil" onClick={(e) => handleScroll(e, '#Accueil')} className="hover:text-white transition-colors">Accueil</Link></li>
                            <li><Link href="#Propos" onClick={(e) => handleScroll(e, '#Propos')} className="hover:text-white transition-colors">À propos</Link></li>
                            <li><Link href="#Competences" onClick={(e) => handleScroll(e, '#Competences')} className="hover:text-white transition-colors">Compétences</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-blue-400">Liens utiles</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/Projets" className="hover:text-white transition-colors font-medium">Tous mes projets</Link></li>
                            <li><Link href="#Contact" onClick={(e) => handleScroll(e, '#Contact')} className="hover:text-white transition-colors font-medium">Me contacter</Link></li>
                            <li>
                                <button onClick={() => setIsModalOpen(true)} className="hover:text-white transition-colors font-medium">
                                    Mentions légales
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-blue-400">Contact</h4>
                        <p className="text-gray-400 text-sm">Reims, France</p>
                        <p className="text-gray-300 text-sm font-bold mt-2">sandjygaudin51@gmail.com</p>
                    </div>
                </div>

                <div className="border-t border-gray-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs uppercase tracking-tighter">
                    <p>© {new Date().getFullYear()} Sandjy GAUDIN. Tous droits réservés.</p>
                    <p>Développé avec Next.js & Tailwind CSS</p>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setIsModalOpen(false)}></div>
                    <div className="relative bg-gray-900 border border-gray-700 w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl shadow-2xl">
                        <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex justify-between items-center z-20">
                            <span className="text-white font-bold uppercase text-xs tracking-widest">Mentions Légales</span>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white text-3xl leading-none">&times;</button>
                        </div>
                        <div className="p-8"><LegalContent /></div>
                        <div className="p-6 border-t border-gray-800 text-center bg-gray-900/50">
                            <button onClick={() => setIsModalOpen(false)} className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-3 rounded-xl font-bold text-sm transition-all shadow-lg">
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </footer>
    );
}