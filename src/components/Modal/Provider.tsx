'use client';
import React, { ReactNode, useMemo } from 'react';
import { ModalContext } from './modal-context';
import { ModalKeyType } from './keys';

type ModalProviderProps = {
  children: ReactNode;
};

export const ModalProvider = ({ children }: ModalProviderProps) => {
  function openModal(key: ModalKeyType, data?: any) {
    if (typeof window === 'undefined') return;

    const ele = document.querySelector(`.modal#modal-${key}`);
    if (ele) {
      ele.classList.add('opening');
    }
  }

  function closeModal(key: ModalKeyType) {
    if (typeof window === 'undefined') return;

    const ele = document.querySelector(`.modal#modal-${key}`);
    if (ele) {
      ele.classList.remove('opening');
    }
  }

  const contextValue = useMemo(
    () => ({
      open: openModal,
      close: closeModal,
    }),
    []
  );

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};
