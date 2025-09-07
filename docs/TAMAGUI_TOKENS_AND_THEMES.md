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

### Understanding Templates: What is `template: 'base'`?

The `template` property is a crucial concept in Tamagui's theme system. It defines **how palette colors are mapped to theme properties**. Think of it as a "recipe" that tells Tamagui which palette color to use for each theme property.

#### What Templates Do

Templates map palette indices to theme properties. For example, the `base` template defines:

- `background: 6` - Use palette index 6 for background
- `backgroundHover: 5` - Use palette index 5 for hover background (lighter)
- `backgroundPress: 7` - Use palette index 7 for press background (darker)
- `color: -6` - Use palette index -6 (counting from end) for text color
- `borderColor: 9` - Use palette index 9 for border color

#### Available Templates

Based on the actual implementation, Tamagui provides these built-in templates:

```typescript
// Available templates in Tamagui v4
const availableTemplates = {
  base: {
    // Standard theme mapping - most commonly used
    background: 6,
    backgroundHover: 5, // Lighter on hover
    backgroundPress: 7, // Darker on press
    backgroundFocus: 7, // Darker on focus
    color: -6, // Text color (from end of palette)
    colorHover: -7, // Lighter text on hover
    colorPress: -6, // Same as base on press
    colorFocus: -7, // Lighter text on focus
    borderColor: 9, // Border color
    borderColorHover: 8, // Lighter border on hover
    borderColorPress: 10, // Darker border on press
    borderColorFocus: 9, // Same as base on focus
    // ... and many more properties
  },

  surface1: {
    // Slightly elevated surface (background + 1)
    background: 7, // One step up from base
    backgroundHover: 6, // Lighter on hover
    backgroundPress: 8, // Darker on press
    // ... same pattern but shifted up
  },

  surface2: {
    // More elevated surface (background + 2)
    background: 8, // Two steps up from base
    // ... same pattern but shifted up more
  },

  surface3: {
    // Highest surface (background + 3)
    background: 9, // Three steps up from base
    // ... same pattern but shifted up most
  },

  alt1: {
    // Alternative text colors (color - 1)
    color: -7, // One step lighter than base
    colorHover: -8, // Even lighter on hover
    // ... same pattern but with lighter text
  },

  alt2: {
    // More alternative text colors (color - 2)
    color: -8, // Two steps lighter than base
    // ... same pattern but with even lighter text
  },

  inverse: {
    // Inverted colors (negative indices)
    background: -6, // Inverted background
    color: 6, // Inverted text color
    // ... all colors inverted
  },
};
```

#### How Templates Work with Palettes

```typescript
// Example palette (11 colors)
const palette = [
  '#ffffff', // Index 0 - lightest
  '#f8f9fa', // Index 1
  '#e9ecef', // Index 2
  '#dee2e6', // Index 3
  '#ced4da', // Index 4
  '#adb5bd', // Index 5
  '#6c757d', // Index 6 - base background
  '#495057', // Index 7
  '#343a40', // Index 8
  '#212529', // Index 9 - base border
  '#000000', // Index 10 - darkest
];

// With template: 'base'
const theme = {
  background: palette[6], // '#6c757d' - base background
  backgroundHover: palette[5], // '#adb5bd' - lighter on hover
  backgroundPress: palette[7], // '#495057' - darker on press
  color: palette[4], // '#ced4da' - text color (index -6 from end)
  borderColor: palette[9], // '#212529' - border color
};
```

#### When to Use Different Templates

```typescript
const themes = createThemes({
  base: {
    palette: ['#ffffff', '#000000'],
    template: 'base', // ✅ Standard theme - most common
  },

  // For elevated surfaces (cards, modals, etc.)
  card: {
    palette: ['#ffffff', '#000000'],
    template: 'surface1', // ✅ Slightly elevated background
  },

  modal: {
    palette: ['#ffffff', '#000000'],
    template: 'surface2', // ✅ More elevated background
  },

  // For alternative text colors
  muted: {
    palette: ['#ffffff', '#000000'],
    template: 'alt1', // ✅ Lighter text colors
  },

  // For inverted themes (dark text on light background)
  inverse: {
    palette: ['#ffffff', '#000000'],
    template: 'inverse', // ✅ Inverted color scheme
  },
});
```

