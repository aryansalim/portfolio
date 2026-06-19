import type { Metadata } from "next";
import { Inter, Fraunces, Vazirmatn } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { dir, isLocale, locales, type Locale } from "@/lib/i18n";
import { getDict } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});
const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const d = getDict(locale);
  return {
    title: `${d.name} — ${d.roles.join(" · ")}`,
    description:
      locale === "ku"
        ? "ئاریان سەلیم — کۆمەڵناس، توێژەر و پەروەردەکار لە ھەولێر، کوردستان."
        : "Aryan Salim — sociologist, researcher and educator based in Erbil, Kurdistan. 1st Place Research Award, 25th Galawêj International Festival.",
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const bodyFont = locale === "ku" ? "font-ku" : "font-sans";

  return (
    <html
      lang={locale === "ku" ? "ckb" : "en"}
      dir={dir(locale)}
      className={`${inter.variable} ${fraunces.variable} ${vazirmatn.variable}`}
    >
      <body className={bodyFont}>
        <Header locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
