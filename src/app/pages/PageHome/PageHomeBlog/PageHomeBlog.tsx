import React from 'react';
import { PageHomeBlogProps } from './PageHomeBlog.types';
import Link from 'next/link';
import PostItem from '@/components/PostItem/PostItem';

/**
 * Home Page Latest Blog Posts
 */
const PageHomeBlog: React.FC<PageHomeBlogProps> = ({ latestBlogPosts }) => (
  <div className="PageHomeBlog">
    <div className="Page__headingWrap">
      <h2>General Shoutings</h2>
      <Link href="/blog" className="link--withHeading link--withIcon">
        View My Blog
      </Link>
    </div>
    <div className="PageHomeBlog__posts">
      {latestBlogPosts.map((post) => (
        <PostItem key={post.postID} post={post} size="Small" lineClamp="3" />
      ))}
    </div>
  </div>
);

export default PageHomeBlog;
