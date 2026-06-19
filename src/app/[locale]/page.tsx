import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkList from "@/components/WorkList";
import AwardSection from "@/components/AwardSection";
import CV from "@/components/CV";
import Contact from "@/components/Contact";

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;

  return (
    <>
      <Hero locale={locale} />
      <About locale={locale} />
      <WorkList locale={locale} />
      <AwardSection locale={locale} />
      <CV locale={locale} />
      <Contact locale={locale} />
    </>
  );
}
