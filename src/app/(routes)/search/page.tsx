import { PageSearchParams } from "@/pages/Page/Page.types";
import PageSearch from "@/pages/PageSearch/PageSearch";
import { fetchPageSearchData } from "@/pages/PageSearch/PageSearch.services";
import { PageSearchSearchParams } from "@/pages/PageSearch/PageSearch.types";
import { getMetaData } from "@/utils/getMetaData";
import { Metadata } from "next";

export const generateMetadata = async ({
  searchParams,
}: PageSearchParams): Promise<Metadata> =>
  getMetaData(fetchPageSearchData(searchParams));

const PageComponent = ({ searchParams }: PageSearchSearchParams) => {
  return <PageSearch searchParams={searchParams} />;
};

PageComponent.displayName = "PageSearch";
export default PageSearch;
