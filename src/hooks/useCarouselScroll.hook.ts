import { MouseEventHandler, useEffect, useState } from 'react';

export default function useCarouselScroll(selectors: string) {
  const [carouselContainer, setCarouselContainer] = useState<Element | null>(null);

  const scrollToLeft: MouseEventHandler<HTMLButtonElement> = () => {
    if (carouselContainer) {
      carouselContainer.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollToRight: MouseEventHandler<HTMLButtonElement> = () => {
    if (carouselContainer) {
      carouselContainer.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setCarouselContainer(document.querySelector(selectors));
  }, [selectors]);

  return { scrollToLeft, scrollToRight };
}
