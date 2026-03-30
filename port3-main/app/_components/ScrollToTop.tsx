"use client";

import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Gérer la visibilité du bouton selon le défilement
  useEffect(() => {
    const toggleVisibility = () => {
      // On affiche le bouton si on a descendu de plus de 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Animation fluide
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={styles.button}
          aria-label="Retour en haut"
        ) : (
          null
        )}
      </>
  );
};

// Petit exemple de styles rapides (à adapter avec Tailwind ou CSS Modules)
const styles = {
  button: {
    position: 'fixed',
    bottom: '40px',
    right: '40px',
    padding: '10px 15px',
    fontSize: '20px',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    zIndex: 1000,
  },
};

export default ScrollToTop;