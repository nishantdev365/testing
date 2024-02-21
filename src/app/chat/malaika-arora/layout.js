import Head from 'next/head';

export const metadata = {
  title: "Malika Arora",
  description: "Indian actress and producer",
  image: "https://res.cloudinary.com/dzhl8bgd9/image/upload/v1707655875/Malaika-Arora_rvjslb.png",
  icons: {
    icon: "https://res.cloudinary.com/dzhl8bgd9/image/upload/v1707655875/Malaika-Arora_rvjslb.png", 
  },

  openGraph: {
    type: "website",
    title: "Malaika Arora",
    description: "Indian actress and producer",
    image: "https://res.cloudinary.com/dzhl8bgd9/image/upload/v1707655875/Malaika-Arora_rvjslb.png",
    url: "https://celebfie.ai/chat/malaika-arora",


    images: [
      {
        url: "https://res.cloudinary.com/dzhl8bgd9/image/upload/v1707655875/Malaika-Arora_rvjslb.png",
        width: 1200,
        height: 630,
        alt: "malaika arora",
      },
    ],

    url: "https://celebfie.ai/chat/malaika-arora",
    site_name: "Next.js",
  },
  metadataBase: "https://celebfie.ai", // Set your domain here
};

export default function MalaikaPageLayout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="https://res.cloudinary.com/dzhl8bgd9/image/upload/v1707655875/Malaika-Arora_rvjslb.png" />
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
