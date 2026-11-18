import { ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { certifications } from "@/lib/data";
export function Certifications() {
  if (!certifications.length) return null;
  const row = (c: (typeof certifications)[number]) => (
    <li key={c.title}>
      <a
        href={c.url}
        target="_blank"
        rel="noopener noreferrer"
        className="credential"
      >
        <span>
          <span className="credential-title">{c.title}</span>
          <span className="credential-meta">
            {c.issuer} · {c.date}
          </span>
        </span>
        <ArrowUpRight aria-hidden="true" size={18} />
      </a>
    </li>
  );
  return (
    <div id="certifications" className="certificates">
      <div className="certificate-heading"><h3>
        Certifications{" "}
        <span className="text-muted-foreground">({certifications.length})</span>
      </h3><p>Open any certificate to read it at full size.</p></div>
      <div className="certificate-window">
        <div className="certificate-track">
          {[false, true].map(duplicate => <ul key={String(duplicate)} className="certificate-group" aria-hidden={duplicate || undefined}>
            {certifications.map(c => {
              const id = c.url?.split("/").pop();
              const preview = <Image src={`/certificates/${id}.webp`} alt={duplicate ? "" : `${c.title} certificate`} width={1400} height={1050} sizes="(max-width: 640px) 88vw, 560px" unoptimized />;
              return <li key={c.title} className="certificate-card">
                <a className="certificate-image" href={`/certificates/${id}.jpg`} target="_blank" rel="noopener noreferrer" tabIndex={duplicate ? -1 : undefined} aria-label={duplicate ? undefined : `Enlarge ${c.title} certificate`}>{preview}</a>
                <div className="certificate-caption"><h4>{c.title}</h4><p>{c.issuer} · {c.date}</p></div>
              </li>;
            })}
          </ul>)}
        </div>
      </div>
      {certifications.length > 3 && (
        <details>
          <summary>
            Show all certificates <ChevronDown size={18} aria-hidden="true" />
          </summary>
          <ul>{certifications.map(row)}</ul>
        </details>
      )}
    </div>
  );
}
