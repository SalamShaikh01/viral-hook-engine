import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Viral Hook & Script Engine",

  description:
    "Generate viral hooks, captions, hashtags, and short-form scripts instantly using AI.",

  keywords: [
    "AI hook generator",
    "viral script generator",
    "YouTube Shorts AI",
    "TikTok script generator",
    "Instagram Reel captions",
  ],

  openGraph: {
    title: "Viral Hook & Script Engine",
    description:
      "Generate viral hooks and scripts instantly using AI.",
    url: "https://viral-hook-engine-two.vercel.app",
    siteName: "Viral Hook & Script Engine",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
