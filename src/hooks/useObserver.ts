import { MutableRefObject, RefObject, useEffect, useRef } from 'react';

const useIntersectionObserver = (
  target: RefObject<HTMLDivElement>,
  onIntersect: (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver,
  ) => void,
  threshold = 0.8,
) => {
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    if (observer.current) observer.current?.disconnect();

    observer.current = new IntersectionObserver(onIntersect, {
      threshold,
      // root: null,
      // rootMargin: "-20% 0px -80% 0px", // only 20% of the viewport height is visible at the top and bottom edges

    });

    if (target.current) observer.current?.observe(target.current);

    // Clean up function
    return () => {
      if (observer.current) observer.current?.disconnect();
    };
  }, [target, onIntersect, threshold]);

  return observer;
};

export default useIntersectionObserver;
