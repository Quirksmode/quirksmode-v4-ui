import React from 'react';
import { LinkLoaderProps } from './LinkLoader.types';
import Link from 'next/link';

/**
 * LinkLoader Component
 */
const LinkLoader: React.FC<LinkLoaderProps> = ({
  type = null,
  title = '',
  slug,
  children,
}) => {
  // Temp loading placeholder
  const loading = false;

  // Create the href based on the type e.g. Page, Portfolio or Blog
  const href = type !== 'page' ? `/${type}/${slug}` : `/${slug}`;

  return (
    <Link
      href={href}
      className={`LinkLoader${loading ? ' LinkLoader--loading' : ''}`}
    >
      {title && <span className="visuallyHidden">{title}</span>}
      {children}
    </Link>
  );
};

export default LinkLoader;
