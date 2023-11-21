"use client";

import React, { useState } from 'react';
import IconSoundcloud from '@/assets/icons/soundcloud.svg';
import IconTwitter from '@/assets/icons/twitter.svg';
import IconLinkedin from '@/assets/icons/linkedin-circle.svg';
import IconGithub from '@/assets/icons/github.svg';
import IconMenu from '@/assets/icons/menu.svg';
import { FooterProps } from './Footer.types';
import Link from 'next/link';

/**
 * Footer Component
 */
const Footer: React.FC<FooterProps> = ({
  footerNavItems
}) => {
  const [isNavToggled, setIsNavToggled] = useState(false);

  const toggleNav = () => {
    if (isNavToggled) {
      document.body.classList.remove('Footer__nav--open');
    } else {
      document.body.classList.add('Footer__nav--open');
    }

    setIsNavToggled(!isNavToggled);
  };

  return (
    <footer id="Footer" className="Footer">
      <p className="visuallyHidden" id="intFooterr">
        <strong>Footer</strong>
      </p>
      <div className="Footer__innerWrap grid">
        <nav role="navigation" className="Footer__nav">
          <ul className="Footer__navItems">
            <li className="Footer__navItem">
              <Link
                className="Footer__navLink Footer__navLink--quirksmode"
                // exact
                // activeClassName="selected"
                href="/"
              >
                Quirks
                <span>mode</span>
              </Link>
            </li>
            {footerNavItems?.map((item) => (
              <li className="Footer__navItem" key={item.id}>
                <Link
                  className="Footer__navLink"
                  // exact
                  // activeClassName="Footer__navLink--selected"
                  href={item.slug}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="Footer__iconsWrap">
          <div className="Utility__icon Utility__icon--github">
            <a
              href="https://github.com/Quirksmode"
              rel="noopener noreferrer"
              title="Quirksmode's Github Page"
              target="_blank"
            >
              <span className="visuallyHidden">
                Quirksmode&apos;s Github Page
              </span>
              <IconGithub />
            </a>
          </div>

          <div className="Utility__icon Utility__icon--twitter">
            <a
              href="http://www.twitter.com/quirksmode_uk"
              rel="noopener noreferrer"
              title="Quirksmode's Twitter Page"
              target="_blank"
            >
              <span className="visuallyHidden">
                Quirksmode&apos;s Twitter Page
              </span>
              <IconTwitter />
            </a>
          </div>
          <div className="Utility__icon Utility__icon--soundcloud">
            <a
              href="https://soundcloud.com/quirksmode"
              rel="noopener noreferrer"
              title="Quirksmode's Soundcloud Profile"
              target="_blank"
            >
              <span className="visuallyHidden">
                Quirksmode&apos;s Soundcloud Profile
              </span>
              <IconSoundcloud />
            </a>
          </div>
          <div className="Utility__icon Utility__icon--linkedin">
            <a
              href="https://www.linkedin.com/in/david-plunkett-4552365/"
              rel="noopener noreferrer"
              title="Quirksmode's LinkedIn Page"
              target="_blank"
            >
              <span className="visuallyHidden">
                Quirksmode&apos;s LinkedIn Page
              </span>
              <IconLinkedin />
            </a>
          </div>
          <div className="Footer__icon Footer__icon--menu">
            <button type="button" onClick={toggleNav}>
              <span className="visuallyHidden">
                Toggle Footer Navigation Menu
              </span>
              <IconMenu />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
