import React from 'react';
import cn from 'clsx';

type Props = { children: React.ReactNode; className?: string };

export const Container = (props: Props) => {
  return (
    <div
      className={cn(
        'mx-auto px-4 max-w-[1024px] tablet:px-8 desktop:px-16',
        props.className
      )}
    >
      {props.children}
    </div>
  );
};
