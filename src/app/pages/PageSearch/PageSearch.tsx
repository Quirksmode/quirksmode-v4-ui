import React, { Fragment, Suspense } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import PostItem from '@/components/PostItem/PostItem';
import { PageSearchSearchParams } from './PageSearch.types';
import Loading from '@/components/Loading/Loading';
import { fetchPageSearchData } from './PageSearch.services';
import Page404 from '../Page404/Page404';
import PageSearchForm from './PageSearchForm/PageSearchForm';

const PageSearch = async ({ searchParams }: PageSearchSearchParams) => {
  const searchValue = searchParams.s || '';
  const pageSearchData = await fetchPageSearchData(searchParams);

  if (!pageSearchData.content) return <Page404 />;

  const { content } = pageSearchData;
  const { title, searchPosts } = content;

  return (
    <Suspense fallback={<Loading />}>
      <div className="Page PageSearch">
        <section className="Page__section Page__section--greyFade Page__section--withFilter">
          <div className="Page__sectionInner PagePortfolio__sketch grid">
            <h1>{title}</h1>
            <Breadcrumbs>
              <span className="Breadcrumbs__divider">&gt;</span>
              <span className="Breadcrumbs__active">{title}</span>
            </Breadcrumbs>
            <PageSearchForm />
          </div>
        </section>
        <section className="Page__section Page__section--greyFade">
          <div className="Page__sectionInner grid grid--sidebar">
            <div className="PageSearch__posts">
              {searchValue && (
                <h2>{`Showing results for the search term: ${searchValue}`}</h2>
              )}
              {searchPosts && searchPosts.length > 0 && searchValue ? (
                searchPosts.map((post) => (
                  <PostItem key={post.postID} post={post} size="Medium" />
                ))
              ) : (
                <Fragment>
                  {searchValue && (
                    <p>Sorry, that search has returned no results.</p>
                  )}
                </Fragment>
              )}
            </div>
          </div>
        </section>
      </div>
    </Suspense>
  );
};

export default PageSearch;