#### Custom Templates

You can also create custom templates:

```typescript
const customTemplates = {
  base: {
    // Standard mapping
    background: 6,
    backgroundHover: 5,
    backgroundPress: 7,
    color: -6,
    borderColor: 9,
  },

  // Custom template for buttons
  button: {
    background: 7, // Slightly darker background
    backgroundHover: 6, // Lighter on hover
    backgroundPress: 8, // Darker on press
    color: -5, // Slightly lighter text
    borderColor: 8, // Lighter border
  },

  // Custom template for inputs
  input: {
    background: 5, // Lighter background
    backgroundHover: 4, // Even lighter on hover
    backgroundPress: 6, // Darker on press
    color: -7, // Darker text
    borderColor: 7, // Darker border
  },
};

const themes = createThemes({
  base: {
    palette: ['#ffffff', '#000000'],
    template: 'base',
  },

  button: {
    palette: ['#007AFF', '#0A84FF'],
    template: 'button', // ✅ Use custom button template
  },

  input: {
    palette: ['#34C759', '#30D158'],
    template: 'input', // ✅ Use custom input template
  },

  templates: customTemplates, // ✅ Provide custom templates
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
import { styled, Button } from 'tamagui';

const CustomButton = styled(Button, {
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

### 2. Critical: Custom Size Tokens and Font Sizing

**IMPORTANT**: When adding custom size tokens, you MUST also configure font sizes to match. This is a common source of issues where fontSize doesn't work with custom tokens.

#### The Problem

When you add custom size tokens like `$sm`, `$md`, etc., Tamagui's font system doesn't automatically know how to map these to font sizes. The `getFontSized` function looks for font size mappings in the font configuration.

#### The Solution: Complete Token + Font Configuration

```typescript
import { createTamagui } from '@tamagui/core';
import { createTokens } from '@tamagui/core';
import { createSystemFont } from '@tamagui/config';
import { defaultConfig } from '@tamagui/config/v4';

// 1. Create custom tokens with your size system
const customTokens = createTokens({
  ...defaultConfig.tokens,
  size: {
    ...defaultConfig.tokens.size,
    // Add your custom sizes
    $xs: 12, // Extra small
    $sm: 16, // Small
    $md: 24, // Medium
    $lg: 32, // Large
    $xl: 48, // Extra large
  },
  space: {
    ...defaultConfig.tokens.space,
    // Add corresponding spacing
    $xs: 6, // Extra small spacing
    $sm: 12, // Small spacing
    $md: 18, // Medium spacing
    $lg: 24, // Large spacing
    $xl: 36, // Extra large spacing
  },
});

// 2. Create custom fonts that map to your size tokens
const customFonts = {
  body: createSystemFont({
    font: {
      // CRITICAL: Map your custom size tokens to actual font sizes
      size: {
        // Keep existing sizes
        ...defaultConfig.fonts.body.size,
        // Add your custom size mappings
        $xs: 10, // 10px font for $xs size
        $sm: 12, // 12px font for $sm size
        $md: 14, // 14px font for $md size
        $lg: 16, // 16px font for $lg size
        $xl: 18, // 18px font for $xl size
      },
      // Optional: Custom line heights for your sizes
      lineHeight: {
        ...defaultConfig.fonts.body.lineHeight,
        $xs: 14, // Line height for $xs
        $sm: 16, // Line height for $sm
        $md: 20, // Line height for $md
        $lg: 24, // Line height for $lg
        $xl: 28, // Line height for $xl
      },
    },
  }),
  heading: createSystemFont({
    font: {
      // Same mapping for heading font
      size: {
        ...defaultConfig.fonts.heading.size,
        $xs: 12, // Larger font sizes for headings
        $sm: 16,
        $md: 20,
        $lg: 24,
        $xl: 28,
      },
      lineHeight: {
        ...defaultConfig.fonts.heading.lineHeight,
        $xs: 16,
        $sm: 20,
        $md: 24,
        $lg: 28,
        $xl: 32,
      },
    },
  }),
};

