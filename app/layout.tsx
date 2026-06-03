import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { SpeedInsights } from '@vercel/speed-insights/next';

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
    verification: {
    google: "DB3CUEMjTdF47kL_5wGECB3e57brdQrnW9sJqHirwlU",
  },
  

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
      <body className="min-h-full flex flex-col">
          <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-BHM2JNR10E"
    strategy="afterInteractive"
  />

  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-BHM2JNR10E');
    `}
  </Script>
  <Script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1985370422820654"
  crossOrigin="anonymous"
  strategy="afterInteractive"
/>
        
        
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
