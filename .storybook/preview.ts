import type { Preview } from '@storybook/react'

import './index.css'; // Adjust the path if your structure is different

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;
