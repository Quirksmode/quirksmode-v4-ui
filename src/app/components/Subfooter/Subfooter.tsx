import React from 'react';
import SubfooterAbout from './SubfooterAbout/SubfooterAbout';
import SubfooterLatestTweets from './SubfooterLatestTweets/SubfooterLatestTweets';
import SubfooterInstagram from './SubfooterInstagram/SubfooterInstagram';
import SubfooterContact from './SubfooterContact/SubfooterContact';
import { SubfooterProps } from './Subfooter.types';

const Subfooter: React.FC<SubfooterProps> = ({
  subfooter
}) => {
  const { about, latestTweets, instagram, contact } = subfooter;

  return (
    <section className="Subfooter">
      <p className="visuallyHidden" id="int_subfooter">
        <strong>Sub Footer</strong>
      </p>
      <div className="Subfooter__innerWrap grid">
        <div className="Subfooter__sectionsWrap">
          {about && <SubfooterAbout about={about} />}
          {latestTweets && (
            <SubfooterLatestTweets latestTweets={latestTweets} />
          )}
        </div>
        <div className="Subfooter__sectionsWrap Subfooter__sectionsWrap--last">
          {instagram && <SubfooterInstagram instagram={instagram} />}
          {contact && <SubfooterContact contact={contact} />}
        </div>
      </div>
    </section>
  );
};

export default Subfooter;
