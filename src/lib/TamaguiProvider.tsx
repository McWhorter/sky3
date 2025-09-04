import React from 'react'
import { TamaguiProvider as TamaguiCore } from 'tamagui'
import type { TamaguiProviderProps as CoreProviderProps } from 'tamagui'
import defaultConfig from '../../tamagui.config'

export interface TamaguiProviderProps extends Omit<CoreProviderProps, 'config'> {
  children: React.ReactNode
  /**
   * Custom Tamagui configuration. If not provided, uses the library's default config.
   * This allows consumers to override themes, tokens, etc.
   */
  config?: CoreProviderProps['config']
}

/**
 * TamaguiProvider wrapper that provides sensible defaults while allowing customization.
 * 
 * @example
 * // Use with default config
 * <TamaguiProvider>
 *   <App />
 * </TamaguiProvider>
 * 
 * @example
 * // Use with custom config
 * <TamaguiProvider config={myCustomConfig}>
 *   <App />
 * </TamaguiProvider>
 */
export const TamaguiProvider: React.FC<TamaguiProviderProps> = ({ 
  children, 
  config = defaultConfig,
  ...props 
}) => {
  return (
    <TamaguiCore config={config} {...props}>
      {children}
    </TamaguiCore>
  )
}
