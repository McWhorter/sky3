import React from 'react';
import { styled, YStack } from 'tamagui';
import type { GetProps } from 'tamagui';

const CardFrame = styled(YStack, {
  name: 'Card',
  backgroundColor: '$background',
  borderRadius: '$lg',
  shadowColor: '$shadowColor',
  borderWidth: 1,
  borderColor: '$borderColor',
  
  variants: {
    elevation: {
      0: {
        shadowOpacity: 0,
        shadowRadius: 0,
        shadowOffset: { width: 0, height: 0 },
        elevation: 0,
        borderColor: '$borderColor',
      },
      1: {
        shadowOpacity: 0.05,
        shadowRadius: '$1',
        shadowOffset: { width: 0, height: 1 },
        elevation: 1,
        borderColor: '$borderColorHover',
      },
      2: {
        shadowOpacity: 0.1,
        shadowRadius: '$2',
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
        borderColor: '$borderColorHover',
      },
      3: {
        shadowOpacity: 0.15,
        shadowRadius: '$3',
        shadowOffset: { width: 0, height: 4 },
        elevation: 3,
        borderColor: '$borderColorHover',
      },
      4: {
        shadowOpacity: 0.2,
        shadowRadius: '$4',
        shadowOffset: { width: 0, height: 8 },
        elevation: 4,
        borderColor: '$borderColorHover',
      },
    },
    
    variant: {
      default: {
        backgroundColor: '$background',
        borderColor: '$borderColor',
      },
      elevated: {
        backgroundColor: '$background',
        borderColor: 'transparent',
      },
      outlined: {
        backgroundColor: 'transparent',
        borderColor: '$borderColor',
        borderWidth: 1,
      },
      filled: {
        backgroundColor: '$backgroundHover',
        borderColor: '$borderColorHover',
      },
    },
  } as const,
  
  defaultVariants: {
    elevation: 2,
    variant: 'default',
  },
})

export interface CardProps extends GetProps<typeof CardFrame> {
  children: React.ReactNode;
  elevation?: 0 | 1 | 2 | 3 | 4;
  variant?: 'default' | 'elevated' | 'outlined' | 'filled';
}

export const Card: React.FC<CardProps> = ({
  children,
  elevation = 2,
  variant = 'default',
  padding = '$xl',
  margin = 0,
  ...props
}) => {
  return (
    <CardFrame
      elevation={elevation}
      variant={variant}
      padding={padding}
      margin={margin}
      {...props}
    >
      {children}
    </CardFrame>
  );
};
