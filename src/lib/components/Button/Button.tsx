import React from 'react';
import { Stack } from 'tamagui';

// Define our custom button variants
export interface ButtonProps {
  /**
   * Size variant of the button
   * @default 'md'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Visual variant of the button
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';

  /**
   * Color scheme for the button
   * @default 'default'
   */
  colorScheme?: 'default' | 'success' | 'warning' | 'error' | 'info';

  /**
   * Whether the button should take full width
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Whether the button is in a loading state
   * @default false
   */
  loading?: boolean;

  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Icon to display before the button text
   */
  leftIcon?: React.ReactNode;

  /**
   * Icon to display after the button text
   */
  rightIcon?: React.ReactNode;

  /**
   * Button content
   */
  children?: React.ReactNode;

  /**
   * Click handler
   */
  onClick?: () => void;

  /**
   * Additional props
   */
  [key: string]: any;
}

// Main Button component
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = 'md',
      variant = 'primary',
      colorScheme = 'default',
      fullWidth = false,
      loading = false,
      disabled = false,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    // Get size styles
    const getSizeStyles = () => {
      switch (size) {
        case 'xs':
          return {
            height: '$6',
            paddingHorizontal: '$3',
            fontSize: '$2',
            lineHeight: '$2',
            gap: '$1',
          };
        case 'sm':
          return {
            height: '$8',
            paddingHorizontal: '$4',
            fontSize: '$3',
            lineHeight: '$3',
            gap: '$2',
          };
        case 'lg':
          return {
            height: '$12',
            paddingHorizontal: '$6',
            fontSize: '$4',
            lineHeight: '$4',
            gap: '$3',
          };
        case 'xl':
          return {
            height: '$14',
            paddingHorizontal: '$8',
            fontSize: '$5',
            lineHeight: '$5',
            gap: '$3',
          };
        default: // md
          return {
            height: '$10',
            paddingHorizontal: '$5',
            fontSize: '$3',
            lineHeight: '$3',
            gap: '$2',
          };
      }
    };

    // Get variant styles
    const getVariantStyles = () => {
      switch (variant) {
        case 'outline':
          return {
            backgroundColor: 'transparent',
            borderColor: '$primary',
            color: '$primary',
          };
        case 'ghost':
          return {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            color: '$primary',
          };
        case 'link':
          return {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            color: '$primary',
            textDecoration: 'underline',
            height: 'auto',
            paddingHorizontal: 0,
            paddingVertical: 0,
          };
        case 'secondary':
          return {
            backgroundColor: '$secondary',
            borderColor: '$secondary',
            color: '$background',
          };
        default: // primary
          return {
            backgroundColor: '$primary',
            borderColor: '$primary',
            color: '$background',
          };
      }
    };

    // Get color scheme styles
    const getColorSchemeStyles = () => {
      if (colorScheme === 'default') return {};

      switch (colorScheme) {
        case 'success':
          return {
            backgroundColor: '$success',
            borderColor: '$success',
            color: '$background',
          };
        case 'warning':
          return {
            backgroundColor: '$warning',
            borderColor: '$warning',
            color: '$background',
          };
        case 'error':
          return {
            backgroundColor: '$error',
            borderColor: '$error',
            color: '$background',
          };
        case 'info':
          return {
            backgroundColor: '$info',
            borderColor: '$info',
            color: '$background',
          };
        default:
          return {};
      }
    };

    const sizeStyles = getSizeStyles();
    const variantStyles = getVariantStyles();
    const colorSchemeStyles = getColorSchemeStyles();

    return (
      <Stack
        ref={ref}
        disabled={disabled || loading}
        borderRadius="$4"
        borderWidth={1}
        cursor="pointer"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontFamily="$body"
        fontWeight="$4"
        transition="all 0.2s ease"
        userSelect="none"
        flexDirection="row"
        width={fullWidth ? '100%' : undefined}
        opacity={loading ? 0.7 : undefined}
        pointerEvents={loading ? 'none' : undefined}
        {...sizeStyles}
        {...variantStyles}
        {...colorSchemeStyles}
        {...props}
      >
        {loading && (
          <div
            style={{
              width: '1em',
              height: '1em',
              border: '2px solid currentColor',
              borderTop: '2px solid transparent',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              marginRight: leftIcon || children ? '0.5em' : 0,
            }}
          />
        )}
        {!loading && leftIcon && (
          <span style={{ marginRight: children ? '0.5em' : 0 }}>{leftIcon}</span>
        )}
        {children}
        {!loading && rightIcon && (
          <span style={{ marginLeft: children ? '0.5em' : 0 }}>{rightIcon}</span>
        )}
      </Stack>
    );
  }
);

Button.displayName = 'Button';

// Add CSS animation for loading spinner
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
}
