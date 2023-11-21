import { PageBlogSingleData } from "./PageBlogSingle.types";

export const fetchPageBlogSingleData = async (slug: string) => {
  const res = await fetch(
    `${process.env.CMS_URL}/wp-json/quirksmode/v1/pages/blog/${slug}`
  );

  const pagePortfolioSingleData: PageBlogSingleData = await res.json();

  return pagePortfolioSingleData;
};
