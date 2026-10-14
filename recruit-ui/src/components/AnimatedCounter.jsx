import React, { useState, useEffect, useRef } from 'react';
import { Typography } from '@mui/material';

export default function AnimatedCounter({
  target,
  duration = 2000,
  prefix = '',
  suffix = '',
  variant = 'h3',
  sx = {},
  className = '',
}) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          let startTime = null;

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Smooth easeOutExpo curve
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentVal = Math.floor(easeProgress * target);

            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [target, duration]);

  // Format with commas (e.g. 1,200)
  const formattedCount = count.toLocaleString();

  return (
    <Typography
      ref={elementRef}
      variant={variant}
      className={className}
      sx={{
        display: 'inline-block',
        fontVariantNumeric: 'tabular-nums',
        ...sx,
      }}
    >
      {prefix}
      {formattedCount}
      {suffix}
    </Typography>
  );
}
