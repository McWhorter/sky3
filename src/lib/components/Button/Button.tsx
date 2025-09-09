import type { GetProps } from 'tamagui';
import { Button as TamaguiButton, withStaticProperties, styled } from 'tamagui';
import { getButtonSized } from '@tamagui/get-button-sized';
import { ButtonContext } from '@tamagui/button';

const ButtonFrame = styled(TamaguiButton, {
  name: 'Button',
  animation: 'quickest',

  focusVisibleStyle: {
    outlineWidth: 3,
  },

  variants: {
    size: {
      '...size': (val, extras) => {
        const baseSizing = getButtonSized(val, extras);
        const customStyles = {
          $sm: { paddingHorizontal: '$sm' },
          $md: { paddingHorizontal: '$md' },
          $lg: { paddingHorizontal: '$lg' },
        };
        return {
          ...baseSizing,
          ...customStyles[val],
        };
      },
    },

    disabled: {
      true: {
        opacity: 0.4,
      },
    },

    variant: {
      outlined: {
        backgroundColor: 'transparent',
        color: '$background',
      },
    },
  },

  defaultVariants: {
    size: '$md',
    disabled: false,
  },
});

const ButtonText = styled(TamaguiButton.Text, {
  name: 'ButtonText',
  context: ButtonContext,
  textTransform: 'uppercase',
  fontWeight: '$7',
});

export const Button = withStaticProperties(ButtonFrame, {
  Text: ButtonText,
  Icon: TamaguiButton.Icon,
});

export type ButtonProps = GetProps<typeof Button>;
