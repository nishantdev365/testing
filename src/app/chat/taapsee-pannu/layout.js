import Head from 'next/head';

export const metadata = {
  title: "Taapsee pannu",
  description: "Indian actress and producer",
  image: "https://res.cloudinary.com/dzhl8bgd9/image/upload/v1707655875/Taapsee-Pannu_pseuk1.png",
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

    url: "https://celebfie.ai${router.asPath}",
    site_name: "Next.js",
  },
  metadataBase: "https://celebfie.ai", 
};

export default function TaapseePageLayout({ children }) {
  return (
    <>
      <Head>
        <meta property="og:url" content={metadata.openGraph.url} />
      </Head>
        <section>
          {children}
        </section>
    </>
  );
}
