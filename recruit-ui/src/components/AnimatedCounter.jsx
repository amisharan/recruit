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
  decimals,
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
            const isFloat = Number(target) % 1 !== 0;
            const currentVal = isFloat
              ? parseFloat((easeProgress * target).toFixed(decimals !== undefined ? decimals : 1))
              : Math.floor(easeProgress * target);

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
  }, [target, duration, decimals]);

  // Format with commas and exact decimals if needed
  const isFloat = Number(target) % 1 !== 0;
  const numDecimals = decimals !== undefined ? decimals : (isFloat ? 1 : 0);
  const formattedCount = Number(count).toLocaleString(undefined, {
    minimumFractionDigits: numDecimals,
    maximumFractionDigits: numDecimals,
  });

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
