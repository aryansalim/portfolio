import Link from "next/link";
import { getDict, STATIC } from "@/data/content";
import type { Locale } from "@/lib/i18n";
import Reveal from "./Reveal";
import { ArrowIcon, DownloadIcon } from "./Icons";

export default function Hero({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  return (
    <section id="hero" className="border-b border-line py-16 sm:py-20">
      <div className="shell">
        <Reveal as="span" className="eyebrow mb-5">
          {d.location}
        </Reveal>
        <Reveal as="h1" className="mb-6 font-serif text-5xl font-semibold leading-none tracking-tight text-teal sm:text-7xl lg:text-[86px]">
          {d.name}
        </Reveal>
        <Reveal className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2.5 text-[15px] font-medium text-teal sm:text-lg">
          {d.roles.map((r, i) => (
            <span key={r} className="flex items-center gap-4">
              {i > 0 && <span className="text-sm text-bronze">◦</span>}
              {r}
            </span>
          ))}
        </Reveal>
        <Reveal
          as="p"
          className="mb-8 max-w-[640px] text-base leading-relaxed text-ink sm:text-lg [&_em]:font-semibold [&_em]:not-italic [&_em]:text-teal"
        >
          <span dangerouslySetInnerHTML={{ __html: d.lede }} />
        </Reveal>
        <Reveal className="flex flex-wrap items-center gap-3.5">
          <Link className="btn btn-primary" href={`/${locale}/research`}>
            {d.viewWork} <ArrowIcon />
          </Link>
          <a className="btn btn-ghost" href={STATIC.cv} target="_blank" rel="noopener">
            <DownloadIcon /> {d.downloadCV}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
