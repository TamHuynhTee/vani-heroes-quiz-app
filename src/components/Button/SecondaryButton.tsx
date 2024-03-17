import React, { ButtonHTMLAttributes } from 'react';
import cn from 'clsx';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {};

export const SecondaryButton = (props: Props) => {
  const { className, ...restProps } = props;
  return (
    <button
      {...restProps}
      className={cn(
        'bg-white text-primary border border-primary px-4 py-2 rounded-base',
        className
      )}
    ></button>
  );
};
