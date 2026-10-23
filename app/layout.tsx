import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/styles/globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { descriptions, organizationJsonLd, siteName, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: descriptions.home,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "Health",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_UG",
    siteName,
    title: siteName,
    description: descriptions.home,
    url: "/",
    images: [{ url: "/hero.jpg", alt: siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: descriptions.home,
    images: ["/hero.jpg"],
  },
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
