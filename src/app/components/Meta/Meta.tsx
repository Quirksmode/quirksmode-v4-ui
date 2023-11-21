import React from 'react';
import { MetaProps } from './Meta.types';

const Meta: React.FC<MetaProps> = ({
  metaTitle,
  metaDesc,
  metaUrl,
  metaSiteName,
  metaImage,
  metaImageWidth,
  metaImageHeight,
}) => (
  <>
    <title>{metaTitle}</title>
    <meta property="og:title" content={metaTitle} />
    <meta name="description" content={metaDesc} />
    <meta property="og:description" content={metaDesc} />
    <link rel="canonical" href={process.env.UI_URL + metaUrl} />
    <meta property="og:url" content={process.env.UI_URL + metaUrl} />
    <meta property="og:site_name" content={metaSiteName} />
    <meta property="og:image" content={metaImage} />
    <meta property="og:image:secure_url" content={metaImage} />
    <meta property="og:image:width" content={metaImageWidth} />
    <meta property="og:image:height" content={metaImageHeight} />
    <meta name="twitter:description" content={metaDesc} />
    <meta name="twitter:title" content={metaTitle} />
    <meta name="twitter:image" content={metaImage} />
  </>
);

export default Meta;
