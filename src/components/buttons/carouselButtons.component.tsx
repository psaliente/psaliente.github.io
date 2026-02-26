import { MouseEventHandler } from 'react';

type CarouselButtonsProps = {
  leftAction: MouseEventHandler<HTMLButtonElement>;
  rightAction: MouseEventHandler<HTMLButtonElement>;
};
export default function CarouselButtons({ leftAction, rightAction }: CarouselButtonsProps) {
  return (
    <>
      <button
        className="rounded-full bg-white dark:bg-gray-800 hover:bg-gray-200 active:bg-gray-400 dark:text-white size-12 drop-shadow-sm transition delay-300 duration-500"
        onClick={leftAction}
      >
        &lt;
      </button>
      <button
        className="rounded-full bg-white dark:bg-gray-800 hover:bg-gray-200 active:bg-gray-400 dark:text-white size-12 drop-shadow-sm transition delay-300 duration-500"
        onClick={rightAction}
      >
        &gt;
      </button>
    </>
  );
}
