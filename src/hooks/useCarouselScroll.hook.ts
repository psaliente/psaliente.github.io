import { MouseEventHandler, useMemo, useState } from 'react';

export default function useCarouselScroll(selectors: string) {
  const [disableLeft, setDisableLeft] = useState(false);
  const [disableRight, setDisableRight] = useState(false);

  const carouselContainer = useMemo(() => {
    const container = document.querySelector(selectors);
    console.log(selectors, container);

    return container instanceof HTMLElement ? container : null;
  }, [selectors]);

  const checkScrollPosition = () => {
    if (carouselContainer) {
      console.log(carouselContainer.scrollLeft, carouselContainer.clientWidth, carouselContainer.scrollWidth);
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

  return { scrollToLeft, scrollToRight, disableLeft, disableRight };
}
