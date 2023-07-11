import React, { useEffect, useRef, useState } from 'react';

interface Dimensions {
  width: number;
  height: number;
  aspectRatio: number;
}

export function useContainerDimensions(ref: React.RefObject<HTMLElement>): Dimensions {
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0, aspectRatio: 0 });

  useEffect(() => {
    const observeTarget = ref.current;

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const newWidth = entry.contentRect.width;
        const newHeight = entry.contentRect.height;
        setDimensions({
          width: newWidth,
          height: newHeight,
          aspectRatio: newHeight !== 0 ? newWidth / newHeight : 0,
        });
      });
    });

    if (observeTarget) {
      resizeObserver.observe(observeTarget);
    }

    return () => {
      if (observeTarget) {
        resizeObserver.unobserve(observeTarget);
      }
    };
  }, [ref]);

  return dimensions;
}
