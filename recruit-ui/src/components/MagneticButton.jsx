import React, { useRef, useState } from 'react';
import { Box } from '@mui/material';

export default function MagneticButton({ children, strength = 0.28, sx = {}, ...props }) {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <Box
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      sx={{
        display: 'inline-flex',
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition:
          position.x === 0 && position.y === 0
            ? 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)'
            : 'transform 0.12s ease-out',
        willChange: 'transform',
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
