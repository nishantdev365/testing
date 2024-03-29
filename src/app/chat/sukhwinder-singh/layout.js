import Head from 'next/head';

export const metadata = {
  title: "Sukhwinder Singh",
  description: "Indian playback singer and composer",
  image: "https://res.cloudinary.com/dzhl8bgd9/image/upload/v1707655874/Sukhwinder-Singh_o1e06x.png",
  icons: {
    icon: "https://res.cloudinary.com/dzhl8bgd9/image/upload/v1707655874/Sukhwinder-Singh_o1e06x.png", 
  },
  openGraph: {
    type: "website",
    title: "Create Next App",
    description: "Generated by create next app",
    image: "https://res.cloudinary.com/dzhl8bgd9/image/upload/v1707655874/Sukhwinder-Singh_o1e06x.png",
    url: "https://celebfie.ai/chat/sukhwinder-singh",


    images: [
      {
        url: "https://res.cloudinary.com/dzhl8bgd9/image/upload/v1707655874/Sukhwinder-Singh_o1e06x.png",
        width: 1200,
        height: 630,
        alt: "Sukhwinder Singh",
      },
    ],

    url: "https://celebfie.ai/chat/sukhwinder-singh",
    site_name: "Next.js",
  },
  metadataBase: "https://celebfie.ai", 
};

export default function SukhwinderPageLayout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="https://res.cloudinary.com/dzhl8bgd9/image/upload/v1707655874/Sukhwinder-Singh_o1e06x.png" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Celebfie" />
        <meta name="keywords" content="celebfie, celebrities, chat, video call, meet" />
        
        <meta property="og:url" content={metadata.openGraph.url} />
      </Head>
        <section>
          {children}
        </section>
    </>
  );
}
