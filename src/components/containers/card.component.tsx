import React from 'react';

type CardPropsType = {
  className?: string;
} & React.PropsWithChildren;

function Card({ className, children }: CardPropsType) {
  return (
    <div
      className={
        'z-10 rounded-3xl transition delay-300 duration-500 shadow-lg hover:shadow-xl hover:scale-[1.02] ' + className
      }
    >
      {children}
    </div>
  );
}

export default React.memo(Card);
