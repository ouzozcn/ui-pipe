/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    zeplinLink: "https://zpl.io/1MJKY05",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
