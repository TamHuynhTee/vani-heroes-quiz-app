'use client';
import { DrawerProvider, ModalProvider } from '@/components';
// import { ReduxProvider } from '@/redux/provider';
import React from 'react';

type ComponentProps = { children: React.ReactNode };
type ProviderProps = Record<string, any>;
type ProviderWithProps =
  | [any]
  | [
      any,
      //   React.ReactNode | ((...args: any) => React.JSX.Element),
      ProviderProps
    ];

const buildProvidersTree = (componentsWithProps: Array<ProviderWithProps>) => {
  const initialComponent = ({ children }: ComponentProps) => <>{children}</>;

  return componentsWithProps.reduce(
    (AccumulatedComponents, [Provider, props = {}]) => {
      // eslint-disable-next-line react/display-name
      return ({ children }: ComponentProps) => {
        return (
          <AccumulatedComponents>
            <Provider {...props}>{children}</Provider>
          </AccumulatedComponents>
        );
      };
    },
    initialComponent
  );
};

const ProviderTree = buildProvidersTree([[ModalProvider], [DrawerProvider]]);

export default ProviderTree;
