import { getDict } from "@/data/content";
import type { Locale } from "@/lib/i18n";
import Reveal from "./Reveal";

function SubHead({ children }: { children: React.ReactNode }) {
  return (
    <Reveal as="div" className="mb-1.5 mt-12 flex items-center gap-3 font-serif text-xl font-semibold text-teal after:h-px after:flex-1 after:bg-line after:content-['']">
      {children}
    </Reveal>
  );
}

export default function CV({ locale }: { locale: Locale }) {
  const d = getDict(locale);

  return (
    <section id="cv" className="border-b border-line py-14 sm:py-[72px]">
      <div className="shell">
        <Reveal>
          <span className="eyebrow">{d.cvEyebrow}</span>
        </Reveal>
        <Reveal as="h2" className="section-title mt-3.5">
          {d.cvTitle}
        </Reveal>

        {/* Experience */}
        <SubHead>{d.expHead}</SubHead>
        <div>
          {d.experience.map((e, i) => (
            <div key={i} className="grid grid-cols-1 gap-x-8 sm:grid-cols-[170px_1fr]">
              <Reveal className="whitespace-nowrap border-t border-line pb-0 pt-6 font-serif text-sm font-semibold text-bronze sm:py-6">
                {e.when}
              </Reveal>
              <Reveal className="border-t-0 pb-6 pt-1.5 sm:border-t sm:border-line sm:py-6">
                <h3 className="mb-0.5 text-[17.5px] font-semibold text-teal">{e.title}</h3>
                <div className="mb-2.5 text-sm text-muted">{e.org}</div>
                <p className="max-w-[640px] text-[15px] leading-relaxed text-ink">{e.desc}</p>
              </Reveal>
            </div>
          ))}
        </div>

        {/* Education */}
        <SubHead>{d.eduHead}</SubHead>
        {d.education.map((x, i) => (
          <Reveal key={i} className="border-t border-line py-[18px]">
            <div className="flex items-baseline justify-between gap-3.5">
              <h3 className="text-[17px] font-semibold text-teal">{x.degree}</h3>
              <span className="whitespace-nowrap font-serif text-sm font-semibold text-bronze">
                {x.years}
              </span>
            </div>
            <div className="mt-0.5 text-sm text-muted">{x.where}</div>
            {x.honor && (
              <div
                className="mt-2 text-sm leading-relaxed text-ink [&_b]:font-semibold [&_b]:text-bronze"
                dangerouslySetInnerHTML={{ __html: x.honor }}
              />
            )}
          </Reveal>
        ))}

        {/* Panels */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Reveal className="rounded-2xl border border-line bg-paper-2 px-6 py-6">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-bronze">
              {d.skillsHead}
            </h4>
            <div className="flex flex-wrap gap-2">
              {d.expertise.map((c) => (
                <span key={c} className="chip">
                  {c}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="rounded-2xl border border-line bg-paper-2 px-6 py-6">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-bronze">
              {d.langHead}
            </h4>
            <ul>
              {d.languages.map(([name, lvl]) => (
                <li key={name} className="flex items-baseline justify-between gap-2.5 border-b border-line-soft py-2.5 text-[14.5px] last:border-b-0">
                  <span>{name}</span>
                  <span className="text-[13px] text-muted">{lvl}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="rounded-2xl border border-line bg-paper-2 px-6 py-6">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-bronze">
              {d.certHead}
            </h4>
            <ul>
              {d.certificates.map(([name, org]) => (
                <li key={name} className="flex items-baseline justify-between gap-2.5 border-b border-line-soft py-2.5 text-[14.5px] last:border-b-0">
                  <span>{name}</span>
                  <span className="text-[13px] text-muted">{org}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
