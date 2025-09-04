import React from 'react';
import { Button as TamaguiButton, styled } from 'tamagui';
import type { GetProps } from 'tamagui';

// Extend Tamagui's Button with our custom variants
const StyledButton = styled(TamaguiButton, {
  name: 'LibraryButton',
  
  variants: {
    variant: {
      primary: {
        backgroundColor: '$blue10',
        borderColor: '$blue10',
        color: '$white1',
      },
      secondary: {
        backgroundColor: '$gray8',
        borderColor: '$gray8',
        color: '$white1',
      },
      outline: {
        backgroundColor: 'transparent',
        borderColor: '$blue10',
        color: '$blue10',
      },
    },
    
    size: {
      small: {
        paddingHorizontal: '$3',
        paddingVertical: '$1.5',
        fontSize: '$3',
        minHeight: 32,
      },
      medium: {
        paddingHorizontal: '$4',
        paddingVertical: '$2.5',
        fontSize: '$4',
        minHeight: 40,
      },
      large: {
        paddingHorizontal: '$5',
        paddingVertical: '$3.5',
        fontSize: '$5',
        minHeight: 48,
      },
    },
  } as const,
  
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
})

export interface ButtonProps extends GetProps<typeof StyledButton> {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
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
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled}
      onPress={onPress}
      {...props}
    >
      {title}
    </StyledButton>
  );
};
