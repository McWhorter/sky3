# Tamagui v4 Tokens and Themes System Documentation

This comprehensive guide documents how to properly set up custom tokens and themes in Tamagui v4 (version 1.132.23) beyond the defaults, based on the actual implementation in the node_modules dependencies.

## Table of Contents

1. [Understanding the Token System](#understanding-the-token-system)
2. [Token Types and Structure](#token-types-and-structure)
3. [Creating Custom Tokens](#creating-custom-tokens)
4. [Understanding the Theme System](#understanding-the-theme-system)
5. [Creating Custom Themes with createThemes](#creating-custom-themes-with-createthemes)
6. [Theme Builder and Advanced Patterns](#theme-builder-and-advanced-patterns)
7. [Component-Specific Theming](#component-specific-theming)
8. [Configuration and Setup](#configuration-and-setup)
9. [Best Practices and Examples](#best-practices-and-examples)

## Understanding the Token System

Tokens in Tamagui v4 are the foundational design values that define consistent spacing, sizing, colors, and other design properties. They serve as the building blocks for themes and components.

### Default Token Structure (v4)

Based on the actual implementation in `@tamagui/themes/src/v4-tokens.ts`, Tamagui v4 provides these default token categories:

```typescript
// From @tamagui/themes/src/v4-tokens.ts
export const tokens = {
  radius, // Border radius values
  zIndex, // Z-index layering
  space, // Spacing values (derived from size)
  size, // Size values for components
} as const;
```

### Size Tokens (Non-linear Design System)

The size tokens in v4 are intentionally non-linear to support different use cases:

```typescript
export const size = {
  $0: 0, // 0px
  '$0.25': 2, // 2px - fine-grained borders, smallest padding
  '$0.5': 4, // 4px
  '$0.75': 8, // 8px
  $1: 20, // 20px - pressability threshold
  '$1.5': 24, // 24px
  $2: 28, // 28px
  '$2.5': 32, // 32px
  $3: 36, // 36px
  '$3.5': 40, // 40px
  $4: 44, // 44px - default ($true)
  $true: 44, // Default size
  '$4.5': 48, // 48px
  $5: 52, // 52px
  $6: 64, // 64px
  $7: 74, // 74px
  $8: 84, // 84px
  $9: 94, // 94px
  $10: 104, // 104px - heading top-out
  $11: 124, // 124px
  $12: 144, // 144px
  // ... continues to $20: 284px
};
```

**Design Philosophy:**

- Sizes < 1: Fine-grained elements (borders, minimal padding)
- Sizes ≥ 1: Pressable elements (buttons, inputs)
- Sizes ≥ 10: Headings and large elements
- Space tokens are derived from size tokens using `sizeToSpace()` function

### Space Tokens (Derived from Size)

Space tokens are automatically generated from size tokens:

```typescript
export const spaces = Object.entries(size).map(([k, v]) => {
  return [k, sizeToSpace(v)] as const;
});

export const spacesNegative = spaces.slice(1).map(([k, v]) => [`-${k.slice(1)}`, -v]);

export const space: {
  [Key in SizeKeysWithNegatives]: Key extends keyof Sizes ? Sizes[Key] : number;
} = {
  ...Object.fromEntries(spaces),
  ...Object.fromEntries(spacesNegative),
} as any;
```

This creates both positive and negative spacing values (e.g., `$1`, `-$1`).

### Radius Tokens

```typescript
export const radius = {
  0: 0, // 0px
  1: 3, // 3px
  2: 5, // 5px
  3: 7, // 7px
  4: 9, // 9px
  true: 9, // Default radius
  5: 10, // 10px
  6: 16, // 16px
  7: 19, // 19px
  8: 22, // 22px
  9: 26, // 26px
  10: 34, // 34px
  11: 42, // 42px
  12: 50, // 50px
};
```

### Z-Index Tokens

```typescript
export const zIndex = {
  0: 0, // Base layer
  1: 100, // Dropdowns
  2: 200, // Modals
  3: 300, // Popovers
  4: 400, // Tooltips
  5: 500, // Highest layer
};
```

## Creating Custom Tokens

### Basic Token Creation

To create custom tokens beyond the defaults, you can extend the default tokens:

```typescript
import { createTokens } from '@tamagui/core';
import { tokens as defaultTokens } from '@tamagui/themes/v4';

const customTokens = createTokens({
  ...defaultTokens,

  // Extend size tokens
  size: {
    ...defaultTokens.size,
    $xs: 12, // Extra small
    $sm: 16, // Small
    $md: 24, // Medium
    $lg: 32, // Large
    $xl: 48, // Extra large
  },

  // Extend space tokens
  space: {
    ...defaultTokens.space,
    $xs: 6, // Extra small spacing
    $sm: 12, // Small spacing
    $md: 18, // Medium spacing
    $lg: 24, // Large spacing
    $xl: 36, // Extra large spacing
  },

  // Extend radius tokens
  radius: {
    ...defaultTokens.radius,
    $xs: 2, // Extra small radius
    $sm: 4, // Small radius
    $md: 8, // Medium radius
    $lg: 12, // Large radius
    $xl: 16, // Extra large radius
  },

  // Add custom z-index values
  zIndex: {
    ...defaultTokens.zIndex,
    dropdown: 150,
    modal: 250,
    popover: 350,
    tooltip: 450,
    toast: 550,
  },
});
```

### Advanced Token Creation

For more complex token systems, you can create entirely custom tokens:

```typescript
import { createTokens } from '@tamagui/core';

const customTokens = createTokens({
  // Custom size system
  size: {
    $0: 0,
    $1: 8,
    $2: 16,
    $3: 24,
    $4: 32,
    $5: 40,
    $6: 48,
    $7: 56,
    $8: 64,
    $9: 72,
    $10: 80,
    $true: 32, // Default size
  },

  // Custom spacing system
  space: {
    $0: 0,
    $1: 4,
    $2: 8,
    $3: 12,
    $4: 16,
    $5: 20,
    $6: 24,
    $7: 28,
    $8: 32,
    $9: 36,
    $10: 40,
    // Negative values
    '-$1': -4,
    '-$2': -8,
    '-$3': -12,
    '-$4': -16,
    '-$5': -20,
    '-$6': -24,
    '-$7': -28,
    '-$8': -32,
    '-$9': -36,
    '-$10': -40,
  },

  // Custom radius system
  radius: {
    0: 0,
    1: 2,
    2: 4,
    3: 6,
    4: 8,
    5: 12,
    6: 16,
    7: 20,
    8: 24,
    true: 8, // Default radius
  },

  // Custom z-index system
  zIndex: {
    0: 0,
    1: 10,
    2: 20,
    3: 30,
    4: 40,
    5: 50,
  },
});
```

## Understanding the Theme System

Themes in Tamagui v4 are built using the `createThemes` function from `@tamagui/theme-builder`. This system provides a sophisticated approach to theme creation with support for:

- Base themes (light/dark)
- Accent themes
- Child themes (sub-themes)
- Grand-child themes (nested sub-themes)
- Component-specific themes

### Default Theme Structure

Based on the generated v4 themes, each theme includes:

```typescript
type Theme = {
  // Background colors (0-12 scale)
  background0: string;
  background02: string;
  background04: string;
  background06: string;
  background08: string;

  // Text colors (0-12 scale)
  color0: string;
  color02: string;
  color04: string;
  color06: string;
  color08: string;
  color1: string;
  color2: string;
  // ... up to color12

  // Interactive states
  background: string;
  backgroundHover: string;
  backgroundPress: string;
  backgroundFocus: string;

  // Text states
  color: string;
  colorHover: string;
  colorPress: string;
  colorFocus: string;

  // Border states
  borderColor: string;
  borderColorHover: string;
  borderColorPress: string;
  borderColorFocus: string;

  // Color palettes (blue, green, red, yellow, black, white)
  blue1: string;
  blue2: string;
  // ... up to blue12

  // Accent colors (if accent theme is defined)
  accent1: string;
  accent2: string;
  // ... up to accent12

  // Shadows
  shadow1: string;
  shadow2: string;
  // ... up to shadow6
};
```

## Creating Custom Themes with createThemes

### Basic Theme Creation

```typescript
import { createThemes } from '@tamagui/theme-builder';

const customThemes = createThemes({
  base: {
    palette: ['#ffffff', '#000000'], // Light to dark
    template: 'base',
  },
  accent: {
    palette: ['#007AFF', '#FF3B30'], // Blue to red
    template: 'base',
  },
});
```

### Advanced Theme Creation with Sub-themes

```typescript
import { createThemes } from '@tamagui/theme-builder';

const customThemes = createThemes({
  base: {
    palette: ['#ffffff', '#000000'],
    template: 'base',
    extra: {
      light: {
        customBrand: '#007AFF',
        customAccent: '#34C759',
      },
      dark: {
        customBrand: '#0A84FF',
        customAccent: '#30D158',
      },
    },
  },

  // Accent theme
  accent: {
    palette: ['#007AFF', '#FF3B30'],
    template: 'base',
  },

  // Child themes (sub-themes)
  childrenThemes: {
    green: {
      palette: ['#34C759', '#30D158'],
      template: 'base',
    },
    red: {
      palette: ['#FF3B30', '#FF453A'],
      template: 'base',
    },
    yellow: {
      palette: ['#FFCC00', '#FFD60A'],
      template: 'base',
    },
  },

  // Grand-child themes (nested sub-themes)
  grandChildrenThemes: {
    muted: {
      template: 'base',
    },
    vibrant: {
      template: 'base',
    },
  },

  // Component-specific themes
  componentThemes: {
    Button: {
      template: 'base',
    },
    Card: {
      template: 'base',
    },
  },
});
```

### Palette Definition

Palettes can be defined in multiple ways:

```typescript
// Single palette (auto-generates light/dark variants)
palette: ['#ffffff', '#f8f9fa', '#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#6c757d', '#495057', '#343a40', '#212529', '#000000']

// Scheme-specific palettes
palette: {
  light: ['#ffffff', '#f8f9fa', '#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#6c757d', '#495057', '#343a40', '#212529', '#000000'],
  dark: ['#000000', '#212529', '#343a40', '#495057', '#6c757d', '#adb5bd', '#ced4da', '#dee2e6', '#e9ecef', '#f8f9fa', '#ffffff']
}
```

## Theme Builder and Advanced Patterns

### Custom Templates

You can create custom templates for theme generation:

```typescript
import { createThemes } from '@tamagui/theme-builder';

const customTemplates = {
  base: {
    background: 0,
    backgroundHover: 1,
    backgroundPress: 2,
    backgroundFocus: 3,
    color: 10,
    colorHover: 9,
    colorPress: 8,
    colorFocus: 7,
    borderColor: 3,
    borderColorHover: 4,
    borderColorPress: 5,
    borderColorFocus: 6,
  },
  // Add more templates as needed
};

const customThemes = createThemes({
  base: {
    palette: ['#ffffff', '#000000'],
    template: 'base',
  },
  templates: customTemplates,
});
```

### Custom Color-to-Theme Mapping

```typescript
const customThemes = createThemes({
  base: {
    palette: ['#ffffff', '#000000'],
    template: 'base',
  },
  colorsToTheme: ({ colors, name, scheme }) => {
    // Custom logic to map colors to theme properties
    return {
      background: colors[0],
      color: colors[colors.length - 1],
      borderColor: colors[3],
      // Add more custom mappings
    };
  },
});
```

## Component-Specific Theming

### Creating Component Themes

Component themes are automatically applied when a component has a `name` property:

```typescript
import { styled } from 'tamagui';

const CustomButton = styled('button', {
  name: 'CustomButton', // This enables component-specific theming
  backgroundColor: '$background',
  color: '$color',
  borderColor: '$borderColor',
  borderRadius: '$4',
  padding: '$3',
});

// Theme will automatically include:
// light_CustomButton, dark_CustomButton, etc.
```

### Using Component Themes

```typescript
// In your theme definition
const themes = createThemes({
  base: {
    palette: ['#ffffff', '#000000'],
    template: 'base',
  },
  componentThemes: {
    CustomButton: {
      template: 'base',
    },
  },
})

// Usage
<Theme name="light">
  <CustomButton>Light themed button</CustomButton>
</Theme>

<Theme name="dark">
  <CustomButton>Dark themed button</CustomButton>
</Theme>
```

## Configuration and Setup

### Complete Configuration Example

```typescript
// tamagui.config.ts
import { createTamagui } from '@tamagui/core';
import { createThemes } from '@tamagui/theme-builder';
import { createTokens } from '@tamagui/core';
import { defaultConfig } from '@tamagui/config/v4';

// Custom tokens
const customTokens = createTokens({
  ...defaultConfig.tokens,
  size: {
    ...defaultConfig.tokens.size,
    $xs: 12,
    $sm: 16,
    $md: 24,
    $lg: 32,
    $xl: 48,
  },
});

// Custom themes
const customThemes = createThemes({
  base: {
    palette: ['#ffffff', '#000000'],
    template: 'base',
  },
  accent: {
    palette: ['#007AFF', '#FF3B30'],
    template: 'base',
  },
  childrenThemes: {
    green: {
      palette: ['#34C759', '#30D158'],
      template: 'base',
    },
  },
});

// Complete configuration
const config = createTamagui({
  ...defaultConfig,
  tokens: customTokens,
  themes: customThemes,
});

export type AppConfig = typeof config;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
```

### Provider Setup

```typescript
// App.tsx
import { TamaguiProvider } from 'tamagui'
import config from './tamagui.config'

export default function App() {
  return (
    <TamaguiProvider config={config}>
      {/* Your app content */}
    </TamaguiProvider>
  )
}
```

## Best Practices and Examples

### 1. Token Naming Conventions

```typescript
// Good: Descriptive, consistent naming
const tokens = createTokens({
  size: {
    $xs: 12, // Extra small
    $sm: 16, // Small
    $md: 24, // Medium
    $lg: 32, // Large
    $xl: 48, // Extra large
  },
  space: {
    $xs: 6, // Extra small spacing
    $sm: 12, // Small spacing
    $md: 18, // Medium spacing
    $lg: 24, // Large spacing
    $xl: 36, // Extra large spacing
  },
});

// Avoid: Inconsistent or unclear naming
const badTokens = createTokens({
  size: {
    $tiny: 12,
    $small: 16,
    $medium: 24,
    $big: 32,
    $huge: 48,
  },
});
```

### 2. Theme Organization

```typescript
// Good: Organized by purpose
const themes = createThemes({
  base: {
    palette: ['#ffffff', '#000000'],
    template: 'base',
  },
  accent: {
    palette: ['#007AFF', '#FF3B30'],
    template: 'base',
  },
  childrenThemes: {
    // Brand colors
    primary: {
      palette: ['#007AFF', '#0A84FF'],
      template: 'base',
    },
    secondary: {
      palette: ['#34C759', '#30D158'],
      template: 'base',
    },
    // Status colors
    success: {
      palette: ['#34C759', '#30D158'],
      template: 'base',
    },
    warning: {
      palette: ['#FFCC00', '#FFD60A'],
      template: 'base',
    },
    error: {
      palette: ['#FF3B30', '#FF453A'],
      template: 'base',
    },
  },
});
```

### 3. Component Usage Examples

```typescript
// Using tokens in components
const CustomCard = styled('div', {
  padding: '$4',        // Uses space token
  borderRadius: '$3',   // Uses radius token
  backgroundColor: '$background',
  borderColor: '$borderColor',
  borderWidth: 1,
})

// Using themes
<Theme name="light">
  <CustomCard>Light themed card</CustomCard>
</Theme>

<Theme name="dark">
  <CustomCard>Dark themed card</CustomCard>
</Theme>

<Theme name="light">
  <Theme name="primary">
    <CustomCard>Light primary themed card</CustomCard>
  </Theme>
</Theme>
```

### 4. Dynamic Theme Access

```typescript
import { useTheme } from 'tamagui'

function ThemedComponent() {
  const theme = useTheme()

  return (
    <div
      style={{
        backgroundColor: theme.background.val,
        color: theme.color.val,
        borderColor: theme.borderColor.val,
      }}
    >
      Dynamic themed content
    </div>
  )
}
```

### 5. Responsive Theming

```typescript
import { styled } from 'tamagui';

const ResponsiveCard = styled('div', {
  padding: '$3',
  borderRadius: '$2',
  backgroundColor: '$background',

  // Responsive sizing
  $sm: {
    padding: '$4',
    borderRadius: '$3',
  },
  $md: {
    padding: '$5',
    borderRadius: '$4',
  },
  $lg: {
    padding: '$6',
    borderRadius: '$5',
  },
});
```

## Conclusion

Tamagui v4 provides a sophisticated and flexible system for creating custom tokens and themes. The key concepts to remember are:

1. **Tokens** are the foundational design values (size, space, radius, zIndex)
2. **Themes** are built using `createThemes` with support for base, accent, child, and component themes
3. **Palettes** define color scales that are automatically mapped to theme properties
4. **Templates** control how palette colors are mapped to theme properties
5. **Component themes** are automatically applied when components have a `name` property

By following these patterns and best practices, you can create a comprehensive design system that scales with your application's needs while maintaining consistency and flexibility.

## References

- Tamagui v4 Source Code: `node_modules/@tamagui/`
- Theme Builder: `node_modules/@tamagui/theme-builder/`
- Default Themes: `node_modules/@tamagui/themes/v4/`
- Core Functions: `node_modules/@tamagui/core/`
