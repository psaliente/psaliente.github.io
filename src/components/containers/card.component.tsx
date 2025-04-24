import React from 'react';

type CardPropsType = {
  className?: string;
} & React.PropsWithChildren;

function Card({ className, children }: CardPropsType) {
  return (
    <div
      className={
        'z-10 rounded-3xl shadow-lg dark:shadow-gray-600 hover:shadow-xl hover:dark:shadow-gray-400' + className
      }
    >
      {children}
    </div>
  );
}

export default React.memo(Card);
