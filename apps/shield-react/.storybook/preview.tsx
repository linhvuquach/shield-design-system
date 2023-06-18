// import i18nGlobal from "../src/shared/i18n/config";
// import {
//   AVAILABLE_LANGUAGES,
//   DEFAULT_LANGUAGE_KEY,
// } from "../src/shared/i18n/language.constant";
import "../styles/index.css";
import "../styles/tokens/index.css";
// @ts-ignore
import logoReverse from "./logo/shield-reverse.svg";
// @ts-ignore
import logo from "./logo/shield.svg";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

const Theme = {
  DarkTheme: {},
  LightTheme: {},
};

const preview: Preview = {
  globals: {
    locale: "en",
    locales: {
      en: { title: "English", right: "en" },
      nn: { title: "Norway", right: "nn" },
      no: { title: "Norway", right: "no" },
    },
  },
  // globalTypes:{
  //     locale: {
  //         name: 'Locale',
  //         description: 'Internationalization locale',
  //         defaultValue: DEFAULT_LANGUAGE_KEY,
  //         toolbar: {
  //             icon: 'globe',
  //             items: AVAILABLE_LANGUAGES.map(({ key }) => ({
  //                 value: key,
  //                 title: i18nGlobal.t(`languages.${String(key)}`),
  //             })),
  //         },
  //     },
  // },
  decorators: [
    withThemeFromJSXProvider({
      // Provider: ThemeProvider,
      // GlobalStyles: CssBaseline,
      themes: {
        light: Theme.LightTheme,
        dark: Theme.DarkTheme,
      },
      defaultTheme: "light",
    }),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    darkMode: {
      dark: {
        ...themes.dark,
        brandImage: logoReverse.src,
        brandTitle: "Shield Design System",
      },
      light: {
        ...themes.light,
        brandImage: logo.src,
        brandTitle: "Shield Design",
      },
    },
    designToken: {},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: "fullscreen",
    backgrounds: { disable: true, grid: { disable: true } },
    options: {
      storySort: {
        order: [
          "Introduction",
          "Guidelines",
          "Theme",
          "Design Tokens",
          "Components",
        ],
      },
    },
  },
};

export default preview;
