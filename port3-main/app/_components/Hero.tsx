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

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isDeleting]);

  return (
    <div className="bg-blue-700 px-6 py-8">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Texte aligné à gauche */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-white">
            Sandjy GAUDIN
          </h1>
          <div className="text-lg text-blue-100 min-h-[24px] mt-1">
            {displayedText}
            <span className="animate-pulse">|</span>
          </div>
        </div>

        {/* Photo alignée à droite - taille réduite */}
        <div className="ml-5 w-23 h-26 rounded-full overflow-hidden border-2 border-white">
        <Image
          src="/Images/Sandjyphoto.png"
          alt="Portrait"
          width={96}
          height={96}
          className="object-cover"
          priority
        />
          <div className="w-full h-full bg-blue-500 flex items-center justify-center">
            <span className="text-white text-xs">PHOTO</span>
          </div>    
        </div>
      </div>
    </div>
  );
}