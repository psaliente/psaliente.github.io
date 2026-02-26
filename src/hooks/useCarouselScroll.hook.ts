import { MouseEventHandler, useEffect, useState } from 'react';

export default function useCarouselScroll(selectors: string) {
  const [carouselContainer, setCarouselContainer] = useState<Element | null>(null);
  const [disableLeft, setDisableLeft] = useState(false);
  const [disableRight, setDisableRight] = useState(false);

  const checkScrollPosition = () => {
    if (carouselContainer) {
      setDisableLeft(carouselContainer.scrollLeft <= 0);
      setDisableRight(carouselContainer.scrollLeft + carouselContainer.clientWidth >= carouselContainer.scrollWidth);
    }
  };

  const scrollToLeft: MouseEventHandler<HTMLButtonElement> = () => {
    if (carouselContainer) {
      carouselContainer.scrollBy({ left: -300, behavior: 'smooth' });
      checkScrollPosition();
    }
  };

  const scrollToRight: MouseEventHandler<HTMLButtonElement> = () => {
    if (carouselContainer) {
      carouselContainer.scrollBy({ left: 300, behavior: 'smooth' });
      checkScrollPosition();
    }
  };

  useEffect(() => {
    const container = document.querySelector(selectors);
    setCarouselContainer(container);

    if (container) {
      checkScrollPosition();
    } else {
      setDisableLeft(true);
      setDisableRight(true);
    }
  }, [selectors]);

  return { scrollToLeft, scrollToRight, disableLeft, disableRight };
}
