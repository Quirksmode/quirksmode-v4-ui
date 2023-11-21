import Page from "@/pages/Page/Page";
import type { Metadata } from "next";
import { getMetaData } from "@/utils/getMetaData";
import { fetchPageData } from "@/pages/Page/Page.services";
import { PageParams } from "@/pages/Page/Page.types";

export const generateMetadata = async ({
  params,
}: PageParams): Promise<Metadata> => getMetaData(fetchPageData(params.slug));

const PageComponent = ({ params }: PageParams) => {
  return <Page params={params} />;
};

PageComponent.displayName = "Page";
export default PageComponent;
