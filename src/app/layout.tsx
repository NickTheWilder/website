import { JSX } from "react";
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Nick Wilder",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,600&family=Kotta+One&family=Lilita+One&display=swap"
          rel="stylesheet"
        />
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-MEASUREMENT-ID" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YOUR-MEASUREMENT-ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
