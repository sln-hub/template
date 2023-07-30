import { useLayoutEffect, useRef, useState } from 'react';

const useResizeObserver = <T extends HTMLElement>(
  defaultValue = 0,

  getSize: (width: ResizeObserverEntry) => number = (entry) =>
    entry.contentRect.width
) => {
  const [size, setSize] = useState<DOMRectReadOnly['width']>(defaultValue);
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setSize(getSize(entry));
      });
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return [ref, size] as const;
};

export { useResizeObserver };