// 3. Create the complete configuration
const config = createTamagui({
  ...defaultConfig,
  tokens: customTokens,
  fonts: customFonts,
});
```

#### Alternative: Extend Existing Font Sizes

If you prefer to extend the existing font size system:

```typescript
import { createSystemFont } from '@tamagui/config';

const customFonts = {
  body: createSystemFont({
    font: {
      size: {
        // Extend the default sizes with your custom ones
        1: 11, // Keep existing
        2: 12, // Keep existing
        3: 13, // Keep existing
        4: 14, // Keep existing
        true: 14, // Keep existing
        5: 16, // Keep existing
        6: 18, // Keep existing
        7: 20, // Keep existing
        8: 23, // Keep existing
        9: 30, // Keep existing
        10: 46, // Keep existing
        11: 55, // Keep existing
        12: 62, // Keep existing
        13: 72, // Keep existing
        14: 92, // Keep existing
        15: 114, // Keep existing
        16: 134, // Keep existing
        // Add your custom sizes
        $xs: 10,
        $sm: 12,
        $md: 14,
        $lg: 16,
        $xl: 18,
      },
    },
  }),
};
```

### 3. Component Usage with Custom Size Tokens

Now you can use your custom size tokens in components:

```typescript
import { styled, Button, Text } from 'tamagui';

