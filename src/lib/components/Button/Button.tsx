import {
  View,
  withStaticProperties,
  SizableText,
  styled,
  getFontSize,
  type FontSizeTokens,
  useGetThemedIcon,
  type ColorTokens,
  type SizeTokens,
  Text,
} from 'tamagui';
import { ButtonContext } from './ButtonContext';
import { useContext } from 'react';

const ButtonFrame = styled(View, {
  name: 'Button',
  tag: 'button',
  context: ButtonContext,
  focusable: true,
  role: 'button',

  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'nowrap',
  flexDirection: 'row',
  cursor: 'pointer',
  gap: '$2',

  variants: {
    variant: {
      outlined: {
        backgroundColor: '$colorTransparent',
        borderWidth: 2,
        borderColor: '$borderColor',

        hoverStyle: {
          backgroundColor: '$colorTransparent',
          borderColor: '$borderColorHover',
        },

        pressStyle: {
          backgroundColor: '$colorTransparent',
          borderColor: '$borderColorPress',
        },

        focusVisibleStyle: {
          backgroundColor: '$colorTransparent',
          borderColor: '$borderColorFocus',
        },
      },
    },

    size: {
      $sm: {
        paddingVertical: '$1',
        paddingHorizontal: '$2',
      },
      $md: {
        paddingVertical: '$2',
        paddingHorizontal: '$3',
      },
      $lg: {
        paddingVertical: '$3',
        paddingHorizontal: '$4',
      },
    },

    disabled: {
      true: {
        pointerEvents: 'none',
      },
    },
  } as const,

  defaultVariants: {
    size: '$md',
  },
});

const ButtonText = styled(Text, {
  name: 'ButtonText',
  context: ButtonContext,
  color: '$color',

  variants: {
    size: {
      '...fontSize': (name, { font }) => ({
        fontSize: font?.size[name],
      }),
    },
  } as const,
});

const ButtonIcon = (props: { children: React.ReactNode; scaleIcon?: number }) => {
  const { children, scaleIcon = 1 } = props;
  const { size, color } = useContext(ButtonContext);

  const iconSize =
    (typeof size === 'number' ? size * 0.5 : getFontSize(size as FontSizeTokens)) * scaleIcon;

  const getThemedIcon = useGetThemedIcon({ size: iconSize, color: color as ColorTokens });
  return getThemedIcon(children);
};

export const Button = withStaticProperties(ButtonFrame, {
  Props: ButtonContext.Provider,
  Text: ButtonText,
  Icon: ButtonIcon,
});
