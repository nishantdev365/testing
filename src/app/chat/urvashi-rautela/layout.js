import Head from 'next/head';

export const metadata = {
  title: "Urvashi Rautela",
  description: "Bollywood actress, ace dancer",
  image: "https://res.cloudinary.com/dzhl8bgd9/image/upload/v1707655875/Urvashi-Rautela_luwcnh.png",
  openGraph: {
    type: "website",
    title: "Urvashi Rautela",
    description: "Bollywood actress, ace dancer",
    image: "https://res.cloudinary.com/dzhl8bgd9/image/upload/v1707655875/Urvashi-Rautela_luwcnh.png",
    url: "https://celebfie.ai${router.asPath}",


    images: [
      {
        url: "https://res.cloudinary.com/dzhl8bgd9/image/upload/v1707655875/Urvashi-Rautela_luwcnh.png",
        width: 1200,
        height: 630,
        alt: "urvashi rautela",
      },
    ],

    url: "https://celebfie.ai${router.asPath}",
    site_name: "Next.js",
  },
  metadataBase: "https://celebfie.ai",
};

export default function UrvashiPageLayout({ children }) {
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
