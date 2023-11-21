import React, { Suspense } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import ContentBlocks from '@/components/ContentBlocks/ContentBlocks';
import { fetchPageData } from './Page.services';
import Loading from '@/components/Loading/Loading';
import Page404 from '../Page404/Page404';
import { PageParams } from './Page.types';

const Page = async ({ params }: PageParams) => {
  const pageData = await fetchPageData(params.slug);

  if (!pageData.content) return <Page404 />;

  const { content } = pageData;
  const { title, contentBlocks } = content;

  return (
    <Suspense fallback={<Loading />}>
      <div className="page">
        <section className="Page__section Page__section--greyFade Page__hero">
          <div className="Page__sectionInner grid">
            <h1>{title}</h1>
            <Breadcrumbs>
              <span className="Breadcrumbs__divider">&gt;</span>
              <span className="Breadcrumbs__active">{title}</span>
            </Breadcrumbs>
          </div>
        </section>
        {contentBlocks && <ContentBlocks contentBlocks={contentBlocks} />}
      </div>
    </Suspense>
  );
};

export default Page;
