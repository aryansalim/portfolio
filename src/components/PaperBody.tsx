import type { Block } from "@/data/zer-blocks";

export default function PaperBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-ku" dir="rtl">
      {blocks.map((b, i) => {
        if (b.t === "h") return <h3 key={i}>{b.c}</h3>;
        if (b.t === "q") return <blockquote key={i}>{b.c}</blockquote>;
        return <p key={i}>{b.c}</p>;
      })}
    </div>
  );
}
