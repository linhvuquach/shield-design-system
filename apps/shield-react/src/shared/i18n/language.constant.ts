import locales from "@shared/locales";

export type Language = {
  key: keyof typeof locales;
  dir?: "ltr" | "rtl";
  fontScale?: number;
};

export const DEFAULT_NAMESPACE = "common";

export const DEFAULT_LANGUAGE_KEY: Language["key"] = "en";

export const AVAILABLE_LANGUAGES: Language[] = [
  {
    key: "en",
    dir: "rtl",
  },
  {
    key: "nn",
    dir: "rtl",
  },
  {
    key: "no",
    dir: "rtl",
  },
];
