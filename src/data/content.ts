import type { Locale } from "@/lib/i18n";

/** Contact + asset constants (language-independent). */
export const STATIC = {
  email: "Aryansalim20@gmail.com",
  phone: "+964 750 382 9319",
  phoneRaw: "+9647503829319",
  linkedin: "https://www.linkedin.com/in/aryan-salim-a21226357/",
  cv: "/Aryan_CV_June_2026.pdf",
  // Drop a portrait into /public/images and set the path here to show it in About.
  portrait: "",
} as const;

export interface ExperienceItem {
  when: string;
  title: string;
  org: string;
  desc: string;
}

export interface EducationItem {
  degree: string;
  years: string;
  where: string;
  honor: string;
}

export interface ReaderDict {
  close: string;
  kicker: string;
  abstract: string;
  summary: string;
  recordLbl: string;
  record: string;
  coverage: string;
  posterCap: string;
  backToResearch: string;
}

export interface Dict {
  name: string;
  location: string;
  nav: { about: string; work: string; award: string; cv: string; contact: string };
  toggleLabel: string;
  roles: string[];
  lede: string;
  viewWork: string;
  downloadCV: string;
  aboutEyebrow: string;
  aboutTitle: string;
  portraitCap: string;
  about: string[];
  workEyebrow: string;
  workTitle: string;
  workLede: string;
  paperTag: string;
  readPaper: string;
  workNote: string;
  cvEyebrow: string;
  cvTitle: string;
  expHead: string;
  eduHead: string;
  skillsHead: string;
  langHead: string;
  certHead: string;
  experience: ExperienceItem[];
  education: EducationItem[];
  expertise: string[];
  languages: [string, string][];
  certificates: [string, string][];
  awardEyebrow: string;
  awardTitle: string;
  awardBlurb: string;
  awardStats: string;
  readResearch: string;
  coverage: string;
  archiveLink: string;
  photoCap: string;
  contactEyebrow: string;
  contactTitle: string;
  contactLede: string;
  linkedinLabel: string;
  footer: string;
  reader: ReaderDict;
}

