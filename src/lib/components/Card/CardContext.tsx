import { createStyledContext } from 'tamagui';

export const CardContext = createStyledContext({
  size: 'md' as const,
  variant: 'default' as const,
  interactive: false as const,
});
