import { Inter } from "next/font/google";
import Head from 'next/head';

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  openGraph: {
    type: "website",
    title: "Create Next App",
    description: "Generated by create next app",

    images: [
      {
        url: "https://nextjs.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "Og Image Alt",
      },
    ],

    url: "https://nextjs.org",
    site_name: "Next.js",
  },
  metadataBase: "https://your-domain.com", // Set your domain here
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <meta property="og:url" content={metadata.openGraph.url} />
      </Head>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
