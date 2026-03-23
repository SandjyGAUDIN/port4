'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (pathname !== '/') {
      // Si on est sur une autre page, on navigue d'abord vers la home
      e.preventDefault();
      window.location.href = `/${hash}`;
      return;
    }

    e.preventDefault();
    const element = document.getElementById(hash.replace('#', ''));
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', hash);
    }
  };

  return (
    <footer className="bg-background text-white border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Colonne 1 - Logo et description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Portfolio</h3>
            <p className="text-gray-400">
              Développeur passionné créant des solutions innovantes et performantes.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/SandjyGAUDIN" className="text-gray-400 hover:text-white transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/sandjy-gaudin-665525290/" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Colonne 2 - Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="#Accueil" onClick={(e) => handleScroll(e, '#Accueil')} className="text-gray-400 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link href="#Propos" onClick={(e) => handleScroll(e, '#Propos')} className="text-gray-400 hover:text-white transition-colors">À propos</Link></li>
              <li><Link href="#Competences" onClick={(e) => handleScroll(e, '#Competences')} className="text-gray-400 hover:text-white transition-colors">Compétences</Link></li>
              <li><Link href="#E5" onClick={(e) => handleScroll(e, '#E5')} className="text-gray-400 hover:text-white transition-colors">Fiche E5</Link></li>
            </ul>
          </div>

          {/* Colonne 3 - Liens supplémentaires */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens</h4>
            <ul className="space-y-2">
              <li><Link href="#Veille" onClick={(e) => handleScroll(e, '#Veille')} className="text-gray-400 hover:text-white transition-colors">Veille technologique</Link></li>
              <li><Link href="/Projets" className="text-gray-400 hover:text-white transition-colors">Mes projets</Link></li>
              <li><Link href="#Contact" onClick={(e) => handleScroll(e, '#Contact')} className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Colonne 4 - Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>sandjygaudin51@gmail.com</li>
              <li>Reims, France</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} portfolio de Sandjy GAUDIN. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}