import React from 'react';

type CardPropsType = {
  className?: string;
} & React.PropsWithChildren;

function Card({ className, children }: CardPropsType) {
  return (
    <div className={'z-10 rounded-3xl shadow-lg hover:shadow-xl scale-100 hover:scale-105 ' + className}>
      {children}
    </div>
  );
}

export default React.memo(Card);
