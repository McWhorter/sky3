import type { GetProps } from 'tamagui';
import { Button as TamaguiButton, withStaticProperties, styled } from 'tamagui';

const ButtonFrame = styled(TamaguiButton, {
  name: 'Button',
});

export const Button = withStaticProperties(ButtonFrame, {
  Text: TamaguiButton.Text,
  Icon: TamaguiButton.Icon,
});

export type ButtonProps = GetProps<typeof Button>;
