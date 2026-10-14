import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';

export default function PageTransition({ children }) {
  const location = useLocation();

  return (
    <Box
      key={location.pathname}
      sx={{
        animation: 'pageFadeIn 0.38s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        '@keyframes pageFadeIn': {
          '0%': {
            opacity: 0,
            transform: 'translateY(14px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      }}
    >
      {children}
    </Box>
  );
}
