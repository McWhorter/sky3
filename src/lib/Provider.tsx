import React from 'react';
import { TamaguiProvider } from 'tamagui';
import type { TamaguiProviderProps } from 'tamagui';
import { config as defaultConfig } from '../../skylight/config';

export interface ProviderProps extends Omit<TamaguiProviderProps, 'config'> {
  config?: TamaguiProviderProps['config'];
  children: React.ReactNode;
}

export const Provider: React.FC<ProviderProps> = ({
  config = defaultConfig,
  children,
  ...props
}) => {
  return (
    <TamaguiProvider config={config} {...props}>
      {children}
    </TamaguiProvider>
  );
};
