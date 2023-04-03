// // .storybook/preview.tsx
// import React from 'react';
// import { MantineProvider } from '@mantine/core';
// // import theme object you've exported in previous step
// import { theme } from '../src/theme';

// // Create a wrapper component that will contain all your providers.
// // Usually you should render all providers in this component:
// // MantineProvider, DatesProvider, Notifications, Spotlight, etc.
// function ThemeWrapper (props: { children: React.ReactNode }) {
//   return (
//     <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
//       {props.children}
//     </MantineProvider>
//   );
// }

// // enhance your stories with decorator that uses ThemeWrapper
// export const decorators = [(renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];

import { mantineTheme } from "storybook-addon-mantine";
import { theme } from '../src/theme';

// These props are passed to the MantineProvider used by all stories.
const mantineProviderProps = {
  withCSSVariables: false,
  withGlobalStyles: true,
  withNormalizeCSS: false,
};

export const decorators = [
  mantineTheme(
    [
      { ...theme, themeName: "Light Mode" },
      {
        themeName: "Dark Mode - Green",
        primaryColor: "green",
        colorScheme: "dark",
        radius: 0,
      },
    ],
    mantineProviderProps
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}