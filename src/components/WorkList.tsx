import Link from "next/link";
import { getDict } from "@/data/content";
import { papers, localizedPaper } from "@/data/papers";
import type { Locale } from "@/lib/i18n";
import Reveal from "./Reveal";

export function PaperCard({ locale, slug }: { locale: Locale; slug: string }) {
  const d = getDict(locale);
  const p = papers.find((x) => x.slug === slug);
  if (!p) return null;
  const lp = localizedPaper(p, locale);
  const tag = lp.tag ?? d.paperTag;

  return (
    <Link
      href={`/${locale}/research/${lp.slug}`}
      className="group grid cursor-pointer grid-cols-1 items-start gap-6 border-t border-line py-7 first:border-t-0 sm:grid-cols-[auto_1fr_auto] sm:gap-6"
    >
      <div className="whitespace-nowrap pt-0.5 font-serif text-[15px] font-semibold text-bronze">
        {lp.year}
      </div>
      <div>
        <h3 className="mb-1.5 font-serif text-xl font-semibold leading-snug text-teal transition-colors group-hover:text-bronze sm:text-2xl">
          {lp.title}
        </h3>
        <div dir={lp.secondaryDir} className="mb-2.5 text-sm italic text-muted">
          {lp.secondaryTitle}
        </div>
        <div className="mb-2.5 text-[13px] font-medium tracking-wide text-muted">
          {lp.venue}
        </div>
        <p className="max-w-[600px] text-[15px] leading-relaxed text-ink">{lp.abstract}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-md border border-line bg-white px-2.5 py-1 text-[11.5px] font-semibold text-bronze">
            {tag}
          </span>
        </div>
      </div>
      <span className="inline-flex items-center gap-1.5 self-center whitespace-nowrap text-[13.5px] font-semibold text-bronze transition-all group-hover:gap-2.5">
        {d.readPaper} <span className="flip-rtl">→</span>
      </span>
    </Link>
  );
}

export default function WorkList({
  locale,
  showHeader = true,
  showNote = true,
}: {
  locale: Locale;
  showHeader?: boolean;
  showNote?: boolean;
}) {
  const d = getDict(locale);
  return (
    <section id="work" className="border-b border-line py-14 sm:py-[72px]">
      <div className="shell">
        {showHeader && (
          <>
            <Reveal>
              <span className="eyebrow">{d.workEyebrow}</span>
            </Reveal>
            <Reveal as="h2" className="section-title mt-3.5">
              {d.workTitle}
            </Reveal>
            <Reveal as="p" className="my-4 max-w-[700px] text-base leading-relaxed text-muted">
              {d.workLede}
            </Reveal>
          </>
        )}

        <div className="mt-2">
          {papers.map((p) => (
            <PaperCard key={p.slug} locale={locale} slug={p.slug} />
          ))}
        </div>

        {showNote && (
          <div
            className="mt-6 rounded-xl border border-dashed border-bronze-soft bg-paper-2 px-[18px] py-3.5 text-[13.5px] leading-relaxed text-muted [&_b]:text-bronze"
            dangerouslySetInnerHTML={{ __html: d.workNote }}
          />
        )}
      </div>
    </section>
  );
}