// Button with custom size variants
const CustomButton = styled(Button, {
  name: 'CustomButton',
  variants: {
    size: {
      xs: {
        height: '$xs',
        paddingHorizontal: '$xs',
        fontSize: '$xs', // This will now work!
      },
      sm: {
        height: '$sm',
        paddingHorizontal: '$sm',
        fontSize: '$sm', // This will now work!
      },
      md: {
        height: '$md',
        paddingHorizontal: '$md',
        fontSize: '$md', // This will now work!
      },
      lg: {
        height: '$lg',
        paddingHorizontal: '$lg',
        fontSize: '$lg', // This will now work!
      },
      xl: {
        height: '$xl',
        paddingHorizontal: '$xl',
        fontSize: '$xl', // This will now work!
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

// Text component with custom sizes
const CustomText = styled(Text, {
  name: 'CustomText',
  fontFamily: '$body',
  variants: {
    size: {
      xs: { fontSize: '$xs' }, // Works with proper font config
      sm: { fontSize: '$sm' }, // Works with proper font config
      md: { fontSize: '$md' }, // Works with proper font config
      lg: { fontSize: '$lg' }, // Works with proper font config
      xl: { fontSize: '$xl' }, // Works with proper font config
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
```

### 4. Usage Examples

```typescript
import { View } from 'tamagui';

// Using the custom components
function App() {
  return (
    <View>
      {/* Buttons with custom sizes */}
      <CustomButton size="xs">Extra Small Button</CustomButton>
      <CustomButton size="sm">Small Button</CustomButton>
      <CustomButton size="md">Medium Button</CustomButton>
      <CustomButton size="lg">Large Button</CustomButton>
      <CustomButton size="xl">Extra Large Button</CustomButton>

      {/* Text with custom sizes */}
      <CustomText size="xs">Extra small text</CustomText>
      <CustomText size="sm">Small text</CustomText>
      <CustomText size="md">Medium text</CustomText>
      <CustomText size="lg">Large text</CustomText>
      <CustomText size="xl">Extra large text</CustomText>

      {/* Using Tamagui's built-in components with custom tokens */}
      <Button size="$sm">Small Button</Button>
      <Button size="$md">Medium Button</Button>
      <Button size="$lg">Large Button</Button>

      <Text size="$sm">Small Text</Text>
      <Text size="$md">Medium Text</Text>
      <Text size="$lg">Large Text</Text>
    </View>
  )
}
```

### 5. Debugging Font Size Issues

If you're still having font size issues, add debugging:

```typescript
import { styled, Text } from 'tamagui';

// Add this to your component to debug font sizing
const DebugText = styled(Text, {
  name: 'DebugText',
  fontFamily: '$body',
  variants: {
    size: {
      '...fontSize': (size, extras) => {
        // Debug logging
        if (process.env.NODE_ENV === 'development') {
          console.log('Font size debug:', {
            size,
            font: extras.font,
            tokens: extras.tokens,
            fontSize: extras.font?.size?.[size],
          });
        }
        return { fontSize: size };
      },
    },
  },
});
```

### 6. Applying Themes to Custom Components

One of the most powerful features of Tamagui is how themes are automatically applied to components. Here's how to make your custom components work seamlessly with the theme system, just like Tamagui's built-in components.

#### Understanding Theme Application

Tamagui components automatically inherit theme values through:

1. **Theme Context**: Components automatically receive theme values from parent `Theme` components
2. **Token References**: Using `$` prefixed values (e.g., `$background`, `$color`)
3. **Theme Variants**: Automatic theme switching based on theme names
4. **Component-Specific Themes**: Themes that target specific component names

#### Basic Theme-Aware Component

```typescript
import { styled, View } from 'tamagui';

// Basic theme-aware component
const CustomCard = styled(View, {
  name: 'CustomCard', // Important: This enables component-specific theming
  backgroundColor: '$background', // Uses theme background
  borderColor: '$borderColor', // Uses theme border color
  borderWidth: 1,
  borderRadius: '$4',
  padding: '$4',

  // Interactive states that respond to theme
  hoverStyle: {
    backgroundColor: '$backgroundHover',
    borderColor: '$borderColorHover',
  },

  pressStyle: {
    backgroundColor: '$backgroundPress',
    borderColor: '$borderColorPress',
  },

  focusStyle: {
    backgroundColor: '$backgroundFocus',
    borderColor: '$borderColorFocus',
    outlineColor: '$outlineColor',
    outlineWidth: 2,
    outlineStyle: 'solid',
  },
});
```

#### Advanced Theme-Aware Component with Variants

```typescript
import { styled, Button } from 'tamagui';

const CustomButton = styled(Button, {
  name: 'CustomButton',

  // Base theme-aware styles
  backgroundColor: '$background',
  borderColor: '$borderColor',
  borderWidth: 1,
  borderRadius: '$4',
  paddingHorizontal: '$4',
  paddingVertical: '$3',

  // Interactive states
  hoverStyle: {
    backgroundColor: '$backgroundHover',
    borderColor: '$borderColorHover',
  },

  pressStyle: {
    backgroundColor: '$backgroundPress',
    borderColor: '$borderColorPress',
  },

  focusStyle: {
    backgroundColor: '$backgroundFocus',
    borderColor: '$borderColorFocus',
    outlineColor: '$outlineColor',
    outlineWidth: 2,
    outlineStyle: 'solid',
  },

  // Size variants that work with themes
  variants: {
    size: {
      sm: {
        paddingHorizontal: '$2',
        paddingVertical: '$2',
        fontSize: '$sm',
        borderRadius: '$2',
      },
      md: {
        paddingHorizontal: '$4',
        paddingVertical: '$3',
        fontSize: '$md',
        borderRadius: '$4',
      },
      lg: {
        paddingHorizontal: '$6',
        paddingVertical: '$4',
        fontSize: '$lg',
        borderRadius: '$6',
      },
    },

    variant: {
      primary: {
        backgroundColor: '$blue9',
        borderColor: '$blue9',

        hoverStyle: {
          backgroundColor: '$blue10',
          borderColor: '$blue10',
        },

        pressStyle: {
          backgroundColor: '$blue11',
          borderColor: '$blue11',
        },
      },

      secondary: {
        backgroundColor: '$gray3',
        borderColor: '$gray6',

        hoverStyle: {
          backgroundColor: '$gray4',
          borderColor: '$gray7',
        },

        pressStyle: {
          backgroundColor: '$gray5',
          borderColor: '$gray8',
        },
      },

      outline: {
        backgroundColor: 'transparent',
        borderColor: '$borderColor',

        hoverStyle: {
          backgroundColor: '$backgroundHover',
          borderColor: '$borderColorHover',
        },

        pressStyle: {
          backgroundColor: '$backgroundPress',
          borderColor: '$borderColorPress',
        },
      },
    },

    disabled: {
      true: {
        opacity: 0.5,
        pointerEvents: 'none',
      },
    },
  },

  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
});
```

#### Component-Specific Theme Configuration

To enable component-specific theming, you need to define themes that target your component name:

```typescript
import { createThemes } from '@tamagui/theme-builder';

const customThemes = createThemes({
  base: {
    palette: ['#ffffff', '#000000'],
    template: 'base',
  },

  // Component-specific themes
  componentThemes: {
    CustomButton: {
      template: 'base',
    },
    CustomCard: {
      template: 'base',
    },
  },

  // Child themes for component variants
  childrenThemes: {
    primary: {
      palette: ['#007AFF', '#0A84FF'],
      template: 'base',
    },
    secondary: {
      palette: ['#34C759', '#30D158'],
      template: 'base',
    },
  },
});
```

This creates themes like:

- `light_CustomButton`, `dark_CustomButton`
- `light_primary_CustomButton`, `dark_primary_CustomButton`
- `light_secondary_CustomButton`, `dark_secondary_CustomButton`

#### Using Theme-Aware Components

```typescript
import { View, Theme } from 'tamagui';

function App() {
  return (
    <View>
      {/* Basic theme application */}
      <Theme name="light">
        <CustomCard>Light themed card</CustomCard>
        <CustomButton>Light themed button</CustomButton>
      </Theme>

      <Theme name="dark">
        <CustomCard>Dark themed card</CustomCard>
        <CustomButton>Dark themed button</CustomButton>
      </Theme>

      {/* Nested theme application */}
      <Theme name="light">
        <CustomCard>Light card</CustomCard>

        <Theme name="primary">
          <CustomButton>Light primary button</CustomButton>
          <CustomCard>Light primary card</CustomCard>
        </Theme>

        <Theme name="secondary">
          <CustomButton>Light secondary button</CustomButton>
          <CustomCard>Light secondary card</CustomCard>
        </Theme>
      </Theme>

      {/* Component variants with themes */}
      <Theme name="dark">
        <CustomButton size="sm" variant="outline">Small outline button</CustomButton>
        <CustomButton size="md" variant="primary">Medium primary button</CustomButton>
        <CustomButton size="lg" variant="secondary">Large secondary button</CustomButton>
      </Theme>
    </View>
  )
}
```

#### Advanced: Context-Based Theming

For more complex theming scenarios, you can use Tamagui's context system:

```typescript
import { createStyledContext, styled, View } from 'tamagui'

// Create a context for your component
const CustomComponentContext = createStyledContext<{
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md' | 'lg'
  theme?: 'light' | 'dark'
}>({
  variant: 'primary',
  size: 'md',
  theme: 'light',
})

const CustomComponent = styled(View, {
  name: 'CustomComponent',
  context: CustomComponentContext,

  // Base styles
  backgroundColor: '$background',
  borderColor: '$borderColor',
  borderWidth: 1,
  borderRadius: '$4',
  padding: '$4',

  // Variants that respond to context
  variants: {
    variant: {
      primary: {
        backgroundColor: '$blue9',
        borderColor: '$blue9',
      },
      secondary: {
        backgroundColor: '$gray3',
        borderColor: '$gray6',
      },
      tertiary: {
        backgroundColor: 'transparent',
        borderColor: '$borderColor',
      },
    },

    size: {
      sm: {
        padding: '$2',
        fontSize: '$sm',
        borderRadius: '$2',
      },
      md: {
        padding: '$4',
        fontSize: '$md',
        borderRadius: '$4',
      },
      lg: {
        padding: '$6',
        fontSize: '$lg',
        borderRadius: '$6',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

// Usage with context
function App() {
  return (
    <CustomComponentContext.Provider value={{ variant: 'primary', size: 'lg' }}>
      <CustomComponent>Context-aware component</CustomComponent>
    </CustomComponentContext.Provider>
  )
}
```

#### Theme-Aware Text Components

For text components that need to respond to themes:

```typescript
import { styled, Text } from 'tamagui';

const CustomText = styled(Text, {
  name: 'CustomText',
  fontFamily: '$body',

  variants: {
    size: {
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
    },

    weight: {
      normal: { fontWeight: '400' },
      medium: { fontWeight: '500' },
      semibold: { fontWeight: '600' },
      bold: { fontWeight: '700' },
    },

    variant: {
      body: {
        fontFamily: '$body',
      },
      heading: {
        fontFamily: '$heading',
        fontWeight: '600',
      },
      caption: {
        color: '$colorPress',
        fontSize: '$sm',
      },
      link: {
        color: '$blue9',
        textDecoration: 'underline',

        hoverStyle: {
          color: '$blue10',
        },

        pressStyle: {
          color: '$blue11',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    weight: 'normal',
    variant: 'body',
  },
});
```

#### Best Practices for Theme-Aware Components

1. **Always use `name` property**: This enables component-specific theming
2. **Use theme tokens**: Always use `$` prefixed values for theme properties
3. **Include interactive states**: Add `hoverStyle`, `pressStyle`, `focusStyle`
4. **Define variants**: Create size, variant, and state variants
5. **Use context for complex scenarios**: When you need to share theme state across components
6. **Test with different themes**: Ensure your components work with all theme combinations

```typescript
import { styled, View } from 'tamagui';

// Example of a well-structured theme-aware component
const WellStructuredComponent = styled(View, {
  name: 'WellStructuredComponent', // ✅ Enables component theming

  // ✅ Use theme tokens
  backgroundColor: '$background',
  borderColor: '$borderColor',
  borderWidth: 1,
  borderRadius: '$4',
  padding: '$4',

  // ✅ Include interactive states
  hoverStyle: {
    backgroundColor: '$backgroundHover',
    borderColor: '$borderColorHover',
  },

  pressStyle: {
    backgroundColor: '$backgroundPress',
    borderColor: '$borderColorPress',
  },

  focusStyle: {
    backgroundColor: '$backgroundFocus',
    borderColor: '$borderColorFocus',
    outlineColor: '$outlineColor',
    outlineWidth: 2,
    outlineStyle: 'solid',
  },

  // ✅ Define variants
  variants: {
    size: {
      sm: { padding: '$2', fontSize: '$sm' },
      md: { padding: '$4', fontSize: '$md' },
      lg: { padding: '$6', fontSize: '$lg' },
    },

    variant: {
      primary: {
        backgroundColor: '$blue9',
        borderColor: '$blue9',
      },
      secondary: {
        backgroundColor: '$gray3',
        borderColor: '$gray6',
      },
    },
  },

  defaultVariants: {
    size: 'md',
    variant: 'primary',
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
import { styled, View, Theme } from 'tamagui';

// Using tokens in components
const CustomCard = styled(View, {
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
import { useTheme, View } from 'tamagui'

function ThemedComponent() {
  const theme = useTheme()

  return (
    <View
      style={{
        backgroundColor: theme.background.val,
        borderColor: theme.borderColor.val,
      }}
    >
      Dynamic themed content
    </View>
  )
}
```

### 5. Responsive Theming

```typescript
import { styled, View } from 'tamagui';

const ResponsiveCard = styled(View, {
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
