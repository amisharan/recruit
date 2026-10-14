import React from 'react';
import { Box } from '@mui/material';

export default function MarqueeText({ items, speed = 28, reverse = false, sx = {} }) {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        display: 'flex',
        position: 'relative',
        maskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
        width: '100%',
        ...sx,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 3,
          flexShrink: 0,
          animation: `marqueeTrack ${speed}s linear infinite ${reverse ? 'reverse' : 'normal'}`,
          '@keyframes marqueeTrack': {
            '0%': { transform: 'translateX(0%)' },
            '100%': { transform: 'translateX(-50%)' },
          },
          '&:hover': {
            animationPlayState: 'paused',
          },
        }}
      >
        {items.concat(items).map((item, idx) => (
          <Box key={idx} sx={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}>
            {item}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
