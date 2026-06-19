import type { Locale } from "@/lib/i18n";
import { zerBlocks, type Block } from "./zer-blocks";

export interface Paper {
  slug: string;
  year: string;
  titleEn: string;
  titleKu: string;
  subtitleEn: string;
  subtitleKu: string;
  venueEn: string;
  venueKu: string;
  abstractEn: string;
  abstractKu: string;
  tagEn?: string;
  tagKu?: string;
  sources: { kurdipedia?: string; helin?: string };
  /** Full text, as structured blocks. Empty array => "full text coming" placeholder. */
  blocks: Block[];
}

export const papers: Paper[] = [
  {
    slug: "zer",
    year: "2022",
    titleKu: "خەبات و تێکۆشانی نەتەوەی کورد لە باکووری کوردستان",
    titleEn: "The Struggle and Resistance of the Kurdish Nation in Northern Kurdistan",
    subtitleKu: "شیکردنەوەیەکی نیشانەناسانەی شوناس و خەباتی نەتەوەیی لە فیلمی «زەر»",
    subtitleEn: "A semiotic analysis of national identity and resistance in the film Zer",
    venueEn: "25th Galawêj International Festival, Sulaymaniyah · 1st Place, Research",
    venueKu: "٢٥ەمین فێستیڤاڵی نێودەوڵەتی گەلاوێژ، سلێمانی · پلەی یەکەم، توێژینەوە",
    abstractEn:
      "This study examines the historical struggle and resistance of the Kurdish nation in Northern Kurdistan. Presented at the 25th Galawêj International Festival in Sulaymaniyah in 2022, the research was selected among only seven works accepted from forty-one submissions, and was awarded 1st place.",
    abstractKu:
      "ئەم لێکۆڵینەوەیە خەبات و تێکۆشانی مێژوویی نەتەوەی کورد لە باکووری کوردستان دەخاتە بەرباس. لە ٢٥ەمین فێستیڤاڵی نێودەوڵەتی گەلاوێژ لە سلێمانی، ساڵی ٢٠٢٢ پێشکەشکرا و لەنێو تەنها ٧ لێکۆڵینەوەی پەسەندکراو لە کۆی ٤١ بەرهەم هەڵبژێردرا و پلەی یەکەمی بەدەستهێنا.",
    sources: {
      helin: "https://www.helinmedia.org/all-detail.aspx?jimare=1757",
      kurdipedia: "https://kurdipedia.org/default.aspx?lng=1&q=20220530170136415492",
    },
    blocks: zerBlocks,
  },
];

export function getPaper(slug: string): Paper | undefined {
  return papers.find((p) => p.slug === slug);
}

/** Language-resolved view of a paper, for rendering. */
export function localizedPaper(p: Paper, locale: Locale) {
  const ku = locale === "ku";
  return {
    slug: p.slug,
    year: p.year,
    title: ku ? p.titleKu : p.titleEn,
    secondaryTitle: ku ? p.titleEn : p.titleKu,
    secondaryDir: ku ? ("ltr" as const) : ("rtl" as const),
    subtitle: ku ? p.subtitleKu : p.subtitleEn,
    venue: ku ? p.venueKu : p.venueEn,
    abstract: ku ? p.abstractKu : p.abstractEn,
    tag: ku ? p.tagKu : p.tagEn,
    sources: p.sources,
    blocks: p.blocks,
    titleKu: p.titleKu,
    titleEn: p.titleEn,
    subtitleKu: p.subtitleKu,
    subtitleEn: p.subtitleEn,
    abstractEn: p.abstractEn,
  };
}
