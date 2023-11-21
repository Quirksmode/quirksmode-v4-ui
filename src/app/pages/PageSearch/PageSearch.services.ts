import { SearchParams } from "../Page/Page.types";
import { PageSearchData } from "./PageSearch.types";

export const fetchPageSearchData = async ({ s = "" }: SearchParams) => {
  const res = await fetch(
    `${process.env.CMS_URL}/wp-json/quirksmode/v1/pages/search?s=${s}`
  );

  const pageSearchData: PageSearchData = await res.json();

  return pageSearchData;
};
