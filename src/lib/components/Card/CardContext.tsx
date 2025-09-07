import { createStyledContext } from 'tamagui';
import type { SizeTokens } from 'tamagui';

export const CardContext = createStyledContext({
  size: '$md' as SizeTokens,
  variant: 'default' as const,
  interactive: false as const,
});
