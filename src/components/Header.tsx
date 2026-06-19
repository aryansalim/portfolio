"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDict } from "@/data/content";
import { otherLocale, type Locale } from "@/lib/i18n";
import { MenuIcon } from "./Icons";

export default function Header({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const home = `/${locale}`;
  const links = [
    { key: "about", href: `${home}#about`, label: d.nav.about },
    { key: "work", href: `${home}/research`, label: d.nav.work },
    { key: "award", href: `${home}#award`, label: d.nav.award },
    { key: "cv", href: `${home}#cv`, label: d.nav.cv },
    { key: "contact", href: `${home}#contact`, label: d.nav.contact },
  ];

  // swap the leading locale segment, keep the rest of the path
  const other = otherLocale(locale);
  const segments = (pathname || `/${locale}`).split("/");
  segments[1] = other;
  const toggleHref = segments.join("/") || `/${other}`;

  return (
    <header className="sticky top-0 z-50 border-b border-line-soft bg-paper/85 backdrop-blur-md backdrop-saturate-150">
      <div className="shell flex h-16 items-center justify-between gap-4">
        <Link href={home} className="flex items-center gap-2.5 whitespace-nowrap font-serif text-[19px] font-semibold text-teal">
          <span className="inline-block h-2 w-2 rounded-full bg-bronze" />
          <span className={locale === "ku" ? "font-ku" : ""}>{d.name}</span>
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <Link
                key={l.key}
                href={l.href}
                className="relative py-1 text-[13.5px] font-medium text-ink transition-colors hover:text-teal"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            href={toggleHref}
            className="whitespace-nowrap rounded-full border-[1.5px] border-line px-3.5 py-1.5 text-[13px] font-semibold text-teal transition hover:border-bronze hover:text-bronze"
          >
            {d.toggleLabel}
          </Link>

          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="text-teal md:hidden"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-b border-line bg-paper-2 px-5 pb-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block w-full border-b border-line-soft py-3 text-sm font-medium text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
