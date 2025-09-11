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
export type ButtonVariant = 'outlined';
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
  animation: 'quickest',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'nowrap',
  flexDirection: 'row',
  cursor: 'pointer',
  borderColor: 'transparent',
  borderRadius: '$true',
  borderWidth: 1,

  focusVisibleStyle: {
    outlineColor: '$outlineColor',
    outlineStyle: 'solid',
    outlineWidth: 3,
  },

  disabledStyle: {
    pointerEvents: 'none',
  },

  variants: {
    variant: {
      outlined: {
        borderWidth: 1,
        borderColor: '$borderColor',
        backgroundColor: 'transparent',
        color: '$background',

        hoverStyle: {
          borderColor: '$borderColorHover',
          backgroundColor: 'transparent',
        },

        pressStyle: {
          borderColor: '$borderColorPress',
          backgroundColor: 'transparent',
        },

        focusVisibleStyle: {
          borderColor: '$borderColorFocus',
          backgroundColor: 'transparent',
        },
      },
    },

    size: {
      sm: {
        height: '$3',
        paddingHorizontal: 15,
      },
      md: {
        height: '$3.5',
        paddingHorizontal: 30,
      },
      lg: {
        height: '$4',
        paddingHorizontal: 30,
      },
    },

    disabled: {
      true: {
        // @ts-expect-error allow custom tokens
        borderColor: '$borderColorDisabled',
        // @ts-expect-error allow custom tokens
        backgroundColor: '$backgroundDisabled',
      },
    },

    loading: {
      true: {
        borderColor: '$borderColor',
        backgroundColor: '$background',
      },
    },
  } as const,

  defaultVariants: {
    size: 'md',
    loading: false,
    disabled: false,
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
  const { children, scaleIcon = 2 } = props;
  const { color, size = 'md' } = useContext(ButtonContext);

  const iconSizes = {
    sm: '$1',
    md: '$1',
    lg: '$1',
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
  { loading = false, disabled = false, children, ...props },
  ref
) {
  const isFunctionallyDisabled = disabled || loading;

  return (
    <ButtonFrame
      ref={ref}
      disabled={isFunctionallyDisabled}
      loading={loading}
      aria-busy={loading}
      {...props}
    >
      <XStack
        gap="$3"
        alignItems="center"
        justifyContent="center"
        style={{ visibility: loading ? 'hidden' : 'visible' }}
      >
        {children}
      </XStack>
      {loading && (
        <SpinnerOverlay>
          {/* @ts-expect-error allow complicated props */}
          <Spinner size="small" color="$color" />
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