const en: Dict = {
  name: "Aryan Salim",
  location: "Erbil · Kurdistan",
  nav: { about: "About", work: "Research", award: "Award", cv: "CV", contact: "Contact" },
  toggleLabel: "کوردی",
  roles: ["Sociologist & Researcher", "Educator", "Program Coordinator"],
  lede: "I work at the intersection of <em>research, education, and institutional administration</em> — administering operations, developing curriculum, and helping shape academic accreditation standards as a board member at Soran University. My academic work is grounded in qualitative research and fieldwork on gender, genocide memory, heritage and minority culture, and questions of cinema, post-colonialism, and cultural identity. I hold an MA in Sociology from Soran University, where I graduated top of the Faculty of Arts, and I translate across Kurdish, English, and Persian in sensitive, high-stakes settings.",
  viewWork: "View my research",
  downloadCV: "Download CV",
  aboutEyebrow: "About",
  aboutTitle: "A sociologist who builds things that last",
  portraitCap: "Aryan Salim — speaking at a public session.",
  about: [
    "I am an administrative professional and educator with a background in sociology. Day to day, I <strong>administer institutional operations</strong>, develop curriculum, and help shape academic accreditation standards as a board member at Soran University.",
    "My academic work is grounded in <strong>qualitative research and fieldwork</strong> — documenting genocide impacts and gender dynamics, heritage and minority culture, and questions of cinema, post-colonialism, and cultural identity.",
    "I completed my MA in Sociology at Soran University and graduated <strong>top of the Faculty of Arts</strong> in my BA. Alongside this, I've coordinated international volunteer missions and provided translation in sensitive, high-stakes settings.",
  ],
  workEyebrow: "Research & Writing",
  workTitle: "Selected work",
  workLede: "Published research, hosted here in full — each piece links back to where it first appeared.",
  paperTag: "1st Place · Galawêj 2022",
  readPaper: "Read",
  workNote: "<b>More coming.</b> Send me your other articles and research — title, the website that published it, the link, and the full text — and I'll add each one here as its own page.",
  cvEyebrow: "Résumé",
  cvTitle: "Curriculum Vitae",
  expHead: "Experience",
  eduHead: "Education",
  skillsHead: "Areas of expertise",
  langHead: "Languages",
  certHead: "Certificates",
  experience: [
    { when: "2026 — Present", title: "Administrative Officer & Teacher", org: "Culture Collective · Erbil, Iraq", desc: "Manage daily operations, scheduling and student data; lead curriculum development; deliver instruction; and provide academic translation across institutional communication." },
    { when: "2026 — Present", title: "Advisory Team Board Member", org: "Soran University — Department of Sociology · Soran, Iraq", desc: "Advise on departmental accreditation standards, review institutional requests for compliance, and align departmental goals with regional educational standards." },
    { when: "2025 — 2026", title: "Client Relations & Sales Representative", org: "Multi Bank International Bank & Help Trading · Erbil, Iraq", desc: "Maintained client relationships through CRM tools, guided clients through banking processes, and supported structured service operations." },
    { when: "2024 — 2025", title: "Assistant Lecturer / Instructor", org: "Soran University — Department of Sociology · Soran, Iraq", desc: "Taught Introduction to Sociology, planned weekly lessons, set and evaluated exams, and mentored students." },
    { when: "2022 — 2024", title: "Director of International Volunteer Coordination & Translation", org: "Frontier Alliance International (FAI) · Erbil, Iraq", desc: "Coordinated missions with international medical volunteers, ran community programs for vulnerable groups, and provided English–Kurdish translation in sensitive settings." },
  ],
  education: [
    { degree: "Master of Arts — Sociology", years: "2023 — 2025", where: "Soran University · Faculty of Arts", honor: "" },
    { degree: "Bachelor of Arts — Sociology", years: "2018 — 2022", where: "Soran University · Faculty of Arts", honor: "<b>Graduated 1st</b> in the Faculty of Arts. Coursework in social psychology, gender studies, crime & deviance, civil society, sociology of education, and social policy." },
  ],
  expertise: ["Institutional Administration", "Curriculum Development", "Academic Accreditation", "Qualitative Research", "Field Data Collection", "Translation", "Academic Writing", "Board Advisory"],
  languages: [["Kurdish", "Native"], ["English", "Fluent"], ["Persian", "Fluent"], ["Arabic", "Working proficiency"]],
  certificates: [["Know About Business (KAB)", "MOLSA · ILO · GIZ · 2022"], ["Certificate of Appreciation", "FAI"]],
  awardEyebrow: "International Award",
  awardTitle: "1st Place — Research Award",
  awardBlurb: "Winner at <strong>The 25th Galawêj International Festival, 2022</strong>, in Sulaymaniyah — awarded among researchers and academics across Kurdistan and beyond. I earned this recognition at <strong>22</strong>, competing alongside senior scholars.",
  awardStats: "Selected among only 7 research works accepted from 41 submissions.",
  readResearch: "Read the winning research",
  coverage: "News coverage",
  archiveLink: "Archive record",
  photoCap: "Receiving the 1st Place Research Award at the 25th Galawêj International Festival, Sulaymaniyah, 2022.",
  contactEyebrow: "Get in touch",
  contactTitle: "Let's talk.",
  contactLede: "Open to research collaboration, teaching, translation, and academic or institutional work.",
  linkedinLabel: "LinkedIn",
  footer: "Aryan Salim · Sociologist & Researcher · Erbil, Kurdistan",
  reader: {
    close: "Close",
    kicker: "Award-winning research",
    abstract: "Abstract",
    summary: "In brief — English summary",
    recordLbl: "Archived at",
    record: "Open record",
    coverage: "News coverage",
    posterCap: "The 25th Galawêj International Festival, Sulaymaniyah, 2022.",
    backToResearch: "Back to research",
  },
};

