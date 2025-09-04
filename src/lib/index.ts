// Main library entry point
export * from './components/Button';
export * from './components/Card';
export * from './components/Input';
export * from './TamaguiProvider';

// Configuration export for consumers who want to extend it
export { default as defaultTamaguiConfig } from '../../tamagui.config';

// Type exports
export type { ButtonProps } from './components/Button';
export type { CardProps } from './components/Card';
export type { InputProps } from './components/Input';
export type { TamaguiProviderProps } from './TamaguiProvider';
