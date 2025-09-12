import {
  SizableText,
  Spinner,
  styled,
  ThemeableStack,
  withStaticProperties,
  XStack,
  type SizeTokens,
  type TextParentStyles,
  type TextContextStyles,
  createStyledContext,
  type GetProps,
  useGetThemedIcon,
  View,
  getFontSize,
} from 'tamagui';

import type { ThemeableProps } from '@tamagui/web';
import { useContext } from 'react';

export type ButtonSizeVariants = 'sm' | 'md' | 'lg';
export type ButtonVariant = 'filled' | 'outlined' | 'bare';
type ButtonExtraProps = TextParentStyles &
  ThemeableProps & {
    size?: ButtonSizeVariants;
    loading?: boolean;
  };
export type ButtonProps = ButtonExtraProps & GetProps<typeof ButtonFrame>;

const ButtonContext = createStyledContext<
  Partial<
    TextContextStyles & {
      size: SizeTokens;
      variant?: ButtonVariant;
    }
  >
>({
  // keeping these here means they work with styled() passing down color to text
  color: undefined,
  ellipse: undefined,
  fontFamily: undefined,
  fontSize: undefined,
  fontStyle: undefined,
  fontWeight: undefined,
  letterSpacing: undefined,
  maxFontSizeMultiplier: undefined,
  size: undefined,
  textAlign: undefined,
  variant: undefined,
});

const ButtonFrame = styled(ThemeableStack, {
  name: 'Button',
  role: 'button',
  tag: 'button',
  context: ButtonContext,

  focusable: true,
  hoverTheme: true,
  pressTheme: true,
  backgrounded: true,

  position: 'relative',
  animation: '200ms',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'nowrap',
  flexDirection: 'row',
  cursor: 'pointer',
  borderRadius: '$true',
  borderColor: '$borderColor',
  borderWidth: 1,

  focusVisibleStyle: {
    borderColor: 'transparent',
    outlineColor: '$outlineColor',
    outlineStyle: 'solid',
    outlineWidth: 6,
  },

  disabledStyle: {
    pointerEvents: 'none',
    opacity: 0.4,
  },

  variants: {
    variant: {
      filled: {
        backgroundColor: '$background',
        color: '$color',
      },

      outlined: {
        backgroundColor: 'transparent',
        color: '$background',

        hoverStyle: {
          backgroundColor: '$altBackgroundHover',
        },

        pressStyle: {
          backgroundColor: '$altBackgroundPress',
        },

        focusVisibleStyle: {
          backgroundColor: '$altBackgroundFocus',
        },
      },

      bare: {
        borderWidth: 0,
        backgroundColor: 'transparent',
        color: '$background',

        hoverStyle: {
          backgroundColor: '$altBackgroundHover',
        },

        pressStyle: {
          backgroundColor: '$altBackgroundPress',
        },

        focusVisibleStyle: {
          backgroundColor: '$altBackgroundFocus',
        },
      },
    },

    loading: {
      true: {
        disabledStyle: {
          opacity: 1,
        },
      },
    },

    size: {
      sm: {
        height: 32,
        paddingHorizontal: 12,
      },
      md: {
        height: 40,
        paddingHorizontal: 16,
      },
      lg: {
        height: 48,
        paddingHorizontal: 30,
      },
    },
  } as const,

  defaultVariants: {
    size: 'md',
    variant: 'filled',
  },
});

const ButtonText = styled(SizableText, {
  name: 'ButtonText',
  context: ButtonContext,

  ellipse: true,

  textTransform: 'uppercase',
  fontWeight: 'bold',
  fontSize: '$4',
  userSelect: 'none',
  cursor: 'pointer',
  flexGrow: 0,
  flexShrink: 1,
  color: '$color',
});

const ButtonIcon = (props: { children: React.ReactNode; scaleIcon?: number }) => {
  const { children, scaleIcon = 1 } = props;
  const { color, size = 'md' } = useContext(ButtonContext);

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  const iconSize = getFontSize(iconSizes[size]) * scaleIcon;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getThemedIcon = useGetThemedIcon({ size: iconSize, color: color as any });
  return getThemedIcon(children);
};

const SpinnerOverlay = styled(View, {
  name: 'SpinnerOverlay',
  context: ButtonContext,

  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1,
});

// @ts-expect-error allow complicated props
const ButtonComponent = ButtonFrame.styleable<ButtonProps>(function Button(
  { variant = 'filled', children, loading, disabled, ...props },
  ref
) {
  const isFunctionallyDisabled = disabled || loading;
  const loadingColor = variant === 'filled' ? '$color' : '$background';

  return (
    <ButtonFrame
      ref={ref}
      loading={loading}
      disabled={isFunctionallyDisabled}
      aria-busy={loading}
      {...props}
    >
      <XStack
        gap="$sm"
        alignItems="center"
        justifyContent="center"
        style={{ visibility: loading ? 'hidden' : 'visible' }}
      >
        {children}
      </XStack>
      {loading && (
        <SpinnerOverlay>
          {/* @ts-expect-error allow complicated props */}
          <Spinner size="small" color={loadingColor} />
        </SpinnerOverlay>
      )}
    </ButtonFrame>
  );
});

ButtonComponent.displayName = 'Button';

export const Button = withStaticProperties(ButtonComponent, {
  Icon: ButtonIcon,
  Text: ButtonText,
});
