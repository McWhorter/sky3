import React from 'react';
import { styled, Stack, Text } from 'tamagui';
import type { GetProps } from 'tamagui';

const ButtonFrame = styled(Stack, {
  name: 'Button',
  borderRadius: '$4',
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1,
  cursor: 'pointer',
  pressStyle: {
    opacity: 0.8,
  },
  
  variants: {
    variant: {
      primary: {
        backgroundColor: '$blue10',
        borderColor: '$blue10',
      },
      secondary: {
        backgroundColor: '$gray8',
        borderColor: '$gray8',
      },
      outline: {
        backgroundColor: 'transparent',
        borderColor: '$blue10',
      },
    },
    
    size: {
      small: {
        paddingHorizontal: '$3',
        paddingVertical: '$1.5',
        minHeight: 32,
      },
      medium: {
        paddingHorizontal: '$4',
        paddingVertical: '$2.5',
        minHeight: 40,
      },
      large: {
        paddingHorizontal: '$5',
        paddingVertical: '$3.5',
        minHeight: 48,
      },
    },
    
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
  } as const,
  
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
})

const ButtonText = styled(Text, {
  name: 'ButtonText',
  fontWeight: '600',
  textAlign: 'center',
  
  variants: {
    variant: {
      primary: {
        color: '$white1',
      },
      secondary: {
        color: '$white1',
      },
      outline: {
        color: '$blue10',
      },
    },
    
    size: {
      small: {
        fontSize: '$3',
      },
      medium: {
        fontSize: '$4',
      },
      large: {
        fontSize: '$5',
      },
    },
  } as const,
  
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
})

export interface ButtonProps extends GetProps<typeof ButtonFrame> {
  title: string;
  onPress: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  ...props
}) => {
  return (
    <ButtonFrame
      variant={variant}
      size={size}
      disabled={disabled}
      onPress={onPress}
      {...props}
    >
      <ButtonText variant={variant} size={size}>
        {title}
      </ButtonText>
    </ButtonFrame>
  );
};
