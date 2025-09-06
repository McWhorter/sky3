import type { StorybookConfig } from '@storybook/react-vite';
import { resolve } from 'path';

const config: StorybookConfig = {
  stories: [
    '../src/lib/**/*.stories.@(js|jsx|mjs|ts|tsx)', // Component stories
    '../docs/**/*.mdx', // Documentation
    '../docs/**/*.stories.@(js|jsx|mjs|ts|tsx)', // Documentation examples
  ],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async config => {
    // Ensure React Native Web alias and path aliases are applied
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native': 'react-native-web',
      '@': resolve(__dirname, '../src/lib'),
      '@/components': resolve(__dirname, '../src/lib/components'),
    };

    return config;
  },
};

export default config;
