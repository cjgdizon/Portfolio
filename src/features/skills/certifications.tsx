import { ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { certifications } from "./certificate-data";
import "./certifications.css";

const recordsUrl = "https://www.coursera.org/account/accomplishments/records";

export function Certifications() {
  if (!certifications.length) return null;

  return (
    <div id="certifications" className="certificates">
      <div className="certificate-heading">
        <h3>
          Certifications{" "}
          <span className="text-muted-foreground">({certifications.length})</span>
        </h3>
        <p>Open any certificate to read it at full size.</p>
      </div>
      <div className="certificate-window">
        <div className="certificate-track">
          <CertificateGroup />
          <CertificateGroup duplicate />
        </div>
      </div>
      {certifications.length > 3 && (
        <details>
          <summary>
            Show all certificates <ChevronDown size={18} aria-hidden="true" />
          </summary>
          <ul>
            {certifications.map(({ id, title, issuer, date }) => (
              <li key={id}>
                <a
                  href={`${recordsUrl}/${id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="credential"
                >
                  <span>
                    <span className="credential-title">{title}</span>
                    <span className="credential-meta">{issuer} · {date}</span>
                  </span>
                  <ArrowUpRight aria-hidden="true" size={18} />
                </a>
              </li>
            ))}
          </ul>
        </details>
      )}
    </div>
  );
}

function CertificateGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul className="certificate-group" aria-hidden={duplicate || undefined}>
      {certifications.map(({ id, title, issuer, date }) => (
        <li key={id} className="certificate-card">
          <a
            className="certificate-image"
            href={`/certificates/${id}.jpg`}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={duplicate ? -1 : undefined}
            aria-label={duplicate ? undefined : `Enlarge ${title} certificate`}
          >
            <Image
              src={`/certificates/${id}.webp`}
              alt={duplicate ? "" : `${title} certificate`}
              width={1400}
              height={1050}
              sizes="(max-width: 640px) 88vw, 560px"
              unoptimized
            />
          </a>
          <div className="certificate-caption">
            <h4>{title}</h4>
            <p>{issuer} · {date}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
