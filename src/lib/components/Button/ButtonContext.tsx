import type { ColorTokens, SizeTokens } from 'tamagui';
import { createStyledContext } from 'tamagui';

export const ButtonContext = createStyledContext({
  size: '$md' as SizeTokens,
  color: '$color' as ColorTokens,
});
