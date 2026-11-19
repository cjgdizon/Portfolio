import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Footer } from "@/components/site-shell/footer";
import { Navbar } from "@/components/site-shell/navbar";
import { profile } from "@/lib/profile";
import { PortfolioIntro } from "@/features/intro/portfolio-intro";
import { startPortfolioIntro } from "@/features/intro/start-portfolio-intro";
import "./globals.css";
import "@/components/site-shell/navbar.css";
import "@/features/intro/portfolio-intro.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const title = `${profile.name} · ${profile.role}`;
export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: { default: title, template: `%s · ${profile.name}` },
  description: profile.tagline,
  other: { "page-type": "service", "site-kind": "other" },
  openGraph: {
    title,
    description: profile.tagline,
    url: profile.siteUrl,
    siteName: profile.name,
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description: profile.tagline },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090909",
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geist.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${startPortfolioIntro.toString()})();`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <PortfolioIntro />
        <div id="portfolio-content" className="flex min-h-screen flex-col" suppressHydrationWarning>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
