const SocialMetaTags: React.FC<{
  site: string;
  creator: string;
  title: string;
  description: string;
  imageUrl: string;
}> = ({ site, creator, title, description, imageUrl }) => {
  return (
    <>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:site" content={site}></meta>
      <meta name="twitter:creator" content={creator}></meta>
      <meta name="twitter:title" content={title}></meta>
      <meta name="twitter:description" content={description}></meta>
      <meta name="twitter:image" content={imageUrl}></meta>
    </>
  );
};

export default SocialMetaTags;
