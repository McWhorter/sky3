# Component Structure Documentation

## 📁 Organized Component Architecture

This project uses a **component-centric** file organization where each component has its own directory containing all related files.

## 🏗️ Directory Structure

```
src/lib/                        # 📚 Library source code
├── components/
│   ├── Button/
│   │   ├── Button.tsx           # Component implementation
│   │   ├── Button.stories.tsx   # Component stories
│   │   └── index.ts            # Export file
│   ├── Card/
│   │   ├── Card.tsx            # Component implementation
│   │   ├── Card.stories.tsx    # Component stories
│   │   └── index.ts           # Export file
│   └── Input/
│       ├── Input.tsx           # Component implementation
│       ├── Input.stories.tsx   # Component stories
│       └── index.ts           # Export file
├── TamaguiProvider.tsx         # Theme provider
└── index.ts                   # Main library exports

docs/                          # 📖 Documentation & examples
├── Introduction.mdx           # Library overview
└── Examples.stories.tsx       # Usage examples & patterns
```

## ✅ Benefits of This Structure

### **1. Co-location**
- All related files are grouped together
- Easy to find component, stories, types, and tests
- Reduces cognitive load when working on a component

### **2. Scalability** 
- Easy to add new files to a component (tests, docs, etc.)
- Clear boundaries between components
- Simple to move or refactor individual components

### **3. Maintainability**
- Changes to a component are isolated to its directory
- Easy to delete unused components
- Clear ownership and responsibility

### **4. Developer Experience**
- IDE navigation is more intuitive
- File searches are more targeted
- Consistent patterns across all components

### **5. Separation of Concerns**
- **`src/lib/`** - Pure library code and component stories
- **`docs/`** - Documentation, examples, and usage patterns
- Clean boundary between implementation and documentation

## 📋 File Conventions

### **Component Files (`ComponentName.tsx`)**
```tsx
// Component implementation with:
// - TypeScript interfaces
// - Styled components (Tamagui)
// - Main component export
// - Type exports
```

### **Story Files (`ComponentName.stories.tsx`)**
```tsx
// Storybook stories with:
// - Meta configuration
// - Multiple story variants
// - Interactive examples
// - Documentation
```

### **Index Files (`index.ts`)**
```tsx
// Clean exports:
export * from './ComponentName';
```

## 🔄 Import Patterns

### **From Library Root**
```tsx
import { Button, Card, Input } from 'react-native-web-ui-lib';
```

### **Between Components**
```tsx
import { Button } from '../Button';
import { Card } from '../Card';
```

### **Within Component Directory**
```tsx
import { Button } from './Button';
```

## 🚀 Adding New Components

To add a new component, follow this pattern:

1. **Create directory**: `src/lib/components/NewComponent/`
2. **Add files**:
   ```
   NewComponent/
   ├── NewComponent.tsx
   ├── NewComponent.stories.tsx
   └── index.ts
   ```
3. **Update main index**: Add export to `src/lib/index.ts`

## 🧪 Testing Strategy

Each component directory can include:
- `ComponentName.test.tsx` - Unit tests
- `ComponentName.spec.tsx` - Integration tests
- `__tests__/` - Multiple test files

## 📚 Documentation Strategy

Each component directory can include:
- `README.md` - Component-specific documentation
- `ComponentName.mdx` - Rich documentation with examples
- `CHANGELOG.md` - Component version history

## 🎯 Best Practices

1. **Keep components focused** - One responsibility per component
2. **Use descriptive names** - Clear, unambiguous component names
3. **Export everything needed** - Types, interfaces, utilities
4. **Document thoroughly** - Stories serve as living documentation
5. **Test comprehensively** - Unit, integration, and visual tests

## 🔧 Tooling Support

This structure works well with:
- **Storybook** - Configured to scan both `src/lib/` and `docs/` directories
- **Jest** - Test file discovery in component directories
- **TypeScript** - Module resolution with clean imports
- **ESLint** - Import/export validation
- **VS Code** - File navigation and search

---

This organized structure ensures our React Native Web UI library remains maintainable and scalable as it grows! 🚀
