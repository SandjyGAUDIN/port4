"use client";

import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
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
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={styles.button}
          aria-label="Retour en haut"
        >
          ↑
        </button>
      )}
    </>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  button: {
    position: 'fixed',
    bottom: '40px',
    right: '40px',
    width: '50px',
    height: '50px',
    fontSize: '24px',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default ScrollToTop;