import { useState, useEffect } from 'react';

export function useCounterAnimation(target: number) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return count;
}