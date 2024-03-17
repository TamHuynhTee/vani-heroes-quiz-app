'use client';
import React, { ReactNode, useMemo } from 'react';
import { DrawerContext } from './drawer-context';
import { DrawerKeyType } from './keys';

type DrawerProviderProps = {
  children: ReactNode;
};

export const DrawerProvider = ({ children }: DrawerProviderProps) => {
  function openDrawer(key: DrawerKeyType, data?: any) {
    if (typeof window === 'undefined') return;

    const ele = document.querySelector(`.drawer#drawer-${key}`);
    if (ele) {
      ele.classList.add('opening');
    }
  }

  function closeDrawer(key: DrawerKeyType) {
    if (typeof window === 'undefined') return;

    const ele = document.querySelector(`.drawer#drawer-${key}`);
    if (ele) {
      ele.classList.remove('opening');
    }
  }

  const contextValue = useMemo(
    () => ({
      open: openDrawer,
      close: closeDrawer,
    }),
    []
  );

  return (
    <DrawerContext.Provider value={contextValue}>
      {children}
    </DrawerContext.Provider>
  );
};
