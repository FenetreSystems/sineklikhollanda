import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hollanda Sineklik - Üreticiden En İyi Fiyat",
  description: "Hollanda Sineklik üreticisinden direkt alış. Plise sineklik, jaluzi perde, zip perde modelleri. Türkiye'den Hollanda'ya 4-8 gün kapıya teslim. Bayilik fırsatı.",
  metadataBase: new URL("https://sineklikhollanda.com.tr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hollanda Sineklik - Üreticiden En İyi Fiyat",
    description: "Hollanda Sineklik üreticisinden direkt alış. Plise sineklik, jaluzi perde, zip perde modelleri. Türkiye'den Hollanda'ya 4-8 gün kapıya teslim.",
    url: "https://sineklikhollanda.com.tr",
    siteName: "Sineklik Hollanda",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hollanda Sineklik - Üreticiden En İyi Fiyat",
    description: "Hollanda Sineklik üreticisinden direkt alış. Plise sineklik, jaluzi perde, zip perde modelleri.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
