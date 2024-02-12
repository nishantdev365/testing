import Head from 'next/head';

export const metadata = {
  title: "Karan Johar",
  description: "Indian actress and producer",
  image: "https://res.cloudinary.com/dzhl8bgd9/image/upload/v1707655874/Karan-Johar_rj0xvc.png",
  icons: {
    icon: "https://res.cloudinary.com/dzhl8bgd9/image/upload/v1707655874/Karan-Johar_rj0xvc.png", 
  },

  openGraph: {
    type: "website",
    title: "Karan Johar",
    description: "Indian actress and producer",
    image: "https://res.cloudinary.com/dzhl8bgd9/image/upload/v1707655874/Karan-Johar_rj0xvc.png",
    url: "https://celebfie.ai/chat/karan-johar",


    images: [
      {
        url: "https://res.cloudinary.com/dzhl8bgd9/image/upload/v1707655874/Karan-Johar_rj0xvc.png",
        width: 1200,
        height: 630,
        alt: "karan johar",
      },
    ],

    url: "https://celebfie.ai/chat/karan-johar",
    site_name: "Celebfie",
  },
  metadataBase: "https://celebfie.ai", 
};

export default function KaranPageLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="https://res.cloudinary.com/dzhl8bgd9/image/upload/v1707655874/Karan-Johar_rj0xvc.png" />
        <meta property="og:url" content={metadata.openGraph.url} />
      </Head>
        <section>
          {children}
        </section>
    </>
  );
}
