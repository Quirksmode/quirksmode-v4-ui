import type { Metadata } from 'next';

export async function getMetaData(fetchData: any): Promise<Metadata> {
  const pageData = await fetchData;
  const { metadata } = pageData;
  const metadataBase = new URL(process.env.UI_URL as string);

  return {
    metadataBase,
    title: metadata.metaTitle,
    description: metadata.metaDesc,
    openGraph: {
      title: metadata.metaTitle,
      description: metadata.metaDesc,
      url: metadata.metaUrl,
      siteName: metadata.metaSiteName,
      images: {
        url: metadata.metaImage,
        secureUrl: metadata.metaImage,
        width: metadata.metaImageWidth,
        height: metadata.metaImageHeight,
      },
    },
    twitter: {
      title: metadata.metaTitle,
      description: metadata.metaDesc,
      images: {
        url: metadata.metaImage,
      },
    },
    alternates: {
      canonical: metadata.metaUrl,
    },
  };
}
