# React Native Web UI Library

A modern, responsive UI component library built with React Native Web and TypeScript. This library provides cross-platform components that work seamlessly on web, iOS, and Android.

## Features

- 🌐 Cross-platform compatibility (Web, iOS, Android)
- 📱 React Native Web powered
- 🎨 Modern, customizable design system
- 📦 TypeScript support
- 🔧 Tree-shakeable ES modules
- 📚 Comprehensive documentation

## Installation

```bash
npm install react-native-web-ui-lib
```

### Peer Dependencies

Make sure you have the required peer dependencies installed:

```bash
npm install react react-dom react-native-web
```

## Quick Start

```tsx
import React from 'react';
import { Button, Card, Input } from 'react-native-web-ui-lib';

function MyApp() {
  const [inputValue, setInputValue] = useState('');

  return (
    <Card padding={20}>
      <Input
        label="Name"
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Enter your name"
      />
      <Button
        title="Submit"
        onPress={() => console.log('Submitted:', inputValue)}
        variant="primary"
      />
    </Card>
  );
}
```

## Components

### Button

A customizable button component with multiple variants and sizes.

```tsx
<Button
  title="Click me"
  onPress={() => {}}
  variant="primary" // 'primary' | 'secondary' | 'outline'
  size="medium"    // 'small' | 'medium' | 'large'
  disabled={false}
/>
```

### Card

A container component with elevation and customizable styling.

```tsx
<Card
  elevation={3}
  padding={16}
  margin={8}
  backgroundColor="#FFFFFF"
  borderRadius={8}
>
  {/* Your content */}
</Card>
```

### Input

A text input component with label and error state support.

```tsx
<Input
  label="Email"
  value={email}
  onChangeText={setEmail}
  placeholder="Enter email"
  error={emailError}
  secureTextEntry={false}
  multiline={false}
/>
```

## Development

### Running the Demo

```bash
npm run dev
```

This will start the development server with a demo application showcasing all components.

### Building the Library

```bash
npm run build:lib
```

This creates the distribution files in the `dist` folder.

### Publishing

```bash
npm publish
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see the [LICENSE](LICENSE) file for details.