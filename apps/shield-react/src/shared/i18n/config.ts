import {
  AVAILABLE_LANGUAGES,
  DEFAULT_LANGUAGE_KEY,
  DEFAULT_NAMESPACE,
} from "@shared/i18n/language.constant";
import locales from "@shared/locales";
import { isBrowser } from "@shared/ssr";
import dayjs from "dayjs";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

dayjs.locale(DEFAULT_LANGUAGE_KEY);

i18next.use(initReactI18next).init({
  defaultNS: DEFAULT_NAMESPACE,
  ns: Object.keys(locales[DEFAULT_LANGUAGE_KEY]),
  resources: locales,
  lng: DEFAULT_LANGUAGE_KEY,
  fallbackLng: DEFAULT_LANGUAGE_KEY,
  returnNull: false,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

i18next.on("languageChanged", (langKey) => {
  const existLang = AVAILABLE_LANGUAGES.find((x) => x.key === langKey);
  if (!existLang) throw new Error("Not found language");
  if (!isBrowser) return;
  document.documentElement.lang = langKey;
  document.documentElement.dir = existLang?.dir ?? "rtl";
  document.documentElement.style.fontSize = `${
    (existLang?.fontScale ?? 1) * 100
  }%`;
});

export default i18next;
