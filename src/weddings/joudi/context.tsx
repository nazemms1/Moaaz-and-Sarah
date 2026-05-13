import { createContext, useContext } from "react";
import type { Lang, Translations } from "./i18n";
import { translations } from "./i18n";

interface LanguageContextValue {
  lang: Lang;
  t: Translations;
  dir: "rtl" | "ltr";
}

export const LanguageContext = createContext<LanguageContextValue>({
  lang: "ar",
  t: translations.ar,
  dir: "rtl",
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export function detectLang(): Lang {
  return "ar" as Lang;
}
