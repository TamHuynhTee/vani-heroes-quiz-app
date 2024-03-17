import React, { ButtonHTMLAttributes } from 'react';
import cn from 'clsx';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {};

export const DefaultButton = (props: Props) => {
  const { className, ...restProps } = props;
  return (
    <button
      {...restProps}
      className={cn(
        'bg-transparent border text-dark border-third px-4 py-2 rounded-base',
        className
      )}
    ></button>
  );
};
