import { Source_Sans_3 } from "next/font/google";
import Head from 'next/head';
import GoogleAnalytics from "./components/GoogleAnalytics";

import "./globals.css";

const sans = Source_Sans_3({ 
  subsets: ["latin"],
  weights: ["300", "400", "500", "700"], 
});


export const metadata = {
  title: "Celebfie - Chat with your favorite celebrities",
  description: "Celebfie is a platform where you can chat with your favorite celebrities and get to know them better.",
  image: "https://res.cloudinary.com/dzhl8bgd9/image/upload/v1705949513/prfdawpa7qmthwtk3tcb.png",

  icons: {
    icon: "https://res.cloudinary.com/dzhl8bgd9/image/upload/v1705949513/prfdawpa7qmthwtk3tcb.png", 
  },
  
  openGraph: {
    type: "website",
    title: "Celebfie - Chat with your favorite celebrities",
    description: "Celebfie is a platform where you can chat with your favorite celebrities and get to know them better.",

    images: [
      {
        url: "https://res.cloudinary.com/dzhl8bgd9/image/upload/v1705949513/prfdawpa7qmthwtk3tcb.png",
        width: 1200,
        height: 630,
        alt: "celebfie logo",
      },
    ],

    url: "https://celebfie.ai",
    site_name: "Celebfie",
  },
  metadataBase: "https://celebfie.ai", // Set your domain here
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="https://res.cloudinary.com/dzhl8bgd9/image/upload/v1705949513/prfdawpa7qmthwtk3tcb.png" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Celebfie" />
        <meta name="keywords" content="celebfie, celebrities, chat, video call, meet, ai, ai bot, artificial intelligence, influencers" />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nextjs" />
        <meta name="twitter:title" content={metadata.openGraph.title} />
        <meta name="twitter:description" content={metadata.openGraph.description} />
        <meta name="twitter:image" content={metadata.openGraph.images[0].url} />
         
      </Head>
      <html lang="en">
        <body className={sans.className}>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics ga_id= 
            "G-21486S7D0P" />
          ) : null}
          {children}
        
        </body>
      </html>
    </>
  );
}
