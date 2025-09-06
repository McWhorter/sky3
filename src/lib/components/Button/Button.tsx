import { getSize } from '@tamagui/get-token';
import { View, Text, styled, useTheme, withStaticProperties } from '@tamagui/web';
import { cloneElement, isValidElement, useContext } from 'react';
import { ButtonContext } from './ButtonContext';

export const ButtonFrame = styled(View, {
  name: 'Button',
  context: ButtonContext,
  backgroundColor: '$gray1',
  borderColor: '$gray6',
  padding: '$2',
  borderWidth: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  role: 'button',
  tabIndex: 0,

  hoverStyle: {
    backgroundColor: '$gray2',
    borderColor: '$gray7',
  },

  pressStyle: {
    backgroundColor: '$gray3',
  },

  disabledStyle: {
    opacity: 0.6,
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$blue9',
        borderColor: '$blue9',
        color: '$white',
        hoverStyle: {
          backgroundColor: '$blue10',
          borderColor: '$blue10',
        },
        pressStyle: {
          backgroundColor: '$blue11',
          borderColor: '$blue11',
        },
      },
      secondary: {
        backgroundColor: '$gray6',
        borderColor: '$gray6',
        color: '$gray12',
        hoverStyle: {
          backgroundColor: '$gray7',
          borderColor: '$gray7',
        },
        pressStyle: {
          backgroundColor: '$gray8',
          borderColor: '$gray8',
        },
      },
      outline: {
        backgroundColor: '$transparent',
        borderColor: '$gray6',
        color: '$gray12',
        hoverStyle: {
          backgroundColor: '$gray2',
          borderColor: '$gray7',
        },
        pressStyle: {
          backgroundColor: '$gray3',
        },
      },
    },
    size: {
      sm: {
        height: '$sm',
        gap: '$1',
        borderRadius: '$sm',
        paddingHorizontal: '$3',
      },
      md: {
        height: '$md',
        gap: '$2',
        borderRadius: '$md',
        paddingHorizontal: '$4',
      },
      lg: {
        height: '$lg',
        gap: '$2',
        borderRadius: '$lg',
        paddingHorizontal: '$5',
      },
    },
  } as const,

  defaultVariants: {
    size: 'md',
  },
});

export const ButtonText = styled(Text, {
  name: 'ButtonText',
  context: ButtonContext,
  userSelect: 'none',
  color: '$gray12',
  fontWeight: '500',

  variants: {
    size: {
      sm: {
        fontSize: '$sm',
      },
      md: {
        fontSize: '$md',
      },
      lg: {
        fontSize: '$lg',
      },
    },
  } as const,
});

interface ButtonIconProps {
  children: React.ReactElement;
}

const ButtonIcon = ({ children }: ButtonIconProps) => {
  const { size, color } = useContext(ButtonContext.context);
  const smaller = getSize(size, {
    shift: -2,
  });
  const theme = useTheme();

  if (!isValidElement(children)) {
    return null;
  }

  const iconProps = {
    size: smaller.val * 0.5,
    color: theme[color]?.get() || theme.gray12?.get(),
  };

  return cloneElement(children, iconProps);
};

export const Button = withStaticProperties(ButtonFrame, {
  Props: ButtonContext.Provider,
  Text: ButtonText,
  Icon: ButtonIcon,
});
