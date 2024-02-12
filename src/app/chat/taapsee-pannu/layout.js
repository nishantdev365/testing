import Head from 'next/head';

export const metadata = {
  title: "Taapsee pannu",
  description: "Indian actress and producer",
  image: "https://res.cloudinary.com/dzhl8bgd9/image/upload/v1707655875/Taapsee-Pannu_pseuk1.png",
  icons: {
    icon: "https://res.cloudinary.com/dzhl8bgd9/image/upload/v1707655875/Taapsee-Pannu_pseuk1.png", 
  },
  openGraph: {
    type: "website",
    title: "Taapsee pannu",
    description: "Indian actress and producer",
    image: "https://res.cloudinary.com/dzhl8bgd9/image/upload/v1707655875/Taapsee-Pannu_pseuk1.png",
    url: "https://celebfie.ai${router.asPath}",


    images: [
      {
        url: "https://res.cloudinary.com/dzhl8bgd9/image/upload/v1707655875/Taapsee-Pannu_pseuk1.png",
        width: 1200,
        height: 630,
        alt: "taapsee pannu",
      },
    ],

    url: "https://celebfie.ai/chat/taapsee-pannu",
    site_name: "Next.js",
  },
  metadataBase: "https://celebfie.ai", 
};

export default function TaapseePageLayout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="https://res.cloudinary.com/dzhl8bgd9/image/upload/v1707655875/Taapsee-Pannu_pseuk1.png" />
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
