export default function useCarouselScroll(selectors: string) {
  const carouselContainer = document.querySelector(selectors);

  const scrollToLeft = () => {
    if (carouselContainer) {
      carouselContainer.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollToRight = () => {
    if (carouselContainer) {
      carouselContainer.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return { scrollToLeft, scrollToRight };
}
