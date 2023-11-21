import React from 'react';
import IconHome from '@/assets/icons/home.svg';
import { BreadcrumbsProps } from './Breadcrumbs.types';
import Link from 'next/link';

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ children }) => (
  <div className="Breadcrumbs" data-test="Breadcrumbs">
    <Link href="/" className="Breadcrumbs__crumb Breadcrumbs__crumb--home">
      <span className="visuallyHidden">Home</span>
      <IconHome />
    </Link>
    {children}
  </div>
);

export default Breadcrumbs;
