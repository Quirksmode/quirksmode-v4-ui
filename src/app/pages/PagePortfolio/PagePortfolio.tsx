import React, { Suspense } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import Filter from '@/components/Filter/Filter';
import Frame from '@/components/Frame/Frame';
import LinkLoader from '@/components/LinkLoader/LinkLoader';
import { fetchPagePortfolioData } from './PagePortfolio.services';
import { fetchAppData } from '@/App.services';
import Loading from '@/components/Loading/Loading';
import Page404 from '../Page404/Page404';
import { PageSearchParams } from '../Page/Page.types';

const PagePortfolio = async ({ searchParams }: PageSearchParams) => {
  const pagePortfolioData = await fetchPagePortfolioData(searchParams);
  const appData = await fetchAppData();

  if (!pagePortfolioData.content) return <Page404 />;

  const { content } = pagePortfolioData;
  const { title, projects } = content;
  const { projectCategories, projectTags } = appData;

  return (
    <Suspense fallback={<Loading />}>
      <div className="page PagePortfolio">
        <section className="Page__section Page__section--greyFade Page__section--withFilter clearfix">
          <div className="Page__sectionInner PagePortfolio__sketch grid">
            <h1>{title}</h1>
            <Breadcrumbs>
              <span className="Breadcrumbs__divider">&gt;</span>
              <span className="Breadcrumbs__active">{title}</span>
            </Breadcrumbs>
            {projectCategories && projectTags && (
              <Filter
                categories={projectCategories}
                tags={projectTags}
                type="portfolio"
              />
            )}
          </div>
        </section>
        {projects && projects.length > 0 ? (
          projects.map(
            (projectCategory) =>
              projectCategory.projects &&
              projectCategory.projects.length > 0 && (
                <section
                  className="PagePortfolio__categoryWrap Page__section Page__section--greyFade"
                  key={projectCategory.term_id}
                >
                  <div className="grid">
                    <h2>{projectCategory.name}</h2>
                    <div className="grid--frames">
                      {projectCategory.projects.length > 0 &&
                        projectCategory.projects.map((project) => {
                          const { featuredImage, postTitle, postName, isNew } =
                            project;
                          return (
                            <LinkLoader
                              key={postName}
                              type="portfolio"
                              slug={postName}
                            >
                              <Frame
                                featuredImage={featuredImage}
                                title={postTitle}
                                isNew={isNew}
                                size="Medium"
                              />
                            </LinkLoader>
                          );
                        })}
                    </div>
                  </div>
                </section>
              )
          )
        ) : (
          <section className="Page__section Page__section--greyFade">
            <div className="Page__sectionInner grid">
              <div className="Page__content">
                <p>Sorry, no projects found.</p>
              </div>
            </div>
          </section>
        )}
      </div>
    </Suspense>
  );
};

export default PagePortfolio;
