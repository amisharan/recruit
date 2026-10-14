import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = window.scrollY || document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const percent = (totalScroll / windowHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, percent)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${scrollProgress}%`,
        height: '4px',
        background: 'linear-gradient(90deg, #38bdf8 0%, #2563eb 45%, #7c3aed 80%, #10b981 100%)',
        zIndex: 9999,
        boxShadow: '0 0 12px rgba(56, 189, 248, 0.9)',
        transition: 'width 0.1s cubic-bezier(0.1, 0.5, 0.1, 1)',
        pointerEvents: 'none',
      }}
    />
  );
}
