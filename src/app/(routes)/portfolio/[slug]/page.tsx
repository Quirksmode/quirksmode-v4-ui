import PagePortfolioSingle from "@/pages/PagePortfolioSingle/PagePortfolioSingle";
import { getMetaData } from "@/utils/getMetaData";
import { Metadata } from "next";
import { PageParams } from "@/pages/Page/Page.types";
import { fetchPagePortfolioSingleData } from "@/pages/PagePortfolioSingle/PagePortfolioSingle.services";

export const generateMetadata = async ({
  params,
}: PageParams): Promise<Metadata> =>
  getMetaData(fetchPagePortfolioSingleData(params.slug));

const PageComponent = ({ params }: PageParams) => {
  return <PagePortfolioSingle params={params} />;
};

PageComponent.displayName = "PagePortfolioSingle";
export default PagePortfolioSingle;
