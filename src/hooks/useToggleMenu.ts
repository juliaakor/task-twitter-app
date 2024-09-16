import { useEffect, useState } from 'react';

export const useToggleMenu = (initialIsOpen = false, mobileBreakpoint = 768) => {
  const [isMenuOpen, setIsMenuOpen] = useState(initialIsOpen);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= mobileBreakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= mobileBreakpoint);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileBreakpoint]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen && isMobile ? 'hidden' : 'auto';
  }, [isMenuOpen, isMobile]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return { isMenuOpen, isMobile, toggleMenu };
};
