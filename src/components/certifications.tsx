import { ArrowUpRight, ChevronDown } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { certifications } from "@/lib/data";

type Cert = (typeof certifications)[number];

// The list is newest first, so grouping by year keeps its order.
function groupByYear(list: Cert[]) {
  const groups: { year: string; items: Cert[] }[] = [];
  for (const c of list) {
    const year = c.date.slice(-4);
    const last = groups[groups.length - 1];
    if (last && last.year === year) last.items.push(c);
    else groups.push({ year, items: [c] });
  }
  return groups;
}

const row =
  "group/row -mx-3 flex items-baseline gap-4 rounded-lg px-3 py-3 transition-colors duration-150";

function YearBlock({ year, items }: { year: string; items: Cert[] }) {
  return (
    <div className="grid gap-4 py-6 md:grid-cols-12 md:gap-8">
      <p className="font-display text-6xl leading-none font-extrabold text-caution md:col-span-3">
        {year}
      </p>
      <ul className="md:col-span-9">
        {items.map((c) => {
          const body = (
            <>
              <span className="min-w-0 flex-1">
                <span className="block text-lg leading-snug font-medium">{c.title}</span>
                <span className="block text-sm opacity-75">{c.issuer}</span>
              </span>
              <span className="shrink-0 text-sm opacity-75">{c.date.split(" ")[0]}</span>
              {c.url && (
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-5 shrink-0 self-center transition-transform duration-200 ease-out group-hover/row:translate-x-0.5 group-hover/row:-translate-y-0.5"
                />
              )}
            </>
          );
          return (
            <li key={`${c.title}-${c.date}`}>
              {c.url ? (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${row} hover:bg-white/10`}
                  aria-label={`${c.title}, ${c.issuer}, ${c.date}. Opens credential in a new tab.`}
                >
                  {body}
                </a>
              ) : (
                <div className={row}>{body}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Certifications() {
  if (certifications.length === 0) return null;

  const [latest, ...earlier] = groupByYear(certifications);
  const earlierCount = earlier.reduce((n, g) => n + g.items.length, 0);

  return (
    <Section id="certifications" title="Certifications">
      <Reveal>
        <div data-tone="asphalt" className="sign p-6 sm:p-10">
          <YearBlock year={latest.year} items={latest.items} />
          {earlier.length > 0 && (
            <details className="group/more">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg py-4 font-display text-2xl font-bold tracking-wide text-caution uppercase marker:hidden [&::-webkit-details-marker]:hidden">
                Earlier certificates ({earlierCount})
                <ChevronDown
                  aria-hidden="true"
                  className="size-6 transition-transform duration-200 ease-out group-open/more:rotate-180"
                />
              </summary>
              {earlier.map((g) => (
                <YearBlock key={g.year} year={g.year} items={g.items} />
              ))}
            </details>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
