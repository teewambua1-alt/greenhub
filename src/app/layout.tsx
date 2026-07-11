import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GreenHub — Premium Cannabis Marketplace",
  description:
    "Discover premium, lab-tested cannabis products from trusted dispensaries. Curated, verified, and delivered discreetly to your door. The future of cannabis retail.",
  keywords: [
    "cannabis",
    "marijuana",
    "CBD",
    "THC",
    "dispensary",
    "weed delivery",
    "GreenHub",
  ],
  authors: [{ name: "GreenHub" }],
  openGraph: {
    title: "GreenHub — Premium Cannabis Marketplace",
    description:
      "Discover premium, lab-tested cannabis products. Delivered discreetly to your door.",
    siteName: "GreenHub",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
