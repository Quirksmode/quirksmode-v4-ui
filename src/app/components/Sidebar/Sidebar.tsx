import React from 'react';
import { SidebarProps } from './Sidebar.types';
import Link from 'next/link';

const Sidebar: React.FC<SidebarProps> = ({
  tags,
  showTags,
  projectURL = '',
}) => (
  <div className="Sidebar">
    {tags && showTags && tags.length > 0 && (
      <section className="Sidebar__section Sidebar__section--tags">
        <h3 className="Sidebar__sectionTitle">Tech</h3>
        <div className="Sidebar__tags">
          {tags.map((tag) => (
            <Link
              key={tag.term_id}
              href={`/portfolio?tag=${tag.slug}`}
              rel="tag"
            >
              {tag.name}
            </Link>
          ))}
        </div>
      </section>
    )}
    {projectURL && (
      <section className="Sidebar__section Sidebar__section--role">
        <h3 className="Sidebar__sectionTitle">Project Link</h3>
        <a
          href={projectURL}
          className="Sidebar__projectLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          Launch Project
        </a>
      </section>
    )}
  </div>
);

export default Sidebar;
