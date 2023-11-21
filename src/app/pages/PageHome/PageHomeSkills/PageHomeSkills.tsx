"use client";

import React from 'react';
import IconQuirksmode from '@/assets/icons/quirksmode.svg';
import { PageHomeSkillsProps } from './PageHomeSkills.types';
import Link from 'next/link';

/**
 * Home Page Skills Component
 */
const PageHomeSkills: React.FC<PageHomeSkillsProps> = ({ skills }) => (
  <div className="PageHomeSkills">
    <div className="Page__headingWrap">
      <h2>This is some of what I do</h2>
      <Link href="/about-me" className="link--withHeading link--withIcon">
        Skills Breakdown
      </Link>
    </div>
    <ul className="PageHomeSkills__skills">
      {skills.map((skill) => {
        const { skill_name: skillName } = skill;

        return (
          <li key={skillName} className="PageHomeSkills__skill">
            <span className="PageHomeSkills__skillLink">
              <IconQuirksmode
                className="PageHomeSkills__skillIcon"
                aria-hidden="true"
              />
              <span>{skillName}</span>
            </span>
          </li>
        );
      })}
    </ul>
  </div>
);

export default PageHomeSkills;
