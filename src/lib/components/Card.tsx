import React from 'react';
import { styled, Stack } from 'tamagui';
import type { GetProps } from 'tamagui';

const CardFrame = styled(Stack, {
  name: 'Card',
  backgroundColor: '$background',
  borderRadius: '$4',
  shadowColor: '$shadowColor',
  borderWidth: 0,
  
  variants: {
    elevation: {
      1: {
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 1 },
        elevation: 1,
      },
      2: {
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
      },
      3: {
        shadowOpacity: 0.3,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        elevation: 3,
      },
      4: {
        shadowOpacity: 0.4,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 4,
      },
    },
  } as const,
  
  defaultVariants: {
    elevation: 2,
  },
})

export interface CardProps extends GetProps<typeof CardFrame> {
  children: React.ReactNode;
  elevation?: 1 | 2 | 3 | 4;
}

export const Card: React.FC<CardProps> = ({
  children,
  elevation = 2,
  padding = '$4',
  margin = 0,
  ...props
}) => {
  return (
    <CardFrame
      elevation={elevation}
      padding={padding}
      margin={margin}
      {...props}
    >
      {children}
    </CardFrame>
  );
};
