import React, { Suspense } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import IconArrowDown from '@/assets/icons/arrowdown.svg';
import { fetchAppData } from '@/App.services';
import { fetchPageAboutData } from './PageAbout.services';
import Loading from '@/components/Loading/Loading';
import Page404 from '../Page404/Page404';

const PageAbout = async () => {
  const pageAboutData = await fetchPageAboutData();
  const appData = await fetchAppData();

  if (!pageAboutData.content) return <Page404 />;

  const { content } = pageAboutData;
  const { title, intro, skillsSections, cvSections } = content;
  const { cv } = appData.siteSettings;

  return (
    <Suspense fallback={<Loading />}>
      <div className="Page PageAbout">
        <section className="Page__section Page__section--greyFade">
          <div className="Page__sectionInner grid">
            <h1>{title}</h1>
            <Breadcrumbs>
              <span className="Breadcrumbs__divider">&gt;</span>
              <span className="Breadcrumbs__active">{title}</span>
            </Breadcrumbs>
            <div className="PageAbout__intro">
              <div
                dangerouslySetInnerHTML={{ __html: intro }}
                className="PageAbout__introText"
              />
              {cv?.url && (
                <a className="btn--submitIcon" href={cv.url}>
                  DOWNLOAD MY CV
                  <IconArrowDown />
                </a>
              )}
            </div>
          </div>
        </section>
        <section className="Page__section Page__section--greyFade">
          <div className="Page__sectionInner PageAbout__sketch grid">
            <div className="PageAbout__col">
              <h2 className="PageAbout__title">{skillsSections.skillsTitle}</h2>
              <div className="PageAbout__skillsWrap">
                {skillsSections.skills?.map((skillsItem, skillsItemIndex) => {
                  const {
                    add_skill: addSkill,
                    skills_category_name: skillsCategoryName,
                    skills_colour: skillsColour,
                  } = skillsItem;

                  return (
                    <div
                      key={skillsItemIndex}
                      className="PageAbout__skills"
                      data-test="PageAbout__skills"
                    >
                      <h3>{skillsCategoryName}</h3>
                      {addSkill?.map((skillItem, skillItemIndex) => {
                        const {
                          skill_name: skillName,
                          skill_percentage: skillPercentage,
                        } = skillItem;

                        return (
                          <div
                            key={skillItemIndex}
                            className={`PageAbout__skillBox ${skillsColour} w${skillPercentage}`}
                            data-test="PageAbout__skillBox"
                          >
                            <p>{skillName}</p>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="Page__section Page__section--whiteOverlay clearfix">
          <div className="Page__sectionInner grid clearfix">
            <div className="PageAbout__col first clearfix">
              {cvSections?.map((cvSection, index) => {
                const {
                  add_class: addClass,
                  add_content: addContent,
                  add_title: addTitle,
                } = cvSection;

                return (
                  <div
                    key={index}
                    className={`PageAbout__cvSection PageAbout__cvSection--${addClass}`}
                    data-test="PageAbout__cvSection"
                  >
                    <h2 className="PageAbout__title">{addTitle}</h2>
                    <div
                      className="PageAbout__cvSection-content"
                      dangerouslySetInnerHTML={{ __html: addContent }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </Suspense>
  );
};

export default PageAbout;
