import { PageBlogData } from "./PageBlog.types";

export const fetchPageBlogData = async ({ cat = "all", tag = "all" }) => {
  const res = await fetch(
    `${process.env.CMS_URL}/wp-json/quirksmode/v1/pages/blog?cat=${cat}&tag=${tag}`
  );

  const pageBlogData: PageBlogData = await res.json();

  return pageBlogData;
};
