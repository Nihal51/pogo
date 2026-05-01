import { useEffect, useRef, useState } from 'react';

export default function useInterpolatedProgress(stepMs = 2200) {
  const [progress, setProgress] = useState(0);
  const targetRef = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      targetRef.current = (targetRef.current + 0.25) % 1;
    }, stepMs);

    let frame;
    const animate = () => {
      setProgress((current) => {
        const delta = targetRef.current - current;
        return Math.abs(delta) < 0.002 ? targetRef.current : current + delta * 0.08;
      });
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => {
      clearInterval(timer);
      cancelAnimationFrame(frame);
    };
  }, [stepMs]);

  return progress;
}
