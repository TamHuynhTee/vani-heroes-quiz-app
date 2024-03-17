'use client';
import { createContext, useContext } from 'react';
import { ModalKeyType } from './keys';

type ModalContextValue = {
  open: (key: ModalKeyType, data?: any) => void;
  close: (key: ModalKeyType) => void;
};

export const ModalContext = createContext<ModalContextValue>({
  open(key: ModalKeyType, data?: any) {},
  close(key: ModalKeyType) {},
});

export const useModal = () => useContext(ModalContext);
