import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDict } from "@/data/content";
import { papers, getPaper, localizedPaper } from "@/data/papers";
import PaperBody from "@/components/PaperBody";
import { ExternalIcon } from "@/components/Icons";

export function generateStaticParams() {
  return papers.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Metadata {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const p = getPaper(params.slug);
  if (!p) return { title: "Not found" };
  const lp = localizedPaper(p, locale);
  return { title: `${lp.title} — ${getDict(locale).name}`, description: lp.abstract };
}

export default function PaperPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const p = getPaper(params.slug);
  if (!p) notFound();

  const d = getDict(locale);
  const r = d.reader;
  const lp = localizedPaper(p, locale);
  const hasSource = Boolean(lp.sources.kurdipedia || lp.sources.helin);
  const sourceNames = [lp.sources.kurdipedia ? "Kurdipedia" : "", lp.sources.helin ? "Helin Media" : ""]
    .filter(Boolean)
    .join(" · ");

  return (
    <article className="mx-auto w-full max-w-reader px-5 pb-24 pt-10 sm:px-8">
      <Link
        href={`/${locale}/research`}
        className="mb-8 inline-flex items-center gap-2 rounded-full border-[1.5px] border-line px-4 py-2 text-sm font-semibold text-teal transition hover:border-bronze hover:text-bronze"
      >
        <span className="flip-rtl">←</span> {r.backToResearch}
      </Link>

      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
        {r.kicker}
      </span>

      <h1 dir="rtl" className="mb-2 mt-4 font-ku text-3xl font-bold leading-tight text-teal sm:text-4xl">
        {p.titleKu}
      </h1>
      {p.subtitleKu && (
        <p dir="rtl" className="mb-4 font-ku text-lg italic text-muted sm:text-xl">
          {p.subtitleKu}
        </p>
      )}
      <p className="font-serif text-base font-semibold leading-snug text-teal">
        {p.titleEn}
        {p.subtitleEn && (
          <>
            <br />
            <span className="font-normal italic text-muted">{p.subtitleEn}</span>
          </>
        )}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-line pb-5 text-sm text-muted">
        <span>{p.year}</span>
        <span className="h-1 w-1 rounded-full bg-bronze-soft" />
        <span>{lp.venue}</span>
      </div>

      {hasSource && (
        <div className="my-7 flex flex-wrap items-center justify-between gap-2.5 rounded-xl border border-line bg-paper-2 px-[18px] py-3.5 text-sm [border-inline-start:3px_solid_theme(colors.bronze)]">
          <span className="text-muted">
            {r.recordLbl} <b className="text-teal">{sourceNames}</b>
          </span>
          <span className="flex flex-wrap gap-3.5">
            {lp.sources.kurdipedia && (
              <a href={lp.sources.kurdipedia} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 font-semibold text-bronze hover:text-teal">
                {r.record} <ExternalIcon />
              </a>
            )}
            {lp.sources.helin && (
              <a href={lp.sources.helin} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 font-semibold text-bronze hover:text-teal">
                {r.coverage} <ExternalIcon />
              </a>
            )}
          </span>
        </div>
      )}

      <figure className="my-6">
        <Image
          src="/images/poster.jpg"
          alt={r.posterCap}
          width={760}
          height={500}
          className="w-full rounded-xl border border-line"
        />
        <figcaption className="mt-2.5 text-center text-[13px] text-muted">{r.posterCap}</figcaption>
      </figure>

      <div className="my-6 rounded-xl border border-line bg-paper-2 px-5 py-4 [border-inline-start:3px_solid_theme(colors.bronze)]">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-bronze">
          {r.summary}
        </span>
        <p className="text-base leading-relaxed text-ink">{p.abstractEn}</p>
      </div>

      {lp.blocks.length > 0 ? (
        <PaperBody blocks={lp.blocks} />
      ) : (
        <div className="mt-2 rounded-xl border border-dashed border-bronze-soft bg-[#fff5ea] px-[18px] py-3.5 text-sm font-medium leading-relaxed text-bronze">
          ✦ Full text — add this paper&apos;s blocks in <code>src/data</code> and they will appear here.
        </div>
      )}
    </article>
  );
}
