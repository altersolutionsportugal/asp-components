import { themes } from '@storybook/theming';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  arkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: 'black' },
    // Override the default light theme
    light: { ...themes.normal, appBg: 'red' }
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
