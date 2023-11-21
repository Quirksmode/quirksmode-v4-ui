import React, { Suspense } from 'react';
import { fetchPageHomeData } from './PageHome.services';
import PageHomeFeatured from './PageHomeFeatured/PageHomeFeatured';
import PageHomeIntro from './PageHomeIntro/PageHomeIntro';
import PageHomeSkills from './PageHomeSkills/PageHomeSkills';
import PageHomeBlog from './PageHomeBlog/PageHomeBlog';
import { fetchAppData } from '@/App.services';
import Loading from '@/components/Loading/Loading';
import Page404 from '../Page404/Page404';

const PageHome = async () => {
  const pageHomeData = await fetchPageHomeData();
  const appData = await fetchAppData();

  if (!pageHomeData.content) return <Page404 />;

  const { content } = pageHomeData;
  const { featuredWork, intro, skills, latestBlogPosts } = content;
  const { cv } = appData.siteSettings;

  return (
    <Suspense fallback={<Loading />}>
      <div className="page PageHome">
        <h1 className="visuallyHidden">Welcome to Quirksmode</h1>
        {featuredWork && featuredWork?.length > 0 && (
          <PageHomeFeatured featuredWork={featuredWork} />
        )}
        <section className="Page__section">
          <div className="Page__sectionInner grid">
            <div className="PageHome__colWrap">
              <div className="PageHome__col">
                {intro && <PageHomeIntro intro={intro} cv={cv} />}
                {skills && skills?.length > 0 && (
                  <PageHomeSkills skills={skills} />
                )}
              </div>
              <div className="PageHome__col">
                {latestBlogPosts && latestBlogPosts?.length > 0 && (
                  <PageHomeBlog latestBlogPosts={latestBlogPosts} />
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Suspense>
  );
};

export default PageHome;
