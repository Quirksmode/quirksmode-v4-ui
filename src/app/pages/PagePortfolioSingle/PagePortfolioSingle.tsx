import React, { Suspense } from 'react';
import ContentBlocks from '@/components/ContentBlocks/ContentBlocks';
import RelatedContent from '@/components/RelatedContent/RelatedContent';
import Hero from '@/components/Hero/Hero';
import PagePortfolioScreenshots from './PagePortfolioScreenshots/PagePortfolioScreenshots';
import { fetchPagePortfolioSingleData } from './PagePortfolioSingle.services';
import Loading from '@/components/Loading/Loading';
import Page404 from '../Page404/Page404';

const PagePortfolioSingle = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const pagePortfolioSingleData = await fetchPagePortfolioSingleData(
    params.slug
  );

  if (!pagePortfolioSingleData.content) return <Page404 />;

  const { content } = pagePortfolioSingleData;
  const {
    title,
    url,
    hero,
    contentBlocks,
    projectTags,
    projectRole,
    projectURL,
    screenshots,
    related,
    noRelated,
  } = content;

  return (
    <Suspense fallback={<Loading />}>
      <div className="Page PagePortfolioSingle">
        {hero && (
          <Hero
            hero={hero}
            title={title}
            subtitle={projectRole}
            url={url}
            type="portfolio"
          />
        )}
        {contentBlocks && contentBlocks.length > 0 && (
          <ContentBlocks
            contentBlocks={contentBlocks}
            tags={projectTags}
            projectURL={projectURL}
          />
        )}
        {screenshots && screenshots.length > 0 && (
          <PagePortfolioScreenshots screenshots={screenshots} />
        )}
        {related && (
          <RelatedContent
            related={related}
            type="portfolio"
            noRelated={noRelated}
          />
        )}
      </div>
    </Suspense>
  );
};

export default PagePortfolioSingle;
