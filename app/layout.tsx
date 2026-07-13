import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Happy — Software Engineer",
  description:
    "Happy — solo developer building at the intersection of Next.js and Solana/Anchor. Currently shipping CookVerse, LevyLedger, and PastQ.",
  openGraph: {
    title: "Happy — Software Engineer",
    description:
      "Solo developer building at the intersection of Next.js and Solana/Anchor.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body antialiased">
        <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-6 sm:px-10">
          <Nav />
          <main className="flex-1 py-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
