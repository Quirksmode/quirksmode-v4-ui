import { PageParams } from "@/pages/Page/Page.types";
import PageBlogSingle from "@/pages/PageBlogSingle/PageBlogSingle";
import { fetchPageBlogSingleData } from "@/pages/PageBlogSingle/PagePortfolioSingle.services";
import { getMetaData } from "@/utils/getMetaData";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: PageParams): Promise<Metadata> =>
  getMetaData(fetchPageBlogSingleData(params.slug));

const PageComponent = ({ params }: PageParams) => {
  return <PageBlogSingle params={params} />;
};

PageComponent.displayName = "PageBlogSingle";
export default PageBlogSingle;
