import Link from "next/link";
import Image from "next/image";
import { getDict } from "@/data/content";
import { getPaper } from "@/data/papers";
import type { Locale } from "@/lib/i18n";
import Reveal from "./Reveal";
import { ArrowIcon, ExternalIcon } from "./Icons";

export default function AwardSection({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const zer = getPaper("zer");

  return (
    <section id="award" className="bg-teal py-14 text-paper sm:py-[72px]">
      <div className="shell">
        <div className="grid items-center gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-12">
          <div>
            <Reveal className="mb-4 flex items-center gap-5">
              <Image
                src="/images/seal.jpg"
                alt="Galawêj award seal"
                width={96}
                height={96}
                className="h-24 w-24 shrink-0 rounded-full border-2 border-bronze-soft bg-white object-contain p-1.5"
              />
              <div>
                <span className="eyebrow text-bronze-soft">{d.awardEyebrow}</span>
                <h2 className="font-serif text-2xl font-semibold leading-tight text-white sm:text-3xl">
                  {d.awardTitle}
                </h2>
              </div>
            </Reveal>

            <Reveal
              as="p"
              className="mb-4 max-w-[620px] text-[16.5px] leading-relaxed text-[#dfe6e3] [&_strong]:font-semibold [&_strong]:text-white"
            >
              <span dangerouslySetInnerHTML={{ __html: d.awardBlurb }} />
            </Reveal>
            <Reveal as="p" className="mb-5 border-t border-white/15 pt-3.5 text-sm leading-relaxed text-[#cfdad7]">
              {d.awardStats}
            </Reveal>

            <Reveal className="flex flex-wrap gap-3">
              <Link className="btn btn-bronze" href={`/${locale}/research/zer`}>
                {d.readResearch} <ArrowIcon />
              </Link>
              {zer?.sources.helin && (
                <a className="btn btn-light" href={zer.sources.helin} target="_blank" rel="noopener">
                  {d.coverage} <ExternalIcon />
                </a>
              )}
              {zer?.sources.kurdipedia && (
                <a className="btn btn-light" href={zer.sources.kurdipedia} target="_blank" rel="noopener">
                  {d.archiveLink} <ExternalIcon />
                </a>
              )}
            </Reveal>
          </div>

          <Reveal as="figure" className="m-0">
            <Image
              src="/images/ceremony.jpg"
              alt={d.photoCap}
              width={900}
              height={600}
              className="block w-full rounded-xl shadow-photo"
            />
            <figcaption className="mt-3 text-center text-[13px] leading-snug text-[#cdd6d4]">
              {d.photoCap}
            </figcaption>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
