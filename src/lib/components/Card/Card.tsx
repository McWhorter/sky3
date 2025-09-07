import { View, withStaticProperties, styled, Text } from 'tamagui';
import { CardContext } from './CardContext';

const CardFrame = styled(View, {
  name: 'Card',
  context: CardContext,
  backgroundColor: '$background',
  borderColor: '$borderColor',
  borderWidth: 1,
  borderRadius: '$4',
  padding: '$4',

  // Interactive states that respond to theme
  hoverStyle: {
    backgroundColor: '$backgroundHover',
    borderColor: '$borderColorHover',
    transform: [{ scale: 1.02 }],
  },

  pressStyle: {
    backgroundColor: '$backgroundPress',
    borderColor: '$borderColorPress',
    transform: [{ scale: 0.98 }],
  },

  focusStyle: {
    backgroundColor: '$backgroundFocus',
    borderColor: '$borderColorFocus',
    outlineColor: '$outlineColor',
    outlineWidth: 2,
    outlineStyle: 'solid',
  },

  variants: {
    size: {
      $sm: {
        padding: '$2',
        borderRadius: '$2',
        gap: '$2',
      },
      $md: {
        padding: '$4',
        borderRadius: '$4',
        gap: '$3',
      },
      $lg: {
        padding: '$6',
        borderRadius: '$6',
        gap: '$4',
      },
    },

    variant: {
      default: {
        backgroundColor: '$background',
        borderColor: '$borderColor',
        shadowColor: '$shadowColor',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      elevated: {
        backgroundColor: '$background',
        borderColor: '$borderColor',
        shadowColor: '$shadowColor',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
      },
      outlined: {
        backgroundColor: 'transparent',
        borderColor: '$borderColor',
        borderWidth: 2,
      },
      filled: {
        backgroundColor: '$blue9',
        borderColor: '$blue9',
        color: '$color',
      },
      success: {
        backgroundColor: '$green9',
        borderColor: '$green9',
        color: '$color',
      },
      warning: {
        backgroundColor: '$yellow9',
        borderColor: '$yellow9',
        color: '$color',
      },
      error: {
        backgroundColor: '$red9',
        borderColor: '$red9',
        color: '$color',
      },
    },

    interactive: {
      true: {
        cursor: 'pointer',
        userSelect: 'none',
      },
      false: {
        // No interactive states
      },
    },
  },
});

const CardHeader = styled(View, {
  name: 'CardHeader',
  context: CardContext,
  marginBottom: '$2',
});

const CardTitle = styled(Text, {
  name: 'CardTitle',
  context: CardContext,
  fontWeight: '600',
  color: '$color',

  variants: {
    size: {
      $sm: {
        fontSize: '$4',
      },
      $md: {
        fontSize: '$5',
      },
      $lg: {
        fontSize: '$6',
      },
    },
  } as const,
});

const CardContent = styled(View, {
  name: 'CardContent',
  context: CardContext,
  gap: '$2',
});

const CardDescription = styled(Text, {
  name: 'CardDescription',
  context: CardContext,
  color: '$colorPress',

  variants: {
    size: {
      $sm: {
        fontSize: '$3',
        lineHeight: '$3',
      },
      $md: {
        fontSize: '$4',
        lineHeight: '$4',
      },
      $lg: {
        fontSize: '$5',
        lineHeight: '$5',
      },
    },
  } as const,
});

const CardFooter = styled(View, {
  name: 'CardFooter',
  context: CardContext,
  marginTop: '$2',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: '$2',
});

export const Card = withStaticProperties(CardFrame, {
  Props: CardContext.Provider,
  Header: CardHeader,
  Title: CardTitle,
  Content: CardContent,
  Description: CardDescription,
  Footer: CardFooter,
});
