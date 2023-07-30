import { useEffect, useRef } from 'react';

const useIntersectionObserver = (
  callback: (entry: IntersectionObserverEntry) => void,
  deps: any[]
) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(callback);
    });

    observer.observe(ref.current);

    return () => {
      if (!ref.current) return;

      observer.unobserve(ref.current);
    };
  }, deps);

  return { ref };
};

export { useIntersectionObserver };
