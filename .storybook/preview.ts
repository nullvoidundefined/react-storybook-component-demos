import type { Decorator, Preview } from '@storybook/react-vite';
import '../src/styles/colors.scss';
import '../src/styles/fonts.scss';
import '../src/styles/borders.scss';
import '../src/styles/effects.scss';
import '../src/styles/storybook.scss';
import '../src/index.scss';

const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme;
  const root = document.documentElement;

  root.removeAttribute('data-theme');

  if (theme === 'light' || theme === 'dark') {
    root.setAttribute('data-theme', theme);
  }

  return Story();
};

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global color theme',
      defaultValue: 'system',
      toolbar: {
        icon: 'mirror',
        items: [
          { value: 'system', title: 'System' },
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
      },
    },
  },
  decorators: [withTheme],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'error',
    },
  },
};

export default preview;
