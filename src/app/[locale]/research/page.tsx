import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDict } from "@/data/content";
import WorkList from "@/components/WorkList";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const d = getDict(locale);
  return { title: `${d.workTitle} — ${d.name}` };
}

export default function ResearchPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  return (
    <div className="pt-6">
      <WorkList locale={locale} />
    </div>
  );
}
