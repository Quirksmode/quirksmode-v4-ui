import { PageData } from "./Page.types";

export const fetchPageData = async (slug: string) => {
  const res = await fetch(
    `${process.env.CMS_URL}/wp-json/quirksmode/v1/pages/${slug}`
  );

  const pageData: PageData = await res.json();

  return pageData;
};
