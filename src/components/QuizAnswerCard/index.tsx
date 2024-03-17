'use client';
import { InterfaceRepository } from '@/interfaces';
import React from 'react';
import cn from 'clsx';

type Props = InterfaceRepository.IQuizOption & {
  onClick: () => void;
  active?: boolean;
};

export const QuizAnswerCard = (props: Props) => {
  const { label, correct, onClick } = props;

  const showError = correct === false && props.active === true;
  const showCorrect = correct === true && props.active === true;

  return (
    <div
      className={cn({
        'mt-4 bg-white text-sm font-semibold px-4 py-6 rounded-lg cursor-pointer border border-third hover:border-primary [&>p]:hover:text-dark':
          true,
        '!border-error': showError,
        '!border-primary': showCorrect,
      })}
      onClick={onClick}
    >
      <p
        className={cn({
          'text-gray': true,
          '!text-dark': showError,
          '!text-primary': showCorrect,
        })}
      >
        {label}
        {showCorrect ? <span className="check_mark"></span> : null}
      </p>
      {showError ? (
        <span className="inline-block mt-2 text-error text-xs">
          Please try again
        </span>
      ) : null}
    </div>
  );
};
