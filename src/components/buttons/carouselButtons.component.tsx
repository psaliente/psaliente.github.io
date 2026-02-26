import { MouseEventHandler } from 'react';
import CarouselButton from './carouselButton.component';

type CarouselButtonsProps = {
  leftAction: MouseEventHandler<HTMLButtonElement>;
  rightAction: MouseEventHandler<HTMLButtonElement>;
  disableLeft: boolean;
  disableRight: boolean;
};
export default function CarouselButtons({ leftAction, rightAction, disableLeft, disableRight }: CarouselButtonsProps) {
  return (
    <>
      <CarouselButton onClick={leftAction} disabled={disableLeft}>
        &lt;
      </CarouselButton>
      <CarouselButton onClick={rightAction} disabled={disableRight}>
        &gt;
      </CarouselButton>
    </>
  );
}
