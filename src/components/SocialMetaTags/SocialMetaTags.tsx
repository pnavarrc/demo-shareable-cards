import Head from "next/head";

const SocialMetaTags: React.FC<{
  site: string;
  creator: string;
  title: string;
  description: string;
  imageUrl: string;
}> = ({ site, creator, title, description, imageUrl }) => {
  return (
    <Head>
      <meta name="twitter:site" content={site} />
      <meta name="twitter:creator" content={creator} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
};

export default SocialMetaTags;
