import { getDict, STATIC } from "@/data/content";
import type { Locale } from "@/lib/i18n";
import Reveal from "./Reveal";
import { MailIcon, PhoneIcon, LinkedinIcon } from "./Icons";

export default function Contact({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  return (
    <section id="contact" className="px-0 pb-8 pt-16 text-center sm:pt-20">
      <div className="shell">
        <Reveal as="span" className="eyebrow">
          {d.contactEyebrow}
        </Reveal>
        <Reveal as="h2" className="my-5 font-serif text-3xl font-semibold leading-tight text-teal sm:text-5xl">
          {d.contactTitle}
        </Reveal>
        <Reveal as="p" className="mx-auto mb-8 max-w-[500px] text-base leading-relaxed text-muted">
          {d.contactLede}
        </Reveal>
        <Reveal className="flex flex-wrap justify-center gap-3.5">
          <a className="btn btn-primary" href={`mailto:${STATIC.email}`}>
            <MailIcon /> <span dir="ltr">{STATIC.email}</span>
          </a>
          <a className="btn btn-ghost" href={`tel:${STATIC.phoneRaw}`}>
            <PhoneIcon /> <span dir="ltr">{STATIC.phone}</span>
          </a>
          <a className="btn btn-ghost" href={STATIC.linkedin} target="_blank" rel="noopener">
            <LinkedinIcon /> {d.linkedinLabel}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
