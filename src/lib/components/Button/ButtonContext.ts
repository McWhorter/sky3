import type { SizeTokens, ColorTokens } from 'tamagui';
import { createStyledContext } from '@tamagui/web';

export const ButtonContext = createStyledContext({
  size: '$md' as SizeTokens,
  color: '$gray12' as ColorTokens,
});
