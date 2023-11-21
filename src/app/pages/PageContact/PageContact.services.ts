import { PageContactData } from "./PageContact.types";

export const fetchPageContactData = async () => {
  const res = await fetch(
    `${process.env.CMS_URL}/wp-json/quirksmode/v1/pages/contact`
  );

  const pageContactData: PageContactData = await res.json();

  return pageContactData;
};
