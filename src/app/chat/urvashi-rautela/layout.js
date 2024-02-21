import Head from 'next/head';

export const metadata = {
  title: "Urvashi Rautela",
  description: "Bollywood actress, ace dancer",
  image: "https://res.cloudinary.com/dzhl8bgd9/image/upload/v1707655875/Urvashi-Rautela_luwcnh.png",
  icons: {
    icon: "https://res.cloudinary.com/dzhl8bgd9/image/upload/v1707655875/Urvashi-Rautela_luwcnh.png", 
    
  },
  openGraph: {
    type: "website",
    title: "Urvashi Rautela",
    description: "Bollywood actress, ace dancer",
    image: "https://res.cloudinary.com/dzhl8bgd9/image/upload/v1707655875/Urvashi-Rautela_luwcnh.png",
    url: "https://celebfie.ai/chat/urvashi-rautela",


    images: [
      {
        url: "https://res.cloudinary.com/dzhl8bgd9/image/upload/v1707655875/Urvashi-Rautela_luwcnh.png",
        width: 1200,
        height: 630,
        alt: "urvashi rautela",
      },
    ],

    url: "https://celebfie.ai/chat/urvashi-rautela",
    site_name: "Next.js",
  },
  metadataBase: "https://celebfie.ai",
};

export default function UrvashiPageLayout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="https://res.cloudinary.com/dzhl8bgd9/image/upload/v1707655875/Urvashi-Rautela_luwcnh.png" />
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
