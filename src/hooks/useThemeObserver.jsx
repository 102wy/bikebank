import { useEffect } from 'react';
export const useThemeObserver = ({ setState, stateNumber }) => {
  const isRef = useRef();
  const option = {};

  useEffect(() => {
    const observer = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting) {
        setState(stateNumber);
      }
    }, option);

    if (isRef.current) {
      observer.observe(isRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return [isRef];
};
