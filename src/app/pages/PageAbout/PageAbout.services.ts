import { PageAboutData } from "./PageAbout.types";

export const fetchPageAboutData = async () => {
  const res = await fetch(
    `${process.env.CMS_URL}/wp-json/quirksmode/v1/pages/about-me`
  );

  const pageAboutData: PageAboutData = await res.json();

  return pageAboutData;
};
