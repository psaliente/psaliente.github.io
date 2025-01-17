import { useEffect } from 'react';

export default function useScrollToTop() {
  useEffect(() => {
    window.scrollY = 0;
    window.scrollTo(0, 0);
  }, []);
}
