import React from 'react';

const Page404 = () => (
  <div className="Page Page404" data-test="Page404">
    <section className="Page__section Page__section--greyFade Page__hero">
      <div className="Page__sectionInner grid">
        <h1 data-test="Page404__title">Error - 404</h1>
      </div>
    </section>
    <div className="Page__sectionInner ContentBlocks__inner grid">
      <div className="Page__content grid__content">
        <p>Oops, looks like this page cannot be found.</p>
      </div>
    </div>
  </div>
);

export default Page404;
