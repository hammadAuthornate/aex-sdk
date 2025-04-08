import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      strictMode: false,
    },
  },
  core: { disableTelemetry: true },
  viteFinal: async (config) => {
    return {
      ...config,
      css: {
        postcss: require("../postcss.config.cjs"),
      },
    };
  },
};
export default config;
