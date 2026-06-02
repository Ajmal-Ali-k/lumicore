import type { Metadata } from "next";
import { Bebas_Neue, Geist, Geist_Mono, Lexend } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Villa Interior Design & Manufacturing in the UAE | Ideal Factory",
  description:
    "Ideal Factory designs, manufactures, and installs kitchens, wardrobes, doors, and premium uPVC windows for UAE villas.",
  applicationName: "Ideal Factory",
  keywords: [
    "Ideal Factory",
    "villa interiors UAE",
    "custom kitchens UAE",
    "wardrobes UAE",
    "interior doors UAE",
    "uPVC windows UAE",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AE"
      className={[
        geist.variable,
        lexend.variable,
        geistMono.variable,
        bebasNeue.variable,
        "h-full scroll-smooth antialiased",
      ].join(" ")}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
