import React, { Suspense } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import PageContactForm from './PageContactForm/PageContactForm';
import { fetchPageContactData } from './PageContact.services';
import Loading from '@/components/Loading/Loading';
import Page404 from '../Page404/Page404';

const PageContact = async () => {
  const pageContactData = await fetchPageContactData();

  if (!pageContactData.content) return <Page404 />;

  const { content } = pageContactData;
  const { title } = content;

  return (
    <Suspense fallback={<Loading />}>
      {title && (
        <div className="Page PageContact">
          <section className="Page__section">
            <div className="Page__sectionInner grid">
              <h1>{title}</h1>
              <Breadcrumbs>
                <span className="Breadcrumbs__divider">&gt;</span>
                <span className="Breadcrumbs__active">Contact</span>
              </Breadcrumbs>
              <p>Please feel free to contact me using the form below.</p>
              <PageContactForm />
            </div>
          </section>
        </div>
      )}
    </Suspense>
  );
};

export default PageContact;
