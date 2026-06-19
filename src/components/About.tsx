import Image from "next/image";
import { getDict, STATIC } from "@/data/content";
import type { Locale } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function About({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const hasPortrait = Boolean(STATIC.portrait);

  return (
    <section id="about" className="border-b border-line py-14 sm:py-[72px]">
      <div className="shell">
        <Reveal>
          <span className="eyebrow">{d.aboutEyebrow}</span>
        </Reveal>
        <Reveal as="h2" className="section-title mt-3.5">
          {d.aboutTitle}
        </Reveal>

        <div
          className={`mt-10 grid gap-9 ${
            hasPortrait ? "max-w-[920px] md:grid-cols-[1.45fr_0.85fr] md:gap-12" : "max-w-[720px]"
          } items-start`}
        >
          <div className="flex flex-col gap-[18px]">
            {d.about.map((p, i) => (
              <Reveal as="p" key={i} className="text-[17px] leading-[1.85] [&_strong]:font-semibold [&_strong]:text-teal">
                <span dangerouslySetInnerHTML={{ __html: p }} />
              </Reveal>
            ))}
          </div>

          {hasPortrait && (
            <Reveal as="figure" className="m-0">
              <Image
                src={STATIC.portrait}
                alt={d.name}
                width={520}
                height={640}
                className="w-full rounded-2xl border border-line shadow-portrait"
              />
              <figcaption className="mt-3 text-center text-[13px] leading-snug text-muted">
                {d.portraitCap}
              </figcaption>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
