// .storybook/main.ts

import type { StorybookViteConfig } from '@storybook/builder-vite';
import { mergeConfig } from 'vite';
import viteConf from '../vite.config.ts';

let config : StorybookViteConfig = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    "@storybook/addon-interactions",
    "storybook-addon-mantine"
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  framework: "@storybook/react",
  typescript: {
    reactDocgen: 'react-docgen', // 👈 react-docgen configured here.
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Use the same "resolve" configuration as your app
      resolve:  viteConf.resolve,
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
    });
  },
};

export default config;