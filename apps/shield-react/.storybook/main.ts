import type { StorybookConfig } from "@storybook/nextjs";
import * as path from "path";

const config: StorybookConfig = {
  // stories: [
  //     '../src/stories/**/*.mdx',
  //     '../src/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  // ],
  stories: [
    "../src/stories/**/*.mdx",
    "../docs/**/*.stories.mdx",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "storybook-i18n",
    "storybook-design-token",
    "storybook-addon-designs",
    "@storybook/addon-styling",
    "storybook-dark-mode",
    // {
    //     name: '@storybook/addon-storysource',
    //     options: {
    //         rule: {
    //             include: [path.resolve(__dirname, '../')],
    //         },
    //         loaderOptions: {
    //             prettierConfig: { printWidth: 80, singleQuote: false },
    //         },
    //     },
    // }
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config, { configType }) => {
    config.module?.rules?.push({
      test: /\.css$/,
      use: [
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [require("tailwindcss"), require("autoprefixer")],
            },
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });

    if (configType === "DEVELOPMENT") {
      //Configure for development environment
    }

    if (configType === "PRODUCTION") {
      //Configure for production environment
    }

    return config;
  },
  core: {
    builder: {
      name: "@storybook/builder-webpack5",
      options: {
        lazyCompilation: true,
        fsCache: true,
      },
    },
  },
  features: {
    storyStoreV7: true,
  },
  staticDirs: ["../public"],
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      // makes string and boolean types that can be undefined appear as inputs and switches
      shouldExtractLiteralValuesFromEnum: true,
      // makes string and boolean types that can be undefined appear as inputs and switches
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop) =>
        prop.parent
          ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName)
          : true,
    },
    checkOptions: {},
  },
};
export default config;
