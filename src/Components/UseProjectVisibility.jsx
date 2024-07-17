import { useEffect, useRef, useState } from 'react';

const useProjectVisibility = (count, options) => {
  const refs = useRef([]);
  const [visibility, setVisibility] = useState(new Array(count).fill(false));

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setVisibility(prevVisibility => {
            const newVisibility = [...prevVisibility];
            newVisibility[index] = true; // Set to true to ensure it only happens once
            return newVisibility;
          });
          observer.unobserve(ref);
        }
      }, options);

      if (ref) observer.observe(ref);

      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (refs.current[index]) observer.unobserve(refs.current[index]);
      });
    };
  }, [options, count]);

  return [refs, visibility];
};

export default useProjectVisibility;
