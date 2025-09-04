import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    "../src/lib/**/*.stories.@(js|jsx|mjs|ts|tsx)",  // Component stories
    "../docs/**/*.mdx",                              // Documentation
    "../docs/**/*.stories.@(js|jsx|mjs|ts|tsx)"      // Documentation examples
  ],
  addons: [
    "@storybook/addon-docs"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  viteFinal: async (config) => {
    // Ensure React Native Web alias is applied
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native': 'react-native-web',
    };
    
    return config;
  }
};

export default config;