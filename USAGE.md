# React Native Web UI Library Usage Guide

## Installation

```bash
npm install react-native-web-ui-lib
```

## Configuration Version

This library currently uses **Tamagui v3 configuration** for maximum stability and compatibility. While Tamagui v4 `defaultConfig` is available, it introduces breaking changes that require significant component refactoring. 

**Why v3?**
- ✅ Stable and battle-tested
- ✅ Compatible with existing component patterns  
- ✅ Proven in production environments
- ✅ Full feature set for UI libraries

**v4 Migration:** Future versions of this library may migrate to v4 when the ecosystem stabilizes.

## Basic Usage

### Option 1: Use Default Configuration (Recommended)

```tsx
import React from 'react';
import { TamaguiProvider, Button, Card, Input } from 'react-native-web-ui-lib';

function App() {
  return (
    <TamaguiProvider>
      <Card elevation={2} padding="$4">
        <Button 
          title="Click me" 
          variant="primary" 
          onPress={() => console.log('Pressed!')} 
        />
        <Input 
          label="Name" 
          placeholder="Enter your name"
          value=""
          onChangeText={() => {}}
        />
      </Card>
    </TamaguiProvider>
  );
}
```

### Option 2: Custom Configuration

```tsx
import React from 'react';
import { createTamagui } from 'tamagui';
import { config } from '@tamagui/config/v3';
import { TamaguiProvider, Button, defaultTamaguiConfig } from 'react-native-web-ui-lib';

// Option A: Extend the library's default config
const customConfig = createTamagui({
  ...defaultTamaguiConfig,
  themes: {
    ...defaultTamaguiConfig.themes,
    // Add your custom themes
    dark_custom: {
      ...defaultTamaguiConfig.themes.dark,
      background: '#1a1a1a',
    }
  }
});

// Option B: Create completely custom config
const myConfig = createTamagui(config);

function App() {
  return (
    <TamaguiProvider config={customConfig}>
      <YourApp />
    </TamaguiProvider>
  );
}
```

## Components

### Button

```tsx
import { Button } from 'react-native-web-ui-lib';

// Variants
<Button title="Primary" variant="primary" onPress={() => {}} />
<Button title="Secondary" variant="secondary" onPress={() => {}} />
<Button title="Outline" variant="outline" onPress={() => {}} />

// Sizes
<Button title="Small" size="small" onPress={() => {}} />
<Button title="Medium" size="medium" onPress={() => {}} />
<Button title="Large" size="large" onPress={() => {}} />

// States
<Button title="Disabled" disabled onPress={() => {}} />
```

### Card

```tsx
import { Card } from 'react-native-web-ui-lib';

<Card elevation={1}>Low elevation</Card>
<Card elevation={2}>Medium elevation</Card>
<Card elevation={3}>High elevation</Card>
<Card elevation={4}>Highest elevation</Card>

// Custom styling
<Card 
  elevation={2} 
  padding="$5" 
  margin="$3" 
  backgroundColor="$blue2"
>
  Custom styled card
</Card>
```

### Input

```tsx
import { Input } from 'react-native-web-ui-lib';

// Basic input
<Input
  value={value}
  onChangeText={setValue}
  placeholder="Enter text"
/>

// With label
<Input
  label="Email"
  value={email}
  onChangeText={setEmail}
  placeholder="Enter your email"
/>

// With error
<Input
  label="Password"
  value={password}
  onChangeText={setPassword}
  error="Password is required"
  secureTextEntry
/>

// Multiline
<Input
  label="Description"
  value={description}
  onChangeText={setDescription}
  multiline
  numberOfLines={4}
/>
```

## Architecture Benefits

### ✅ **Flexible Provider Pattern**
- **Default config**: Works out of the box
- **Customizable**: Override themes, tokens, animations
- **Extensible**: Build on top of library defaults

### ✅ **Cross-Platform Compatible**
- No CSS dependencies
- Pure React Native Web styling
- Works in actual React Native apps

### ✅ **Theme-Aware Components**
- Consistent design tokens (`$blue10`, `$gray3`, etc.)
- Automatic dark/light mode support
- Responsive design built-in

### ✅ **Type-Safe**
- Full TypeScript support
- IntelliSense for all props
- Proper prop validation

## Advanced Usage

### Custom Theme

```tsx
import { createTamagui } from 'tamagui';
import { config } from '@tamagui/config/v3';

const customConfig = createTamagui({
  ...config,
  themes: {
    ...config.themes,
    brand: {
      background: '#ffffff',
      color: '#000000',
      primary: '#your-brand-color',
      secondary: '#your-secondary-color',
    }
  }
});

<TamaguiProvider config={customConfig}>
  <App />
</TamaguiProvider>
```

### Custom Components

```tsx
import { styled, Stack } from 'tamagui';

const MyCustomCard = styled(Stack, {
  backgroundColor: '$background',
  borderRadius: '$4',
  padding: '$4',
  shadowColor: '$shadowColor',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
});
```

## Best Practices

1. **Always wrap your app with TamaguiProvider**
2. **Use theme tokens** (`$blue10`) instead of hardcoded colors
3. **Leverage variants** for consistent component styling
4. **Extend the default config** rather than creating from scratch
5. **Use TypeScript** for better development experience

## Troubleshooting

### Build Issues
- Ensure `@tamagui/vite-plugin` is properly configured
- Check that all imports are from `'tamagui'` not individual packages

### Runtime Issues  
- Verify TamaguiProvider wraps your entire app
- Ensure config is properly created with `createTamagui()`

### Styling Issues
- Use theme tokens for consistent theming
- Check component variants are spelled correctly
- Verify responsive props syntax
