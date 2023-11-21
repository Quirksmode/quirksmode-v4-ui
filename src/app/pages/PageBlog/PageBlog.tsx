import React, { Suspense } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import Filter from '@/components/Filter/Filter';
import Sidebar from '@/components/Sidebar/Sidebar';
import PostItem from '@/components/PostItem/PostItem';
import { fetchAppData } from '@/App.services';
import { fetchPageBlogData } from './PageBlog.services';
import Loading from '@/components/Loading/Loading';
import Page404 from '../Page404/Page404';
import { PageSearchParams, SearchParams } from '../Page/Page.types';

const PageBlog = async ({ searchParams }: PageSearchParams) => {
  const pageBlogData = await fetchPageBlogData(searchParams as SearchParams);
  const appData = await fetchAppData();

  if (!pageBlogData.content) return <Page404 />;

  const { content } = pageBlogData;
  const { title, blogPosts } = content;
  const { blogCategories, blogTags } = appData;

  return (
    <Suspense fallback={<Loading />}>
      <div className="Page PageBlog">
        <section className="Page__section Page__section--greyFade Page__section--withFilter clearfix">
          <div className="Page__sectionInner PagePortfolio__sketch grid">
            <h1>{title}</h1>
            <Breadcrumbs>
              <span className="Breadcrumbs__divider">&gt;</span>
              <span className="Breadcrumbs__active">{title}</span>
            </Breadcrumbs>
            {blogCategories && blogTags && (
              <Filter categories={blogCategories} tags={blogTags} type="blog" />
            )}
          </div>
        </section>
        <section className="Page__section Page__section--greyFade project-row-wrap clearfix">
          <div className="Page__section project-row clearfix">
            <div className="Page__sectionInner grid">
              <div className="PageBlog__posts grid__content">
                {blogPosts &&
                  blogPosts.length > 0 &&
                  blogPosts.map((post) => (
                    <PostItem key={post.postID} post={post} size="Medium" />
                  ))}
              </div>
              <Sidebar />
            </div>
          </div>
        </section>
      </div>
    </Suspense>
  );
};

export default PageBlog;
