import React from 'react';
import { Button as TamaguiButton, styled } from 'tamagui';
import type { GetProps } from 'tamagui';

// Extend Tamagui's Button with our custom variants
const StyledButton = styled(TamaguiButton, {
  name: 'LibraryButton',
  
  variants: {
    variant: {
      primary: {
        backgroundColor: '$brand',
        borderColor: '$brand',
        color: '$backgroundStrong',
        hoverStyle: {
          backgroundColor: '$brandHover',
          borderColor: '$brandHover',
        },
        pressStyle: {
          backgroundColor: '$brandPress',
          borderColor: '$brandPress',
        },
        focusStyle: {
          borderColor: '$brandFocus',
        },
      },
      secondary: {
        backgroundColor: '$neutral500',
        borderColor: '$neutral500',
        color: '$backgroundStrong',
        hoverStyle: {
          backgroundColor: '$neutral600',
          borderColor: '$neutral600',
        },
        pressStyle: {
          backgroundColor: '$neutral700',
          borderColor: '$neutral700',
        },
      },
      outline: {
        backgroundColor: 'transparent',
        borderColor: '$brand',
        color: '$brand',
        hoverStyle: {
          backgroundColor: '$brand',
          color: '$backgroundStrong',
        },
        pressStyle: {
          backgroundColor: '$brandPress',
          borderColor: '$brandPress',
          color: '$backgroundStrong',
        },
      },
      success: {
        backgroundColor: '$success',
        borderColor: '$success',
        color: '$backgroundStrong',
        hoverStyle: {
          backgroundColor: '$successHover',
          borderColor: '$successHover',
        },
        pressStyle: {
          backgroundColor: '$successPress',
          borderColor: '$successPress',
        },
      },
      warning: {
        backgroundColor: '$warning',
        borderColor: '$warning',
        color: '$backgroundStrong',
        hoverStyle: {
          backgroundColor: '$warningHover',
          borderColor: '$warningHover',
        },
        pressStyle: {
          backgroundColor: '$warningPress',
          borderColor: '$warningPress',
        },
      },
      error: {
        backgroundColor: '$error',
        borderColor: '$error',
        color: '$backgroundStrong',
        hoverStyle: {
          backgroundColor: '$errorHover',
          borderColor: '$errorHover',
        },
        pressStyle: {
          backgroundColor: '$errorPress',
          borderColor: '$errorPress',
        },
      },
    },
    
    size: {
      small: {
        paddingHorizontal: '$lg',
        paddingVertical: '$sm',
        fontSize: '$3',
        minHeight: '$xs',
        borderRadius: '$sm',
      },
      medium: {
        paddingHorizontal: '$xl',
        paddingVertical: '$md',
        fontSize: '$4',
        minHeight: '$md',
        borderRadius: '$md',
      },
      large: {
        paddingHorizontal: '$2xl',
        paddingVertical: '$lg',
        fontSize: '$5',
        minHeight: '$lg',
        borderRadius: '$lg',
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
  variant?: 'primary' | 'secondary' | 'outline' | 'success' | 'warning' | 'error';
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
