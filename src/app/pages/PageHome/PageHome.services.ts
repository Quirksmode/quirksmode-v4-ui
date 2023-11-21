import { PageHomeData } from "./PageHome.types";

export const fetchPageHomeData = async () => {
  const res = await fetch(
    `${process.env.CMS_URL}/wp-json/quirksmode/v1/pages/home`
  );

  const pageHomeData: PageHomeData = await res.json();

  return pageHomeData;
};
