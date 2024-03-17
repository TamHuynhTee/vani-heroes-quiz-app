import React, { ButtonHTMLAttributes } from 'react';
import cn from 'clsx';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {};

export const PrimaryButton = (props: Props) => {
  const { className, ...restProps } = props;
  return (
    <button
      {...restProps}
      className={cn('bg-primary text-white px-4 py-2 rounded-base', className)}
    ></button>
  );
};
