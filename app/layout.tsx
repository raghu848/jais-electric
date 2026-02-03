import type { Metadata } from "next";
import { Inter, Playfair_Display, Dancing_Script, Poppins } from "next/font/google";
import "./globals.css";
import { FloatingCallButton } from "@/components/ui/FloatingCallButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Jais Electric | Electricians in Cambridge, ON",
    template: "%s | Jais Electric",
  },
  description:
    "Trusted electricians serving Greater Toronto Area, Cambridge, Kitchener, and surrounding Ontario areas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-192x192.png" />
        <link rel="manifest" href="/new_images/manifest.webmanifest" />
        <meta name="theme-color" content="#0f0f0f" />
      </head>
      <body className={`${inter.variable} ${playfairDisplay.variable} ${dancingScript.variable} ${poppins.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}>
        {children}
        <FloatingCallButton />
      </body>
    </html>
  );
}
