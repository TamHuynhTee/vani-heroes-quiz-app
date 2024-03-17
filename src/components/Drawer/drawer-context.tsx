'use client';
import { createContext, useContext } from 'react';
import { DrawerKeyType } from './keys';

type DrawerContextValue = {
  open: (key: DrawerKeyType, data?: any) => void;
  close: (key: DrawerKeyType) => void;
};

export const DrawerContext = createContext<DrawerContextValue>({
  open(key: DrawerKeyType, data?: any) {},
  close(key: DrawerKeyType) {},
});

export const useDrawer = () => useContext(DrawerContext);
