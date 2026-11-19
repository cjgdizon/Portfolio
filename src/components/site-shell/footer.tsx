import { profile } from "@/lib/profile";
export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <p className="footer-name">
          Christian James Dizon<span>.</span>
        </p>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <a href={profile.resumeUrl} download={profile.resumeFilename} className="link">
            Download résumé
          </a>
          <a href="#main" className="link">
            Back to top ↑
          </a>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Product names and logos are trademarks of their owners.</p>
      </div>
    </footer>
  );
}
