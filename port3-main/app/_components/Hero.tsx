'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function CompactHero() {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const text = "ÉTUDIANT EN BUT INFORMATIQUE - OPTION C# ET WEB";

  useEffect(() => {
    let currentIndex = isDeleting ? text.length : 0;
    const animateText = () => {
      setDisplayedText(text.substring(0, currentIndex));
      if (!isDeleting && currentIndex < text.length) {
        currentIndex++;
        timeoutRef.current = setTimeout(animateText, 100);
      } else if (isDeleting && currentIndex > 0) {
        currentIndex--;
        timeoutRef.current = setTimeout(animateText, 50);
      } else {
        setIsDeleting(!isDeleting);
        timeoutRef.current = setTimeout(animateText, isDeleting ? 1000 : 2000);
      }
    };
    timeoutRef.current = setTimeout(animateText, 500);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [isDeleting]);

  return (
    <section id="Accueil" className="bg-blue-700 px-6 py-12 md:py-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Sandjy GAUDIN
          </h1>
          <h2 className="text-xl text-blue-100 min-h-[28px] font-medium">
            {displayedText}
            <span className="animate-pulse">|</span>
          </h2>
          <p className="mt-4 text-blue-100/80 max-w-lg">
            Développeur passionné basé à Reims, spécialisé dans la création d&apos;applications robustes et d&apos;interfaces web modernes.
          </p>
        </div>

        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
          <Image
            src="/Images/Sandjyphoto.png"
            alt="Photo de profil de Sandjy Gaudin - Développeur Informatique"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}