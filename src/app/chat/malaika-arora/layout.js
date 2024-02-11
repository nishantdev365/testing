import Head from 'next/head';

export const metadata = {
  title: "Malika Arora",
  description: "Indian actress and producer",
  image: "https://res.cloudinary.com/dzhl8bgd9/image/upload/v1707655875/Malaika-Arora_rvjslb.png",
  openGraph: {
    type: "website",
    title: "Malaika Arora",
    description: "Indian actress and producer",
    image: "https://res.cloudinary.com/dzhl8bgd9/image/upload/v1707655875/Malaika-Arora_rvjslb.png",
    url: "https://celebfie.ai${router.asPath}",


    images: [
      {
        url: "https://res.cloudinary.com/dzhl8bgd9/image/upload/v1707655875/Malaika-Arora_rvjslb.png",
        width: 1200,
        height: 630,
        alt: "malaika arora",
      },
    ],

    url: "https://celebfie.ai${router.asPath}",
    site_name: "Next.js",
  },
  metadataBase: "https://celebfie.ai", // Set your domain here
};

export default function MalaikaPageLayout({ children }) {
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
