import React, { Suspense } from 'react';
import ContentBlocks from '@/components/ContentBlocks/ContentBlocks';
import RelatedContent from '@/components/RelatedContent/RelatedContent';
import Hero from '@/components/Hero/Hero';
import { fetchPageBlogSingleData } from './PagePortfolioSingle.services';
import Loading from '@/components/Loading/Loading';
import Page404 from '../Page404/Page404';

const PageBlogSingle = async ({ params }: { params: { slug: string } }) => {
  const pageBlogSingleData = await fetchPageBlogSingleData(params.slug);

  if (!pageBlogSingleData.content) return <Page404 />;

  const { content } = pageBlogSingleData;
  const { title, url, hero, contentBlocks, date, related, noRelated } = content;

  return (
    <Suspense fallback={<Loading />}>
      <div className="Page PageBlogSingle">
        {hero && (
          <Hero
            hero={hero}
            title={title}
            subtitle={date}
            url={url}
            type="blog"
          />
        )}
        {contentBlocks && <ContentBlocks contentBlocks={contentBlocks} />}
        {related && (
          <RelatedContent related={related} type="blog" noRelated={noRelated} />
        )}
      </div>
    </Suspense>
  );
};

export default PageBlogSingle;
