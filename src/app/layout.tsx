import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ClientProviders } from "@/components/providers/ClientProviders";

export const metadata: Metadata = {
  title: "Memora - Extension Chrome pour organiser vos citations avec l'IA",
  description: "Capturez, analysez et organisez vos citations grâce à l'IA Gemini. Recherche sémantique instantanée. Gratuit et privacy-first.",
  keywords: ["chrome extension", "citations", "AI", "Gemini", "organisation", "recherche sémantique", "productivité"],
  authors: [{ name: "Memora Team" }],
  icons: {
    icon: [
      { url: "/Logo Memora.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/Logo Memora.svg", type: "image/svg+xml", sizes: "32x32" },
      { url: "/Logo Memora.svg", type: "image/svg+xml", sizes: "16x16" },
    ],
    apple: [
      { url: "/Logo Memora.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://memora.app",
    siteName: "Memora",
    title: "Memora - Extension Chrome pour organiser vos citations",
    description: "Capturez, analysez et organisez vos citations grâce à l'IA Gemini",
    images: [{
      url: "/dashboard-white.png",
      width: 1200,
      height: 630,
      alt: "Interface Memora - Dashboard de gestion des citations"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Memora - Extension Chrome",
    description: "Organisez vos citations avec l'IA",
    images: ["/dashboard-white.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    }
  },
  verification: {
    google: "your-google-verification-code",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Memora",
  applicationCategory: "BrowserExtension",
  operatingSystem: "Chrome",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${GeistSans.className} antialiased`}
      >
        <ClientProviders>
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#7c3bed] focus:text-white focus:rounded-lg"
          >
            Aller au contenu principal
          </a>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