const ku: Dict = {
  name: "ئاریان سەلیم",
  location: "ھەولێر · کوردستان",
  nav: { about: "دەربارە", work: "توێژینەوە", award: "خەڵات", cv: "ژیاننامە", contact: "پەیوەندی" },
  toggleLabel: "English",
  roles: ["کارگێڕ و پەروەردەکار", "کۆمەڵناس و توێژەر", "ھەماھەنگکەری پرۆگرام"],
  lede: "کارەکانم لە خاڵی بەیەکگەیشتنی <em>بەڕێوەبردنی کارگێڕی، پەروەردە و توێژینەوەی کۆمەڵناسی</em> دایە. لە ئێستادا کاروبارە ڕۆژانەییەکان بەڕێوەدەبەم، مەنهەج پەرەپێدەدەم، و وەک ئەندامی دەستەی ڕاوێژکاری لە زانکۆی سۆران کاردەکەم بۆ دەستنیشانکردنی ستانداردەکانی پەسەندکردنی ئەکادیمی. ئەزموونم هەیە لە ڕێکخستنی زانیارییەکانی خوێندکاران، ئەنجامدانی توێژینەوەی چۆنایەتی، و وەرگێڕان لەنێوان زمانەکانی کوردی، ئینگلیزی و فارسیدا.",
  viewWork: "بینینی توێژینەوەکانم",
  downloadCV: "داگرتنی ژیاننامە",
  aboutEyebrow: "دەربارە",
  aboutTitle: "کۆمەڵناسێک کە شتی بەردەوام دروستدەکات",
  portraitCap: "ئاریان سەلیم — لە کاتی قسەکردندا لە کۆڕێکی گشتیدا.",
  about: [
    "من پسپۆڕێکی کاروباری و مامۆستام کە پاشخانێکی کۆمەڵناسیم ھەیە. ڕۆژانە، <strong>کاروباری دامەزراوەیی بەڕێوەدەبەم</strong>، مەنهەج پەرەپێدەدەم، و وەک ئەندامی دەستەی ڕاوێژکاری لە زانکۆی سۆران بەشدارم لە دیاریکردنی ستانداردەکانی پەسەندکردنی ئەکادیمیدا.",
    "کارە ئەکادیمییەکەم لەسەر <strong>توێژینەوەی چۆنایەتی و کاری مەیدانی</strong> بنیاتنراوە — تۆمارکردنی کاریگەرییەکانی کۆمەڵکوژی و گۆڕانکارییەکانی ڕەگەز، کەلەپوور و کولتووری کەمینەکان، و پرسیارەکانی سینەما، پاش-کۆلۆنیالیزم و ناسنامەی کولتووری.",
    "ماستەرم لە کۆمەڵناسی لە زانکۆی سۆران تەواوکرد و لە بەکالۆریۆسدا <strong>وەک یەکەمی فاکەڵتی ئەدەبیات</strong> دەرچووم. لەگەڵ ئەمەشدا، کۆردیناتۆری چەند مەھەمەیەکی خۆبەخشی نێودەوڵەتیم کردووە و وەرگێڕانم پێشکەشکردووە لە بارودۆخە ھەستیار و گرنگەکاندا.",
  ],
  workEyebrow: "توێژینەوە و نووسین",
  workTitle: "کارە هەڵبژێردراوەکان",
  workLede: "توێژینەوە بڵاوکراوەکان لێرەدا بە تەواوی بەردەستن — هەر بەرهەمێک بەستراوەتەوە بە سەرچاوە سەرەکییەکەیەوە.",
  paperTag: "پلەی یەکەم · گەلاوێژ ٢٠٢٢",
  readPaper: "خوێندنەوە",
  workNote: "<b>زیاتر دێت.</b> وتار و توێژینەوەکانی دیکەت بۆم بنێرە — ناونیشان، ئەو ماڵپەڕەی بڵاوی کردووەتەوە، لینک، و دەقی تەواو — تاوەکو هەریەکەیان وەک پەڕەیەکی سەربەخۆ زیاد بکەم.",
  cvEyebrow: "ژیاننامە",
  cvTitle: "ژیاننامەی وردەکاری",
  expHead: "ئەزموونی کار",
  eduHead: "خوێندن",
  skillsHead: "بوارەکانی پسپۆڕی",
  langHead: "زمانەکان",
  certHead: "بڕوانامەکان",
  experience: [
    { when: "2026 — ئێستا", title: "بەرپرسی کاروباری کارگێڕی و مامۆستا", org: "Culture Collective · ھەولێر، عێراق", desc: "بەڕێوەبردنی کاروباری ڕۆژانەی دامەزراوەکە، ڕێکخستنی خشتە ئاڵۆزەکان و پاراستنی داتای خوێندکاران؛ سەرپەرشتی و ڕێبەرایەتیکردنی پڕۆژەکانی پەرەپێدانی مەنهەج؛ وانەوتنەوە و بەکارهێنانی پسپۆڕییە مێتۆدۆلۆژی و پەروەردەییەکان؛ و پێشکەشکردنی وەرگێڕانی ئەکادیمی بۆ بەهێزکردنی پەیوەندییە دامەزراوەییەکان." },
    { when: "2026 — ئێستا", title: "ئەندامی دەستەی ڕاوێژکاری", org: "زانکۆی سۆران — بەشی کۆمەڵناسی · سۆران، عێراق", desc: "بەشداری چالاکانە وەک ئەندامی دەستە بۆ پێشکەشکردنی ڕاوێژ لەسەر ستانداردەکانی پەسەندکردنی ئەکادیمی بەش، پێداچوونەوە و هەڵسەنگاندنی داواکارییە دامەزراوەییەکان بۆ دڵنیابوون لە کوالێتی، و هاوکاری لەگەڵ ستافی ئەکادیمی بۆ گونجاندنی ئامانجەکانی بەش لەگەڵ ستانداردە پەروەردەییە هەرێمییەکاندا." },
    { when: "2025 — 2026", title: "نوێنەری پەیوەندییەکانی کڕیاران و فرۆشتن", org: "بانکی نێودەوڵەتی مەلتی بانک و هێڵپ تریدینگ · ھەولێر، عێراق", desc: "پاراستنی پەیوەندییەکان لەگەڵ کڕیاران و بەڕێوەبردنی ڕێکخراوی داتاکان بە بەکارهێنانی سیستمی CRM، ڕوونکردنەوەی خزمەتگوزارییە داراییەکان و ڕێنماییکردنی کڕیاران لە ڕێکارە بانکییە سەرەکییەکاندا، و دابینکردنی پەیوەندییەکی پیشەیی بۆ مسۆگەرکردنی خزمەتگوزارییەکی جێی متمانە." },
    { when: "2024 — 2025", title: "مامۆستای یاریدەدەر / وانەبێژ", org: "زانکۆی سۆران — بەشی کۆمەڵناسی · سۆران، عێراق", desc: "وانەوتنەوەی «پێشەکییەک بۆ کۆمەڵناسی»، داڕشتن و ڕێکخستنی پلانی وانەوتنەوەی هەفتانە، ئامادەکردنی پرسیارەکانی تاقیکردنەوە و هەڵسەنگاندنی ئاستی خوێندکاران، ڕۆڵبینین وەک ڕێبەرێکی پەروەردەیی، و بەشداری لە چالاکی و کارە فراوانەکانی تری بەشدا." },
    { when: "2022 — 2024", title: "بەڕێوەبەری ھەماھەنگی خۆبەخشی نێودەوڵەتی و وەرگێڕان", org: "ڕێکخراوی Frontier Alliance International (FAI) · ھەولێر، عێراق", desc: "ھەماھەنگکردنی ئەرکەکان لەگەڵ تیمی پزیشکی خۆبەخشی نێودەوڵەتی و بەڕێوەبردنی لۆجستی مەیدانی، ڕێکخستنی کۆبوونەوەکانی پشتگیری کۆمەڵایەتی بۆ گروپە پێویست و چینە لاوازەکان، پێشکەشکردنی وەرگێڕانی هاوڕێک و وردی ئینگلیزی–کوردی لە چالاکییە مەیدانییەکاندا، و بەڕێوەبردنی پەیوەندییە نهێنییەکان و بەدواداچوونە هەستیارەکان بە شێوازێکی تەواو پیشەیی." },
  ],
  education: [
    { degree: "ماستەر (MA) — کۆمەڵناسی", years: "2023 — 2025", where: "زانکۆی سۆران · فاکەڵتی ئەدەبیات", honor: "" },
    { degree: "بەکالۆریۆس (BA) — کۆمەڵناسی", years: "2018 — 2022", where: "زانکۆی سۆران · فاکەڵتی ئەدەبیات", honor: "<b>دەرچووی یەکەم</b> لەسەر ئاستی فاکەڵتی ئەدەبیات. بڕوانامە و وانە سەرەکییەکان: دەروونناسی کۆمەڵایەتی، لێکۆڵینەوەی جێندەری، تاوان و لادان، کۆمەڵگەی مەدەنی، کۆمەڵناسی پەروەردە، و سیاسەتی کۆمەڵایەتی." },
  ],
  expertise: ["بەڕێوەبردنی کارگێڕی و خشتەبەندی", "پەرەپێدانی مەنهەج و ڕێبازی پەروەردەیی", "ستانداردەکانی پەسەندکردنی ئەکادیمی", "بەڕێوەبردنی داتای خوێندکاران", "توێژینەوەی چۆنایەتی و مەیدانی", "نووسینی ئەکادیمی و دۆکیۆمێنتکردن", "وەرگێڕانی زمانەوانی و نێوان-کولتووری", "پەیوەندی بەشداربووان و ڕاوێژکاری"],
  languages: [["کوردی", "زمانی دایک"], ["ئینگلیزی", "ڕەوان"], ["فارسی", "ڕەوان"], ["عەرەبی", "شارەزایی کارکردن"]],
  certificates: [["بڕوانامەی نێودەوڵەتی (Know About Business - KAB)", "MOLSA · ILO · GIZ · 2022"], ["بڕوانامەی ڕێزلێنان و پێزانین", "ڕێکخراوی FAI"]],
  awardEyebrow: "خەڵاتی نێودەوڵەتی",
  awardTitle: "پلەی یەکەم — خەڵاتی توێژینەوە",
  awardBlurb: "بەدەستهێنانی پلەی یەکەم لەسەر ئاستی توێژەران و ئەکادیمییەکانی سەرتاسەری کوردستان و دەرەوەی لە <strong>٢٥ەمین فێستیڤاڵی نێودەوڵەتی گەلاوێژ، ٢٠٢٢</strong>، سلێمانی. ئەم پێزانینە زانستییەم لە تەمەنی <strong>٢٢</strong> ساڵیدا و لە کێبڕکێ لەگەڵ توێژەرانی بەئەزموون و خاوەن پێگەی ئەکادیمی بەدەستهێنا.",
  awardStats: "هەڵبژێردراو لەنێو تەنها ٧ توێژینەوەی پەسەندکراو لە کۆی ٤١ بەرهەم.",
  readResearch: "خوێندنەوەی توێژینەوە براوەکە",
  coverage: "ڕووماڵی هەواڵ",
  archiveLink: "تۆماری ئەرشیف",
  photoCap: "وەرگرتنی خەڵاتی پلەی یەکەمی توێژینەوە لە ٢٥ەمین فێستیڤاڵی نێودەوڵەتی گەلاوێژ، سلێمانی، ٢٠٢٢.",
  contactEyebrow: "پەیوەندی",
  contactTitle: "با قسە بکەین.",
  contactLede: "ئامادەم بۆ ھاوکاری لە پڕۆژەکانی توێژینەوە، وانەوتنەوە، وەرگێڕان، و کارە ئەکادیمی و کارگێڕییەکاندا.",
  linkedinLabel: "لینکدئین",
  footer: "ئاریان سەلیم · کۆمەڵناس و توێژەر · ھەولێر، کوردستان",
  reader: {
    close: "داخستن",
    kicker: "توێژینەوەی خەڵاتبراو",
    abstract: "پوختە",
    summary: "پوختەی کورت — بە ئینگلیزی",
    recordLbl: "تۆمارکراو لە",
    record: "کردنەوەی تۆمار",
    coverage: "ڕووماڵی هەواڵ",
    posterCap: "٢٥ەمین فێستیڤاڵی نێودەوڵەتی گەلاوێژ، سلێمانی، ٢٠٢٢.",
    backToResearch: "گەڕانەوە بۆ توێژینەوە",
  },
};

export const dictionaries: Record<Locale, Dict> = { en, ku };

export function getDict(locale: Locale): Dict {
  return dictionaries[locale];
}
