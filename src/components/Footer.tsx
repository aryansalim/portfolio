import { getDict } from "@/data/content";
import type { Locale } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  return (
    <footer className="px-5 pb-12 pt-8 text-center text-[13px] text-muted">
      {d.footer}
    </footer>
  );
}
