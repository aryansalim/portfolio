export const locales = ["en", "ku"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function dir(locale: Locale): "ltr" | "rtl" {
  return locale === "ku" ? "rtl" : "ltr";
}

/** The opposite locale — used by the language toggle. */
export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "ku" : "en";
}
